import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import {
    Calendar,
    Package,
    MapPin,
    Store,
    Eye,
    DollarSign,
    Users,
    TrendingUp,
    ArrowRight,
    CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Header } from '../components/ui/header';
import Footer from '../components/ui/footer';
import { ThemeProvider } from '../components/ui/theme-provider';
import { useIsMobile } from '../hooks/use-mobile';

const SalesForceAutomation = () => {
    // Responsive flags
    const isMobile = useIsMobile();
    const [isTabletPortrait, setIsTabletPortrait] = useState(false);
    const [isLargePortrait, setIsLargePortrait] = useState(false);
    useEffect(() => {
        const mql = window.matchMedia('(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)');
        const onChange = () => setIsTabletPortrait(mql.matches);
        onChange();
        mql.addEventListener('change', onChange);
        return () => mql.removeEventListener('change', onChange);
    }, []);
    useEffect(() => {
        const mqlLg = window.matchMedia('(min-width: 1024px) and (orientation: portrait)');
        const onChangeLg = () => setIsLargePortrait(mqlLg.matches);
        onChangeLg();
        mqlLg.addEventListener('change', onChangeLg);
        return () => mqlLg.removeEventListener('change', onChangeLg);
    }, []);
    // 8 Salesforce Automation Solutions
    const sfaSolutions = [
        {
            id: 1,
            icon: <Calendar className="w-8 h-8" />,
            title: "Attendance & Leave Management",
            subtitle: "Smart Workforce Tracking",
            description: "Automate attendance tracking with GPS-enabled check-ins, real-time monitoring, and comprehensive leave management for your field force.",
            gradient: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-50 to-cyan-50",
            features: [
                "GPS-based attendance marking",
                "Real-time location tracking",
                "Automated leave calculations",
                "Biometric integration support"
            ],
            href: "/attendance-leave-management",
            stats: { impact: "~95%", label: "Accuracy (reported)" }
        },
        {
            id: 2,
            icon: <Package className="w-8 h-8" />,
            title: "Order Management Solution",
            subtitle: "Streamlined Order Processing",
            description: "End-to-end order management from placement to delivery with real-time tracking and automated workflows.",
            gradient: "from-green-500 to-emerald-500",
            bgGradient: "from-green-50 to-emerald-50",
            features: [
                "Mobile order placement",
                "Real-time inventory sync",
                "Automated order processing",
                "Multi-channel integration"
            ],
            href: "/order-management-solution",
            stats: { impact: "~60%", label: "Faster Processing (reported)" }
        },
        {
            id: 3,
            icon: <MapPin className="w-8 h-8" />,
            title: "Field Force Tracking & Activity",
            subtitle: "Complete Field Visibility",
            description: "Monitor field activities with real-time tracking, simple route planning, and clear performance views.",
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-50 to-pink-50",
            features: [
                "Real-time GPS tracking",
                "Route optimization",
                "Activity monitoring",
                "Geo-fence management"
            ],
            href: "/field-force-tracking",
            stats: { impact: "~40%", label: "Route efficiency (reported)" }
        },
        {
            id: 4,
            icon: <Store className="w-8 h-8" />,
            title: "Distributor Management Solution",
            subtitle: "Supply Chain Excellence",
            description: "Improve distributor relationships with clear processes, performance tracking, and practical insights.",
            gradient: "from-orange-500 to-red-500",
            bgGradient: "from-orange-50 to-red-50",
            features: [
                "Distributor onboarding",
                "Performance analytics",
                "Inventory management",
                "Credit limit monitoring"
            ],
            href: "/distributor-management-solution",
            stats: { impact: "~35%", label: "Cost Reduction (reported)" }
        },
        {
            id: 5,
            icon: <Eye className="w-8 h-8" />,
            title: "Merchandising & Retail Execution",
            subtitle: "Perfect Store Standards",
            description: "Keep product placement and brand visibility on track with practical retail execution tools.",
            gradient: "from-teal-500 to-blue-500",
            bgGradient: "from-teal-50 to-blue-50",
            features: [
                "Planogram compliance",
                "Photo verification",
                "Stock audit management",
                "Promotional execution"
            ],
            href: "/merchandising-retail-execution",
            stats: { impact: "~85%", label: "Compliance Rate (reported)" }
        },
        {
            id: 6,
            icon: <DollarSign className="w-8 h-8" />,
            title: "Expenses & Claims Management",
            subtitle: "Automated Expense Control",
            description: "Streamline expense reporting and reimbursement with simple workflows and real-time approvals.",
            gradient: "from-indigo-500 to-purple-500",
            bgGradient: "from-indigo-50 to-purple-50",
            features: [
                "Mobile expense capture",
                "Receipt digitization",
                "Automated approval workflows",
                "Policy compliance checks"
            ],
            href: "/expenses-claims-management",
            stats: { impact: "~70%", label: "Processing Speed (reported)" }
        },
        {
            id: 7,
            icon: <Users className="w-8 h-8" />,
            title: "Retailer Management Solution",
            subtitle: "Customer Relationship Excellence",
            description: "Build stronger retailer relationships with clear customer management and engagement tools.",
            gradient: "from-rose-500 to-pink-500",
            bgGradient: "from-rose-50 to-pink-50",
            features: [
                "Customer profiling",
                "Visit planning & scheduling",
                "Order history tracking",
                "Credit management"
            ],
            href: "/retailer-management-solution",
            stats: { impact: "~50%", label: "Customer Retention (reported)" }
        },
        {
            id: 8,
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Sales Activity Management",
            subtitle: "Productive Sales Operations",
            description: "Make sales activities easier with thoughtful planning, execution tracking, and performance views.",
            gradient: "from-amber-500 to-orange-500",
            bgGradient: "from-amber-50 to-orange-50",
            features: [
                "Activity planning & scheduling",
                "Target management",
                "Performance tracking",
                "Sales pipeline management"
            ],
            href: "/sales-activity-management",
            stats: { impact: "~45%", label: "Sales Growth (reported)" }
        }
    ];

    // Stacking Card Component with smooth scroll-based animations
    const StackingCard = ({ solution, index, total }: { solution: any; index: number; total: number }) => {
        const { scrollYProgress } = useScroll();

        // Balanced timing ensuring all cards stay within sticky container and finish before CTA
        const baseStart = (index * 0.7) / total;
        const baseMid = (index * 0.7 + 0.35) / total;
        const baseEnd = ((index + 1) * 0.7) / total;
        // Clamp timeline to avoid overshooting near the page end
        const clamp = (v: number) => Math.max(0, Math.min(0.94, v));
        const isLast = index === total - 1;
        const isSecondLast = index === total - 2;
        // Start the last two cards slightly earlier on tablet and large portraits
        const startShift = isLargePortrait
            ? (isLast ? 0.02 : isSecondLast ? 0.01 : 0)
            : isTabletPortrait
                ? (isLast ? 0.02 : isSecondLast ? 0.01 : 0)
                : (isLast ? 0.02 : 0);
        const cardStart = clamp(baseStart - startShift);
        const cardMid = clamp(baseMid - startShift);
        // End earlier for the last card on tablet portrait so it completes within the sticky window
        const cardEnd = clamp(
            (isTabletPortrait && isLast)
                ? Math.max(0, Math.min(baseEnd - 0.03, 0.66))
                : (isLargePortrait && isLast)
                    ? Math.min(baseEnd, 0.88)
                    : baseEnd
        );
        const endTail = (isTabletPortrait && isLast) ? 0.02 : (isLargePortrait && isLast) ? 0.015 : 0.02;

        // Cards appear when their turn comes and stay visible
        const opacity = useTransform(
            scrollYProgress,
            [cardStart - 0.05, cardStart, 1],
            [index === 0 ? 1 : 0, 1, 1] // First card always visible, others appear at their time
        );

        // Consistent scale for all cards
        const scale = useTransform(
            scrollYProgress,
            [cardStart - 0.05, cardStart, cardMid],
            [0.95, 1, 1]
        );

        // Consistent bottom-to-overlap animation for ALL cards
        // Responsive travel distances for overlap
        const nonLastTravel = isMobile
            ? [0, 200, 140, 40, 0]
            : isLargePortrait
                ? [0, 160, 110, 30, 0]
                : isTabletPortrait
                    ? [0, 175, 125, 34, 0]
                    : [0, 140, 90, 24, 0];
        const lastTravel = isMobile
            ? [0, 220, 160, 44, -14]
            : isLargePortrait
                ? [0, 190, 130, 36, 24]
                : isTabletPortrait
                    ? [0, 200, 140, 36, -6]
                    : [0, 180, 112, 32, -12];
        const secondLastTravelTablet = [0, 130, 75, 5, -5];
        const secondLastTravelLarge = [0, 185, 125, 34, -8];
        // Give the last/second-last cards a bit more travel and a tiny overshoot so they fully cover the previous card
        const yValues = isTabletPortrait && isSecondLast
            ? secondLastTravelTablet
            : isLargePortrait && isSecondLast
                ? secondLastTravelLarge
                : (index === total - 1 ? lastTravel : nonLastTravel);
        const y = useTransform(
            scrollYProgress,
            [cardStart - 0.06, cardStart, cardMid, cardEnd, cardEnd + endTail],
            [index === 0 ? 0 : yValues[1], index === 0 ? 0 : yValues[2], index === 0 ? 0 : yValues[3], yValues[4], yValues[4]]
        );

        return (
            <motion.div
                className={`sticky top-20 sm:top-24 md:top-28 lg:top-32 lp:top-48 mb-6 md:mb-8 ${isTabletPortrait ? 'pb-16' : ''}`}
                style={{
                    opacity,
                    scale,
                    y,
                    zIndex: index + 1 // Higher z-index for newer cards so they appear on top
                }}
            >
                <Link to={solution.href}>
                    <motion.div
                        className={`relative overflow-hidden rounded-2xl 
              border border-border shadow-xl hover:shadow-2xl transition-all duration-300 
              p-5 sm:p-6 md:p-8 lg:p-10 min-h-[420px] md:min-h-[500px] max-w-4xl mx-auto bg-card`}
                        whileHover={{
                            scale: 1.02,
                            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Solid background layer to completely block previous cards */}
                        <div className="absolute inset-0 bg-card rounded-2xl"></div>

                        {/* Additional layer for complete coverage */}
                        <div className="absolute inset-0 bg-card/95 rounded-2xl"></div>

                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5 z-10">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-foreground to-transparent rounded-full blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-foreground to-transparent rounded-full blur-xl"></div>
                        </div>

                        <div className="relative z-20">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                                {/* Left Content */}
                                <div className="flex-1 space-y-6">
                                    {/* Header with Icon and Stats */}
                                    <div className="flex items-start justify-between">
                                        <motion.div
                                            className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                                bg-gradient-to-r ${solution.gradient} rounded-2xl text-white shadow-lg`}
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {solution.icon}
                                        </motion.div>
                                        <div className="text-right">
                                            <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${solution.gradient} bg-clip-text text-transparent`}>
                                                {solution.stats.impact}
                                            </div>
                                            <div className="text-sm text-muted-foreground">{solution.stats.label}</div>
                                        </div>
                                    </div>

                                    {/* Title and Description */}
                                    <div className="space-y-4">
                                        <motion.h3
                                            className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent bg-size-200 animate-gradient-x"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.1 }}
                                        >
                                            {solution.title}
                                        </motion.h3>

                                        <motion.p
                                            className="text-base sm:text-lg font-medium text-muted-foreground"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.2 }}
                                        >
                                            {solution.subtitle}
                                        </motion.p>

                                        <motion.p
                                            className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.3 }}
                                        >
                                            {solution.description}
                                        </motion.p>
                                    </div>

                                    {/* CTA Button */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.4 }}
                                    >
                                        <Button
                                            className={`bg-gradient-to-r ${solution.gradient} hover:opacity-90 
                        text-white shadow-lg hover:shadow-xl transition-all duration-300 
                        px-5 py-3 text-base sm:px-6 sm:py-3.5 sm:text-base md:px-8 md:py-4 md:text-lg rounded-xl group`}
                                        >
                                            Learn More
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </motion.div>
                                </div>

                                {/* Right Features */}
                                <motion.div
                                    className="flex-1 lg:max-w-md"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                >
                                    <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 border border-border shadow-lg">
                                        <h4 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-foreground">
                                            Key Features
                                        </h4>
                                        <div className="space-y-3 md:space-y-4">
                                            {solution.features.map((feature: string, idx: number) => (
                                                <motion.div
                                                    key={idx}
                                                    className="flex items-start"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                                                >
                                                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                                    <span className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                                                        {feature}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </Link>
            </motion.div>
        );
    };

    return (
        <ThemeProvider defaultTheme="light" storageKey="manacle_theme">
            <div className="min-h-screen bg-background">
                <Header />

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-slate-900 dark:via-background dark:to-purple-950 pt-32 pb-20">
                    {/* Animated Background */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"
                            animate={{
                                x: [0, 50, 0],
                                y: [0, 30, 0],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl"
                            animate={{
                                x: [0, -30, 0],
                                y: [0, -50, 0],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            className="text-center max-w-4xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.h1
                                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                                style={{ background: 'linear-gradient(90deg, #FF9800 40%, #B721FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <span>
                                    Sales Force
                                </span>
                                <br />
                                <span>Automation</span>
                            </motion.h1>

                            <motion.p
                                className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                Give your sales team a calm, organized day. Plan visits, capture orders on the go, and see what’s working in real time—without extra admin.
                            </motion.p>

                            <motion.div
                                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <Button
                                    size="lg"
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                                    onClick={() => {
                                        document.getElementById('solutions-section')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="px-8 py-6 text-lg border-2 text-foreground hover:bg-muted hover:text-foreground hover:border-muted-foreground transition-all duration-300 hover:scale-105"
                                    onClick={() => { window.location.href = '/contact-us' }}
                                >
                                    Get A Quote
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Stacking Cards Section */}
                <section id="solutions-section" className="pt-20 pb-20 lp:pb-48 bg-background">
                    <div className="container mx-auto px-4">
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ background: 'linear-gradient(90deg, #FF9800 40%, #B721FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Comprehensive SFA Solutions
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                                Discover our complete suite of Sales Force Automation solutions designed to streamline operations,
                                increase productivity, and drive growth across your entire sales organization.
                            </p>
                        </motion.div>

                        {/* Stacking Cards Container */}
                        <div className="relative pt-14 md:pt-0">
                            {/* Create scroll space for all cards with responsive per-card height + bottom buffer */}
                            {(() => {
                                const perCardVH = isMobile ? 95 : (isTabletPortrait ? 82 : 60);
                                const bottomBufferVH = isMobile
                                    ? 10
                                    : isTabletPortrait
                                        ? 20
                                        : (isLargePortrait ? 36 : 16);
                                const stackHeightVH = sfaSolutions.length * perCardVH + bottomBufferVH;
                                return (
                                    <div style={{ height: `${stackHeightVH}vh` }} className="relative">
                                        {sfaSolutions.map((solution, index) => (
                                            <StackingCard
                                                key={solution.id}
                                                solution={solution}
                                                index={index}
                                                total={sfaSolutions.length}
                                            />
                                        ))}
                                    </div>
                                );
                            })()}
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
                                Ready to simplify sales operations?
                            </h2>
                            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                                See how teams use these SFA tools to plan better days and close gaps faster.
                            </p>
                            <div className="flex justify-center">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="px-8 py-6 text-lg transition-all duration-300 hover:scale-105 bg-background text-foreground hover:bg-muted hover:text-foreground hover:ring-2 hover:ring-amber-300"
                                    onClick={() => { window.location.href = '/contact-us' }}
                                >
                                    Schedule a Demo
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default SalesForceAutomation;
