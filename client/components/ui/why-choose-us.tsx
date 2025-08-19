// client component (directive removed to avoid sourcemap warning)

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  color: string;
  label: string;
}

function AnimatedCounter({ end, duration = 2000, suffix = "", color, label }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="relative h-full">
      <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur-xl pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:blur-lg`}></div>
      <div className="relative bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 dark:border-gray-800/50 shadow-md transition-all duration-300 group hover:shadow-lg hover:ring-2 hover:ring-orange-400/30 h-full">
        <div className="text-center">
          <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${color.replace('/20', '').replace('from-', 'from-').replace('to-', 'to-')} bg-clip-text text-transparent mb-2`}>
            {count}{suffix}
          </div>
          <div className="text-sm font-semibold text-foreground/80">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-[#0a0a0a] dark:via-[#111111] dark:to-[#0a0a0a] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-400/10 to-yellow-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-full text-orange-600 dark:text-orange-400 font-semibold text-sm tracking-wide uppercase backdrop-blur-sm">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent leading-tight pb-2 overflow-visible">
            Why Customers Prefer Manacle Technologies
          </h2>
          <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            Our product ecosystem empowers businesses to achieve greater market share, revenue, and profitability with cutting-edge solutions.
          </p>
        </div>

        {/* Stats Counter Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 items-stretch">
          <AnimatedCounter
            end={10}
            suffix="+"
            color="from-orange-500/20 to-yellow-500/20 from-orange-500 to-yellow-500"
            label="Years within Industry"
          />
          <AnimatedCounter
            end={500}
            suffix="+"
            color="from-blue-500/20 to-cyan-500/20 from-blue-500 to-cyan-500"
            label="Happy Customers"
          />
          <AnimatedCounter
            end={1000}
            suffix="+"
            color="from-purple-500/20 to-pink-500/20 from-purple-500 to-pink-500"
            label="Distributors Onboard"
          />
          <AnimatedCounter
            end={5000}
            suffix="+"
            color="from-green-500/20 to-emerald-500/20 from-green-500 to-emerald-500"
            label="Active Salespeople"
          />
        </div>

        {/* Key Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8 items-stretch w-full">
          {[
            {
              title: "Innovative Technology Solutions",
              desc: "We empower businesses by delivering cutting-edge technology tailored to their unique needs, enabling seamless automation and enhanced efficiency.",
              iconBg: "from-orange-500 to-yellow-500",
              cardBg: "from-orange-500/10 to-yellow-500/10",
              icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              ),
              hover: "group-hover:text-orange-500"
            },
            {
              title: "Data-Driven Insights",
              desc: "Leveraging advanced analytics and AI, we provide actionable insights that help companies make smarter decisions and optimize operations.",
              iconBg: "from-blue-500 to-cyan-500",
              cardBg: "from-blue-500/10 to-cyan-500/10",
              icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 0 01-2-2z" /></svg>
              ),
              hover: "group-hover:text-cyan-500 text-blue-600"
            },
            {
              title: "Scalable & Flexible Platforms",
              desc: "Our scalable software platforms grow alongside your business, allowing you to adapt quickly to market changes without disruption.",
              iconBg: "from-purple-500 to-pink-500",
              cardBg: "from-purple-500/10 to-pink-500/10",
              icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V7a2 2 0 00-2-2H7a2 2 0 00-2 2v14m16 0a2 2 0 01-2 2H5a2 2 0 01-2-2m16 0V7a2 2 0 00-2-2H7a2 2 0 00-2 2v14" /></svg>
              ),
              hover: "group-hover:text-purple-500"
            },
            {
              title: "Customer-Centric Approach",
              desc: "By focusing on enhancing the end-user experience, we help companies build stronger customer relationships and increase retention.",
              iconBg: "from-green-500 to-emerald-500",
              cardBg: "from-green-500/10 to-emerald-500/10",
              icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              ),
              hover: "group-hover:text-green-500"
            },
            {
              title: "End-to-End Support",
              desc: "From strategy to implementation and ongoing optimization, we partner with companies at every step for sustainable growth.",
              iconBg: "from-indigo-500 to-blue-500",
              cardBg: "from-indigo-500/10 to-blue-500/10",
              icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ),
              hover: "group-hover:text-indigo-500 text-blue-600"
            },
            {
              title: "Market Expansion & Competitive Edge",
              desc: "We help businesses identify untapped markets and streamline processes to outpace competitors as industry leaders.",
              iconBg: "from-red-500 to-orange-500",
              cardBg: "from-red-500/10 to-orange-500/10",
              icon: (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              ),
              hover: "group-hover:text-red-500"
            }
          ].map((card, idx) => (
            <div key={card.title} className="group relative overflow-hidden h-full flex flex-col">
              <div className={`absolute inset-0 bg-gradient-to-br ${card.cardBg} rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-500`}></div>
              <div className="relative bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-xl rounded-2xl p-4 xs:p-6 sm:p-8 border border-white/30 dark:border-gray-800/50 shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 flex flex-col h-full min-h-[220px] md:min-h-[320px] w-full max-w-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${card.iconBg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  {card.icon}
                </div>
                <h3 className={`text-2xl font-bold mb-4 text-foreground ${card.hover} transition-colors duration-300`}>
                  {card.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300 flex-1">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500 opacity-70 group-hover:opacity-100"></div>
            <a href="/contact-us">
              <button className="relative px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                START FREE TRIAL
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
