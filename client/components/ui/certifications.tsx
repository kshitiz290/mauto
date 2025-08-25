import React from "react";
import { motion } from "framer-motion";

// A small, elegant certifications section for the About Us page
// Uses public assets at /public/certifications/iso.png and /public/certifications/cmmi3.png
// Responsive, accessible, and visually consistent with the rest of the UI

export function Certifications() {
    const items = [
        {
            title: "ISO Certified",
            subtitle: "Quality Management",
            img: "/certifications/iso.png",
            alt: "ISO Certification Badge",
            caption: "ISO 9001:2015",
            invertDark: false,
            hoverLift: true
        },
        {
            title: "CMMI Level 3",
            subtitle: "Process Maturity",
            img: "/certifications/cmmi3.png",
            alt: "CMMI Level 3 Certification Badge",
            caption: "CMMI Development",
            invertDark: true,
            hoverLift: true
        }
    ];

    return (
        <motion.section
            aria-label="Our Certifications"
            className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16 md:py-20"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="text-center mb-10 sm:mb-12">
                <h2
                    className="text-3xl md:text-4xl font-bold leading-tight"
                    style={{
                        background: "linear-gradient(90deg, #FF9800 40%, #B721FF 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}
                >
                    Certifications
                </h2>
                <p className="mt-3 text-foreground/70 max-w-2xl mx-auto text-sm sm:text-base">
                    Recognized standards that reflect our commitment to quality, reliability, and continuous improvement.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {items.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="group relative overflow-hidden rounded-2xl bg-card/80 backdrop-blur-xl border border-glass-border shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* subtle glow */}
                        <div className="pointer-events-none absolute -inset-24 bg-gradient-to-tr from-orange-400/10 via-fuchsia-400/10 to-purple-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative p-6 sm:p-8 flex items-center gap-5 sm:gap-6">
                            <div
                                className={
                                    "shrink-0 rounded-xl bg-white/70 dark:bg-black/60 border border-glass-border p-3 sm:p-4 shadow-md transition-transform duration-300 " +
                                    (item.hoverLift ? "group-hover:-translate-y-1 sm:group-hover:-translate-y-1.5" : "")
                                }
                            >
                                <img
                                    src={item.img}
                                    alt={item.alt}
                                    className={
                                        "h-14 w-14 sm:h-16 sm:w-16 object-contain mix-blend-normal transition-transform duration-300 " +
                                        (item.invertDark ? "dark:invert" : "")
                                    }
                                    loading="lazy"
                                />
                            </div>

                            <div className="min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                                        {item.title}
                                    </h3>
                                    <span className="inline-flex items-center rounded-full border border-glass-border bg-white/60 dark:bg-black/40 px-2.5 py-0.5 text-xs text-foreground/80 backdrop-blur">
                                        {item.caption}
                                    </span>
                                </div>
                                <p className="text-sm sm:text-base text-foreground/70 mt-1">
                                    {item.subtitle}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

export default Certifications;
