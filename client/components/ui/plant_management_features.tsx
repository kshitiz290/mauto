import { motion } from "framer-motion";
import { CalendarCheck2, ClipboardList, Wrench, ShieldCheck, Users, BarChart2, Database } from "lucide-react";

const features = [
    {
        icon: <CalendarCheck2 className="w-8 h-8 text-primary" />,
        title: "Production Planning & Scheduling",
        points: [
            "Create & manage production orders.",
            "Optimize machine & labor utilization.",
            "Real-time scheduling adjustments."
        ]
    },
    {
        icon: <ClipboardList className="w-8 h-8 text-primary" />,
        title: "Inventory & Material Management",
        points: [
            "Raw material tracking.",
            "Finished goods monitoring.",
            "Automatic stock alerts & reorder levels."
        ]
    },
    {
        icon: <Wrench className="w-8 h-8 text-primary" />,
        title: "Maintenance Management (CMMS)",
        points: [
            "Schedule preventive maintenance.",
            "Track breakdowns & repairs.",
            "Equipment performance analysis."
        ]
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-primary" />,
        title: "Quality Control & Compliance",
        points: [
            "Quality inspection at different stages.",
            "Defect tracking & root cause analysis.",
            "Regulatory compliance documentation."
        ]
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Workforce Management",
        points: [
            "Shift scheduling.",
            "Attendance & productivity tracking.",
            "Role-based access & performance metrics."
        ]
    },
    {
        icon: <BarChart2 className="w-8 h-8 text-primary" />,
        title: "Data Analytics & Reporting",
        points: [
            "Real-time dashboards.",
            "Production KPIs.",
            "Customizable reports & analytics."
        ]
    }
];

const PlantManagementFeatures = () => (
    <section className="w-full flex justify-center py-12 px-2 sm:px-6">
        <div className="max-w-6xl w-full mx-auto rounded-3xl bg-white/80 dark:bg-black/70 border border-glass-border shadow-2xl p-6 md:p-12 backdrop-blur-xl">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-4xl font-extrabold text-center mb-2 leading-tight"
            >
                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent">
                    Core Features of Plant Management Software
                </span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-base md:text-lg text-center text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
                Plant Management Software is a digital tool used to streamline, monitor, and optimize various operations within a manufacturing plant or industrial facility. It integrates multiple functions — from production scheduling to equipment maintenance and resource allocation — into a centralized system.
            </motion.p>
            {/* Visually attractive staggered card layout with color accents and icon backgrounds */}
            <div className="relative w-full flex flex-wrap justify-center gap-8 md:gap-10 py-4 bg-gradient-to-br from-orange-50/60 via-yellow-50/40 to-pink-50/30 dark:from-slate-900/80 dark:via-gray-900/70 dark:to-slate-900/80 rounded-2xl">
                {features.map((feature, idx) => (
                    <motion.div
                        key={feature.title}
                        className={`group relative z-10 bg-white/95 dark:bg-black/80 border border-glass-border rounded-3xl shadow-2xl transition-all duration-300 px-7 py-8 flex flex-col items-center text-center max-w-xs w-full hover:shadow-3xl hover:bg-primary/10 dark:hover:bg-primary/20 hover:border-orange-400 hover:-translate-y-2 cursor-default ${idx % 2 === 1 ? 'md:mt-10' : ''}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                        style={{ boxShadow: '0 8px 32px 0 rgba(255, 140, 0, 0.08)' }}
                    >
                        <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-orange-100 via-yellow-100 to-pink-100 dark:from-orange-900 dark:via-yellow-900 dark:to-pink-900 shadow-lg">
                            {feature.icon}
                        </div>
                        <h4 className="text-lg md:text-xl font-bold mb-3 text-primary leading-snug group-hover:text-orange-500 transition-colors duration-300 drop-shadow-md">
                            {feature.title}
                        </h4>
                        <ul className="text-sm md:text-base text-foreground/80 leading-relaxed text-left mx-auto flex flex-col gap-2">
                            {feature.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-orange-400 mt-1 text-base">✔</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default PlantManagementFeatures;
