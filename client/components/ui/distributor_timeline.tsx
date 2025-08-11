import { motion } from 'framer-motion';

const steps = [
    {
        title: 'Centralized Distributor Portal',
        desc: 'Manage all distributor interactions and performance in one place.',
        img: 'solutions/portal.jpg'
    },
    {
        title: 'Order & Invoice Automation',
        desc: 'Simplify order placement, invoicing, and payments.',
        img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80'
    },
    {
        title: 'Inventory & Stock Tracking',
        desc: 'Real-time visibility into stock levels and product movement.',
        img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80'
    },
    {
        title: 'Sales Target & Incentive Management',
        desc: 'Monitor targets, schemes, and distributor rewards efficiently.',
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
    },
    {
        title: 'Geo-tagged Order Booking',
        desc: 'Ensure authenticity and location tracking of orders.',
        img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b1e2e?auto=format&fit=crop&w=400&q=80'
    },
    {
        title: 'Analytics & Reports',
        desc: 'Actionable insights on distributor performance, revenue, and stock trends.',
        img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80'
    }
];

const DistributorTimeline = () => (
    <section className="w-full flex flex-col items-center justify-center py-14 px-2 sm:px-6 bg-transparent">
        <div className="max-w-5xl w-full mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-2xl md:text-3xl font-bold mb-3 text-center leading-[1.25] md:leading-[1.3]"
                style={{ background: 'linear-gradient(90deg, #FF9800 40%, #B721FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
                Streamline Your <span className="font-extrabold">Distribution Network</span> with Smart Automation
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center text-base md:text-lg text-foreground/70 mb-10 max-w-3xl mx-auto"
            >
                Our Distributors Management Solution is designed to optimize and simplify every aspect of your distribution process. From inventory handling to order fulfillment, it empowers brands and distributors with real-time visibility, improved communication, and greater operational control.
            </motion.p>
            <div className="relative flex flex-col gap-10">
                {/* Timeline vertical line - now always centered between step and image */}
                <div className="hidden md:block absolute top-0 left-1/2 h-full w-1 bg-gradient-to-b from-primary/30 via-accent/20 to-orange-400/20 rounded-full z-0" style={{ transform: 'translateX(-50%)' }} />
                <div className="flex flex-col gap-12">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            className="relative grid grid-cols-1 md:grid-cols-3 items-stretch gap-6"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: idx * 0.08 }}
                        >
                            {/* Left: Text */}
                            <div className="w-full flex flex-col items-end justify-center md:pr-6 col-span-1">
                                <div className="bg-white/80 dark:bg-black/70 border border-glass-border rounded-2xl shadow-xl p-6 max-w-sm w-full text-right md:text-left">
                                    <h3 className="text-lg md:text-xl font-bold mb-1 text-primary leading-snug">{step.title}</h3>
                                    <p className="text-foreground/80 text-base leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                            {/* Center: Step number */}
                            <div className="flex flex-col items-center justify-center z-10 col-span-1">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 via-primary to-purple-500 flex items-center justify-center text-white text-xl font-bold shadow-lg border-4 border-background">
                                    {String(idx + 1).padStart(2, '0')}
                                </div>
                                {idx < steps.length - 1 && (
                                    <div className="h-10 w-1 bg-gradient-to-b from-orange-400/40 to-purple-500/30" />
                                )}
                            </div>
                            {/* Right: Image */}
                            <div className="w-full flex flex-col items-start justify-center md:pl-6 col-span-1">
                                <motion.img
                                    src={step.img}
                                    alt={step.title}
                                    className="w-full max-w-xs rounded-xl shadow-lg object-cover aspect-video border border-glass-border hover:scale-105 hover:shadow-2xl transition-transform duration-300 bg-white/80 dark:bg-black/70"
                                    initial={{ scale: 1, opacity: 0.8 }}
                                    whileHover={{ scale: 1.08, opacity: 1 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default DistributorTimeline;
