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
        description: "Comprehensive attendance tracking and leave management system for workforce optimization.",
        icon: <Users className="w-5 h-5" />,
        href: "/attendance-leave-management",
        gradient: "from-blue-500 to-purple-500",
        category: "SFA",
        stats: "Up to 40% Efficiency"
    },
    {
        id: "distributor-management",
        title: "Distributor Management",
        description: "Complete distributor network management with real-time tracking and analytics.",
        icon: <ShoppingCart className="w-5 h-5" />,
        href: "/distributor-management-solution",
        gradient: "from-emerald-500 to-teal-500",
        category: "SFA",
        stats: "Up to 35% Growth"
    },
    // ERP Solutions
    {
        id: "merchandising-retail",
        title: "Merchandising & Retail Execution",
        description: "Advanced retail execution and merchandising solutions for optimal store performance.",
        icon: <Package className="w-5 h-5" />,
        href: "/merchandising-retail-execution",
        gradient: "from-orange-500 to-red-500",
        category: "ERP",
        stats: "Up to 50% ROI"
    },
    {
        id: "dispatch-management",
        title: "Dispatch Management",
        description: "Intelligent dispatch and logistics management for streamlined operations.",
        icon: <Factory className="w-5 h-5" />,
        href: "/dispatch-management",
        gradient: "from-violet-500 to-indigo-500",
        category: "ERP",
        stats: "Up to 30% Savings"
    },
    // Other Solutions
    {
        id: "hrms",
        title: "HRMS",
        description: "Human Resource Management System for complete workforce management.",
        icon: <Globe className="w-5 h-5" />,
        href: "/hrms",
        gradient: "from-green-500 to-teal-500",
        category: "Others",
        stats: "Up to 60% Automation"
    },
    {
        id: "crm",
        title: "CRM",
        description: "Customer Relationship Management for enhanced customer engagement and sales.",
        icon: <MessageSquare className="w-5 h-5" />,
        href: "/crm-software",
        gradient: "from-pink-500 to-red-500",
        category: "Others",
        stats: "Up to 45% Sales Boost"
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
        <section className="relative py-8 lg:py-12 overflow-hidden">



            <div className="container mx-auto px-4 relative z-10">
                {/* Compact Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 120, damping: 25 }}
                    className="text-center mb-8 lg:mb-10"
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
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-30px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 items-stretch"
                >
                    {solutions.map((solution) => (
                        <motion.div
                            key={solution.id}
                            variants={itemVariants}
                            whileHover={{
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
                                            whileHover={{ rotate: 2 }}
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center mt-8 lg:mt-10"
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