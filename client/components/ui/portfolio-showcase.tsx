import { useState, useRef, useEffect } from "react";
import { ArrowRight, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "./button";
import React from "react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
}

interface BlogPost {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  authorImage: string;
}

// Custom hook for tilt effect
function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!element) return;
      
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      const middleX = width / 2;
      const middleY = height / 2;
      
      const offsetX = ((x - middleX) / middleX) * 10;
      const offsetY = ((y - middleY) / middleY) * 10;
      
      element.style.transform = `perspective(1000px) rotateX(${-offsetY}deg) rotateY(${offsetX}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      if (!element) return;
      element.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };
    
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  
  return ref;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Skotleaf Healthcare",
    category: "Pharmaceutical",
    description: "Modern website for a pharmaceutical company with product catalog and inquiry system",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    link: "https://skotleafhealthcare.in/",
    tags: ["Healthcare", "Responsive", "Product Catalog"]
  },
  {
    id: 2,
    title: "SR Printers",
    category: "Printing Services",
    description: "Professional website for a printing press showcasing their services and portfolio",
    image: "https://images.unsplash.com/photo-1601142634808-38923eb7c560?w=600&h=400&fit=crop",
    link: "https://srprinters.co.in/",
    tags: ["Business", "Portfolio", "Service Catalog"]
  },
  {
    id: 3,
    title: "Rajdarbar Resort",
    category: "Hospitality",
    description: "Elegant website for a hotel and resort with booking functionality and virtual tours",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    link: "https://rajdarbarresort.in/",
    tags: ["Hotel", "Booking", "Gallery"]
  },
  {
    id: 4,
    title: "4GS Educational NGO",
    category: "Education",
    description: "Impactful website for an educational NGO showcasing their programs and initiatives",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    link: "https://4gs.4gs.in/home/",
    tags: ["Non-profit", "Education", "Donation"]
  },
  {
    id: 5,
    title: "Kids Wonder School",
    category: "Education",
    description: "Colorful and engaging website for a children's school with interactive elements",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    link: "https://kidswonder.in/",
    tags: ["School", "Children", "Interactive"]
  }
];

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development: AI-Powered Frameworks",
    category: "Tech Innovation",
    excerpt: "Explore how artificial intelligence is revolutionizing web development frameworks and creating new possibilities for developers.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    date: "May 15, 2023",
    readTime: "8 min read",
    author: "Alex Johnson",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop"
  },
  {
    id: 2,
    title: "Blockchain Solutions for Global Supply Chain Management",
    category: "Tech Solutions",
    excerpt: "How distributed ledger technology is solving transparency and efficiency challenges in international supply chains.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop",
    date: "June 3, 2023",
    readTime: "6 min read",
    author: "Sophia Chen",
    authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop"
  },
  {
    id: 3,
    title: "Cybersecurity Diplomacy: Tech's Role in International Relations",
    category: "International Relations",
    excerpt: "Analyzing how cybersecurity concerns are shaping diplomatic relationships between global powers in the digital age.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
    date: "July 12, 2023",
    readTime: "10 min read",
    author: "Michael Rivera",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop"
  }
];

const categories = ["All", "Pharmaceutical", "Printing Services", "Hospitality", "Education"];
const blogCategories = ["All Posts", "Tech Innovation", "Tech Solutions", "International Relations"];

// Portfolio Component
function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const handleCategoryClick = (category) => {
    console.log('Portfolio Category clicked:', category);
    setActiveCategory(category);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="gradient-text">Portfolio</span>
        </h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Discover our latest projects showcasing cutting-edge web development, stunning design, and innovative solutions.
        </p>
      </div>
      
      {/* Category Tabs */}
      <div className="mb-12 text-center">
        <div className="inline-block bg-card/80 p-3 rounded-lg shadow-md border border-glass-border">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`inline-block mx-2 px-6 py-2.5 rounded-md cursor-pointer transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-primary text-white font-medium shadow-lg" 
                  : "bg-card/60 hover:bg-card/90 border border-glass-border"
              }`}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Debug Info */}
      <div className="text-center mb-4 text-sm text-gray-600">
        Active: {activeCategory} | Showing: {filteredItems.length} items
      </div>
      
      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
      
      {/* View All Button */}
      <div className="text-center mt-12">
        <Button className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500 px-8 py-6 text-lg">
          <span className="flex items-center">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </span>
        </Button>
      </div>
    </div>
  );
}

// Separate Portfolio Card Component
function PortfolioCard({ item }) {
  const tiltRef = useTilt();
  
  return (
    <div
      ref={tiltRef}
      className="group portfolio-card overflow-hidden rounded-xl bg-card/80 backdrop-blur-sm border border-glass-border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 relative will-change-transform"
      style={{ transition: "transform 0.2s ease-out" }}
    >
      {/* Glowing border effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 opacity-0 group-hover:opacity-100 group-hover:from-primary/50 group-hover:via-accent/30 group-hover:to-primary/50 blur-md transition-all duration-700 -z-10"></div>
      
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden rounded-t-xl">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          {/* Pulsing circle behind the icon */}
          <div className="absolute w-16 h-16 rounded-full bg-primary/20 animate-pulse-slow"></div>
          
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary/90 text-white p-3 rounded-full transform translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:rotate-12 hover:bg-accent/90 hover:scale-110"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        {/* Category badge */}
        <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm border border-glass-border px-3 py-1 rounded-full text-xs font-medium opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {item.category}
        </div>
        {/* Image shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-full group-hover:translate-x-full"></div>
      </div>

      {/* Content */}
      <div className="p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 transform group-hover:translate-x-1">
            {item.title}
          </h3>
          <p className="text-foreground/70 text-sm mb-4 group-hover:text-foreground transition-colors duration-300">
            {item.description}
          </p>
          
          {/* Tags */}
          {item.tags && (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs px-2 py-1 bg-card/60 border border-glass-border rounded-full group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:bg-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors duration-300 group"
          >
            <span className="relative">
              Visit Website
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
            </span>
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}

// Blog Component
function BlogSection() {
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const filteredPosts = activeCategory === "All Posts" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const handleCategoryClick = (category) => {
    console.log('Blog Category clicked:', category);
    setActiveCategory(category);
  };

  return (
    <div className="container mx-auto px-4 mt-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Latest <span className="gradient-text">Blog Posts</span>
        </h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
          Stay updated with our latest insights, tech trends, and industry news.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="mb-12 text-center">
        <div className="inline-block bg-card/80 p-3 rounded-lg shadow-md border border-glass-border">
          {blogCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`inline-block mx-2 px-6 py-2.5 rounded-md cursor-pointer transition-all duration-300 ${
                activeCategory === category 
                  ? "bg-primary text-white font-medium shadow-lg" 
                  : "bg-card/60 hover:bg-card/90 border border-glass-border"
              }`}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Debug Info */}
      <div className="text-center mb-4 text-sm text-gray-600">
        Active: {activeCategory} | Showing: {filteredPosts.length} posts
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      
      {/* View All Button */}
      <div className="text-center mt-12">
        <Button className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500 px-8 py-6 text-lg">
          <span className="flex items-center">
            Explore All Articles
            <BookOpen className="ml-2 w-5 h-5" />
          </span>
        </Button>
      </div>
    </div>
  );
}

// Separate Blog Card Component
function BlogCard({ post }) {
  const tiltRef = useTilt();
  
  return (
    <div
      ref={tiltRef}
      className="group blog-card overflow-hidden rounded-xl bg-card/80 backdrop-blur-sm border border-glass-border transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 relative will-change-transform"
      style={{ transition: "transform 0.2s ease-out" }}
    >
      {/* Glowing border effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 opacity-0 group-hover:opacity-100 group-hover:from-primary/50 group-hover:via-accent/30 group-hover:to-primary/50 blur-md transition-all duration-700 -z-10"></div>
      
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          {/* Pulsing circle behind the icon */}
          <div className="absolute w-16 h-16 rounded-full bg-primary/20 animate-pulse-slow"></div>
          
          <a
            href="#"
            className="bg-primary/90 text-white p-3 rounded-full transform translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:rotate-12 hover:bg-accent/90 hover:scale-110"
          >
            <BookOpen className="w-5 h-5" />
          </a>
        </div>
        {/* Category badge */}
        <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm border border-glass-border px-3 py-1 rounded-full text-xs font-medium opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {post.category}
        </div>
        {/* Image shine effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-full group-hover:translate-x-full"></div>
      </div>
      
      <div className="p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <img 
                src={post.authorImage} 
                alt={post.author} 
                className="w-6 h-6 rounded-full mr-2"
              />
              <span className="text-xs">{post.author}</span>
            </div>
            <div className="text-xs">{post.date}</div>
          </div>
          
          <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300 transform group-hover:translate-x-1">
            {post.title}
          </h3>
          <p className="text-sm mb-4 line-clamp-3 text-foreground/70 group-hover:text-foreground transition-colors duration-300">
            {post.excerpt}
          </p>
          
          <div className="flex justify-between items-center">
            <span className="text-xs text-foreground/60">{post.readTime}</span>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors duration-300 group"
            >
              <span className="relative">
                Read Article
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </span>
              <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PortfolioShowcase() {
  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <PortfolioSection />
        <BlogSection />
      </div>
    </section>
  );
} 