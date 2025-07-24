import { ArrowRight, Code2, Palette, Rocket } from "lucide-react";
import { Button } from "./button";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 md:pt-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating-animation"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-3/4 left-1/2 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl floating-animation"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            <span className="gradient-text text-orange-500">MANACLE</span>
            <span className="block mt-1 sm:mt-2">Empowering FMCG & Enterprises</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-6 sm:mb-8 max-w-3xl mx-auto px-2 leading-relaxed">
            Leading provider of SFA, ERP, DMS, HRMS, and digital automation solutions for FMCG and enterprise sectors. Transform your business with scalable, data-driven technology from Manacle.
          </p>

          {/* Feature Icons */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 mb-8 sm:mb-10 md:mb-12 px-2">
            <div className="card-magnetic p-3 sm:p-4 glass-effect rounded-full">
              <Code2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="card-liquid p-3 sm:p-4 glass-effect rounded-full">
              <Palette className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent group-hover:scale-125 transition-transform duration-300" />
            </div>
            <div className="card-glitch p-3 sm:p-4 glass-effect rounded-full">
              <Rocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-neon-blue group-hover:-rotate-12 transition-transform duration-300" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 transition-all duration-300 neon-glow group w-full sm:w-auto py-6 px-10 text-2xl font-bold text-white"
              onClick={() => window.location.href = '/auto-site'}
            >
              Build your free website
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-12 sm:mt-14 md:mt-16 max-w-2xl mx-auto px-2">
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">100+</div>
              <div className="text-xs sm:text-sm text-foreground/60 leading-tight">
                Projects Delivered
              </div>
            </div>
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">50+</div>
              <div className="text-xs sm:text-sm text-foreground/60 leading-tight">Happy Clients</div>
            </div>
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">5+</div>
              <div className="text-xs sm:text-sm text-foreground/60 leading-tight">Years Experience</div>
            </div>
            <div className="text-center p-2">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">24/7</div>
              <div className="text-xs sm:text-sm text-foreground/60 leading-tight">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
