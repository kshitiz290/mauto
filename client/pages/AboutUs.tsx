import { Button } from "../components/ui/button";
import { Check, Users, Award, Target, Clock, Zap, Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Header } from "../components/ui/header";
import { ThemeProvider } from "../components/ui/theme-provider";

export function AboutUs() {
  // Team members data
  const teamMembers = [
    {
      name: "Ravish Kumar",
      role: "Founder & CEO",
      image: "/team/ravish-kumar.jpg",
      bio: "Visionary leader driving innovation and excellence in web development and digital solutions.",
    },
    {
      name: "Priya",
      role: "Creative Director",
      image: "/team/priya.jpg",
      bio: "Creative mastermind crafting stunning designs and brand experiences that captivate audiences.",
    },
    {
      name: "Suraj",
      role: "Developer",
      image: "/team/suraj.jpg",
      bio: "Skilled developer specializing in modern web technologies and innovative solutions.",
    },
    {
      name: "Priyanshu",
      role: "Marketing Specialist",
      image: "/team/priyanshu.jpg",
      bio: "Digital marketing strategist driving growth through innovative campaigns and SEO excellence.",
    },
  ];

  // Company values
  const values = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Focused",
      description: "We prioritize our clients' needs and goals above all else.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence",
      description: "We strive for the highest quality in everything we deliver.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reliability",
      description: "We deliver on our promises, on time and within budget.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Agility",
      description: "We adapt quickly to changing requirements and trends.",
    },
  ];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="codifye-theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
        <Header />
        <main>
          <div className="min-h-screen pt-32 pb-16">
            <div className="container mx-auto px-4">
              {/* Header */}
              <div className="text-center mb-20 mt-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="gradient-text">About Us</span>
                </h1>
                <p className="text-xl text-foreground/90 max-w-3xl mx-auto leading-relaxed">
                  Transforming ideas into exceptional digital experiences
                </p>
              </div>

              {/* About Codifye Section (Moved from Index page) */}
              <div className="max-w-5xl mx-auto mb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">
                      About <span className="gradient-text">Codifye</span>
                    </h2>
                    <p className="text-xl text-foreground/80 mb-6">
                      Codifye was founded with a vision to help businesses establish a powerful digital presence.
                    </p>
                    <p className="text-foreground/70 mb-8">
                      From startups to enterprises, we have worked with brands of all sizes, delivering tailored solutions 
                      that enhance efficiency, engagement, and revenue. With expertise in website development, digital marketing, 
                      branding, and software solutions, we bring a holistic approach to digital transformation.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Web Design & Development</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span>WordPress Hosting & Maintenance</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                        <span>Search Engine Optimization</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                        <span>Digital Marketing</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="portfolio-card p-8 rounded-2xl">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold gradient-text mb-2">
                            100+
                          </div>
                          <div className="text-sm text-foreground/60">
                            Projects Completed
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold gradient-text mb-2">
                            50+
                          </div>
                          <div className="text-sm text-foreground/60">
                            Happy Clients
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold gradient-text mb-2">
                            5+
                          </div>
                          <div className="text-sm text-foreground/60">
                            Years Experience
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold gradient-text mb-2">
                            24/7
                          </div>
                          <div className="text-sm text-foreground/60">
                            Support
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl floating-animation"></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl floating-animation"
                      style={{ animationDelay: "2s" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Company Overview */}
              <div className="max-w-5xl mx-auto mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      Founded in 2020, CODIFYE began with a simple mission: to help businesses thrive in the digital world through innovative web solutions. What started as a small team of passionate developers has grown into a full-service digital agency.
                    </p>
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      We believe that great technology should be accessible to everyone. That's why we focus on creating user-friendly, high-performance websites and applications that deliver real results for our clients.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Check className="text-primary mr-2 flex-shrink-0" />
                        <span>Over 100+ successful projects delivered</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="text-primary mr-2 flex-shrink-0" />
                        <span>Trusted by businesses across industries</span>
                      </div>
                      <div className="flex items-center">
                        <Check className="text-primary mr-2 flex-shrink-0" />
                        <span>Award-winning designs and development</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="aspect-video rounded-2xl overflow-hidden bg-card/80 backdrop-blur-xl border border-glass-border shadow-xl">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="neon-text">CODIFYE</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
                  </div>
                </div>
              </div>

              {/* Mission & Vision */}
              <div className="max-w-5xl mx-auto mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-3xl p-8 shadow-xl">
                    <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      To empower businesses with cutting-edge web solutions that drive growth, enhance user experience, and deliver measurable results. We are committed to combining technical excellence with creative design to help our clients stand out in the digital landscape.
                    </p>
                  </div>
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-3xl p-8 shadow-xl">
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      To be the leading digital partner for businesses seeking innovative, high-performance web solutions. We aspire to set new standards in web development by constantly evolving our skills, embracing new technologies, and delivering exceptional value to our clients.
                    </p>
                  </div>
                </div>
              </div>

              {/* Our Values */}
              <div className="max-w-5xl mx-auto mb-20">
                <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {values.map((value, index) => (
                    <div 
                      key={index} 
                      className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-foreground/70">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Team */}
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Team</h2>
                
                {/* CEO - Featured prominently */}
                <div className="flex justify-center mb-12">
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 shadow-xl text-center max-w-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary/40">
                      <img 
                        src={teamMembers[0].image} 
                        alt={teamMembers[0].name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{teamMembers[0].name}</h3>
                    <p className="text-primary font-bold text-lg mb-4">{teamMembers[0].role}</p>
                    <p className="text-foreground/70">{teamMembers[0].bio}</p>
                  </div>
                </div>

                {/* Rest of Team - 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teamMembers.slice(1).map((member, index) => (
                    <div 
                      key={index + 1} 
                      className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-primary/30">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                      <p className="text-primary font-medium mb-3 text-sm">{member.role}</p>
                      <p className="text-foreground/70 text-xs leading-relaxed">{member.bio}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="max-w-4xl mx-auto mt-20 text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to work with us?</h2>
                <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help transform your digital presence and achieve your business goals.
                </p>
                <Button 
                  className="px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 text-lg"
                  onClick={() => window.location.href = '/contact-us'}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
            
            {/* Background Effects */}
            <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10"></div>
          </div>
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

export default AboutUs; 