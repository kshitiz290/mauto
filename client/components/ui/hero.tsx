import { ArrowRight, BarChart2, Cpu, Smartphone, Users } from "lucide-react";
import { Button } from "./button";

export function Hero() {
  return (
    <section
      id="home"
      className="flex items-center justify-center relative overflow-hidden pt-20 pb-16 sm:pt-24 md:pt-16 px-4 sm:px-6 lg:px-8 min-h-[60vh] sm:min-h-[80vh] lg:min-h-screen cv-auto"
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
            <span className="gradient-text text-orange-500 lg:text-5xl sm:text-4xl">Manacle Technologies</span>
            <span className="block mt-1 sm:mt-2">Empowering FMCG & Enterprises</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-6 sm:mb-8 max-w-3xl mx-auto px-2 leading-relaxed">
            Leading provider of SFA, ERP, DMS, HRMS, and digital automation solutions for FMCG and enterprise sectors. Transform your business with scalable, data-driven technology from Manacle.
          </p>

          {/* Feature Icons - Software Solutions */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 mb-8 sm:mb-10 md:mb-12 px-2">
            <div className="p-3 sm:p-4 glass-effect rounded-full group transition-transform duration-300">
              <BarChart2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
            </div>
            <div className="p-3 sm:p-4 glass-effect rounded-full group transition-transform duration-300">
              <Cpu className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
            </div>
            <div className="p-3 sm:p-4 glass-effect rounded-full group transition-transform duration-300">
              <Smartphone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-neon-blue transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
            </div>
            <div className="p-3 sm:p-4 glass-effect rounded-full group transition-transform duration-300">
              <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-500 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-2">
            <div className="inline-block group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl blur-sm group-hover:blur-md transition-all duration-300 opacity-60 group-hover:opacity-90"></div>
              <a href="/auto-site">
                <button className="relative px-5 py-2.5 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-0.5 active:scale-[0.98]">
                  Build your free website
                </button>
              </a>
            </div>

            <div className="inline-block group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur-sm group-hover:blur-md transition-all duration-300 opacity-60 group-hover:opacity-90"></div>
              <a href="/contact-us">
                <button className="relative px-4 py-2.5 sm:px-5 sm:py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white font-semibold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-0.5 active:scale-[0.98] flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </a>
            </div>
            {/* <Button
              size="lg"
              className="relative px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => window.location.href = '/auto-site'}
            >
              Build your free website
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
