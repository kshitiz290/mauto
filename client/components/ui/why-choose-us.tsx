// client component (directive removed to avoid sourcemap warning)

import { useEffect, useState, useRef, useCallback } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

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

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // On mobile: skip animation, set value immediately
    if (isMobile) {
      setCount(end);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration / 2), 1); // Faster animation

      // Simplified easing
      const easeOut = 1 - Math.pow(1 - progress, 2);
      setCount(Math.floor(easeOut * end));

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
  }, [isVisible, end, duration, isMobile]);

  return (
    <div ref={counterRef} className="relative h-full w-full min-w-0">
      <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl blur-xl pointer-events-none transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:blur-lg`}></div>
      <div className="relative bg-white/80 dark:bg-[#1a1a1a]/80 backdrop-blur-xl rounded-2xl p-4 xs:p-5 sm:p-6 border border-white/20 dark:border-gray-800/50 shadow-md transition-all duration-300 group hover:shadow-lg hover:ring-2 hover:ring-orange-400/30 h-full">
        <div className="text-center">
          <div className={`text-2xl xs:text-3xl sm:text-4xl font-bold bg-gradient-to-r ${color.replace('/20', '').replace('from-', 'from-').replace('to-', 'to-')} bg-clip-text text-transparent mb-2 leading-tight`}>
            {count}{suffix}
          </div>
          <div className="text-xs sm:text-sm font-semibold text-foreground/80">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

// Card model for the grid below
type CardItem = {
  title: string;
  desc: string;
  iconBg: string;
  cardBg: string;
  icon: JSX.Element;
  hover: string;
};

// A smooth, responsive, GPU-accelerated card with gentle hover effects
function FeatureCard({ card, index: _i }: { card: CardItem; index: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Cache rect to prevent frequent reflows
  const rectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number>();

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    // Use cached rect or get new one with timeout
    if (!rectRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
      // Clear cache after movement to get fresh measurements
      setTimeout(() => {
        rectRef.current = null;
      }, 100);
    }

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const rect = rectRef.current;
      if (!rect) return;

      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setMousePosition({ x, y });
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    // Cancel any pending animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    // Clear rect cache
    rectRef.current = null;
  }, []);

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative h-full w-full overflow-hidden transform-gpu will-change-transform"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Dynamic gradient that follows mouse - Light theme */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-200 ease-out dark:hidden`}
        style={{
          background: isHovered
            ? `radial-gradient(350px circle at ${mousePosition.x}% ${mousePosition.y}%, ${card.cardBg.includes('orange')
              ? 'rgba(124, 45, 18, 0.95), rgba(154, 52, 18, 0.85) 15%, rgba(180, 83, 9, 0.75) 30%, rgba(194, 65, 12, 0.65) 45%, rgba(217, 119, 6, 0.5) 60%, rgba(245, 158, 11, 0.3) 75%, rgba(251, 191, 36, 0.15) 85%, transparent 95%'
              : card.cardBg.includes('blue')
                ? 'rgba(23, 37, 84, 0.95), rgba(29, 78, 216, 0.85) 15%, rgba(30, 64, 175, 0.75) 30%, rgba(37, 99, 235, 0.65) 45%, rgba(59, 130, 246, 0.5) 60%, rgba(96, 165, 250, 0.3) 75%, rgba(147, 197, 253, 0.15) 85%, transparent 95%'
                : card.cardBg.includes('purple')
                  ? 'rgba(59, 7, 100, 0.95), rgba(88, 28, 135, 0.85) 15%, rgba(107, 33, 168, 0.75) 30%, rgba(126, 34, 206, 0.65) 45%, rgba(147, 51, 234, 0.5) 60%, rgba(168, 85, 247, 0.3) 75%, rgba(196, 181, 253, 0.15) 85%, transparent 95%'
                  : card.cardBg.includes('green')
                    ? 'rgba(14, 53, 28, 0.95), rgba(20, 83, 45, 0.85) 15%, rgba(21, 128, 61, 0.75) 30%, rgba(22, 163, 74, 0.65) 45%, rgba(34, 197, 94, 0.5) 60%, rgba(74, 222, 128, 0.3) 75%, rgba(134, 239, 172, 0.15) 85%, transparent 95%'
                    : card.cardBg.includes('indigo')
                      ? 'rgba(49, 46, 129, 0.95), rgba(55, 48, 163, 0.85) 15%, rgba(67, 56, 202, 0.75) 30%, rgba(79, 70, 229, 0.65) 45%, rgba(99, 102, 241, 0.5) 60%, rgba(129, 140, 248, 0.3) 75%, rgba(165, 180, 252, 0.15) 85%, transparent 95%'
                      : 'rgba(127, 29, 29, 0.95), rgba(153, 27, 27, 0.85) 15%, rgba(185, 28, 28, 0.75) 30%, rgba(220, 38, 38, 0.65) 45%, rgba(239, 68, 68, 0.5) 60%, rgba(248, 113, 113, 0.3) 75%, rgba(252, 165, 165, 0.15) 85%, transparent 95%'
            })`
            : 'transparent',
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Dynamic gradient that follows mouse - Dark theme */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-200 ease-out dark:block hidden`}
        style={{
          background: isHovered
            ? `radial-gradient(300px circle at ${mousePosition.x}% ${mousePosition.y}%, ${card.cardBg.includes('orange')
              ? 'rgba(255, 159, 64, 1), rgba(255, 183, 77, 0.9) 25%, rgba(255, 206, 84, 0.7) 45%, rgba(255, 224, 130, 0.4) 65%, transparent 80%'
              : card.cardBg.includes('blue')
                ? 'rgba(66, 165, 245, 1), rgba(100, 181, 246, 0.9) 25%, rgba(144, 202, 249, 0.7) 45%, rgba(187, 222, 251, 0.4) 65%, transparent 80%'
                : card.cardBg.includes('purple')
                  ? 'rgba(186, 104, 200, 1), rgba(206, 147, 216, 0.9) 25%, rgba(225, 190, 231, 0.7) 45%, rgba(243, 232, 255, 0.4) 65%, transparent 80%'
                  : card.cardBg.includes('green')
                    ? 'rgba(102, 187, 106, 1), rgba(129, 199, 132, 0.9) 25%, rgba(165, 214, 167, 0.7) 45%, rgba(200, 230, 201, 0.4) 65%, transparent 80%'
                    : card.cardBg.includes('indigo')
                      ? 'rgba(121, 134, 203, 1), rgba(149, 164, 224, 0.9) 25%, rgba(179, 198, 255, 0.7) 45%, rgba(224, 231, 255, 0.4) 65%, transparent 80%'
                      : 'rgba(229, 115, 115, 1), rgba(239, 154, 154, 0.9) 25%, rgba(255, 183, 183, 0.7) 45%, rgba(255, 205, 210, 0.4) 65%, transparent 80%'
            })`
            : 'transparent',
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Card container */}
      <div
        className="relative rounded-2xl bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/30 dark:border-gray-800/50 shadow-xl h-full min-h-[240px] md:min-h-[320px] overflow-hidden"
      >
        <div className="p-4 xs:p-6 sm:p-8">
          <div
            className={`w-16 h-16 bg-gradient-to-br ${card.iconBg} rounded-2xl flex items-center justify-center mb-6`}
          >
            {card.icon}
          </div>

          <h3 className="text-2xl font-bold mb-4 text-foreground">
            {card.title}
          </h3>

          <p className="text-foreground/70 leading-relaxed">
            {card.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export function WhyChooseUs() {
  // Cards content
  const cards: CardItem[] = [
    {
      title: "Practical technology that works",
      desc:
        "We deliver modern tools tailored to your work, so everyday tasks get simpler and faster.",
      iconBg: "from-orange-500 to-yellow-500",
      cardBg: "from-orange-500/10 to-yellow-500/10",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      hover: "group-hover:text-orange-500",
    },
    {
      title: "Clear, useful insights",
      desc:
        "We share plain‑language reports that help your team make decisions with confidence.",
      iconBg: "from-blue-500 to-cyan-500",
      cardBg: "from-blue-500/10 to-cyan-500/10",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 0 01-2-2z" />
        </svg>
      ),
      hover: "group-hover:text-cyan-500 text-blue-600",
    },
    {
      title: "Grows with your business",
      desc:
        "Our software scales as you add teams, products, or locations—without disruption.",
      iconBg: "from-purple-500 to-pink-500",
      cardBg: "from-purple-500/10 to-pink-500/10",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V7a2 2 0 00-2-2H7a2 2 0 00-2 2v14m16 0a2 2 0 01-2 2H5a2 2 0 01-2-2m16 0V7a2 2 0 00-2-2H7a2 2 0 00-2 2v14" />
        </svg>
      ),
      hover: "group-hover:text-purple-500",
    },
    {
      title: "Built around your customers",
      desc:
        "We keep the customer experience front and center, so you build stronger relationships and retention.",
      iconBg: "from-green-500 to-emerald-500",
      cardBg: "from-green-500/10 to-emerald-500/10",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      hover: "group-hover:text-green-500",
    },
    {
      title: "Support that stays with you",
      desc:
        "From setup to everyday use, we’re available to help and keep things running smoothly.",
      iconBg: "from-indigo-500 to-blue-500",
      cardBg: "from-indigo-500/10 to-blue-500/10",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      hover: "group-hover:text-indigo-500 text-blue-600",
    },
    {
      title: "Expand with confidence",
      desc:
        "Find new opportunities and tidy up processes so you can compete confidently.",
      iconBg: "from-red-500 to-orange-500",
      cardBg: "from-red-500/10 to-orange-500/10",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      hover: "group-hover:text-red-500",
    },
  ];

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
            Built with care for everyday teams
          </h2>
          <p className="text-xl sm:text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
            We focus on practical wins: less manual work, clearer visibility, and support when you need it. That’s why teams stay with us.
          </p>
        </div>

        {/* Stats Counter Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-16 sm:mb-20 items-stretch">
          <AnimatedCounter
            end={15}
            suffix="+"
            color="from-orange-500/20 to-yellow-500/20 from-orange-500 to-yellow-500"
            label="Years in business"
          />
          <AnimatedCounter
            end={200}
            suffix="+"
            color="from-blue-500/20 to-cyan-500/20 from-blue-500 to-cyan-500"
            label="Happy Customers"
          />
          <AnimatedCounter
            end={2000}
            suffix="+"
            color="from-purple-500/20 to-pink-500/20 from-purple-500 to-pink-500"
            label="Distributors onboarded"
          />
          <AnimatedCounter
            end={10000}
            suffix="+"
            color="from-green-500/20 to-emerald-500/20 from-green-500 to-emerald-500"
            label="Active salespeople"
          />
        </div>
        <p className="text-xs text-foreground/60 text-center -mt-12 mb-12">Counts are approximate and may vary by deployment.</p>

        {/* Key Advantages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8 items-stretch w-full">
          {cards.map((card, idx) => (
            <FeatureCard key={card.title} card={card} index={idx} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-block group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl blur-sm group-hover:blur-md transition-all duration-500 opacity-70 group-hover:opacity-100"></div>
            <a href="/contact-us">
              <button className="relative px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-yellow-500 hover:to-orange-500 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                REQUEST A DEMO
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
