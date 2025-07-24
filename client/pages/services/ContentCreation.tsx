import { useState } from "react";
import { Header } from "../../components/ui/header";
import { ThemeProvider } from "../../components/ui/theme-provider";
import { Button } from "../../components/ui/button";
import { ArrowRight, PenTool, FileText, Image, Video, MessageSquare, CheckCircle } from "lucide-react";
import { CurrencyConverter } from "../../components/ui/currency-converter";

export function ContentCreation() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [currencySymbol, setCurrencySymbol] = useState("$");

  // Base prices in USD
  const basePrices = {
    basic: 199,
    standard: 399,
    premium: 799,
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
      title: "Blog Writing & Articles",
      description: "Engaging, SEO-optimized blog posts and articles that establish your authority and drive organic traffic.",
      icon: <FileText className="w-12 h-12 text-primary" />
    },
    {
      title: "Website Copy",
      description: "Compelling website content that communicates your brand message and converts visitors into customers.",
      icon: <PenTool className="w-12 h-12 text-accent" />
    },
    {
      title: "Graphic Design",
      description: "Eye-catching visuals and graphics that enhance your content and improve engagement.",
      icon: <Image className="w-12 h-12 text-blue-500" />
    },
    {
      title: "Video Production",
      description: "Professional video content that showcases your products, services, and brand story.",
      icon: <Video className="w-12 h-12 text-green-500" />
    },
    {
      title: "Social Media Content",
      description: "Platform-specific content that builds community and drives engagement across social channels.",
      icon: <MessageSquare className="w-12 h-12 text-purple-500" />
    }
  ];

  const plans = [
    {
      name: "Basic",
      id: "basic",
      description: "Perfect for small businesses and startups",
      features: [
        "4 Blog Posts/month (500 words each)",
        "Basic SEO Optimization",
        "2 Social Media Posts/week",
        "1 Email Newsletter/month",
        "Content Calendar",
        "1 Round of Revisions"
      ],
      popular: false
    },
    {
      name: "Standard",
      id: "standard",
      description: "Ideal for growing businesses looking to expand their online presence",
      features: [
        "8 Blog Posts/month (750 words each)",
        "Advanced SEO Optimization",
        "5 Social Media Posts/week",
        "2 Email Newsletters/month",
        "Content Calendar",
        "2 Rounds of Revisions",
        "Basic Graphic Design",
        "Monthly Performance Report"
      ],
      popular: true
    },
    {
      name: "Premium",
      id: "premium",
      description: "Advanced solution for established businesses with comprehensive content needs",
      features: [
        "12 Blog Posts/month (1000 words each)",
        "Advanced SEO Optimization",
        "Daily Social Media Posts",
        "4 Email Newsletters/month",
        "Content Calendar",
        "Unlimited Revisions",
        "Custom Graphic Design",
        "1 Video Production/month",
        "Monthly Performance Report",
        "Content Strategy Session"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      id: "enterprise",
      description: "Custom solutions for large businesses with specific content needs",
      features: [
        "20+ Blog Posts/month (1000+ words each)",
        "Advanced SEO Optimization",
        "Multiple Social Media Platforms",
        "Weekly Email Newsletters",
        "Content Calendar",
        "Unlimited Revisions",
        "Custom Graphic Design",
        "2+ Video Productions/month",
        "Comprehensive Analytics",
        "Quarterly Strategy Sessions",
        "Dedicated Content Manager"
      ],
      popular: false
    }
  ];

  const contentTypes = [
    {
      title: "Blog Posts & Articles",
      items: [
        "Informational Blog Posts",
        "How-to Guides",
        "Listicles",
        "Case Studies",
        "Industry News Analysis",
        "Expert Interviews"
      ]
    },
    {
      title: "Website Content",
      items: [
        "Homepage Copy",
        "About Us Pages",
        "Service/Product Descriptions",
        "Landing Pages",
        "FAQ Pages",
        "Team Bios"
      ]
    },
    {
      title: "Marketing Materials",
      items: [
        "Email Newsletters",
        "Sales Letters",
        "Brochures & Flyers",
        "Press Releases",
        "White Papers",
        "E-books & Guides"
      ]
    },
    {
      title: "Social Media",
      items: [
        "Platform-Specific Posts",
        "Social Media Captions",
        "Hashtag Research",
        "Community Management",
        "Social Media Ads Copy",
        "Social Media Strategy"
      ]
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
                    Content <span className="gradient-text">Creation</span>
                  </h1>
                  <p className="text-xl text-foreground/80 mb-8 leading-relaxed">
                    Engaging and SEO-optimized content that resonates with your audience and drives conversions.
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
                          src="/icons/branding-3d.svg" 
                          alt="Content Creation" 
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
                  Our content creation services are designed to help your business communicate effectively with your target audience, establish your brand voice, and drive engagement across various platforms. We create high-quality, original content that not only attracts visitors but converts them into loyal customers.
                </p>
                <p className="text-lg text-foreground/80 mb-8">
                  Our team of experienced writers, designers, and content strategists work together to develop a comprehensive content strategy tailored to your specific business goals. Whether you need blog posts, website copy, social media content, or video production, we have the expertise to deliver content that resonates with your audience and drives results.
                </p>
                <p className="text-lg text-foreground/80">
                  We understand the importance of consistency and quality in content marketing, which is why we follow a rigorous process to ensure every piece of content we create aligns with your brand voice, meets SEO best practices, and delivers value to your audience.
                </p>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Content Services</h2>
              
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

          {/* Content Types */}
          <section className="py-20 bg-card/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Types of Content We Create</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contentTypes.map((type, index) => (
                  <div 
                    key={index}
                    className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold mb-6 gradient-text">{type.title}</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {type.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section id="pricing" className="py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Content Creation Packages</h2>
                <p className="text-lg text-foreground/80">
                  Choose the perfect content package for your business needs. All packages include our core content services, with additional features and volume as you scale.
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
                  Need a custom content solution? <a href="/contact-us" className="text-primary hover:underline">Contact us</a> for a tailored package that meets your specific business needs.
                </p>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-20 bg-card/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Our Content Creation Process</h2>
                
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-30"></div>
                        <div className="relative bg-card/80 backdrop-blur-xl border border-glass-border rounded-full w-24 h-24 flex items-center justify-center">
                          <div className="text-3xl font-bold gradient-text">1</div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-bold mb-4">Discovery & Strategy</h3>
                      <p className="text-foreground/80">
                        We start by understanding your business goals, target audience, and content needs. Our team conducts thorough research to identify content opportunities and develop a strategic content plan aligned with your objectives.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-30"></div>
                        <div className="relative bg-card/80 backdrop-blur-xl border border-glass-border rounded-full w-24 h-24 flex items-center justify-center">
                          <div className="text-3xl font-bold gradient-text">2</div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-bold mb-4">Content Creation</h3>
                      <p className="text-foreground/80">
                        Our team of skilled writers, designers, and content creators develop high-quality content tailored to your brand voice and audience preferences. We ensure all content is original, engaging, and optimized for search engines.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-30"></div>
                        <div className="relative bg-card/80 backdrop-blur-xl border border-glass-border rounded-full w-24 h-24 flex items-center justify-center">
                          <div className="text-3xl font-bold gradient-text">3</div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-bold mb-4">Review & Refinement</h3>
                      <p className="text-foreground/80">
                        We share the content with you for review and feedback. Our collaborative approach ensures the final content meets your expectations and aligns with your brand guidelines. We make revisions based on your feedback until you're completely satisfied.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-30"></div>
                        <div className="relative bg-card/80 backdrop-blur-xl border border-glass-border rounded-full w-24 h-24 flex items-center justify-center">
                          <div className="text-3xl font-bold gradient-text">4</div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-bold mb-4">Publication & Distribution</h3>
                      <p className="text-foreground/80">
                        We help you publish and distribute your content across appropriate channels to maximize reach and engagement. Our team can assist with content scheduling, posting, and promotion to ensure your content reaches your target audience.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-30"></div>
                        <div className="relative bg-card/80 backdrop-blur-xl border border-glass-border rounded-full w-24 h-24 flex items-center justify-center">
                          <div className="text-3xl font-bold gradient-text">5</div>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-bold mb-4">Analysis & Optimization</h3>
                      <p className="text-foreground/80">
                        We track the performance of your content using analytics tools and provide regular reports on key metrics. Based on the data, we continuously refine our content strategy to improve results and achieve your business objectives.
                      </p>
                    </div>
                  </div>
                </div>
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
                    <h3 className="text-xl font-bold mb-3">How do you ensure content aligns with our brand voice?</h3>
                    <p className="text-foreground/80">
                      We start by conducting a thorough brand analysis to understand your brand voice, tone, and messaging guidelines. Our team creates a detailed brand style guide specific to your content needs, which serves as a reference for all content creation. We also work closely with you during the initial content development to refine and perfect the voice until it authentically represents your brand.
                    </p>
                  </div>
                  
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">How long does it take to create content?</h3>
                    <p className="text-foreground/80">
                      The timeline varies depending on the type and complexity of content. Typically, blog posts and social media content can be delivered within 3-5 business days, while more complex content like whitepapers or video productions may take 2-3 weeks. We'll provide you with a specific timeline during our initial consultation based on your content needs and priorities.
                    </p>
                  </div>
                  
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">Do you provide content for specific industries?</h3>
                    <p className="text-foreground/80">
                      Yes, we have experience creating content for a wide range of industries including technology, healthcare, finance, education, e-commerce, and more. Our team includes writers with specialized knowledge in various fields, and we conduct thorough research to ensure accuracy and relevance for your specific industry. We're committed to delivering content that demonstrates expertise and builds credibility with your audience.
                    </p>
                  </div>
                  
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">How do you optimize content for SEO?</h3>
                    <p className="text-foreground/80">
                      Our SEO optimization process includes thorough keyword research, strategic keyword placement, optimized meta descriptions and title tags, proper heading structure, internal and external linking, and schema markup when applicable. We follow the latest SEO best practices while ensuring the content remains engaging and valuable to readers. Our goal is to create content that ranks well in search engines without sacrificing quality or readability.
                    </p>
                  </div>
                  
                  <div className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3">Can I request revisions to the content?</h3>
                    <p className="text-foreground/80">
                      Absolutely! We believe in a collaborative approach to content creation. The number of revision rounds depends on your package, but we're committed to ensuring you're completely satisfied with the final content. We welcome your feedback and will make necessary adjustments to meet your expectations and requirements.
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Create Engaging Content?</h2>
                <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                  Let's discuss your content needs and how our services can help you connect with your audience and achieve your business goals.
                </p>
                <Button 
                  className="px-8 py-6 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 text-lg"
                  onClick={() => window.location.href = '/contact-us'}
                >
                  Start Your Content Journey
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

export default ContentCreation;
