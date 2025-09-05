import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Removed eager import of server (caused DB connect at build time). We'll lazy-load in dev plugin.

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/",
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      '0e7949daa008.ngrok-free.app' // your ngrok host
    ]
  },
  build: {
    outDir: "build",
    emptyOutDir: true,
    sourcemap: false,
    minify: "esbuild",
    target: "es2020", // Updated for better optimization
    cssMinify: "esbuild",
    esbuild: {
      drop: ["console", "debugger"],
      legalComments: "none",
      treeShaking: true,
      // Mobile-specific optimizations
      platform: "browser",
      minifyIdentifiers: true,
      minifySyntax: true,
      minifyWhitespace: true,
    },
    rollupOptions: {
      onwarn(warning, warn) {
        if (typeof warning.message === 'string' && warning.message.includes('Error when using sourcemap for reporting an error')) {
          return;
        }
        warn(warning);
      },
      output: {
        manualChunks: {
          // Core libraries - mobile-optimized chunking
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          
          // Critical UI - smaller chunks for mobile
          'ui-core': ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
          'ui-icons': ["lucide-react"],
          
          // Animation libraries - defer for mobile
          motion: ["framer-motion"],
          
          // Data libraries
          query: ["@tanstack/react-query"],
          
          // Heavy third-party libraries
          'third-party': ["emailjs-com"],
        },
        // Optimize chunk names for mobile caching
        chunkFileNames: (chunkInfo) => {
          // Prioritize smaller chunks for mobile
          if (chunkInfo.name && chunkInfo.name.includes('motion')) {
            return 'assets/deferred/[name]-[hash].js'; // Defer heavy animation
          }
          return 'assets/[name]-[hash].js';
        },
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          // Critical CSS should be inlined or loaded with high priority
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/[name]-[hash].css';
          }
          return 'assets/[name]-[hash].[ext]';
        },
      },
    },
    chunkSizeWarningLimit: 200, // Smaller chunks for mobile performance
    assetsDir: "assets",
    copyPublicDir: true,
    // Mobile-optimized settings
    assetsInlineLimit: 2048, // Smaller inline limit for mobile
    cssCodeSplit: true, // Enable CSS code splitting
    // Add mobile-specific optimizations
    reportCompressedSize: false, // Skip for faster builds on mobile CI/CD
  },
  plugins: [react(), ...(mode === "development" ? [expressPlugin()] : [])],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(mode),
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    async configureServer(server) {
      const { createServer } = await import('./server');
      const app = createServer();
      server.middlewares.use(app); // Attach Express
    },
  };
}
