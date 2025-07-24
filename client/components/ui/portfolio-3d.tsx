import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "./button";
import { PortfolioPreview } from "./portfolio-preview";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  gradient: string;
  delay: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  duration: string;
  teamSize: string;
  liveUrl?: string;
  githubUrl?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with React and Django",
    image:
      "https://cdn.builder.io/api/v1/assets/a8db65a85a0f440eb580d4e5d0e2a352/protfolio-1-cf38fd?format=webp&width=800",
    gradient: "from-emerald-500 to-teal-500",
    delay: "0s",
    fullDescription:
      "A comprehensive e-commerce platform built from the ground up with modern technologies. Features include real-time inventory management, secure payment processing, advanced search and filtering, user authentication, order tracking, and an intuitive admin dashboard. The platform handles thousands of concurrent users and integrates with multiple payment gateways.",
    technologies: [
      "React",
      "Django",
      "PostgreSQL",
      "Redis",
      "AWS S3",
      "Stripe API",
      "Docker",
    ],
    features: [
      "Real-time inventory management",
      "Secure payment processing with Stripe",
      "Advanced product search and filtering",
      "User authentication and profiles",
      "Order tracking and management",
      "Admin dashboard with analytics",
      "Mobile-responsive design",
      "SEO optimized product pages",
    ],
    duration: "4 months",
    teamSize: "5 developers",
    liveUrl: "https://ecommerce-demo.codifye.com",
    githubUrl: "https://github.com/codifye/ecommerce-platform",
  },
  {
    id: 2,
    title: "Tech Innovation Hub",
    category: "Web Application",
    description: "Modern SaaS platform with React and FastAPI",
    image:
      "https://cdn.builder.io/api/v1/assets/a8db65a85a0f440eb580d4e5d0e2a352/protfolio-3-83789b?format=webp&width=800",
    gradient: "from-indigo-500 to-blue-500",
    delay: "0.2s",
    fullDescription:
      "An innovative SaaS platform that connects tech entrepreneurs with investors and mentors. Built with cutting-edge technologies, it features real-time collaboration tools, video conferencing integration, project management capabilities, and AI-powered matching algorithms to connect the right people at the right time.",
    technologies: [
      "React",
      "FastAPI",
      "MongoDB",
      "WebRTC",
      "AI/ML",
      "Docker",
      "Kubernetes",
    ],
    features: [
      "AI-powered entrepreneur-investor matching",
      "Real-time collaboration tools",
      "Integrated video conferencing",
      "Project portfolio management",
      "Advanced analytics dashboard",
      "Multi-tenant architecture",
      "Real-time notifications",
      "Secure document sharing",
    ],
    duration: "6 months",
    teamSize: "8 developers",
    liveUrl: "https://techhub-demo.codifye.com",
    githubUrl: "https://github.com/codifye/tech-innovation-hub",
  },
  {
    id: 3,
    title: "Creative Portfolio",
    category: "UI/UX Design",
    description: "Artistic portfolio with stunning animations",
    image:
      "https://cdn.builder.io/api/v1/assets/a8db65a85a0f440eb580d4e5d0e2a352/protfolio-4cd214?format=webp&width=800",
    gradient: "from-violet-500 to-purple-500",
    delay: "0.4s",
    fullDescription:
      "A breathtaking creative portfolio website showcasing artistic works with fluid animations and interactive elements. Features smooth page transitions, 3D CSS effects, scroll-triggered animations, and a unique grid layout that adapts to different screen sizes while maintaining visual hierarchy.",
    technologies: [
      "React",
      "Framer Motion",
      "Three.js",
      "GSAP",
      "CSS3",
      "WebGL",
    ],
    features: [
      "Smooth page transitions",
      "3D CSS animations",
      "Scroll-triggered effects",
      "Interactive gallery",
      "Dynamic grid layouts",
      "WebGL particle effects",
      "Touch gesture support",
      "Optimized loading sequences",
    ],
    duration: "3 months",
    teamSize: "3 developers",
    liveUrl: "https://portfolio-demo.codifye.com",
    githubUrl: "https://github.com/codifye/creative-portfolio",
  },
  {
    id: 4,
    title: "Digital Storytelling",
    category: "Content Platform",
    description: "Immersive storytelling platform with 3D elements",
    image:
      "https://cdn.builder.io/api/v1/assets/a8db65a85a0f440eb580d4e5d0e2a352/tools-7b1bc4?format=webp&width=800",
    gradient: "from-rose-500 to-pink-500",
    delay: "0.6s",
    fullDescription:
      "An immersive digital storytelling platform that combines traditional narrative with interactive 3D elements. Users can create, share, and experience stories in a completely new way, with spatial audio, 3D environments, and real-time collaboration features for content creators.",
    technologies: [
      "React",
      "Three.js",
      "Node.js",
      "WebGL",
      "Web Audio API",
      "WebRTC",
    ],
    features: [
      "3D interactive environments",
      "Spatial audio integration",
      "Real-time story collaboration",
      "VR/AR compatibility",
      "Advanced content editor",
      "Community sharing features",
      "Analytics for creators",
      "Cross-platform compatibility",
    ],
    duration: "5 months",
    teamSize: "6 developers",
    liveUrl: "https://storytelling-demo.codifye.com",
    githubUrl: "https://github.com/codifye/digital-storytelling",
  },
];

