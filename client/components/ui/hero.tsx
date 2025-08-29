import { ArrowRight, BarChart2, Cpu, Smartphone, Users, Zap, Globe, TrendingUp, Sparkles, Play } from "lucide-react";
import { Button } from "./button";
import { useEffect, useState, Fragment } from "react";
import { motion } from "framer-motion";

export function Hero() {
  // Mobile-first optimization: Defer ALL visual effects on mobile
  const [visualsOn, setVisualsOn] = useState(false);
  const [currentStats, setCurrentStats] = useState({ clients: 200, years: 15, solutions: 50 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // On mobile: delay visuals much longer, on desktop: faster
    const visualDelay = isMobile ? 2000 : 100;
    const timer = setTimeout(() => setVisualsOn(true), visualDelay);

    // Skip animations entirely on mobile for faster LCP
    if (!isMobile) {
      const animateStats = () => {
        const targetStats = { clients: 200, years: 15, solutions: 50 };
        let frame = 0;
        const animate = () => {
          frame++;
          if (frame <= 15) { // Further reduced frames for mobile
            setCurrentStats({
              clients: Math.floor((targetStats.clients * frame) / 15),
              years: Math.floor((targetStats.years * frame) / 15),
              solutions: Math.floor((targetStats.solutions * frame) / 15)
            });
            requestAnimationFrame(animate);
          }
        };
        setTimeout(() => requestAnimationFrame(animate), 1000);
      };
      animateStats();
    } else {
      // On mobile: set stats immediately, no animation
      setCurrentStats({ clients: 200, years: 15, solutions: 50 });
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[80vh] sm:min-h-[85vh] md:min-h-[90vh] lg:min-h-[100vh] flex items-center bg-gradient-to-br from-slate-50 via-white to-orange-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 py-12 sm:py-10 md:py-12 lg:py-20 xl:py-36"
    >
      {/* Dynamic Background Elements - Skip on mobile for LCP */}
      {visualsOn && !isMobile && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-400/20 to-yellow-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/15 to-pink-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
              x: [0, -40, 0],
              y: [0, 30, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.div
            className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-cyan-400/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.25, 0.45, 0.25],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          />

          {/* Floating Icons */}
          <motion.div
            className="absolute bottom-1/3 right-16 p-2 bg-white/8 dark:bg-black/8 backdrop-blur-xl rounded-lg border border-white/15 hidden xl:block"
            animate={{
              y: [0, 6, 0],
              rotate: [0, -2, 0]
            }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <Globe className="w-5 h-5 text-blue-500" />
          </motion.div>


        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lp:pl-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center py-4 sm:py-6 md:py-8 lg:py-4">

          {/* Left Content */}
          <motion.div
            className="text-center md:text-left lg:text-left space-y-2 md:space-y-3 lg:space-y-4 order-1 md:order-1 lg:order-1 md:pr-4 lg:pr-8 xl:pr-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 md:px-4 py-2 md:py-1.5 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-full text-orange-600 dark:text-orange-400 font-medium backdrop-blur-sm text-sm md:text-sm mb-4 md:mb-3 mt-4 md:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Sparkles className="w-4 h-4 md:w-4 md:h-4" />
              Trusted by 27+ Leading Companies
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] sm:leading-[1.1] md:leading-[1.1] lg:leading-[1.1] xl:leading-[1.1] text-center md:text-left lg:text-left tracking-tight mt-2 sm:mt-3 md:mt-4"
              initial={!isMobile ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={!isMobile ? { delay: 0.2, duration: 0.8 } : { duration: 0 }}
            >
              <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                Transform
              </span>
              <br />
              <span className="text-foreground">Your Business</span>
              <br />
              <span className="text-foreground/80 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                with Technology
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base sm:text-lg md:text-lg lg:text-xl text-foreground/70 max-w-2xl leading-[1.4] md:leading-[1.5] text-center md:text-left lg:text-left px-2 md:px-0 mt-2 sm:mt-3 md:mt-4"
              initial={!isMobile ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={!isMobile ? { delay: 0.4, duration: 0.8 } : { duration: 0 }}
            >
              Empowering businesses across all industries with cutting-edge
              <span className="text-orange-500 font-semibold"> SFA, ERP, CRM, HRMS</span> and
              <span className="text-purple-500 font-semibold"> AI-driven solutions</span>.
              Scale your operations, boost efficiency, and drive growth.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="flex flex-row sm:flex-row gap-3 sm:gap-4 lg:gap-6 py-1 sm:py-2 md:py-3 justify-center md:justify-start lg:justify-start md:ml-2 lg:ml-4 mt-2 sm:mt-3 md:mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="text-center md:text-left lg:text-left flex-1 sm:flex-none">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-orange-500">{currentStats.clients}+</div>
                <div className="text-xs sm:text-sm text-foreground/60">Happy Customers</div>
              </div>
              <div className="text-center md:text-left lg:text-left flex-1 sm:flex-none">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-purple-500">{currentStats.years}+</div>
                <div className="text-xs sm:text-sm text-foreground/60">Years Experience</div>
              </div>
              <div className="text-center md:text-left lg:text-left flex-1 sm:flex-none">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-500">{currentStats.solutions}+</div>
                <div className="text-xs sm:text-sm text-foreground/60">Solutions</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-1 sm:pt-2 md:pt-4 justify-center md:justify-start lg:justify-start items-center md:ml-2 lg:ml-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >


              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl blur-sm group-hover:blur-md transition-all duration-300 opacity-60 group-hover:opacity-90"></div>
                <a href="/auto-site">
                  <button className="relative px-4 sm:px-5 md:px-4 lg:px-8 py-2.5 sm:py-3 md:py-2.5 lg:py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white font-semibold text-sm sm:text-base md:text-sm lg:text-lg rounded-lg md:rounded-lg lg:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2 md:gap-2 lg:gap-3 w-auto whitespace-nowrap">
                    Build your free website
                    <ArrowRight className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </a>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-xl blur-sm group-hover:blur-md transition-all duration-300 opacity-60 group-hover:opacity-90"></div>
                <a href="/contact-us">
                  <button className="relative px-4 sm:px-5 md:px-4 lg:px-8 py-2.5 sm:py-3 md:py-2.5 lg:py-4 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold text-sm sm:text-base md:text-sm lg:text-lg rounded-lg md:rounded-lg lg:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02] group-hover:-translate-y-0.5 active:scale-[0.98] border border-slate-200 dark:border-slate-600 flex items-center justify-center gap-2 md:gap-2 lg:gap-3 w-auto whitespace-nowrap">
                    <Users className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                    Talk to Expert
                  </button>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="flex justify-center md:justify-end lg:justify-end order-2 md:order-2 lg:order-2 mt-4 sm:mt-6 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="relative w-full max-w-sm md:max-w-xs lg:max-w-lg">
              {/* Main Device */}
              <motion.div
                className="relative w-52 h-[320px] sm:w-60 sm:h-[380px] md:w-64 md:h-[400px] lg:w-80 lg:h-[600px] mx-auto bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] shadow-2xl border-3 sm:border-4 md:border-4 lg:border-8 border-slate-300 dark:border-slate-700 overflow-hidden"
                animate={{
                  y: [0, -15, 0],
                  rotateY: [0, 3, 0, -3, 0],
                  x: [0, 5, 0, -5, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Screen Content */}
                <div className="absolute inset-1.5 md:inset-2 lg:inset-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-black rounded-[1.5rem] md:rounded-[1.8rem] lg:rounded-[2rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center p-2.5 md:p-3 lg:p-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-orange-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">M</span>
                      </div>
                      <div>
                        <div className="text-xs md:text-sm font-semibold text-slate-800 dark:text-slate-200">Manacle Technologies Pvt Ltd</div>
                      </div>
                    </div>
                    <div className="w-4 h-4 md:w-5 md:h-5 text-slate-600 dark:text-slate-400">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* Tab Navigation */}
                  <div className="flex bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex-1 py-2 md:py-3 text-center">
                      <div className="text-xs md:text-sm font-semibold text-orange-500 border-b-2 border-orange-500 pb-1">Performance</div>
                    </div>
                    <div className="flex-1 py-2 md:py-3 text-center">
                      <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Product View</div>
                    </div>
                    <div className="flex-1 py-2 md:py-3 text-center">
                      <div className="text-xs md:text-sm text-slate-500 dark:text-slate-400">Analysis</div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="p-1.5 sm:p-2 md:p-3 lg:p-5 space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-4 bg-slate-50 dark:bg-slate-900">
                    {/* Employee Card */}
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-2 sm:p-3 md:p-4 text-white relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs sm:text-sm md:text-base font-semibold text-blue-200">Shashank Satyam</div>
                          <div className="text-[10px] sm:text-xs text-blue-100">Technical Support Engineer</div>
                        </div>
                        <div className="text-[10px] sm:text-xs text-blue-100">1:23:21</div>
                      </div>
                    </motion.div>

                    {/* MTP Alert */}
                    <motion.div
                      className="bg-white dark:bg-slate-800 rounded-lg p-2 md:p-3 border border-slate-200 dark:border-slate-700"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4, duration: 0.8 }}
                    >
                      <div className="text-xs md:text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">No MTP Filled!!</div>
                      <div className="flex justify-between text-xs text-blue-400">
                        <span>riding two-wheeler</span>
                        <span>Please wear a ma...</span>
                      </div>
                    </motion.div>

                    {/* Chart Section */}
                    <motion.div
                      className="bg-white dark:bg-slate-800 rounded-lg p-2 md:p-3 border border-slate-200 dark:border-slate-700"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6, duration: 0.8 }}
                    >
                      {/* Chart Grid */}
                      <div className="space-y-1 md:space-y-2">
                        {/* Y-axis labels and grid lines */}
                        {[1.2, 0.8, 0.4, 0.0, -0.4, -0.8, -1.2].map((value, i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-6 text-xs text-slate-500 text-right">{value}</div>
                            <div className="flex-1 ml-2 border-b border-slate-200 dark:border-slate-600 h-4 md:h-5"></div>
                            <div className="w-6 text-xs text-slate-500 text-left">{value}</div>
                          </div>
                        ))}

                        {/* X-axis dates */}
                        <div className="flex justify-between mt-2 px-6">
                          {['2025-05-01', '2025-05-02', '2025-05-03', '2025-05-04', '2025-05-05'].map((date, i) => (
                            <div key={i} className="text-xs text-slate-500 transform -rotate-45 origin-left">{date}</div>
                          ))}
                        </div>

                        {/* Legend */}
                        <div className="flex gap-4 mt-2 px-2">
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-2 bg-red-500"></div>
                            <span className="text-xs text-slate-600 dark:text-slate-400">Target</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-2 bg-blue-600"></div>
                            <span className="text-xs text-slate-600 dark:text-slate-400">Achievements</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Sales Metrics */}
                    <motion.div
                      className="grid grid-cols-3 gap-2 md:gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.8, duration: 0.8 }}
                    >
                      <div className="bg-white dark:bg-slate-800 rounded-lg p-2 md:p-3 border border-slate-200 dark:border-slate-700 text-center relative">
                        <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-1 bg-blue-100 rounded-lg flex items-center justify-center relative">
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                          </svg>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white font-bold">0</span>
                          </div>
                        </div>
                        <div className="text-sm md:text-base font-bold text-orange-500">0.0</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">Pri. Sale</div>
                      </div>

                      <div className="bg-white dark:bg-slate-800 rounded-lg p-2 md:p-3 border border-slate-200 dark:border-slate-700 text-center relative">
                        <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-1 bg-blue-100 rounded-lg flex items-center justify-center relative">
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                          </svg>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white font-bold">0</span>
                          </div>
                        </div>
                        <div className="text-sm md:text-base font-bold text-orange-500">0.0</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">Sec. Sale</div>
                      </div>

                      <div className="bg-white dark:bg-slate-800 rounded-lg p-2 md:p-3 border border-slate-200 dark:border-slate-700 text-center relative">
                        <div className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-1 bg-blue-100 rounded-lg flex items-center justify-center relative">
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.75 2.524z" />
                          </svg>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                            <span className="text-xs text-white font-bold">0</span>
                          </div>
                        </div>
                        <div className="text-sm md:text-base font-bold text-orange-500">0</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400">New Outlet</div>
                      </div>
                    </motion.div>

                    {/* Recent Module Access */}
                    <motion.div
                      className="bg-white dark:bg-slate-800 rounded-lg p-2 md:p-3 border border-slate-200 dark:border-slate-700"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.0, duration: 0.8 }}
                    >
                      <div className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Recent Module Access</div>
                      <div className="flex gap-2 md:gap-3">
                        <div className="flex-1 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-2 flex items-center gap-2">
                          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-medium text-purple-700 dark:text-purple-300 truncate">Employee</div>
                            <div className="text-xs text-purple-600 dark:text-purple-400">2 min ago</div>
                          </div>
                        </div>

                        <div className="flex-1 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-medium text-blue-700 dark:text-blue-300 truncate">Reports</div>
                            <div className="text-xs text-blue-600 dark:text-blue-400">5 min ago</div>
                          </div>
                        </div>
                      </div>

                      {/* Quick Actions */}
                      <div className="mt-2 md:mt-3 flex gap-2">
                        <button className="flex-1 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs py-1.5 rounded-md font-medium">
                          Check In
                        </button>
                        <button className="flex-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs py-1.5 rounded-md font-medium">
                          View Tasks
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Additional Floating Icons */}
              <motion.div
                className="absolute top-10 md:top-12 lg:top-16 -left-6 md:-left-8 lg:-left-12 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 bg-white/8 dark:bg-black/8 backdrop-blur-xl rounded-lg md:rounded-xl lg:rounded-2xl border border-white/15 items-center justify-center hidden md:flex"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Smartphone className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-blue-500" />
              </motion.div>


            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
