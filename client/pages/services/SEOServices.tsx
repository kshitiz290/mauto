import { useState } from "react";
import { Header } from "../../components/ui/header";
import { ThemeProvider } from "../../components/ui/theme-provider";
import { Button } from "../../components/ui/button";
import { ArrowRight, Search, BarChart, TrendingUp, Target, CheckCircle, LineChart } from "lucide-react";
import { CurrencyConverter } from "../../components/ui/currency-converter";

export function SEOServices() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [currencySymbol, setCurrencySymbol] = useState("$");

  // Base prices in USD
  const basePrices = {
    basic: 299,
    standard: 599,
    premium: 999,
    enterprise: 1499
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
      title: "Comprehensive Keyword Research",
      description: "Identify high-value keywords that your target audience is searching for to drive relevant traffic to your website.",
      icon: <Search className="w-12 h-12 text-primary" />
    },
    {
      title: "On-Page SEO Optimization",
      description: "Optimize your website's content, meta tags, headings, and internal linking structure to improve search engine visibility.",
      icon: <CheckCircle className="w-12 h-12 text-accent" />
    },
    {
      title: "Technical SEO Audits",
      description: "Identify and fix technical issues that may be preventing search engines from properly indexing your website.",
      icon: <BarChart className="w-12 h-12 text-blue-500" />
    },
    {
      title: "Content Strategy",
      description: "Develop a content strategy that targets relevant keywords and provides value to your audience to improve search rankings.",
      icon: <Target className="w-12 h-12 text-green-500" />
    },
    {
      title: "Performance Tracking",
      description: "Monitor your website's search performance with detailed reports and analytics to measure ROI and make data-driven decisions.",
      icon: <LineChart className="w-12 h-12 text-purple-500" />
    }
  ];

  const plans = [
    {
      name: "Basic",
      id: "basic",
      description: "Perfect for small businesses and startups",
      features: [
        "Keyword Research (10 keywords)",
        "On-Page SEO Optimization",
        "Google My Business Optimization",
        "Monthly Performance Report",
        "Basic Technical SEO Audit",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Standard",
      id: "standard",
      description: "Ideal for growing businesses looking to expand their online presence",
      features: [
        "Keyword Research (25 keywords)",
        "On-Page SEO Optimization",
        "Google My Business Optimization",
        "Bi-Weekly Performance Reports",
        "Comprehensive Technical SEO Audit",
        "Content Optimization (5 pages)",
        "Competitor Analysis",
        "Email & Phone Support"
      ],
      popular: true
    },
    {
      name: "Premium",
      id: "premium",
      description: "Advanced solution for established businesses targeting competitive markets",
      features: [
        "Keyword Research (50 keywords)",
        "On-Page SEO Optimization",
        "Google My Business Optimization",
        "Weekly Performance Reports",
        "Advanced Technical SEO Audit",
        "Content Optimization (10 pages)",
        "Competitor Analysis",
        "Link Building Strategy",
        "Content Creation (2 articles/month)",
        "Priority Email & Phone Support"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      id: "enterprise",
      description: "Custom solutions for large businesses with specific needs",
      features: [
        "Keyword Research (100+ keywords)",
        "On-Page SEO Optimization",
        "Google My Business Optimization",
        "Weekly Performance Reports",
        "Advanced Technical SEO Audit",
        "Content Optimization (20+ pages)",
        "Competitor Analysis",
        "Link Building Strategy",
        "Content Creation (4 articles/month)",
        "Local SEO Optimization",
        "E-commerce SEO (if applicable)",
        "Dedicated SEO Manager"
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
                    SEO <span className="gradient-text">Services</span>
                  </h1>
                  <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                    Improve your website's visibility in search engines and drive more organic traffic with our comprehensive SEO services.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      className="px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 text-lg"
                      onClick={() => window.location.href = '/contact-us'}
                    >
                      Get a Free Audit
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
                          src="/icons/seo-3d.svg" 
                          alt="SEO Services" 
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
                  Our SEO services are designed to help your business rank higher in search engine results, drive more organic traffic to your website, and increase conversions. We take a holistic approach to SEO, focusing on both on-page and off-page factors that influence your search rankings.
                </p>
                <p className="text-lg text-foreground/80 mb-8">
                  We start with a comprehensive audit of your website and competitive analysis to identify opportunities for improvement. Based on our findings, we develop a customized SEO strategy that includes keyword research, on-page optimization, technical SEO improvements, content creation, and link building.
                </p>
                <p className="text-lg text-foreground/80">
                  Our team of SEO experts continuously monitors your website's performance and makes data-driven adjustments to ensure you achieve the best possible results. We provide regular reports to keep you informed about your progress and the impact of our SEO efforts.
                </p>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our SEO Process</h2>
              
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">SEO Packages</h2>
                <p className="text-lg text-foreground/80">
                  Choose the perfect SEO package for your business needs. All packages include our core SEO services, with additional features and focus areas as you scale.
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
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
              
              <div className="max-w-4xl mx-auto mt-12 text-center">
                <p className="text-foreground/70">
                  Need a custom SEO solution? <a href="/contact-us" className="text-primary hover:underline">Contact us</a> for a tailored strategy that meets your specific business goals.
                </p>
              </div>
            </div>
          </section>

          {/* Results Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Results</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">+150%</div>
                    <p className="text-foreground/80">Average Increase in Organic Traffic</p>
                  </div>
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">Top 10</div>
                    <p className="text-foreground/80">Rankings for Target Keywords</p>
                  </div>
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">+75%</div>
                    <p className="text-foreground/80">Increase in Conversion Rate</p>
                  </div>
                </div>
                
                <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-4 text-center">Case Study: E-commerce Growth</h3>
                  <p className="text-foreground/80 mb-6">
                    An e-commerce client came to us struggling with low organic traffic and poor search visibility. After implementing our comprehensive SEO strategy, they saw:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>200% increase in organic traffic within 6 months</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>First page rankings for 30+ high-value keywords</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>85% increase in revenue from organic search</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>Reduced cost per acquisition by 40%</span>
                    </li>
                  </ul>
                  <p className="text-foreground/80">
                    Our strategic approach to SEO, focusing on both technical improvements and content optimization, helped them achieve sustainable growth and establish a strong online presence in a competitive market.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20 bg-card/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Frequently Asked Questions</h2>
                
                <div className="space-y-6">
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">How long does it take to see results from SEO?</h3>
                    <p className="text-foreground/80">
                      SEO is a long-term strategy that typically takes 3-6 months to start showing significant results. However, this timeline can vary depending on factors such as your website's current state, competition in your industry, and the aggressiveness of your SEO strategy. We provide regular progress reports so you can track improvements along the way.
                    </p>
                  </div>
                  
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">What makes your SEO services different?</h3>
                    <p className="text-foreground/80">
                      We take a holistic, data-driven approach to SEO that focuses on sustainable results. Unlike agencies that use questionable tactics for quick wins, we implement white-hat strategies that align with search engine guidelines. Our team stays up-to-date with the latest algorithm changes and industry best practices to ensure your website maintains its rankings long-term.
                    </p>
                  </div>
                  
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">Do you guarantee first page rankings?</h3>
                    <p className="text-foreground/80">
                      No reputable SEO agency can guarantee specific rankings as search algorithms consider hundreds of factors that are outside of our control. However, we have a proven track record of helping businesses achieve significant improvements in their search visibility and organic traffic. We focus on delivering measurable results that impact your bottom line.
                    </p>
                  </div>
                  
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">What reporting do you provide?</h3>
                    <p className="text-foreground/80">
                      Depending on your package, we provide weekly, bi-weekly, or monthly comprehensive reports that track key metrics such as keyword rankings, organic traffic, conversion rates, and more. Our reports are designed to be easy to understand while providing actionable insights. We also schedule regular review calls to discuss performance and strategy adjustments.
                    </p>
                  </div>
                  
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">Can I switch packages as my business grows?</h3>
                    <p className="text-foreground/80">
                      Absolutely! We understand that your SEO needs may change as your business evolves. You can upgrade or downgrade your package at any time with 30 days' notice. We'll work with you to ensure a smooth transition and adjust our strategy to align with your new goals and requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center bg-card/80 backdrop-blur-xl border border-glass-border rounded-3xl p-12 shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Improve Your Search Rankings?</h2>
                <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                  Get a free SEO audit and discover how our services can help your business rank higher in search results and drive more organic traffic.
                </p>
                <Button 
                  className="px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 text-lg"
                  onClick={() => window.location.href = '/contact-us'}
                >
                  Get Your Free SEO Audit
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

export default SEOServices;
