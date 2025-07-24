import { Button } from "./button";

export function MagicalCTA() {
  return (
    <section className="relative overflow-hidden">
      {/* Underwater Background */}
      <div className="relative min-h-[500px] bg-gradient-to-b from-cyan-400 via-blue-500 to-blue-800">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Water effects */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-purple-500/20"></div>

          {/* Floating Coral/Rock formations */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-900/60 via-purple-700/40 to-transparent"></div>
          <div className="absolute bottom-0 left-1/4 w-64 h-48 bg-gradient-to-t from-pink-800/50 via-pink-600/30 to-transparent rounded-t-full transform rotate-12"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-32 bg-gradient-to-t from-orange-800/40 via-orange-600/20 to-transparent rounded-t-full transform -rotate-6"></div>
        </div>

        {/* Floating Jellyfish */}
        <div className="absolute top-1/4 left-1/4 animate-floating">
          <div className="relative w-16 h-20">
            {/* Jellyfish body */}
            <div className="w-16 h-12 bg-gradient-to-b from-white/40 to-white/10 rounded-full relative">
              <div className="absolute inset-2 bg-gradient-to-b from-white/30 to-transparent rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white/20 rounded-full"></div>
            </div>
            {/* Jellyfish tentacles */}
            <div className="absolute top-12 left-2 space-x-1 flex">
              <div
                className="w-0.5 h-8 bg-gradient-to-b from-white/30 to-transparent animate-pulse"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="w-0.5 h-6 bg-gradient-to-b from-white/25 to-transparent animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-0.5 h-10 bg-gradient-to-b from-white/30 to-transparent animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="w-0.5 h-7 bg-gradient-to-b from-white/25 to-transparent animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Second Jellyfish */}
        <div
          className="absolute top-1/3 right-1/3 animate-floating"
          style={{ animationDelay: "2s" }}
        >
          <div className="relative w-12 h-16">
            <div className="w-12 h-9 bg-gradient-to-b from-purple-300/40 to-purple-300/10 rounded-full relative">
              <div className="absolute inset-1.5 bg-gradient-to-b from-purple-200/30 to-transparent rounded-full"></div>
            </div>
            <div className="absolute top-9 left-1 space-x-0.5 flex">
              <div
                className="w-0.5 h-6 bg-gradient-to-b from-purple-300/30 to-transparent animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-0.5 h-8 bg-gradient-to-b from-purple-300/25 to-transparent animate-pulse"
                style={{ animationDelay: "0.7s" }}
              ></div>
              <div
                className="w-0.5 h-5 bg-gradient-to-b from-purple-300/30 to-transparent animate-pulse"
                style={{ animationDelay: "1.2s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Third Jellyfish */}
        <div
          className="absolute bottom-1/4 right-1/4 animate-floating"
          style={{ animationDelay: "4s" }}
        >
          <div className="relative w-20 h-24">
            <div className="w-20 h-14 bg-gradient-to-b from-cyan-200/50 to-cyan-200/10 rounded-full relative">
              <div className="absolute inset-2 bg-gradient-to-b from-cyan-100/40 to-transparent rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-100/25 rounded-full"></div>
            </div>
            <div className="absolute top-14 left-3 space-x-1 flex">
              <div
                className="w-0.5 h-10 bg-gradient-to-b from-cyan-200/35 to-transparent animate-pulse"
                style={{ animationDelay: "0.3s" }}
              ></div>
              <div
                className="w-0.5 h-8 bg-gradient-to-b from-cyan-200/30 to-transparent animate-pulse"
                style={{ animationDelay: "0.8s" }}
              ></div>
              <div
                className="w-0.5 h-12 bg-gradient-to-b from-cyan-200/35 to-transparent animate-pulse"
                style={{ animationDelay: "1.3s" }}
              ></div>
              <div
                className="w-0.5 h-9 bg-gradient-to-b from-cyan-200/30 to-transparent animate-pulse"
                style={{ animationDelay: "1.8s" }}
              ></div>
              <div
                className="w-0.5 h-7 bg-gradient-to-b from-cyan-200/25 to-transparent animate-pulse"
                style={{ animationDelay: "2.3s" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-floating"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Bubble Effects */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`bubble-${i}`}
              className="absolute rounded-full bg-white/20 animate-floating"
              style={{
                width: `${8 + Math.random() * 16}px`,
                height: `${8 + Math.random() * 16}px`,
                left: `${Math.random() * 100}%`,
                top: `${60 + Math.random() * 40}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 6}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-[500px]">
          <div className="text-center px-4 max-w-4xl mx-auto">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Let's build your{" "}
              <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                digital presence
              </span>{" "}
              together.
            </h2>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-all duration-300 px-8 py-3"
              >
                Contact Us
              </Button>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-white/90 transition-all duration-300 px-8 py-3 font-semibold"
              >
                Get A Quote
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Wave Effect */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 fill-current text-background"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
            ></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
