import { Header } from "../../components/ui/header";
import { ThemeProvider } from "../../components/ui/theme-provider";
import { Button } from "../../components/ui/button";
import { ArrowRight, Shield, RefreshCw, Zap, Clock, CheckCircle, AlertTriangle } from "lucide-react";

export function WebsiteMaintenance() {
  const benefits = [
    {
      title: "Improved Security",
      description: "Regular updates and security patches protect your website from vulnerabilities and potential cyber threats."
    },
    {
      title: "Enhanced Performance",
      description: "Optimization and regular maintenance ensure your website loads quickly and performs efficiently."
    },
    {
      title: "Reduced Downtime",
      description: "Proactive monitoring and maintenance minimize the risk of website crashes and downtime."
    },
    {
      title: "Content Freshness",
      description: "Regular content updates keep your website relevant and engaging for visitors and search engines."
    },
    {
      title: "Technical Support",
      description: "Access to expert technical support when you need help with your website."
    },
    {
      title: "Peace of Mind",
      description: "Know that your website is in good hands, allowing you to focus on running your business."
    }
  ];

  const maintenancePlans = [
    {
      name: "Basic",
      price: "$99",
      period: "per month",
      description: "Essential maintenance for small websites",
      features: [
        "Monthly updates and security patches",
        "Weekly backups",
        "Basic performance optimization",
        "Email support",
        "Monthly reports"
      ],
      recommended: false
    },
    {
      name: "Standard",
      price: "$199",
      period: "per month",
      description: "Comprehensive maintenance for growing businesses",
      features: [
        "Weekly updates and security patches",
        "Daily backups",
        "Advanced performance optimization",
        "Content updates (up to 4 hours/month)",
        "Priority email and phone support",
        "Weekly reports",
        "Monthly SEO check"
      ],
      recommended: true
    },
    {
      name: "Premium",
      price: "$349",
      period: "per month",
      description: "Complete care for business-critical websites",
      features: [
        "Real-time updates and security monitoring",
        "Daily backups with 30-day retention",
        "Continuous performance optimization",
        "Content updates (up to 8 hours/month)",
        "24/7 emergency support",
        "Weekly detailed reports",
        "Monthly SEO optimization",
        "Quarterly strategy consultation"
      ],
      recommended: false
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
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Website <span className="gradient-text">Maintenance</span>
                  </h1>
                  <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                    Keep your website running smoothly with our comprehensive maintenance services. We handle the technical details so you can focus on your business.
                  </p>
                  <div className="flex flex-wrap gap-4">
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
                      onClick={() => window.location.href = '/services'}
                    >
                      View All Services
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
                          src="/icons/maintenance-3d.svg" 
                          alt="Website Maintenance" 
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
                  Our website maintenance service is designed to keep your website secure, up-to-date, and performing at its best. We handle all the technical aspects of website maintenance, from regular updates and security patches to performance optimization and content updates.
                </p>
                <p className="text-lg text-foreground/80 mb-8">
                  Just like a car needs regular servicing to run smoothly, your website requires ongoing maintenance to ensure it continues to serve your business effectively. Without proper maintenance, websites can become vulnerable to security threats, experience performance issues, and eventually become outdated.
                </p>
                <p className="text-lg text-foreground/80">
                  Our team of experts provides comprehensive maintenance services that address all aspects of website care, giving you peace of mind and allowing you to focus on running your business rather than worrying about technical issues.
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
                  <Shield className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Security Updates</h3>
                  <p className="text-foreground/80">
                    Regular security patches and updates to protect your website from vulnerabilities and potential cyber threats. We monitor security alerts and implement fixes promptly.
                  </p>
                </div>
                
                <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <RefreshCw className="w-12 h-12 text-accent mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Software Updates</h3>
                  <p className="text-foreground/80">
                    Keeping your content management system, plugins, and themes up to date to ensure compatibility and access to the latest features and improvements.
                  </p>
                </div>
                
                <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Zap className="w-12 h-12 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Performance Optimization</h3>
                  <p className="text-foreground/80">
                    Regular optimization of your website's code, images, and database to ensure fast loading times and smooth operation, enhancing user experience.
                  </p>
                </div>
                
                <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <Clock className="w-12 h-12 text-green-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Regular Backups</h3>
                  <p className="text-foreground/80">
                    Scheduled backups of your website's files and database to ensure you can quickly recover in case of any issues or data loss. We store backups securely.
                  </p>
                </div>
                
                <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <AlertTriangle className="w-12 h-12 text-purple-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Monitoring & Support</h3>
                  <p className="text-foreground/80">
                    Continuous monitoring of your website's uptime and performance, with prompt support when issues arise. We're here to help whenever you need assistance.
                  </p>
                </div>
                
                <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CheckCircle className="w-12 h-12 text-yellow-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Content Updates</h3>
                  <p className="text-foreground/80">
                    Assistance with updating your website's content, including text, images, and other media. Keep your website fresh and relevant with regular content updates.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20 bg-card/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Benefits of Regular Website Maintenance</h2>
              
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

          {/* Maintenance Plans */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Maintenance Plans</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {maintenancePlans.map((plan, index) => (
                  <div 
                    key={index}
                    className={`bg-card/80 backdrop-blur-xl border ${plan.recommended ? 'border-primary' : 'border-glass-border'} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative flex flex-col`}
                  >
                    {plan.recommended && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                        Recommended
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-foreground/70"> {plan.period}</span>
                    </div>
                    <p className="text-foreground/80 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.recommended ? 'bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary' : 'bg-card hover:bg-card/70'} transition-all duration-300`}
                      onClick={() => window.location.href = '/contact-us'}
                    >
                      Choose Plan
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
              <p className="text-center mt-8 text-foreground/70">
                Not sure which plan is right for you? <a href="/contact-us" className="text-primary hover:text-accent underline">Contact us</a> for a custom quote.
              </p>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-card/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Why Choose Our Maintenance Service</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Proactive Approach</h3>
                  <p className="text-foreground/80 mb-8">
                    We don't wait for problems to occur. Our proactive approach to website maintenance means we identify and address potential issues before they impact your website's performance or security.
                  </p>
                  
                  <h3 className="text-2xl font-bold mb-4">Experienced Team</h3>
                  <p className="text-foreground/80">
                    Our team of experienced developers and technical experts have the knowledge and skills to handle all aspects of website maintenance, from simple content updates to complex technical issues.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Transparent Reporting</h3>
                  <p className="text-foreground/80 mb-8">
                    We provide regular reports on the maintenance activities performed, giving you complete visibility into what we're doing to keep your website running smoothly.
                  </p>
                  
                  <h3 className="text-2xl font-bold mb-4">Customized Solutions</h3>
                  <p className="text-foreground/80">
                    We understand that every website is unique, which is why we offer customized maintenance plans tailored to your specific needs and budget. Whether you have a small business website or a large e-commerce platform, we have a solution for you.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center bg-card/80 backdrop-blur-xl border border-glass-border rounded-3xl p-12 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Keep Your Website in Top Shape?</h2>
                <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                  Let us take care of your website maintenance needs so you can focus on growing your business. Contact us today to discuss how we can help.
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
                    onClick={() => window.location.href = '/services'}
                  >
                    View All Services
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
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Codifye
                </h3>
                <p className="text-foreground/70 text-sm">
                  Creating digital experiences that drive business growth
                  through innovative technology solutions.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li><a href="/services/website-development">Web Design & Development</a></li>
                  <li><a href="/services/website-maintenance">Website Maintenance</a></li>
                  <li><a href="/services/seo-services">Search Engine Optimization</a></li>
                  <li><a href="/services/content-creation">Content Creation</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li><a href="/">Home</a></li>
                  <li><a href="/about-us">About Us</a></li>
                  <li><a href="/services">Services</a></li>
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
            <div className="mt-8 pt-8 border-t border-glass-border/30 text-center text-sm text-foreground/60">
              <p>All rights reserved © 2025 CODIFYE</p>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default WebsiteMaintenance;
