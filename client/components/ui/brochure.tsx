import {useState, useEffect, useRef} from 'react'
import { motion, useInView } from "framer-motion";


const Brochure = () => {
  return (
    <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl  px-4 sm:px-8 md:px-12 py-10 sm:py-14 md:py-20 mx-4 lg:mx-auto mt-8 mb-16 rounded-[2.5rem] bg-white/70 dark:bg-gradient-to-br dark:from-[#232526] dark:via-[#6c757d]/80 dark:to-[#ff9800]/10 shadow-[0_8px_48px_0_rgba(255,152,0,0.08)] border-0 overflow-hidden backdrop-blur-xl"
          >
            {/* Left: Text and Button */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex-1 min-w-0 z-10 flex flex-col items-center md:items-start text-center md:text-left w-full"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-2xl xs:text-3xl md:text-4xl font-extrabold mb-4 leading-tight drop-shadow-[0_4px_24px_rgba(255,152,0,0.18)] text-gray-900 dark:text-white"
              >
                Get a copy of <span className="bg-clip-text text-transparent" style={{ background: 'linear-gradient(90deg, #FF9800 40%, #B721FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>mSELL brochure</span> Business Growth Mantra
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-base xs:text-lg md:text-xl text-gray-700 dark:text-white/90 mb-8 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-xl font-medium"
              >
                With 14 years of excellence in sales force automation solutions, our job is to move the ladder of business toward a better future. We at mSELL dedicate ourselves to companies that want to grow with real, promising numbers. With sales solutions, we are all set to give you a 30% increment in your business growth trajectory.
              </motion.p>
              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 xs:px-10 py-4 rounded-full font-extrabold text-base xs:text-lg shadow-[0_4px_32px_0_rgba(255,152,0,0.18)] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-orange-300 tracking-wider border-2 border-orange-300 bg-gradient-to-r from-orange-600  to-orange-300 text-white hover:scale-105 hover:shadow-[0_6px_36px_0_rgba(255,152,0,0.22)] hover:from-yellow-400 hover:to-orange-500" style={{ border: '2px solid #FF9800' }}
              >
                DOWNLOAD
              </motion.a>
            </motion.div>
            {/* Right: Brochure Image(s) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex-1 flex items-center justify-center relative w-full min-w-[180px] max-w-xs sm:max-w-sm md:max-w-md z-10 mt-8 md:mt-0"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative w-[140px] h-[180px] xs:w-[160px] xs:h-[200px] sm:w-[180px] sm:h-[240px] md:w-[220px] md:h-[300px]"
              >
                {/* Main brochure - floating effect */}
                <motion.img
                  src="/brochure-main.png"
                  alt="mSELL Brochure Main"
                  className="absolute left-0 top-0 w-full h-full object-cover rounded-2xl border-4 border-orange-200 dark:border-white/80 z-20 shadow-[0_8px_32px_0_rgba(255,152,0,0.12)]"
                  style={{ boxShadow: '0 8px 32px 0 rgba(255,152,0,0.12)' }}
                  loading="lazy"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                />
                {/* Overlapping secondary brochure for depth - floating effect */}
                <motion.img
                  src="/brochure-secondary.png"
                  alt="mSELL Brochure Secondary"
                  className="absolute right-[-24px] top-[-18px] w-[90px] h-[120px] xs:w-[110px] xs:h-[140px] sm:w-[140px] sm:h-[180px] object-cover rounded-xl border-2 border-orange-100 dark:border-white/60 rotate-[12deg] z-10 opacity-90 shadow-[0_4px_16px_0_rgba(255,152,0,0.08)]"
                  style={{ boxShadow: '0 4px 16px 0 rgba(255,152,0,0.08)' }}
                  loading="lazy"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut', delay: 0.5 }}
                />
              </motion.div>
              {/* Decorative floating icon */}
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-tr from-orange-200/40 to-yellow-100/20 dark:from-orange-400/40 dark:to-white/20 rounded-full blur-2xl animate-float-fast z-0" />
            </motion.div>
            {/* Subtle background gradient/floating shapes - more iconic */}
            <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">
              {/* Only show floating shapes in dark mode for this section */}
              <div className="hidden dark:block absolute left-[-80px] top-[-80px] w-72 h-72 bg-gradient-to-br from-orange-400/20 via-yellow-200/10 to-white/0 rounded-full blur-3xl animate-float-slow" />
              <div className="hidden dark:block absolute right-[-60px] bottom-[-60px] w-56 h-56 bg-gradient-to-t from-white/0 to-orange-400/10 rounded-full blur-2xl animate-float-medium" />
              <div className="hidden dark:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-24 bg-gradient-to-r from-orange-400/5 via-white/0 to-yellow-400/5 rounded-full blur-2xl" />
            </div>
          </motion.section>
  )
}

export default Brochure