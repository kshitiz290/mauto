"use client"

import { motion } from "framer-motion"
import { BarChart3, Users, Store, Clock, Zap, Target, TrendingUp, Shield } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

const RetailTransformation = () => {
    const [activeCard, setActiveCard] = useState<number | null>(null)

    const solutions = [
        {
            id: 1,
            title: "Sales Force Automation",
            subtitle: "Smart Field Operations",
            description: "Transform your sales operations with intelligent automation that drives results.",
            icon: <Users className="w-8 h-8" />,
            gradient: "from-orange-500 to-red-500",
            bgGradient: "from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950",
            href: "/sales-force-automation", // Add navigation link
            features: [
                "Real-time order management & tracking",
                "Sales forecasting",
                "Mobile-first field force management",
                "Automated route planning",
                "Performance analytics & insights"
            ],
            metrics: {
                primary: "Up To 40%",
                primaryLabel: "Sales Increase",
                secondary: "Up To 60%",
                secondaryLabel: "Faster Processes"
            }
        },
        {
            id: 2,
            title: "Distributor Management",
            subtitle: "Supply Chain Excellence",
            description: "Improve your entire distribution network with data-driven insights and automation.",
            icon: <BarChart3 className="w-8 h-8" />,
            gradient: "from-yellow-500 to-orange-500",
            bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-950 dark:to-orange-950",
            href: "/distributor-management-solution", // Add navigation link
            features: [
                "Intelligent inventory management",
                "Dynamic pricing updates",
                "Supply chain visibility",
                "Automated order processing",
                "Distributor performance tracking"
            ],
            metrics: {
                primary: "Up To 35%",
                primaryLabel: "Cost Reduction",
                secondary: "Up To 50%",
                secondaryLabel: "Faster Delivery"
            }
        },
        {
            id: 3,
            title: "Visual Merchandising",
            subtitle: "Retail Space Planning",
            description: "Enhance customer experience and boost sales with intelligent merchandising tools.",
            icon: <Store className="w-8 h-8" />,
            gradient: "from-pink-500 to-purple-500",
            bgGradient: "from-pink-50 to-purple-50 dark:from-pink-950 dark:to-purple-950",
            href: "/visual-merchandising", // Add navigation link
            features: [
                "Interactive planogram management",
                "Product placement suggestions",
                "Real-time compliance monitoring",
                "Customer behavior analytics",
                "Visual audit automation"
            ],
            metrics: {
                primary: "Up to 25%",
                primaryLabel: "Sales Uplift",
                secondary: "Up To 80%",
                secondaryLabel: "Compliance Rate"
            }
        },
        {
            id: 4,
            title: "Attendance & Leave",
            subtitle: "Smart Workforce Management",
            description: "Streamline HR operations with cloud-based attendance and leave management.",
            icon: <Clock className="w-8 h-8" />,
            gradient: "from-green-500 to-teal-500",
            bgGradient: "from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950",
            href: "/attendance-leave-management", // Add navigation link
            features: [
                "Biometric & GPS-based attendance",
                "Automated leave management",
                "Payroll integration",
                "Compliance reporting",
                "Employee self-service portal"
            ],
            metrics: {
                primary: "99.9%",
                primaryLabel: "Accuracy",
                secondary: "Up To 70%",
                secondaryLabel: "Admin Time Saved"
            }
        }
    ]

    const benefits = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Operational Excellence",
            description: "Streamline processes and eliminate inefficiencies"
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: "Data-Driven Decisions",
            description: "Make informed choices with real-time insights"
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Scalable Growth",
            description: "Expand your business with confidence"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Enterprise Security",
            description: "Bank-grade security for your business data"
        }
    ]

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(251,146,60,0.05),transparent_50%)]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.h2
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                            Transforming Retail
                        </span>
                        <br />
                        <span className="text-foreground">
                            with Integrated Technology
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-xl sm:text-2xl text-foreground/80 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Empower your business with Manacle's comprehensive suite of integrated solutions.
                        Achieve operational excellence, real-time insights, and exponential growth with our innovative, scalable platforms.
                    </motion.p>
                </motion.div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    {solutions.map((solution, index) => {
                        const CardContent = (
                            <>
                                {/* Gradient Border Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${solution.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <motion.div
                                            className={`p-4 rounded-2xl bg-gradient-to-r ${solution.gradient} text-white shadow-lg`}
                                            whileHover={{ scale: 1.05, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 200 }}
                                        >
                                            {solution.icon}
                                        </motion.div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{solution.title}</h3>
                                            <p className="text-foreground/60 font-medium">{solution.subtitle}</p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
                                        {solution.description}
                                    </p>

                                    {/* Features & Metrics Layout */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {/* Features */}
                                        <div>
                                            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.gradient}`}></div>
                                                Key Features
                                            </h4>
                                            <ul className="space-y-3">
                                                {solution.features.map((feature, featureIndex) => (
                                                    <motion.li
                                                        key={featureIndex}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                                                        viewport={{ once: true }}
                                                        className="flex items-start gap-3 text-foreground/70"
                                                    >
                                                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.gradient} mt-2 flex-shrink-0`}></div>
                                                        <span className="text-sm leading-relaxed">{feature}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Metrics */}
                                        <div className="flex flex-col justify-center">
                                            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.gradient}`}></div>
                                                Impact Metrics
                                            </h4>
                                            <div className="space-y-4">
                                                <motion.div
                                                    className="text-center p-4 rounded-xl bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm"
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ type: "spring", stiffness: 200 }}
                                                >
                                                    <div className={`text-3xl font-bold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}>
                                                        {solution.metrics.primary}
                                                    </div>
                                                    <div className="text-sm text-foreground/60 font-medium">
                                                        {solution.metrics.primaryLabel}
                                                    </div>
                                                </motion.div>
                                                <motion.div
                                                    className="text-center p-4 rounded-xl bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm"
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ type: "spring", stiffness: 200 }}
                                                >
                                                    <div className={`text-3xl font-bold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}>
                                                        {solution.metrics.secondary}
                                                    </div>
                                                    <div className="text-sm text-foreground/60 font-medium">
                                                        {solution.metrics.secondaryLabel}
                                                    </div>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footnote */}
                                    <div className="mt-6 text-xs text-gray-500 dark:text-gray-400 italic">
                                        Source: Based on client studies.
                                    </div>
                                </div>
                            </>
                        );

                        return solution.href ? (
                            <Link key={solution.id} to={solution.href}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    onMouseEnter={() => setActiveCard(solution.id)}
                                    onMouseLeave={() => setActiveCard(null)}
                                    className={`group relative bg-gradient-to-br ${solution.bgGradient} rounded-3xl p-8 border border-white/20 dark:border-slate-800/50 hover:border-white/40 dark:hover:border-slate-700/50 transition-all duration-500 overflow-hidden h-full cursor-pointer hover:scale-105`}
                                >
                                    {CardContent}
                                </motion.div>
                            </Link>
                        ) : (
                            <motion.div
                                key={solution.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onMouseEnter={() => setActiveCard(solution.id)}
                                onMouseLeave={() => setActiveCard(null)}
                                className={`group relative bg-gradient-to-br ${solution.bgGradient} rounded-3xl p-8 border border-white/20 dark:border-slate-800/50 hover:border-white/40 dark:hover:border-slate-700/50 transition-all duration-500 overflow-hidden h-full`}
                            >
                                {CardContent}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Benefits Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                        Why Choose Our <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Integrated Platform?</span>
                    </h3>
                    <p className="text-xl text-foreground/80 mb-12 max-w-3xl mx-auto">
                        Our solutions work well together to provide a unified retail technology ecosystem
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group p-6 rounded-2xl bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm border border-white/20 dark:border-slate-700/30 hover:border-orange-200 dark:hover:border-orange-800/50 transition-all duration-300"
                            >
                                <motion.div
                                    className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                                    whileHover={{ rotate: 10 }}
                                >
                                    {benefit.icon}
                                </motion.div>
                                <h4 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h4>
                                <p className="text-foreground/70 text-sm leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default RetailTransformation
