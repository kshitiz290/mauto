import { useState } from "react";
import { Header } from "../components/ui/header";
import { ThemeProvider } from "../components/ui/theme-provider";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { ArrowRight, ExternalLink, Eye, Zap, Search, Smartphone, Palette, Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  industry: string;
  url: string;
  image: string;
  features: string[];
  tags: string[];
  techStack: string[];
  completionTime: string;
  launchDate: string;
}

export default function Gallery() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");

  const galleryItems: GalleryItem[] = [
    {
      id: "aimmaths",
      title: "AIM Maths - Educational Platform",
      description: "Comprehensive online mathematics learning platform with interactive courses, practice tests, and progress tracking for students.",
      industry: "Education",
      url: "https://aimmaths.in/",
      image: "/placeholder.svg",
      features: [
        "Responsive Design",
        "SEO-friendly",
        "Fast Loading",
        "Mobile-First Approach",
        "Interactive Learning Tools",
        "Progress Tracking",
        "User Authentication",
        "Content Management System"
      ],
      tags: ["Professional", "Educational", "Interactive", "Modern"],
      techStack: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS3"],
      completionTime: "4 weeks",
      launchDate: "2024"
    },
    {
      id: "skotleaf",
      title: "Skotleaf Healthcare - Medical Practice",
      description: "Professional healthcare website for pharmaceutical services with appointment booking, service listings, and patient information portal.",
      industry: "Healthcare",
      url: "https://skotleafhealthcare.in/",
      image: "/placeholder.svg",
      features: [
        "Professional Medical Design",
        "Appointment Booking System",
        "Service Catalog",
        "Patient Portal",
        "Mobile Responsive",
        "HIPAA Compliant Design",
        "Fast Performance",
        "SEO-friendly"
      ],
      tags: ["Professional", "Medical", "Trust-Building", "Clean"],
      techStack: ["WordPress", "PHP", "MySQL", "Bootstrap", "JavaScript"],
      completionTime: "3 weeks",
      launchDate: "2024"
    },
    {
      id: "srprinters",
      title: "SR Printers - Printing Services",
      description: "Complete printing solutions website showcasing services, portfolio gallery, and online order management for commercial printing business.",
      industry: "Printing Services",
      url: "https://srprinters.co.in/",
      image: "/placeholder.svg",
      features: [
        "Service Portfolio Gallery",
        "Online Quote System",
        "Order Management",
        "Print Catalog",
        "Responsive Design",
        "Fast Loading",
        "Contact Integration",
        "Social Media Integration"
      ],
      tags: ["Business", "Portfolio", "Commercial", "Vibrant"],
      techStack: ["WordPress", "WooCommerce", "PHP", "CSS3", "JavaScript"],
      completionTime: "3 weeks",
      launchDate: "2024"
    },
    {
      id: "rajdarbar",
      title: "Rajdarbar Resort - Hospitality",
      description: "Luxury resort website with booking system, room galleries, amenities showcase, and guest services for hospitality business.",
      industry: "Hospitality",
      url: "https://rajdarbarresort.in/",
      image: "/placeholder.svg",
      features: [
        "Booking System Integration",
        "Room Gallery Showcase",
        "Amenities Display",
        "Guest Services Portal",
        "Mobile-friendly",
        "High-Quality Imagery",
        "Location Integration",
        "Social Proof Display"
      ],
      tags: ["Luxury", "Hospitality", "Elegant", "Visual"],
      techStack: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS3"],
      completionTime: "4 weeks",
      launchDate: "2024"
    },
    {
      id: "4gs-ngo",
      title: "4GS Educational NGO - Non-Profit",
      description: "NGO website focusing on educational initiatives, donation management, volunteer coordination, and community impact showcasing.",
      industry: "NGO",
      url: "https://skyblue-mallard-343908.hostingersite.com/",
      image: "/placeholder.svg",
      features: [
        "Donation Integration",
        "Volunteer Management",
        "Impact Showcase",
        "Event Calendar",
        "Transparency Reports",
        "Mobile Responsive",
        "Social Integration",
        "Multi-language Support"
      ],
      tags: ["Non-Profit", "Community", "Impact-Driven", "Accessible"],
      techStack: ["WordPress", "PHP", "MySQL", "JavaScript", "CSS3"],
      completionTime: "5 weeks",
      launchDate: "2024"
    }
  ];

  const industries = ["All", "Education", "Healthcare", "Printing Services", "Hospitality", "NGO"];

  const filteredItems = selectedIndustry === "All"
    ? galleryItems
    : galleryItems.filter(item => item.industry === selectedIndustry);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="manacle_theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Our <span className="gradient-text">Portfolio Gallery</span>
                </h1>
                <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                  Explore our diverse collection of websites across various industries. Each project showcases our commitment to quality, performance, and user experience.
                </p>

                {/* Promotional Banner */}
                <div className="max-w-2xl mx-auto mb-8">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border border-primary/30 backdrop-blur-xl p-6 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 animate-pulse"></div>
                    <div className="relative z-10 text-center">
                      <div className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                        🚀 GET YOUR WEBSITE LIKE THESE
                      </div>
                      <p className="text-lg mb-2">Start your professional website today for just</p>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-3xl md:text-4xl font-bold text-primary">₹999</span>
                        <span className="text-lg text-foreground/80">/per month</span>
                      </div>
                      <p className="text-sm text-foreground/60">*Professional design & development included</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10"></div>
          </section>

          {/* Filter Section */}
          <section className="py-12 bg-card/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Filter by Industry</h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => setSelectedIndustry(industry)}
                      className={`px-6 py-2 rounded-full border transition-all duration-300 ${selectedIndustry === industry
                        ? 'bg-primary text-white border-primary'
                        : 'bg-card/50 border-glass-border hover:border-primary/50'
                        }`}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
                <p className="text-foreground/70 mt-4">
                  Showing {filteredItems.length} project{filteredItems.length !== 1 ? 's' : ''}
                  {selectedIndustry !== "All" && ` in ${selectedIndustry}`}
                </p>
              </div>
            </div>
          </section>

          {/* Gallery Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredItems.map((item) => (
                  <Card key={item.id} className="bg-card/80 backdrop-blur-xl border border-glass-border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden group">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                          <div className="text-center p-8">
                            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mb-4 mx-auto">
                              <Eye className="w-8 h-8 text-white" />
                            </div>
                            <p className="text-lg font-bold mb-2">{item.title}</p>
                            <p className="text-sm text-foreground/70 mb-4">Live Website Preview</p>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-sky-400 text-purple-600 bg-white/90 backdrop-blur-sm hover:bg-sky-50 hover:text-purple-700 hover:border-sky-500 shadow-lg font-bold"
                              onClick={() => window.open(item.url, '_blank')}
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Visit Live Site
                            </Button>
                          </div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-primary/90 text-white">
                            {item.industry}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="p-6">
                      <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-foreground/70 mb-4 leading-relaxed">
                        {item.description}
                      </CardDescription>

                      {/* Tags */}
                      <div className="mb-4">
                        <h4 className="text-sm font-bold mb-2 text-foreground/80">Design Style:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-sm font-bold mb-2 text-foreground/80">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {item.features.slice(0, 6).map((feature) => (
                            <div key={feature} className="flex items-center text-xs text-foreground/70">
                              <Zap className="w-3 h-3 text-primary mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        {item.features.length > 6 && (
                          <p className="text-xs text-foreground/60 mt-2">
                            +{item.features.length - 6} more features
                          </p>
                        )}
                      </div>

                      {/* Tech Stack */}
                      <div className="mb-4">
                        <h4 className="text-sm font-bold mb-2 text-foreground/80">Technology Stack:</h4>
                        <div className="flex flex-wrap gap-1">
                          {item.techStack.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs bg-accent/20 text-accent">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="bg-card/50 p-3 rounded-lg border border-glass-border">
                          <p className="text-foreground/60 mb-1">Completion Time</p>
                          <p className="font-bold">{item.completionTime}</p>
                        </div>
                        <div className="bg-card/50 p-3 rounded-lg border border-glass-border">
                          <p className="text-foreground/60 mb-1">Launch Year</p>
                          <p className="font-bold">{item.launchDate}</p>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="p-6 pt-0 flex flex-col gap-3">
                      <Button
                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 group"
                        onClick={() => window.location.href = '/contact-us'}
                      >
                        <Palette className="w-4 h-4 mr-2" />
                        Select This Style & Proceed
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <div className="flex gap-2 w-full">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-glass-border"
                          onClick={() => window.open(item.url, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Live Preview
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-glass-border"
                          onClick={() => window.location.href = '/contact-us'}
                        >
                          <Search className="w-4 h-4 mr-1" />
                          Get Quote
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-card/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Create Your <span className="gradient-text">Professional Website</span>?
                </h2>
                <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                  Choose any style from our gallery or let us create a custom design for your business.
                  Professional websites starting at just ₹999/month.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-xl p-6">
                    <Smartphone className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold mb-2">Mobile Responsive</h3>
                    <p className="text-sm text-foreground/70">Perfect on all devices</p>
                  </div>
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-xl p-6">
                    <Zap className="w-8 h-8 text-accent mx-auto mb-3" />
                    <h3 className="font-bold mb-2">Fast Performance</h3>
                    <p className="text-sm text-foreground/70">Built for speed</p>
                  </div>
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-xl p-6">
                    <Search className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-bold mb-2">SEO Ready</h3>
                    <p className="text-sm text-foreground/70">Built for search engines</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300"
                    onClick={() => window.location.href = '/contact-us'}
                  >
                    Start Your Website - ₹999/month
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-glass-border"
                    onClick={() => window.location.href = '/services/website-development'}
                  >
                    View Our Services
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl">
                  <p className="text-lg font-bold mb-2">Ready to discuss your project?</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                    <div className="flex items-center">
                      <span className="font-bold">📞 +91 85408 89842</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold">🌐 www.manacle.in</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold">📧 contact@manacle.in</span>
                    </div>
                  </div>
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
                    src="/manacle_logo.png"
                    alt="Manacle Logo"
                    className="w-14 h-14 mr-3 group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                    width="56"
                    height="56"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Manacle
                    </h3>
                    <span className="text-sm text-foreground/60 font-medium -mt-1">Web Solutions</span>
                  </div>
                </div>
                <p className="text-foreground/70 text-lg font-medium">
                  Creating digital experiences that drive business growth
                  through innovative technology solutions.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-xl">Services</h4>
                <ul className="space-y-3 text-lg text-foreground/70 font-medium">
                  <li className="hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer">Web Design & Development</li>
                  <li className="hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer">WordPress Hosting</li>
                  <li className="hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer">Search Engine Optimization</li>
                  <li className="hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer">Digital Marketing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-xl">Quick Links</h4>
                <ul className="space-y-3 text-lg text-foreground/70 font-medium">
                  <li><a href="/" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Home</a></li>
                  <li><a href="/about-us" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">About Us</a></li>
                  <li><a href="#services" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Services</a></li>
                  <li><a href="/contact-us" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-xl">Contact</h4>
                <ul className="space-y-3 text-lg text-foreground/70 font-medium">
                  <li>
                    <a href="mailto:contact@manacle.in" className="flex items-center hover:text-primary hover:underline transition-all duration-300">
                      <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                      Email: contact@manacle.in
                    </a>
                  </li>
                  <li>
                    <a href="tel:+918540889842" className="flex items-center hover:text-primary hover:underline transition-all duration-300">
                      <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                      Phone: +91 8540889842
                    </a>
                  </li>
                  <li>
                    <a href="https://maps.google.com/?q=India" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary hover:underline transition-all duration-300">
                      <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                      Location: India
                    </a>
                  </li>
                </ul>

                {/* Social Media Icons */}
                <div className="mt-6">
                  <h5 className="font-bold mb-3 text-base">Follow Us</h5>
                  <div className="flex space-x-4">
                    <a
                      href="https://x.com/home"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-card/80 border border-glass-border flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                    >
                      <img 
                        src="/x.svg" 
                        alt="X" 
                        className="w-5 h-5 filter brightness-75 group-hover:brightness-0 group-hover:invert transition-all duration-300"
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                        width="20"
                        height="20"
                      />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61574541927345"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-card/80 border border-glass-border flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 group"
                    >
                      <Facebook className="w-5 h-5 text-foreground/70 group-hover:text-white" />
                    </a>
                    <a
                      href="https://www.instagram.com/getmsell?igsh=OWRlb3B4bTczcTJo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-card/80 border border-glass-border flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:scale-110 transition-all duration-300 group"
                    >
                      <Instagram className="w-5 h-5 text-foreground/70 group-hover:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-glass-border/30 text-center">
              <div className="flex items-center justify-center mb-3">
                <img
                  src="/manacle_logo.png"
                  alt="Manacle Logo"
                  className="w-7 h-7 mr-2 opacity-70"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                  width="28"
                  height="28"
                />
                <span className="text-base font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  MANACLE
                </span>
              </div>
              <p className="text-lg text-foreground/60 font-medium">All rights reserved © 2025 MANACLE</p>
            </div>
          </div>
        </footer>

        {/* Floating Action Buttons */}
        {/* WhatsApp for Desktop */}
        <a
          href="https://wa.me/918540889842"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 hidden md:flex w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </a>

        {/* Phone Call for Mobile */}
        <a
          href="tel:+918540889842"
          className="fixed bottom-6 right-6 z-50 flex md:hidden w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Call us"
        >
          <Phone className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </a>
      </div>
    </ThemeProvider>
  );
} 