import * as React from "react";

interface TechItem {
  name: string;
  description: string;
  iconPath: string;
  color: string;
  delay: string;
}

const technologies: TechItem[] = [
  {
    name: "React",
    description: "Modern frontend framework for interactive UIs",
    iconPath: "/icons/tech/react.svg",
    color: "text-sky-500",
    delay: "0s",
  },
  {
    name: "Python",
    description: "Powerful backend development with Django & FastAPI",
    iconPath: "/icons/tech/python.svg",
    color: "text-emerald-500",
    delay: "0.1s",
  },
  {
    name: "AWS",
    description: "Scalable cloud hosting and DevOps solutions",
    iconPath: "/icons/tech/aws-logo.svg",
    color: "text-orange-500",
    delay: "0.2s",
  },
  {
    name: "Mobile",
    description: "Responsive design for all devices",
    iconPath: "/icons/tech/mobile.svg",
    color: "text-violet-500",
    delay: "0.3s",
  },
  {
    name: "Java",
    description: "Enterprise-grade applications and microservices",
    iconPath: "/icons/tech/java.svg",
    color: "text-rose-500",
    delay: "0.4s",
  },
  {
    name: "Flask",
    description: "Lightweight Python web framework",
    iconPath: "/icons/tech/flask.svg",
    color: "text-green-500",
    delay: "0.5s",
  },
  {
    name: "Docker",
    description: "Containerization and deployment",
    iconPath: "/icons/tech/docker.svg",
    color: "text-cyan-500",
    delay: "0.6s",
  },
  {
    name: "DevOps",
    description: "CI/CD pipelines and automation",
    iconPath: "/icons/tech/devops.svg",
    color: "text-purple-500",
    delay: "0.7s",
  },
];

export function TechStack() {
  return (
    <section
      id="services"
      className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-secondary/10 to-background"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Technology Stack</span>
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            We leverage{" "}
            <span className="text-primary font-semibold">
              cutting-edge technologies
            </span>{" "}
            to build robust, scalable, and modern digital solutions for your
            business.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {technologies.map((tech, index) => {
            // Enhanced gradient backgrounds for each technology
            const techGradients = [
              "from-sky-500/20 via-blue-500/15 to-cyan-500/20", // React
              "from-emerald-500/20 via-green-500/15 to-teal-500/20", // Python
              "from-orange-500/20 via-amber-500/15 to-yellow-500/20", // AWS
              "from-violet-500/20 via-purple-500/15 to-fuchsia-500/20", // Mobile
              "from-rose-500/20 via-red-500/15 to-pink-500/20", // Java
              "from-lime-500/20 via-green-400/15 to-emerald-500/20", // Flask
              "from-cyan-500/20 via-teal-500/15 to-blue-500/20", // Docker
              "from-purple-500/20 via-violet-500/15 to-indigo-500/20", // DevOps
            ];

            return (
              <div
                key={tech.name}
                className={`tech-icon-card p-8 rounded-2xl bg-gradient-to-br ${techGradients[index]} backdrop-blur-sm overflow-hidden`}
                style={{ animationDelay: tech.delay }}
              >
                {/* Tech Icon with pop-out styling */}
                <div className="text-center relative z-10">
                  <div className="relative mb-6">
                    <div className="tech-icon-container w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border border-glass-border flex items-center justify-center shadow-lg">
                      <img 
                        src={tech.iconPath} 
                        alt={`${tech.name} icon`} 
                        className={`${tech.name === "AWS" ? "w-full h-full object-contain p-1" : 
                          tech.name === "Node.js" ? "w-full h-full object-cover p-0" : "w-12 h-12 object-contain"}`}
                      />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground transition-all duration-300">
                    {tech.name}
                  </h3>
                  <p className="text-foreground/80 text-sm leading-relaxed transition-all duration-300 hover:text-foreground hover:font-medium group-hover:text-foreground">
                    {tech.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="tech-icon-card p-8 rounded-2xl bg-gradient-to-br from-sky-500/20 via-blue-500/15 to-cyan-500/20 backdrop-blur-sm">
            <div className="mb-6 relative z-10">
              <div className="tech-icon-container w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">WD</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground transition-colors duration-300">
                Web Development
              </h3>
              <p className="text-foreground/80 transition-all duration-300 hover:text-foreground hover:font-medium">
                Custom websites and web applications built with modern
                frameworks and best practices.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-foreground/80 relative z-10">
              <li className="flex items-center transition-all duration-300 hover:text-foreground hover:font-medium hover:translate-x-1">
                <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                Responsive Design
              </li>
              <li className="flex items-center transition-all duration-300 hover:text-foreground hover:font-medium hover:translate-x-1">
                <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                React & TypeScript
              </li>
              <li className="flex items-center transition-all duration-300 hover:text-foreground hover:font-medium hover:translate-x-1">
                <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                Performance Optimization
              </li>
              <li className="flex items-center transition-all duration-300 hover:text-foreground hover:font-medium hover:translate-x-1">
                <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                SEO Friendly
              </li>
            </ul>
          </div>

          {/* Backend Development */}
          <div className="tech-icon-card p-8 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-green-500/15 to-teal-500/20 backdrop-blur-sm">
            <div className="mb-6 relative z-10">
              <div className="tech-icon-container w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">BS</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground transition-colors duration-300">
                Backend Solutions
              </h3>
              <p className="text-foreground/80 transition-all duration-300 hover:text-foreground hover:font-medium">
                Robust backend systems using Python, Java, and cloud
                technologies for scalable applications.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-foreground/80 relative z-10">
              <li className="flex items-center transition-all duration-300 hover:text-foreground hover:font-medium hover:translate-x-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                API Development
              </li>
              <li className="flex items-center transition-all duration-300 hover:text-foreground hover:font-medium hover:translate-x-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                Database Design
              </li>
              <li className="flex items-center transition-all duration-300 hover:text-foreground hover:font-medium hover:translate-x-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                Cloud Integration
              </li>
              <li className="flex items-center transition-all duration-300 hover:text-foreground hover:font-medium hover:translate-x-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                Security & Authentication
              </li>
            </ul>
          </div>

          {/* Digital Marketing */}
          <div className="tech-icon-card p-8 rounded-2xl bg-gradient-to-br from-purple-500/20 via-violet-500/15 to-indigo-500/20 backdrop-blur-sm">
            <div className="mb-6 relative z-10">
              <div className="tech-icon-container w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">DM</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground transition-colors duration-300">
                Digital Marketing
              </h3>
              <p className="text-foreground/80 transition-all duration-300 hover:text-foreground hover:font-medium">
                Strategic marketing campaigns to boost your online presence and
                drive conversions.
              </p>
            </div>
            <ul className="space-y-3 text-sm text-foreground/80 relative z-10">
              <li className="flex items-center transition-all duration-300 hover:text-foreground hover:font-medium hover:translate-x-1">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                SEO Optimization
              </li>
              <li className="flex items-center transition-all duration-300 hover:text-foreground hover:font-medium hover:translate-x-1">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Social Media Marketing
              </li>
              <li className="flex items-center transition-all duration-300 hover:text-foreground hover:font-medium hover:translate-x-1">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Content Strategy
              </li>
              <li className="flex items-center transition-all duration-300 hover:text-foreground hover:font-medium hover:translate-x-1">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Analytics & Reporting
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-3xl"></div>
    </section>
  );
}
