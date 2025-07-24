import { Header } from "../../components/ui/header";
import { ThemeProvider } from "../../components/ui/theme-provider";
import { Button } from "../../components/ui/button";
import { ArrowRight, Code, CheckCircle, Monitor, Smartphone, Tablet } from "lucide-react";

export function WebsiteDevelopment() {
  const benefits = [
    {
      title: "Professional Online Presence",
      description: "Establish credibility and trust with a professionally designed website that represents your brand identity."
    },
    {
      title: "Increased Visibility",
      description: "Reach more potential customers through search engines and improve your online visibility."
    },
    {
      title: "Better User Experience",
      description: "Provide visitors with a seamless and intuitive browsing experience that encourages engagement."
    },
    {
      title: "Mobile Optimization",
      description: "Ensure your website looks and functions perfectly on all devices, from desktops to smartphones."
    },
    {
      title: "Competitive Advantage",
      description: "Stand out from competitors with a unique and modern website design that showcases your strengths."
    },
    {
      title: "Scalability",
      description: "Build a website that can grow with your business and adapt to changing needs over time."
    }
  ];

  const process = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and requirements. This phase includes research, sitemap planning, and defining the project scope.",
      icon: <Code className="w-8 h-8 text-primary" />
    },
    {
      step: 2,
      title: "Design & Wireframing",
      description: "Our designers create wireframes and mockups to visualize the layout and design of your website. We collaborate with you to refine the design until it meets your expectations.",
      icon: <Monitor className="w-8 h-8 text-primary" />
    },
    {
      step: 3,
      title: "Development",
      description: "Our developers bring the design to life by coding the website using the latest technologies. We ensure the website is responsive, fast, and user-friendly.",
      icon: <Code className="w-8 h-8 text-primary" />
    },
    {
      step: 4,
      title: "Testing & Quality Assurance",
      description: "We thoroughly test the website on different devices and browsers to ensure it works flawlessly. We check for bugs, performance issues, and usability problems.",
      icon: <CheckCircle className="w-8 h-8 text-primary" />
    },
    {
      step: 5,
      title: "Launch & Training",
      description: "Once everything is ready, we launch your website and provide training on how to manage and update content. We also offer post-launch support to address any issues.",
      icon: <ArrowRight className="w-8 h-8 text-primary" />
    }
  ];

  const technologies = [
    "React", "Next.js", "Vue.js", "Angular", "WordPress", "Shopify", "WooCommerce", "HTML5", "CSS3", "JavaScript", "TypeScript", "PHP", "Node.js"
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="codifye-theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Website <span className="gradient-text">Development</span>
                  </h1>
                  <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                    Custom website design and development tailored to your business needs and brand identity. We create stunning, responsive websites that drive results.
                  </p>
                  {/* Promotional Pricing */}
                  <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold text-primary mb-1">🚀 SPECIAL OFFER</p>
                        <p className="text-lg">Start your website at just <span className="text-2xl font-bold text-primary">₹999/month</span></p>
                        <p className="text-sm text-foreground/70">*Professional design included</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-foreground/70">Call now</p>
                        <p className="font-bold">+91 85408 89842</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button 
                      className="px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 text-lg"
                      onClick={() => window.location.href = '/contact-us'}
                    >
                      Start at ₹999/month
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button 
                      variant="outline"
                      className="px-8 py-6 text-lg border-glass-border"
                      onClick={() => window.location.href = '/portfolio'}
                    >
                      View Our Portfolio
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30"></div>
                    <div className="relative bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-6 overflow-hidden">
                      <div className="flex items-center justify-center">
                        <img 
                          src="/icons/web-design-3d.svg" 
                          alt="Website Development" 
                          className="w-full max-w-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10"></div>
          </section>

          {/* Service Overview */}
          <section className="py-20 bg-card/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Service Overview</h2>
                <p className="text-lg text-foreground/80 mb-8">
                  Our website development service is designed to create a powerful online presence for your business. We combine stunning design with robust functionality to deliver websites that not only look great but also perform exceptionally well.
                </p>
                <p className="text-lg text-foreground/80 mb-8">
                  Whether you need a simple informational website, a complex e-commerce platform, or a custom web application, our team of experienced developers can bring your vision to life. We focus on creating user-friendly interfaces, optimizing for search engines, and ensuring your website is responsive across all devices.
                </p>
                <p className="text-lg text-foreground/80">
                  Our development process is collaborative and transparent, keeping you involved at every stage to ensure the final product aligns perfectly with your business goals and brand identity.
                </p>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">What We Offer</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Monitor className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Custom Website Design</h3>
                  <p className="text-foreground/80">
                    Unique and visually appealing designs tailored to your brand identity and business goals. We create websites that stand out from the competition and leave a lasting impression on visitors.
                  </p>
                </div>
                
                <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Smartphone className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Responsive Development</h3>
                  <p className="text-foreground/80 transition-all duration-300 hover:text-foreground hover:font-medium">
                    Websites that look and function perfectly on all devices, from desktops to smartphones. We ensure optimal user experience regardless of screen size or device type.
                  </p>
                </div>
                
                <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Code className="w-12 h-12 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">E-commerce Solutions</h3>
                  <p className="text-foreground/80 transition-all duration-300 hover:text-foreground hover:font-medium">
                    Powerful online stores with secure payment gateways, inventory management, and user-friendly interfaces. We help you sell products and services online effectively.
                  </p>
                </div>
                
                <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Tablet className="w-12 h-12 text-green-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Content Management Systems</h3>
                  <p className="text-foreground/80 transition-all duration-300 hover:text-foreground hover:font-medium">
                    Easy-to-use CMS implementations that allow you to update content without technical knowledge. Take control of your website with user-friendly admin interfaces.
                  </p>
                </div>
                
                <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CheckCircle className="w-12 h-12 text-purple-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">SEO Optimization</h3>
                  <p className="text-foreground/80 transition-all duration-300 hover:text-foreground hover:font-medium">
                    Websites built with search engine visibility in mind. We implement best practices for SEO to help your website rank higher in search results and attract more visitors.
                  </p>
                </div>
                
                <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <ArrowRight className="w-12 h-12 text-yellow-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Performance Optimization</h3>
                  <p className="text-foreground/80 transition-all duration-300 hover:text-foreground hover:font-medium">
                    Fast-loading websites that provide excellent user experience. We optimize code, images, and server configurations to ensure your website performs at its best.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20 bg-card/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Benefits of Professional Website Development</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                      <p className="text-foreground/80">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Process */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Development Process</h2>
              
              <div className="space-y-12">
                {process.map((step, index) => (
                  <div 
                    key={index}
                    className="flex flex-col md:flex-row gap-8 items-center"
                  >
                    <div className="md:w-1/4 flex justify-center">
                      <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-30"></div>
                        <div className="relative bg-card/80 backdrop-blur-xl border border-glass-border rounded-full w-24 h-24 flex items-center justify-center">
                          <div className="text-3xl font-bold gradient-text">{step.step}</div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-foreground/80">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="py-20 bg-card/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Technologies We Use</h2>
              
              <div className="flex flex-wrap justify-center gap-4">
                {technologies.map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-full px-6 py-3 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center bg-card/80 backdrop-blur-xl border border-glass-border rounded-3xl p-12 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Dream Website?</h2>
                <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                  Let's discuss your project requirements and how we can help you create a website that drives results for your business.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button 
                    className="px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 text-lg"
                    onClick={() => window.location.href = '/contact-us'}
                  >
                    Get a Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="px-8 py-6 text-lg border-glass-border"
                    onClick={() => window.location.href = '/portfolio'}
                  >
                    View Our Portfolio
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-12 border-t border-glass-border/30 glass-effect backdrop-blur-xl bg-gradient-to-r from-card/50 via-card/30 to-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4 group">
                  <img 
                    src="/codifye_logo.png" 
                    alt="Codifye Logo" 
                    className="w-14 h-14 mr-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Codifye
                    </h3>
                    <span className="text-sm text-foreground/60 font-medium -mt-1">Web Solutions</span>
                  </div>
                </div>
                <p className="text-foreground/70 text-sm">
                  Creating digital experiences that drive business growth
                  through innovative technology solutions.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>Web Design & Development</li>
                  <li>WordPress Hosting</li>
                  <li>Search Engine Optimization</li>
                  <li>Digital Marketing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about-us">About Us</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="/contact-us">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>Email: codifyee@gmail.com</li>
                  <li>Phone: +91 8540889842</li>
                  <li>Location: India</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-glass-border/30 text-center">
              <div className="flex items-center justify-center mb-3">
                <img 
                  src="/codifye_logo.png" 
                  alt="Codifye Logo" 
                  className="w-7 h-7 mr-2 opacity-70"
                />
                <span className="text-base font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  CODIFYE
                </span>
              </div>
              <p className="text-sm text-foreground/60">All rights reserved © 2025 CODIFYE</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default WebsiteDevelopment;
