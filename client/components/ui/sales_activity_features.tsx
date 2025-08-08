import { motion } from 'framer-motion';
import { MapPin, CalendarDays, MonitorCheck, Network, Bell, Gavel } from 'lucide-react';

const features = [
    {
        icon: <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />,
        title: 'Field Force Tracking & Monitoring',
        desc: 'Monitor your field sales representatives in real-time with GPS-based tracking. Know where your team is, how long they’ve spent at client sites, and ensure maximum efficiency.'
    },
    {
        icon: <CalendarDays className="w-12 h-12 text-primary mx-auto mb-3" />,
        title: 'Task Assignment & Scheduling',
        desc: 'Assign daily tasks and calls to your sales team from a centralized dashboard. Ensure complete alignment and clarity in daily objectives.'
    },
    {
        icon: <MonitorCheck className="w-12 h-12 text-primary mx-auto mb-3" />,
        title: 'Attendance & Check-in System',
        desc: 'Enable geo-tagged check-ins/check-outs to ensure field representatives start and end their workday from the assigned locations — eliminating attendance fraud.'
    },
    {
        icon: <Network className="w-12 h-12 text-primary mx-auto mb-3" />,
        title: 'Daily Sales Reporting & Dashboard',
        desc: 'Generate detailed reports of daily visits, leads generated, orders placed, and client feedback. Access powerful dashboards for real-time sales visibility.'
    },
    {
        icon: <Bell className="w-12 h-12 text-primary mx-auto mb-3" />,
        title: 'Target vs. Achievement Tracking',
        desc: 'Track performance against predefined sales targets. Identify top performers and areas that need attention with clear metrics and visual insights.'
    },
    {
        icon: <Gavel className="w-12 h-12 text-primary mx-auto mb-3" />,
        title: 'Distributor Visit & Beat Planning',
        desc: 'Plan effective beat routes and optimize field visits. Ensure better market coverage with strategic retailer/distributor engagement scheduling.'
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.10, type: 'spring', bounce: 0.18, duration: 0.7 }
    })
};

const SalesActivityFeatures = () => (
    <section className="w-full flex flex-col items-center justify-center py-14 px-2 sm:px-6">
        <div className="max-w-6xl w-full mx-auto rounded-3xl bg-white/80 dark:bg-black/70 border border-glass-border shadow-2xl p-6 md:p-12 backdrop-blur-xl">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-4xl font-extrabold text-center mb-2 leading-[1.25] md:leading-[1.3]"
                style={{ background: 'linear-gradient(90deg, #FF9800 40%, #B721FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
                Why Choose Manacle Technologies <span className="text-orange-500">Sales Activity Management Solution ?</span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center text-base md:text-lg text-foreground/70 mb-10 max-w-3xl mx-auto"
            >
                our Sales Activity Management Solution is built to streamline and automate your entire sales process — from planning to execution. It’s an all-in-one platform that helps sales leaders gain visibility, monitor performance, and make data-driven decisions.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <motion.div
                        key={feature.title}
                        className="group bg-white/90 dark:bg-black/80 border border-glass-border rounded-2xl shadow-xl hover:shadow-[0_8px_32px_0_rgba(255,152,0,0.18),0_2px_8px_0_rgba(183,33,255,0.10)] hover:bg-primary/10 dark:hover:bg-primary/20 hover:border-orange-400 transition-all duration-300 p-7 flex flex-col items-center text-center hover:-translate-y-2 cursor-pointer"
                        custom={idx}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                    >
                        <span className="transition-colors duration-300 group-hover:text-orange-500">
                            {feature.icon}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-primary leading-snug group-hover:text-orange-500 transition-colors duration-300">{feature.title}</h3>
                        <p className="text-base text-foreground/80 leading-relaxed">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default SalesActivityFeatures;
