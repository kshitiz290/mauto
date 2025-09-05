import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    Users,
    ShoppingCart,
    Factory,
    Package,
    Globe,
    MessageSquare,
    ArrowRight,
    Sparkles,
    Zap,
    Target
} from "lucide-react";

interface Solution {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    gradient: string;
    category: "SFA" | "ERP" | "Others";
    stats: string;
}

const solutions: Solution[] = [
    // SFA Solutions
    {
        id: "attendance-leave",
        title: "Attendance & Leave Management",
        description: "Make check‑ins simple and manage leaves without back‑and‑forth — built for teams on the move.",
        icon: <Users className="w-5 h-5" />,
        href: "/attendance-leave-management",
        gradient: "from-blue-500 to-purple-500",
        category: "SFA",
        stats: "Teams report ~40% efficiency"
    },
    {
        id: "distributor-management",
        title: "Distributor Management",
        description: "See what’s moving across your network, spot gaps early, and keep orders flowing.",
        icon: <ShoppingCart className="w-5 h-5" />,
        href: "/distributor-management-solution",
        gradient: "from-emerald-500 to-teal-500",
        category: "SFA",
        stats: "Teams report ~35% growth"
    },
    // ERP Solutions
    {
        id: "merchandising-retail",
        title: "Merchandising & Retail Execution",
        description: "Keep shelves in shape with clear tasks and photo checks so sales don’t slip.",
        icon: <Package className="w-5 h-5" />,
        href: "/merchandising-retail-execution",
        gradient: "from-orange-500 to-red-500",
        category: "ERP",
        stats: "Reported ~50% ROI"
    },
    {
        id: "dispatch-management",
        title: "Dispatch Management",
        description: "Plan trips, share digital slips, and track vehicles so orders reach on time.",
        icon: <Factory className="w-5 h-5" />,
        href: "/dispatch-management",
        gradient: "from-violet-500 to-indigo-500",
        category: "ERP",
        stats: "Reported ~30% savings"
    },
    // Other Solutions
    {
        id: "hrms",
        title: "HRMS",
        description: "Keep employee data, attendance, payroll, and leaves in one simple place.",
        icon: <Globe className="w-5 h-5" />,
        href: "/hrms",
        gradient: "from-green-500 to-teal-500",
        category: "Others",
        stats: "Reported ~60% automation"
    },
    {
        id: "crm",
        title: "CRM",
        description: "Keep contacts, deals, and follow‑ups organized so your team closes more with less stress.",
        icon: <MessageSquare className="w-5 h-5" />,
        href: "/crm-software",
        gradient: "from-pink-500 to-red-500",
        category: "Others",
        stats: "Reported ~45% sales lift"
    }
];

const categoryIcons = {
    SFA: <Target className="w-3 h-3" />,
    ERP: <Zap className="w-3 h-3" />,
    Others: <Sparkles className="w-3 h-3" />
};

const categoryColors = {
    SFA: "from-blue-500 to-purple-500",
    ERP: "from-orange-500 to-red-500",
    Others: "from-green-500 to-teal-500"
};

export function CompactSolutions() {
    const isMobilePortrait = typeof window !== 'undefined'
        ? window.matchMedia('(max-width: 480px) and (orientation: portrait)').matches
        : false;
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 25
            }
        }
    };

    return (
        <section className={`relative ${isMobilePortrait ? 'pt-4 pb-8' : 'py-8 lg:py-12'} overflow-hidden`}>



            <div className="container mx-auto px-4 relative z-10">
                {/* Compact Header */}
                <motion.div
                    initial={isMobilePortrait ? { opacity: 0 } : { opacity: 0, y: -20 }}
                    whileInView={isMobilePortrait ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={isMobilePortrait ? { duration: 0.4, ease: "easeOut" } : { type: "spring", stiffness: 120, damping: 25 }}
                    className={`text-center ${isMobilePortrait ? 'mb-4' : 'mb-8 lg:mb-10'}`}
                >
                    <motion.div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20 mb-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                            Featured Business Suite
                        </span>
                    </motion.div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        Featured{" "}
                        <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                            Business Suite
                        </span>
                    </h2>

                    <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto">
                        Discover our flagship business solutions designed to streamline operations and drive growth.
                    </p>
                </motion.div>

                {/* Compact Solutions Grid */}
                <motion.div
                    variants={isMobilePortrait ? undefined : containerVariants}
                    initial={isMobilePortrait ? { opacity: 0 } : "hidden"}
                    whileInView={isMobilePortrait ? { opacity: 1, transition: { duration: 0.4 } } : "visible"}
                    viewport={{ once: true, margin: "-30px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 items-stretch"
                >
                    {solutions.map((solution) => (
                        <motion.div
                            key={solution.id}
                            variants={isMobilePortrait ? undefined : itemVariants}
                            whileHover={isMobilePortrait ? undefined : {
                                y: -4,
                                scale: 1.01,
                                transition: { type: "spring", stiffness: 300 }
                            }}
                            className="group relative"
                        >
                            <Link to={solution.href} className="block h-full">
                                <div className="relative h-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-5 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col">
                                    {/* Background Gradient */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-300`}
                                    />

                                    {/* Stats Badge - Top Right */}
                                    <div className="flex justify-end mb-3">
                                        <div className="text-xs font-bold text-primary">{solution.stats}</div>
                                    </div>

                                    {/* Icon & Title Row */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <motion.div
                                            className={`flex-shrink-0 p-2.5 rounded-xl bg-gradient-to-br ${solution.gradient} group-hover:scale-105 transition-transform duration-300`}
                                            whileHover={isMobilePortrait ? undefined : { rotate: 2 }}
                                        >
                                            <div className="text-white">
                                                {solution.icon}
                                            </div>
                                        </motion.div>

                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors duration-300 truncate">
                                                {solution.title}
                                            </h3>
                                            <span className={`text-xs font-medium text-transparent bg-gradient-to-r ${categoryColors[solution.category]} bg-clip-text mt-1 inline-block`}>
                                                {solution.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 line-clamp-2 flex-grow">
                                        {solution.description}
                                    </p>

                                    {/* Learn More Link */}
                                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all duration-300 mt-auto">
                                        <span>Learn More</span>
                                        <ArrowRight className="w-3 h-3" />
                                    </div>


                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Compact Call to Action */}
                <motion.div
                    initial={isMobilePortrait ? { opacity: 0 } : { opacity: 0, y: 20 }}
                    whileInView={isMobilePortrait ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={isMobilePortrait ? { duration: 0.4 } : { delay: 0.4 }}
                    className={`text-center ${isMobilePortrait ? 'mt-6' : 'mt-8 lg:mt-10'}`}
                >
                    <div className="inline-flex flex-col sm:flex-row gap-3">
                        <Link to="/contact-us">
                            <motion.button
                                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Started Today
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}