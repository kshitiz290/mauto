import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from "framer-motion";


function AnimatedCounter({ end, className }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const increment = end / (duration / 16);
    let raf;
    function animate() {
      start += increment;
      if (start < end) {
        setCount(Math.floor(start));
        raf = requestAnimationFrame(animate);
      } else {
        setCount(end);
        cancelAnimationFrame(raf);
      }
    }
    animate();
    return () => cancelAnimationFrame(raf);
  }, [end, isInView]);
  return <span ref={ref} className={className}>{count}+</span>;
}

const WeFocusQuality = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-4 py-16 md:py-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left md:text-center leading-[1.25] md:leading-[1.3]"
        style={{ background: 'linear-gradient(90deg, #FF9800 40%, #B721FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
      >
        We focus on quality, never focus on quantity
      </h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-lg text-foreground/80 mb-10 text-left md:text-center max-w-3xl mx-auto"
      >
        Our integrated product ecosystem empowers businesses to expand market share, accelerate revenue growth, and maximize profitability.
      </motion.p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 r">
        {[
          {
            label: 'Years within Industry', value: 15,
            icon: (
              <svg className="w-10 h-10 text-orange-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2.2" />
                <path d="M8 12h8M12 8v8" strokeWidth="2.2" />
              </svg>
            )
          },
          {
            label: 'Customers', value: 200,
            icon: (
              <svg className="w-10 h-10 text-purple-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" strokeWidth="2.2" />
                <path d="M4 20c0-2.5 3.5-4.5 8-4.5s8 2 8 4.5" strokeWidth="2.2" />
              </svg>
            )
          },
          {
            label: 'Distributors Network', value: 2000,
            icon: (
              <svg className="w-10 h-10 text-blue-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="4" strokeWidth="2.2" />
                <path d="M2 12h2m16 0h2M12 2v2m0 16v2M5.6 5.6l1.4 1.4m10 10l1.4 1.4M18.4 5.6l-1.4 1.4M5.6 18.4l1.4-1.4" strokeWidth="2.2" />
              </svg>
            )
          },
          {
            label: 'Active Salespeople', value: 10000,
            icon: (
              <svg className="w-10 h-10 text-green-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" strokeWidth="2.2" />
                <path d="M6 20v-2a6 6 0 0112 0v2" strokeWidth="2.2" />
              </svg>
            )
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: idx * 0.2 }}
            className="flex flex-col items-center bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-xl border border-glass-border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-150 hover:-translate-y-2 group cursor-pointer w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(255,152,0,0.15)' }}
          >
            {item.icon}
            <AnimatedCounter end={item.value} className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent mb-2" />
            <span className="text-sm text-foreground/70">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default WeFocusQuality