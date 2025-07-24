import { useState } from "react";
import { Header } from "../../components/ui/header";
import { ThemeProvider } from "../../components/ui/theme-provider";
import { Button } from "../../components/ui/button";
import { ArrowRight, Server, Globe, Shield, Zap, Clock, CheckCircle } from "lucide-react";
import { CurrencyConverter } from "../../components/ui/currency-converter";

export function HostingServices() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [currencySymbol, setCurrencySymbol] = useState("$");

  // Base prices in USD
  const basePrices = {
    basic: 4.99,
    standard: 9.99,
    premium: 19.99,
    enterprise: 49.99
  };

  // Converted prices
  const [prices, setPrices] = useState({
    basic: basePrices.basic,
    standard: basePrices.standard,
    premium: basePrices.premium,
    enterprise: basePrices.enterprise
  });

  const handleCurrencyChange = (plan: string) => (currency: string, symbol: string, convertedAmount: number) => {
    setSelectedCurrency(currency);
    setCurrencySymbol(symbol);
    setPrices(prev => ({
      ...prev,
      [plan]: convertedAmount
    }));
  };

  const features = [
    {
      title: "Reliable Infrastructure",
      description: "Our hosting is built on enterprise-grade hardware with redundant systems to ensure maximum uptime and performance.",
      icon: <Server className="w-12 h-12 text-primary" />
    },
    {
      title: "Global CDN",
      description: "Content delivery network ensures your website loads quickly for visitors anywhere in the world.",
      icon: <Globe className="w-12 h-12 text-accent" />
    },
    {
      title: "Advanced Security",
      description: "DDoS protection, SSL certificates, and regular security audits keep your website safe from threats.",
      icon: <Shield className="w-12 h-12 text-blue-500" />
    },
    {
      title: "Performance Optimization",
      description: "Optimized server configurations, caching, and compression for lightning-fast page loads.",
      icon: <Zap className="w-12 h-12 text-yellow-500" />
    },
    {
      title: "24/7 Support",
      description: "Our technical support team is available around the clock to help with any issues or questions.",
      icon: <Clock className="w-12 h-12 text-green-500" />
    }
  ];

  const plans = [
    {
      name: "Basic",
      id: "basic",
      description: "Perfect for small personal websites and blogs",
      features: [
        "1 Website",
        "10 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "99.9% Uptime Guarantee",
        "24/7 Support"
      ],
      popular: false
    },
    {
      name: "Standard",
      id: "standard",
      description: "Ideal for growing businesses and professional sites",
      features: [
        "10 Websites",
        "25 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "99.9% Uptime Guarantee",
        "24/7 Priority Support",
        "Free Domain for 1 Year",
        "Daily Backups"
      ],
      popular: true
    },
    {
      name: "Premium",
      id: "premium",
      description: "Advanced solution for high-traffic websites",
      features: [
        "100 Websites",
        "100 GB SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "99.9% Uptime Guarantee",
        "24/7 Priority Support",
        "Free Domain for 1 Year",
        "Daily Backups",
        "Dedicated IP Address",
        "Staging Environment"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      id: "enterprise",
      description: "Custom solutions for large businesses with specific needs",
      features: [
        "Unlimited Websites",
        "Unlimited SSD Storage",
        "Unmetered Bandwidth",
        "Free SSL Certificate",
        "99.9% Uptime Guarantee",
        "24/7 Priority Support",
        "Free Domain for 1 Year",
        "Daily Backups",
        "Dedicated IP Address",
        "Staging Environment",
        "Dedicated Server Resources",
        "Custom Security Solutions"
      ],
      popular: false
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
                    Hosting <span className="gradient-text">Services</span>
                  </h1>
                  <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                    Reliable and secure hosting solutions for your website with 99.9% uptime guarantee. Fast servers, daily backups, and 24/7 support.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      className="px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 text-lg"
                      onClick={() => window.location.href = '/contact-us'}
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button 
                      variant="outline"
                      className="px-8 py-6 text-lg border-glass-border"
                      onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      View Plans
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
                          src="/icons/hosting-3d.svg" 
                          alt="Hosting Services" 
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
                  Our hosting services provide a reliable, secure, and high-performance environment for your website. We offer a range of hosting solutions to meet the needs of businesses of all sizes, from small personal blogs to large enterprise websites.
                </p>
                <p className="text-lg text-foreground/80 mb-8">
                  With our state-of-the-art infrastructure, your website will benefit from lightning-fast load times, maximum uptime, and robust security measures. Our team of experts manages all the technical aspects of hosting, allowing you to focus on growing your business.
                </p>
                <p className="text-lg text-foreground/80">
                  All our hosting plans include 24/7 support, regular backups, and a 99.9% uptime guarantee, ensuring your website is always available to your visitors.
                </p>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Key Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="mb-6">{feature.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-foreground/80">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="py-20 bg-card/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Hosting Plans</h2>
                <p className="text-lg text-foreground/80">
                  Choose the perfect hosting plan for your needs. All plans include our core features, with additional resources and capabilities as you scale.
                </p>
                <div className="mt-6 inline-flex items-center justify-center">
                  <span className="mr-3 text-foreground/80">Change Currency:</span>
                  <CurrencyConverter 
                    amount={0} 
                    onCurrencyChange={(currency, symbol) => {
                      setSelectedCurrency(currency);
                      setCurrencySymbol(symbol);
                    }}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {plans.map((plan) => (
                  <div 
                    key={plan.id}
                    className={`bg-card/80 backdrop-blur-xl border ${
                      plan.popular ? 'border-primary' : 'border-glass-border'
                    } rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative flex flex-col`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                        Most Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-foreground/80 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <div className="flex items-end gap-1">
                        <CurrencyConverter 
                          amount={basePrices[plan.id as keyof typeof basePrices]} 
                          onCurrencyChange={handleCurrencyChange(plan.id)}
                          className="flex flex-col"
                        />
                        <span className="text-sm text-foreground/60 mb-2">/month</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary' 
                          : 'bg-card hover:bg-card/80'
                      } transition-all duration-300`}
                      onClick={() => window.location.href = '/contact-us'}
                    >
                      Select Plan
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="max-w-4xl mx-auto mt-12 text-center">
                <p className="text-foreground/70">
                  Need a custom hosting solution? <a href="/contact-us" className="text-primary hover:underline">Contact us</a> for a tailored plan that meets your specific requirements.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">What is web hosting?</h3>
                    <p className="text-foreground/80">
                      Web hosting is a service that allows individuals and organizations to make their website accessible via the World Wide Web. Web hosts are companies that provide space on a server they own or lease for use by their clients as well as providing internet connectivity, typically in a data center.
                    </p>
                  </div>
                  
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">What's included in your hosting plans?</h3>
                    <p className="text-foreground/80">
                      All our hosting plans include SSD storage, unmetered bandwidth, free SSL certificates, 24/7 support, and a 99.9% uptime guarantee. Higher-tier plans include additional features such as more storage, the ability to host more websites, daily backups, and dedicated resources.
                    </p>
                  </div>
                  
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">Can I upgrade my plan later?</h3>
                    <p className="text-foreground/80">
                      Yes, you can easily upgrade your hosting plan as your website grows. Our system allows for seamless transitions between plans with no downtime. You'll only pay the prorated difference between your current plan and the new one.
                    </p>
                  </div>
                  
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">Do you offer a money-back guarantee?</h3>
                    <p className="text-foreground/80">
                      Yes, we offer a 30-day money-back guarantee on all our hosting plans. If you're not satisfied with our service within the first 30 days, we'll refund your hosting fee in full.
                    </p>
                  </div>
                  
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">How do I get support if I have issues?</h3>
                    <p className="text-foreground/80">
                      Our support team is available 24/7 via live chat, email, and phone. We also have an extensive knowledge base with tutorials and guides to help you resolve common issues. Premium and Enterprise plans include priority support with faster response times.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-card/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center bg-card/80 backdrop-blur-xl border border-glass-border rounded-3xl p-12 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
                <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                  Choose the perfect hosting plan for your website and enjoy reliable, high-performance hosting with 24/7 support.
                </p>
                <Button 
                  className="px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 text-lg"
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Hosting Plans
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
                  <li><a href="/services/hosting-services">Hosting Services</a></li>
                  <li><a href="/services/seo-services">Search Engine Optimization</a></li>
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

export default HostingServices;
