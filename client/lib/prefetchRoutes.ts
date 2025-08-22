// Tiny route prefetcher to warm up lazy-loaded chunks on hover/idle
// Safe no-ops in older browsers; dedupes concurrent prefetches.

const prefetched = new Set<string>();

// Map route paths to their dynamic importers. Keep this small and targeted to heavy/likely-next routes.
const importMap: Record<string, () => Promise<unknown>> = {
    "/": () => import("../pages/Index"),
    "/blogs": () => import("../pages/Blogs"),
    "/blogs/crm-software-fundamentals": () => import("../pages/blogs/CRMSoftwareFundamentals"),
    "/blogs/dispatch-automation-fundamentals": () => import("../pages/blogs/DispatchFundamentals"),
    "/dispatch-management": () => import("../pages/solutions/Dispatch_Management"),
    "/auto-site": () => import("../pages/AutoSite"),
    "/about-us": () => import("../pages/AboutUs"),
    "/contact-us": () => import("../pages/ContactUs"),
};

function idle(cb: () => void) {
    // @ts-ignore
    const ric: ((cb: () => void) => number) | undefined = globalThis.requestIdleCallback;
    if (typeof ric === "function") ric(() => cb());
    else setTimeout(cb, 200);
}

export function prefetchRoute(path: string) {
    if (!path) return;
    // Normalize: strip query/hash
    const clean = path.split("#")[0].split("?")[0];
    if (prefetched.has(clean)) return;
    const importer = importMap[clean];
    if (!importer) return;
    prefetched.add(clean);
    idle(() => {
        importer().catch(() => {
            // If it fails, allow a retry later
            prefetched.delete(clean);
        });
    });
}
