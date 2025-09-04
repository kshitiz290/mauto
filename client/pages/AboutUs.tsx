import { Button } from "../components/ui/button";
import Footer from "../components/ui/footer";
import LottiePlayer from "react-lottie-player";
import { Check, Users, Award, Target, Clock, Zap, Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Header } from "../components/ui/header";
import { TrustedByCompanies } from "../components/ui/trusted-by-companies";
import { Certifications } from "../components/ui/certifications";
import { ThemeProvider } from "../components/ui/theme-provider";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import WeFocusQuality from "@/components/ui/we_focus_quality";
import Brochure from "@/components/ui/brochure";
import { FAQRedirect } from "@/components/ui/faq-redirect";
// ...existing code...

// AnimatedCounter component with framer-motion scroll trigger
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

// ...existing code...

export function AboutUs() {

  // --- Original About Us JSX commented out below ---
  /*
  return (
    <div className="min-h-screen bg-background">
      ...
    </div>
  );
  */

  // Build About Us page here:
  return (
    <ThemeProvider defaultTheme="dark" storageKey="manacle_theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
        <Header />
        <main>
          {/* --- Stylish Animated Breadcrumb Section --- */}
          <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] min-h-[160px] flex items-center justify-center overflow-x-clip pt-32 bg-transparent">
            {/* Animated floating shapes for light/dark theme */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 w-36 h-36 bg-gradient-to-br from-primary/40 to-accent/30 rounded-full blur-3xl animate-float-slow z-0 mix-blend-lighten dark:mix-blend-normal" style={{ animationDelay: '0s' }} />
            <div className="absolute right-20 top-10 w-20 h-20 bg-gradient-to-tr from-pink-400/40 to-purple-400/30 rounded-full blur-2xl animate-float-fast z-0 mix-blend-lighten dark:mix-blend-normal" style={{ animationDelay: '1.5s' }} />
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-80 h-16 bg-primary/20 rounded-full blur-2xl animate-float-medium z-0 mix-blend-lighten dark:mix-blend-normal" style={{ animationDelay: '2s' }} />
            <div className="absolute right-32 bottom-0 w-16 h-16 bg-gradient-to-t from-yellow-400/40 to-orange-400/30 rounded-full blur-xl animate-float-fast z-0 mix-blend-lighten dark:mix-blend-normal" style={{ animationDelay: '2.5s' }} />

            {/* Breadcrumb */}
            <nav className="relative z-10 w-full max-w-7xl px-2 sm:px-10 flex items-center justify-center">
              <div className="w-full">
                <div className="rounded-2xl bg-white/70 dark:bg-black/70 backdrop-blur-2xl shadow-2xl border border-glass-border px-10 py-7 flex flex-wrap items-center justify-center gap-4 transition-colors duration-300">
                  <div className="flex items-center gap-2 text-xl font-semibold">
                    <svg className="w-8 h-8 text-primary mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" /></svg>
                    <span className="hidden sm:inline text-foreground/70 transition-colors duration-200">Home</span>
                    <span className="inline sm:hidden">/</span>
                  </div>
                  <span className="mx-2 text-foreground/40 text-2xl font-light">/</span>
                  <span className="text-primary font-bold text-xl tracking-wide transition-colors duration-200">About Us</span>
                </div>
              </div>
            </nav>
          </section>





          {/* About Us Intro Section with Framer Motion */}
          <motion.section
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-12 md:gap-20"
          >
            {/* Left: Heading and Story */}
            <motion.div
              initial={{ opacity: 0, x: -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 min-w-0 md:pr-8"
            >
              <motion.h2
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-foreground"
              >
                We build practical software that helps teams work better
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{ background: 'linear-gradient(90deg, #FF9800 40%, #B721FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  Manacle Technologies
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="text-base md:text-lg text-foreground/80 mb-5 leading-relaxed"
              >
                We’re a Delhi‑based product team focused on solving real operational problems for growing businesses. For 15+ years, we’ve built dependable tools and paired them with responsive support, so your team can spend less time on busywork and more time creating value.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-base md:text-lg text-foreground/70 leading-relaxed"
              >
                Today, our platforms support teams across Manufacturing, FMCG, Pharma, Dairy, Healthcare, Education and more. Our SFA suite (mSELL) helps field teams plan days, capture orders and stay on track. mCIVIC powers citizen service workflows at NDMC. And mEDU simplifies everyday processes for schools and colleges. Simple to start, practical to scale.
              </motion.p>
            </motion.div>
            {/* Right: Animated Images */}
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1"
            >
              <StaticOfficeGrid />
            </motion.div>
          </motion.section>





          {/* Why We Are Different Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-6xl mx-auto px-4 py-16 md:py-24"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-10 text-center"
              style={{ background: 'linear-gradient(90deg, #FF9800 40%, #B721FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              What sets us apart
            </h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-foreground/80 mb-12 text-center max-w-3xl mx-auto"
            >
              The best tools are the ones your team actually uses. We keep things simple and reliable, so your day flows better—from planning to execution to insights.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-8">
              {/* 2x2 grid for tablets, 1 column on mobile, 4 columns on desktop */}
              {[
                {
                  title: "Customer-Centric Approach",
                  description: "Your goals become our mission. We listen, adapt, and tailor our services to fit your unique needs, not the other way around.",
                  icon: <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm-8 0c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm8 8c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z" /></svg>
                },
                {
                  title: "Innovation with Purpose",
                  description: "We don’t chase trends. We implement technology that actually solves problems, improves efficiency, and drives measurable results.",
                  icon: <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 0h-1v-4h-1m-4 0h-1v-4h-1" /></svg>
                },
                {
                  title: "Transparent Communication",
                  description: "We believe in honesty, clarity, and consistent updates. No jargon, no hidden surprises — just real progress.",
                  icon: <svg className="w-8 h-8 text-neon-blue" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 16v-8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z" /></svg>
                },
                {
                  title: "Expert Team, Personalized 24-7 Support",
                  description: "Our professionals bring deep domain expertise while offering one-on-one attention, ensuring you always feel supported.",
                  icon: <svg className="w-8 h-8 text-neon-purple" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: idx * 0.2 }}
                  className="bg-card/80 backdrop-blur-xl border border-glass-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group flex flex-col items-center text-center cursor-pointer"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary group-hover:text-accent transition-colors duration-300">{feature.title}</h3>
                  <p className="text-foreground/70 text-base">{feature.description}</p>
                </motion.div>
              ))
              }
            </div>
          </motion.section>





          <WeFocusQuality />
          <Certifications />
          <TrustedByCompanies />
          <Brochure />


        </main>
        <FAQRedirect />
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
function StaticOfficeGrid() {
  return (
    <div className="flex-1 w-full grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
      <div className="col-span-2 rounded-2xl overflow-hidden shadow-lg bg-card/70 backdrop-blur-xl border border-glass-border group relative">
        <img
          src="about/office-workspace.jpg"
          alt="Office Workspace"
          className="w-full h-40 md:h-56 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="rounded-2xl overflow-hidden shadow-lg bg-card/70 backdrop-blur-xl border border-glass-border group relative">
        <img
          src="/about/team-collaboration.jpg"
          alt="Team Collaboration"
          className="w-full h-32 md:h-40 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          width="400"
          height="160"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="rounded-2xl overflow-hidden shadow-lg bg-card/70 backdrop-blur-xl border border-glass-border group relative">
        <img
          src="/about/working-together.jpg"
          alt="Working Together"
          className="w-full h-32 md:h-40 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          width="400"
          height="160"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
}

// AnimatedCounter component
// ...existing code...
// ...existing code...

export default AboutUs;