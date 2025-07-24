import { useState } from "react";
import { Header } from "../components/ui/header";
import { ThemeProvider } from "../components/ui/theme-provider";
import { Button } from "../components/ui/button";
import { ArrowRight, Code, Server, Globe, Search, PenTool, ChevronDown, ChevronUp, Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    {
      id: "website-development",
      icon: <Code className="w-10 h-10 text-primary" />,
      title: "Website Development",
      description: "Custom website design and development tailored to your business needs and brand identity.",
      features: [
        "Responsive design for all devices",
        "User-friendly navigation and interface",
        "Custom functionality and features",
        "E-commerce integration",
        "Content management systems"
      ],
      cta: "Learn More"
    },
    {
      id: "website-maintenance",
      icon: <Server className="w-10 h-10 text-accent" />,
      title: "Website Maintenance",
      description: "Keep your website running smoothly with regular updates, security patches, and performance optimization.",
      features: [
        "Regular software updates",
        "Security monitoring and patches",
        "Performance optimization",
        "Content updates and backups",
        "Technical support"
      ],
      cta: "Learn More"
    },
    {
      id: "hosting-services",
      icon: <Globe className="w-10 h-10 text-blue-500" />,
      title: "Hosting Services",
      description: "Reliable and secure hosting solutions for your website with 99.9% uptime guarantee.",
      features: [
        "Fast and reliable servers",
        "SSL certificates",
        "Daily backups",
        "24/7 monitoring",
        "Scalable resources"
      ],
      cta: "Learn More"
    },
    {
      id: "seo-services",
      icon: <Search className="w-10 h-10 text-green-500" />,
      title: "SEO Services",
      description: "Improve your website's visibility in search engines and drive more organic traffic.",
      features: [
        "Keyword research and optimization",
        "On-page and off-page SEO",
        "Technical SEO audits",
        "Content strategy",
        "Performance tracking and reporting"
      ],
      cta: "Learn More"
    },
    {
      id: "content-creation",
      icon: <PenTool className="w-10 h-10 text-purple-500" />,
      title: "Content Creation",
      description: "Engaging and SEO-optimized content that resonates with your audience and drives conversions.",
      features: [
        "Blog writing and articles",
        "Website copy",
        "Graphic design",
        "Video production",
        "Social media content"
      ],
      cta: "Learn More"
    }
  ];

  const techStack = [
    { name: "React", icon: "/icons/tech/react.svg" },
    { name: "Node.js", icon: "/icons/tech/devops.svg" },
    { name: "WordPress", icon: "/icons/tech/java.svg" },
    { name: "Python", icon: "/icons/tech/python.svg" },
    { name: "AWS", icon: "/icons/tech/aws-logo.svg" },
    { name: "Docker", icon: "/icons/tech/docker.svg" }
  ];

  const testimonials = [
    {
      name: "John Smith",
      company: "Tech Innovations",
      image: "/placeholder.svg",
      quote: "Codifye transformed our online presence with a stunning website that perfectly represents our brand. Their attention to detail and technical expertise is unmatched."
    },
    {
      name: "Sarah Johnson",
      company: "Retail Solutions",
      image: "/placeholder.svg",
      quote: "The SEO services provided by Codifye helped us increase our organic traffic by 200% in just 3 months. Their team is knowledgeable, responsive, and results-driven."
    },
    {
      name: "Michael Brown",
      company: "Creative Studios",
      image: "/placeholder.svg",
      quote: "We've been using Codifye's maintenance services for over a year now, and our website has never performed better. Their proactive approach to security and optimization gives us peace of mind."
    }
  ];

  const faqs = [
    {
      question: "How long does it take to develop a website?",
      answer: "The timeline for website development varies depending on the complexity and scope of the project. A simple website may take 2-4 weeks, while more complex websites with custom functionality can take 8-12 weeks or more. During our initial consultation, we'll provide you with a more accurate timeline based on your specific requirements."
    },
    {
      question: "What is included in your website maintenance services?",
      answer: "Our website maintenance services include regular software updates, security monitoring and patches, performance optimization, content updates, backups, and technical support. We offer different maintenance packages to suit your needs and budget."
    },
    {
      question: "Do you offer hosting services?",
      answer: "Yes, we offer reliable and secure hosting solutions with 99.9% uptime guarantee. Our hosting services include fast servers, SSL certificates, daily backups, 24/7 monitoring, and scalable resources to accommodate your website's growth."
    },
    {
      question: "How do your SEO services work?",
      answer: "Our SEO services start with a comprehensive audit of your website and competitive analysis. We then develop a customized strategy that includes keyword research, on-page optimization, technical SEO improvements, content creation, and link building. We provide regular reports to track progress and make adjustments as needed."
    },
    {
      question: "Can you help with content creation for my website?",
      answer: "Absolutely! We offer a range of content creation services including blog writing, website copy, graphic design, video production, and social media content. Our team of experienced content creators will work with you to develop engaging and SEO-optimized content that resonates with your audience."
    }
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="codifye-theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Our <span className="gradient-text">Services</span>
                </h1>
                <p className="text-xl text-foreground/80 mb-10 leading-relaxed">
                  We provide end-to-end digital solutions to help your business thrive online.
                  From website development to SEO and content creation, we've got you covered.
                </p>
                <Button 
                  className="px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 text-lg"
                  onClick={() => window.location.href = '/contact-us'}
                >
                  Book a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
            {/* Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10"></div>
          </section>

          {/* Expertise Summary */}
          <section className="py-20 bg-card/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Expertise</h2>
                <p className="text-lg text-foreground/80">
                  With over 5 years of experience in the digital space, we've helped businesses of all sizes establish and grow their online presence. Our team of experts combines technical knowledge with creative thinking to deliver solutions that drive results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-bold gradient-text mb-2">100+</div>
                  <p className="text-foreground/70">Projects Completed</p>
                </div>
                <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                  <p className="text-foreground/70">Happy Clients</p>
                </div>
                <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                  <p className="text-foreground/70">Years Experience</p>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
                <p className="text-lg text-foreground/80">
                  We offer a comprehensive range of digital services to help your business succeed online.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div 
                    key={service.id}
                    className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
                  >
                    <div className="mb-6">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-foreground/80 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-8 flex-grow">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="transition-all duration-300 hover:text-foreground hover:font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={`/services/${service.id}`} className="inline-flex items-center text-primary hover:text-accent transition-colors">
                      {service.cta}
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="py-20 bg-card/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Tech Stack</h2>
                <p className="text-lg text-foreground/80">
                  We use the latest technologies and tools to deliver high-quality digital solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {techStack.map((tech, index) => (
                  <div 
                    key={index}
                    className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-4 w-16 h-16 flex items-center justify-center">
                      <img src={tech.icon} alt={tech.name} className={`${tech.name === "AWS" ? "w-full h-full object-contain p-1" : tech.name === "Node.js" ? "w-full h-full object-contain" : "w-12 h-12 object-contain"}`} />
                    </div>
                    <p className="font-medium text-center transition-all duration-300 hover:text-primary hover:scale-105">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
                <p className="text-lg text-foreground/80">
                  Don't just take our word for it. Here's what our clients have to say about our services.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-foreground/70">{testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-20 bg-card/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
                <p className="text-lg text-foreground/80">
                  Have questions about our services? Find answers to commonly asked questions below.
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                  <div 
                    key={index}
                    className="mb-4 bg-card/80 backdrop-blur-xl border border-glass-border rounded-xl overflow-hidden"
                  >
                    <button 
                      className="w-full px-6 py-4 text-left flex items-center justify-between font-medium"
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span>
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4 text-foreground/80">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center bg-card/80 backdrop-blur-xl border border-glass-border rounded-3xl p-12 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                  Book a free consultation with our team to discuss your project requirements and how we can help you achieve your goals.
                </p>
                <Button 
                  className="px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 text-lg"
                  onClick={() => window.location.href = '/contact-us'}
                >
                  Book a Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
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
                    <a href="mailto:codifyee@gmail.com" className="flex items-center hover:text-primary hover:underline transition-all duration-300">
                      <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                      Email: codifyee@gmail.com
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
                      <img src="/x.svg" alt="X" className="w-5 h-5 filter brightness-75 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
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
                      href="https://instagram.com/codifyee_" 
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
                  src="/codifye_logo.png" 
                  alt="Codifye Logo" 
                  className="w-7 h-7 mr-2 opacity-70"
                />
                <span className="text-base font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  CODIFYE
                </span>
              </div>
              <p className="text-lg text-foreground/60 font-medium">All rights reserved © 2025 CODIFYE</p>
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

export default Services;
