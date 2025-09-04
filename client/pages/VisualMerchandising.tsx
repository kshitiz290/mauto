import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {
    Store,
    Eye,
    Palette,
    TrendingUp,
    ArrowRight,
    CheckCircle,
    Camera,
    BarChart3,
    Layout,
    Smartphone,
    Target,
    Zap,
    Users,
    Clock,
    Award,
    Lightbulb,
    ShoppingCart,
    Map
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Header } from '../components/ui/header';
import Footer from '../components/ui/footer';
import { ThemeProvider } from '../components/ui/theme-provider';
import { useIsMobile } from '../hooks/use-mobile';

const VisualMerchandising = () => {
    const isMobile = useIsMobile();
    const { scrollYProgress } = useScroll();

    // Parallax transforms
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Core features with detailed explanations
    const coreFeatures = [
        {
            icon: <Layout className="w-8 h-8" />,
            title: "Interactive planogram management",
            description: "Design and manage store layouts with simple, reliable tools your team can use daily.",
            details: [
                "Drag-and-drop planogram builder",
                "Real-time layout checks",
                "Multi-store template distribution",
                "Category management integration"
            ],
            expectation: "Often improves space use by ~15–25% (reported)",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <Camera className="w-8 h-8" />,
            title: "Visual compliance monitoring",
            description: "Keep brand standards consistent across locations with photo checks and simple scoring.",
            details: [
                "Photo-based audits",
                "Flag issues for review",
                "Real-time scoring",
                "History and trends"
            ],
            expectation: "Usually reaches ~80–90% consistency (reported)",
            color: "from-orange-500 to-purple-600"
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Sales performance analytics",
            description: "See how merchandising changes relate to sales across products and categories.",
            details: [
                "Product performance tracking",
                "Heat map analytics",
                "Sales correlation analysis",
                "ROI measurement tools"
            ],
            expectation: "Often reveals ~10–20% revenue lift chances (reported)",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: <Smartphone className="w-8 h-8" />,
            title: "Mobile store execution",
            description: "Give your field teams mobile tools for quick audits, photos, and updates—online or offline.",
            details: [
                "Mobile audit app",
                "Photo capture and reporting",
                "Task management",
                "Offline support"
            ],
            expectation: "Commonly cuts audit time by ~40–60% (reported)",
            color: "from-orange-500 to-red-500"
        }
    ];

    // Advanced capabilities
    const advancedCapabilities = [
        {
            icon: <Target className="w-6 h-6" />,
            title: "Placement suggestions",
            description: "Get suggested product placements based on past performance and shopper patterns."
        },
        {
            icon: <Eye className="w-6 h-6" />,
            title: "Customer journey mapping",
            description: "Visualize common paths customers take in your store to improve engagement."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Live inventory link",
            description: "Adjust displays based on current inventory levels and availability."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Team collaboration tools",
            description: "Keep HQ, regional teams, and stores aligned with simple checklists and messages."
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Performance benchmarking",
            description: "Compare store performance against internal standards to find gaps."
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Seasonal campaign planning",
            description: "Plan, track, and measure seasonal campaigns across your retail network."
        }
    ];

    // Success metrics with realistic expectations
    const successMetrics = [
        {
            value: "15-25%",
            label: "Space Utilization Improvement",
            description: "Better product placement and use of space"
        },
        {
            value: "80-90%",
            label: "Brand Compliance Consistency",
            description: "Maintained across all store locations"
        },
        {
            value: "40-60%",
            label: "Audit Time Reduction",
            description: "Through mobile tools and automation"
        },
        {
            value: "10-20%",
            label: "Revenue Uplift",
            description: "From data-driven merchandising insights"
        }
    ];

    // Industry use cases
    const useCases = [
        {
            industry: "Fashion Retail",
            challenge: "Seasonal inventory management and visual appeal",
            solution: "Automated planogram updates and trend-based placement",
            outcome: "Improved sell-through rates and reduced markdowns"
        },
        {
            industry: "Grocery Chains",
            challenge: "Category management and promotional execution",
            solution: "Dynamic shelf planning and promotion tracking",
            outcome: "Enhanced category performance and customer satisfaction"
        },
        {
            industry: "Electronics Stores",
            challenge: "Product demonstration and feature highlighting",
            solution: "Interactive display planning and smoother customer flow",
            outcome: "Increased customer engagement and higher conversion rates"
        }
    ];

    return (
        <ThemeProvider defaultTheme="light" storageKey="manacle_theme">
            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero Section with Parallax */}
                <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-background to-pink-50 dark:from-purple-950 dark:via-background dark:to-pink-950 pt-32 pb-20">
                    {/* Animated Background Elements */}
                    <motion.div
                        style={{ y: y1, opacity }}
                        className="absolute inset-0 overflow-hidden"
                    >
                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/30 dark:bg-purple-800/30 rounded-full blur-3xl" />
                        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-200/30 dark:bg-pink-800/30 rounded-full blur-3xl" />
                    </motion.div>

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            className="text-center max-w-5xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl text-white shadow-lg mb-8"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Store className="w-8 h-8 md:w-10 md:h-10" />
                            </motion.div>

                            <motion.h1
                                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                                style={{ background: 'linear-gradient(90deg, #FF9800 40%, #B721FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                Visual Merchandising
                                <br />
                                <span className="text-foreground">Solutions</span>
                            </motion.h1>

                            <motion.p
                                className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Make every shelf count. Plan layouts that are easy to execute, verify whats live in stores, and spot gaps before they impact saleswith clear photos, checklists, and simple dashboards.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <Link to="/contact-us">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                                    >
                                        Request a Demo <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>
                                {/* <Button
                                    size="lg"
                                    variant="outline"
                                    className="px-8 py-6 text-lg border-2 text-foreground hover:bg-muted hover:text-foreground hover:border-muted-foreground transition-all duration-300 hover:scale-105"
                                >
                                    Watch Demo
                                </Button> */}
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Core Features Section */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ background: 'linear-gradient(90deg, #FF9800 40%, #B721FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Core Capabilities
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                Simple, dependable tools to improve every part of your visual merchandising work
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {coreFeatures.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="group relative bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    {/* Gradient Border Effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`} />

                                    <div className="relative z-10">
                                        {/* Icon and Title */}
                                        <div className="flex items-start gap-4 mb-6">
                                            <motion.div
                                                className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl text-white shadow-lg`}
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {feature.icon}
                                            </motion.div>
                                            <div className="flex-1">
                                                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-muted-foreground">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Feature Details */}
                                        <div className="space-y-3 mb-6">
                                            {feature.details.map((detail, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                    <span className="text-muted-foreground text-sm">
                                                        {detail}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Expectation Badge */}
                                        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${feature.color} bg-opacity-10 rounded-full`}>
                                            <TrendingUp className="w-4 h-4" />
                                            <span className="text-sm font-medium">
                                                {feature.expectation}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Advanced Capabilities Grid */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                                Advanced Features
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                Helpful add‑ons that make everyday merchandising smoother
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {advancedCapabilities.map((capability, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-orange-500 to-purple-600 rounded-lg text-white">
                                            {capability.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {capability.title}
                                        </h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {capability.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Success Metrics */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                                Expected Impact
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                Realistic improvements our clients typically experience within the first year
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {successMetrics.map((metric, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-64 flex flex-col justify-between">
                                        <div className="flex-1 flex flex-col justify-center">
                                            <div className="text-4xl md:text-5xl font-bold mb-4" style={{ background: 'linear-gradient(90deg, #FF9800 40%, #B721FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                                {metric.value}
                                            </div>
                                            <h3 className="text-lg font-semibold text-foreground mb-2">
                                                {metric.label}
                                            </h3>
                                        </div>
                                        <p className="text-muted-foreground text-sm mt-auto">
                                            {metric.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industry Use Cases */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                                Industry Applications
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                See how different retail sectors leverage our visual merchandising solutions
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {useCases.map((useCase, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-foreground mb-4">
                                                {useCase.industry}
                                            </h3>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                                                Challenge
                                            </h4>
                                            <p className="text-foreground">
                                                {useCase.challenge}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                                                Solution
                                            </h4>
                                            <p className="text-foreground">
                                                {useCase.solution}
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                                                Outcome
                                            </h4>
                                            <p className="text-green-600 dark:text-green-400 font-medium">
                                                {useCase.outcome}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-br from-indigo-800 via-violet-800 to-slate-900 text-white relative overflow-hidden">
                    <div className="absolute inset-0">
                        <motion.div
                            className="absolute top-0 left-1/4 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.1, 0.3],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute bottom-0 right-1/4 w-48 h-48 bg-amber-300/10 rounded-full blur-2xl"
                            animate={{
                                scale: [1.2, 1, 1.2],
                                opacity: [0.1, 0.3, 0.1],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>

                    <div className="container mx-auto px-4 text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Transform Your Retail Experience?
                            </h2>
                            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                                See how retailers use these tools to keep shelves tidy, campaigns on time, and teams in sync.
                            </p>
                            <div className="flex justify-center">
                                <Link to="/contact-us">
                                    <Button
                                        size="lg"
                                        variant="secondary"
                                        className="px-8 py-6 text-lg transition-all duration-300 hover:scale-105 bg-background text-foreground hover:bg-muted hover:text-foreground hover:ring-2 hover:ring-amber-300"
                                    >
                                        Schedule Consultation
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default VisualMerchandising;