export function Portfolio3D() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(
    null,
  );
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleCardClick = (project: PortfolioItem) => {
    setSelectedProject(project);
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="featured-projects" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover our latest projects showcasing cutting-edge web
            development, stunning design, and innovative solutions.
          </p>
        </div>

        {/* 3D Portfolio Grid */}
        <div className="perspective-container relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {portfolioItems.map((item, index) => {
              // Different effect for each card
              const effects = [
                "card-liquid",
                "card-shadow-morph",
                "card-float-3d",
                "card-morph",
              ];
              const effectClass = effects[index % effects.length];

              return (
                <div
                  key={item.id}
                  className={`${effectClass} portfolio-card rounded-2xl overflow-hidden group cursor-pointer`}
                  style={{
                    animationDelay: item.delay,
                  }}
                  onClick={() => handleCardClick(item)}
                >
                  {/* Card Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                    ></div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transform group-hover:scale-110 transition-transform duration-300"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>

                    {/* Hover Preview Hint */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-primary/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium group-hover:text-accent transition-colors duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="card-magnetic p-6 glass-effect rounded-2xl border border-glass-border hover:border-primary/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-lg">EC</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
              E-commerce
            </h3>
            <p className="text-foreground/70 text-sm mb-4">
              Launch high-performance e-commerce solutions with modern payment
              integrations and user experience.
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-accent group"
            >
              Explore Now
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          <div className="card-liquid p-6 glass-effect rounded-2xl border border-glass-border hover:border-primary/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">TE</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
              Tech
            </h3>
            <p className="text-foreground/70 text-sm mb-4">
              Leverage cutting-edge technologies like React, Python, and AWS for
              scalable web applications.
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-accent group"
            >
              Explore Now
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          <div className="card-glitch p-6 glass-effect rounded-2xl border border-glass-border hover:border-primary/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4 flex items-center justify-center group-hover:-rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-lg">CR</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
              Creative
            </h3>
            <p className="text-foreground/70 text-sm mb-4">
              Craft creative digital experiences with stunning animations and
              interactive elements.
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-accent group"
            >
              Explore Now
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          <div className="card-morph p-6 glass-effect rounded-2xl border border-glass-border hover:border-primary/50 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mb-4 flex items-center justify-center group-hover:rotate-45 group-hover:scale-125 transition-transform duration-500">
              <span className="text-white font-bold text-lg">ST</span>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
              Storytelling
            </h3>
            <p className="text-foreground/70 text-sm mb-4">
              Bring stories to life with immersive digital experiences and
              compelling user journeys.
            </p>
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-accent group"
            >
              Explore Now
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 neon-glow"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Portfolio Preview Modal */}
      <PortfolioPreview
        isOpen={isPreviewOpen}
        onClose={closePreview}
        project={selectedProject}
      />
    </section>
  );
}
