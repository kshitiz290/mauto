import { motion } from 'framer-motion';

const features = [
    {
        title: 'Image-Based Merchandising Audits',
        desc: 'Capture store shelf images and run quick checks for planogram match, out-of-stock detection, and visibility tracking.',
        icon: (
            <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Audit" className="w-14 h-14 mx-auto mb-3" />
        )
    },
    {
        title: 'Task Management & Visit Scheduling',
        desc: 'Plan field visits, assign store-level tasks, and ensure timely retail execution with geofenced attendance and simple route planning.',
        icon: (
            <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Task" className="w-14 h-14 mx-auto mb-3" />
        )
    },
    {
        title: 'Real-Time Data Collection',
        desc: 'Enable field reps to collect key retail KPIs like shelf share, pricing, promotions, competitor activity, and stock availability directly from stores.',
        icon: (
            <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Data" className="w-14 h-14 mx-auto mb-3" />
        )
    },
    {
        title: 'Digital Planogram Validation',
        desc: 'Compare actual shelf layouts against approved planograms for fast validation and corrective action.',
        icon: (
            <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Planogram" className="w-14 h-14 mx-auto mb-3" />
        )
    },
    {
        title: 'Performance Insights & Dashboards',
        desc: 'Access intuitive dashboards to monitor field activity, measure execution compliance, and gain insights at brand, SKU, and outlet level.',
        icon: (
            <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Dashboard" className="w-14 h-14 mx-auto mb-3" />
        )
    },
    {
        title: 'Retail Promotion Execution Tracking',
        desc: 'Ensure promotional campaigns are implemented as planned, with live visibility into activation quality and duration.',
        icon: (
            <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Promotion" className="w-14 h-14 mx-auto mb-3" />
        )
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

const MerchandisingRetailFeatures = () => (
    <section className="w-full flex flex-col items-center justify-center py-14 px-2 sm:px-6">
        <div className="max-w-6xl w-full mx-auto rounded-3xl bg-white/80 dark:bg-black/70 border border-glass-border shadow-2xl p-6 md:p-12 backdrop-blur-xl">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-4xl font-extrabold text-center mb-2 leading-tight"
                style={{ background: 'linear-gradient(90deg, #FF9800 40%, #B721FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
                Merchandising & Retail Execution Solution
            </motion.h2>
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-lg md:text-xl font-bold text-center mb-3 text-foreground/90"
            >
                Drive In-Store Excellence & Maximize Sales Opportunities
            </motion.h3>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-center text-base md:text-lg text-foreground/70 mb-10 max-w-3xl mx-auto"
            >
                Our <b>Merchandising & Retail Execution Solution</b> helps teams keep shelves tidy, products visible, and promos live. It’s built for field teams with photo proof, quick checks, and simple dashboards.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <motion.div
                        key={feature.title}
                        className="group bg-white/90 dark:bg-black/80 border border-glass-border rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-7 flex flex-col items-center text-center hover:-translate-y-2"
                        custom={idx}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                    >
                        {feature.icon}
                        <h3 className="text-lg md:text-xl font-bold mb-2 text-primary leading-snug">{feature.title}</h3>
                        <p className="text-base text-foreground/80 leading-relaxed">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default MerchandisingRetailFeatures;
