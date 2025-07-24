import { ArrowRight, Phone, Globe, Users } from "lucide-react";
import { Button } from "./button";

export function PricingPromo() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border border-primary/20 backdrop-blur-xl shadow-2xl">
            {/* Animated Background Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold mb-4 shadow-lg animate-bounce">
                  🎉 LIMITED TIME OFFER 🎉
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  <span className="gradient-text">Bring your business online</span>
                </h2>
                <p className="text-xl md:text-2xl text-foreground/80 mb-6">
                  Launch your website today only for
                </p>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    ₹999
                  </span>
                  <div className="text-left">
                    <span className="text-xl text-foreground/80 block">/per month</span>
                    <span className="text-sm text-foreground/60">*Terms and conditions apply</span>
                  </div>
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-glass-border">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Professional Design</h3>
                  <p className="text-sm text-foreground/70">Modern, responsive websites that look amazing on all devices</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-glass-border">
                  <Users className="w-8 h-8 text-accent mx-auto mb-3" />
                  <h3 className="font-bold mb-2">SEO Optimized</h3>
                  <p className="text-sm text-foreground/70">Built for search engines to help customers find your business</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-glass-border">
                  <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-bold mb-2">24/7 Support</h3>
                  <p className="text-sm text-foreground/70">Expert support whenever you need help with your website</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">
                  <span className="gradient-text">CONTACT US NOW</span>
                </h3>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6 text-primary" />
                    <span className="text-lg font-bold">+91 85408 89842</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-6 h-6 text-accent" />
                    <span className="text-lg font-bold">www.codifye.in</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-primary" />
                    <span className="text-lg font-bold">@codifyee_</span>
                  </div>
                </div>
                
                <Button 
                  className="px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
                  onClick={() => window.location.href = '/contact-us'}
                >
                  Get Started Now - ₹999/month
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 