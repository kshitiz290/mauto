import React, { useEffect, useState } from "react";
import { MapPin, CalendarCheck2, Clock, Link2, Bell, FileCog } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        icon: <MapPin className="w-12 h-12 text-accent mb-4" />, // Mobile Attendance Tracking
        title: "Mobile Attendance Tracking",
        points: [
            "GPS-based check-in/check-out",
            "Time-stamped location logging",
            "Geo-fencing to restrict attendance to assigned areas"
        ]
    },
    {
        icon: <CalendarCheck2 className="w-12 h-12 text-primary mb-4" />, // Leave Management
        title: "Leave Management",
        points: [
            "Leave request submission and approval via app or portal",
            "Leave types: Casual, Sick, Earned, etc.",
            "Leave balance visibility for employees"
        ]
    },
    {
        icon: <Clock className="w-12 h-12 text-purple-500 mb-4" />, // Real-Time Reporting
        title: "Real-Time Reporting",
        points: [
            "Daily, weekly, and monthly attendance reports",
            "Team-wise and region-wise summaries",
            "Leave trend analytics"
        ]
    },
    {
        icon: <Link2 className="w-12 h-12 text-yellow-500 mb-4" />, // Integration Capabilities
        title: "Integration Capabilities",
        points: [
            "Sync with HRMS or payroll systems",
            "Integration with calendar apps for visibility"
        ]
    },
    {
        icon: <Bell className="w-12 h-12 text-pink-500 mb-4" />, // Alerts and Notifications
        title: "Alerts and Notifications",
        points: [
            "Alerts for irregular attendance",
            "Notifications for leave approval/rejection",
            "Reminders for check-in/out"
        ]
    },
    {
        icon: <FileCog className="w-12 h-12 text-green-500 mb-4" />, // Custom Rules & Policies
        title: "Custom Rules & Policies",
        points: [
            "Set work hours, late marks, half-days",
            "Leave encashment, carry forward policies",
            "Holiday calendar by region"
        ]
    }
];

const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.18, duration: 0.9 } }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.12, type: 'spring', bounce: 0.18, duration: 0.7 }
    })
};

const AttendanceLeaveFeatures = () => {
    const [isMobilePortrait, setIsMobilePortrait] = useState(false);

    useEffect(() => {
        const detect = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;
            setIsMobilePortrait(h > w && w <= 768);
        };
        detect();
        window.addEventListener('resize', detect as any, { passive: true } as any);
        window.addEventListener('orientationchange', detect as any);
        return () => {
            window.removeEventListener('resize', detect as any);
            window.removeEventListener('orientationchange', detect as any);
        };
    }, []);

    return (
        <motion.section
            className="w-full max-w-7xl mx-auto px-4 py-16 md:py-20"
            initial="hidden"
            {...(isMobilePortrait
                ? { animate: 'visible' }
                : { whileInView: 'visible', viewport: { once: true, amount: 0.2 } }
            )}
            variants={sectionVariants}
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                {...(isMobilePortrait
                    ? { animate: { opacity: 1, y: 0 } }
                    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }
                )}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-4xl font-bold mb-8 text-center leading-[1.25] md:leading-[1.3]"
                style={{ background: 'linear-gradient(90deg, #FF9800 40%, #B721FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
                Attendance and Leave Management Solution
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                {...(isMobilePortrait
                    ? { animate: { opacity: 1, y: 0 } }
                    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true } }
                )}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-lg text-foreground/80 mb-12 text-center max-w-3xl mx-auto"
            >
                An Attendance and Leave Management Solution for a Sales Team should be tailored to the mobile and field-based nature of sales roles. Here's a comprehensive outline for such a solution, including its features, benefits, and implementation.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        className="group bg-white/80 dark:bg-black/70 border border-glass-border rounded-2xl shadow-xl hover:shadow-[0_8px_32px_0_rgba(255,152,0,0.18),0_2px_8px_0_rgba(183,33,255,0.10)] transition-all duration-300 p-8 flex flex-col items-start hover:-translate-y-2 backdrop-blur-xl "
                        custom={idx}
                        initial="hidden"
                        {...(isMobilePortrait
                            ? { animate: 'visible' }
                            : { whileInView: 'visible', viewport: { once: true, amount: 0.2 } }
                        )}
                        variants={cardVariants}
                    >
                        <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors duration-300">
                            {feature.title}
                        </h3>
                        <ul className="pl-0 space-y-1 text-foreground/70 text-base">
                            {feature.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <svg className="inline w-5 h-5 text-green-500 mr-2 align-text-bottom flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default AttendanceLeaveFeatures;
