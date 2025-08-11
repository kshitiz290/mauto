import { motion } from 'framer-motion';


const features = [
    {
        title: 'Real-Time GPS Tracking',
        image: 'solutions/gps.jpg', // Example vector
        points: [
            'Live location tracking of field agents.',
            'Route history and geo-fencing alerts.',
            'Ensures transparency and accountability.'
        ]
    },
    {
        title: 'Task & Activity Management',
        image: 'solutions/time_management.jpg',
        points: [
            'Assign, update, and track tasks or client visits.',
            'Activity logs (check-in, check-out).',
            'Daily work planning and reports.'
        ]
    },
    {
        title: 'Creative ideas on app.',
        image: 'solutions/app.jpg',
        points: [
            'GPS-based check-in/check-out.',
            'Time-stamped location logging.',
            'Geo-fencing to restrict attendance to assigned areas.'
        ]
    },
    {
        title: 'Reporting & Analytics',
        image: 'solutions/reporting.jpg',
        points: [
            'Performance dashboards for individuals and teams.',
            'Customizable reports: daily, weekly, monthly.',
            'KPI Tracking (visits, closures, sales targets, etc.)'
        ]
    },
    {
        title: 'Data Capture & Forms',
        image: 'solutions/data.jpg',
        points: [
            'Photo capture of visits, documents, or products.',
            'Custom form fields for data entry (e.g., feedback, orders).',
            'Digital proof of service or delivery.'
        ]
    },
    {
        title: 'Collaborative Team Workspaces',
        image: 'solutions/team.jpg',
        points: [
            'Create collaborative work spaces for your individual sales teams.',
            "Optimised company's workflow with shared sales activities, insights, alerts, notification, support calls etc."
        ]
    }
];

const cardVariants = {
    offscreen: { opacity: 0, y: 40 },
    onscreen: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
};

const FieldForceFeatures = () => (
    <section className="w-full flex flex-col items-center justify-center py-12 px-2 sm:px-6 bg-transparent">
        <div className="max-w-7xl w-full">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-2xl md:text-3xl font-bold mb-8 text-center leading-[1.25] md:leading-[1.3]"
                style={{ background: 'linear-gradient(90deg, #FF9800 40%, #B721FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
                Key Features of Field Force Tracking & Activity
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center text-lg md:text-xl text-foreground/70 mb-10 max-w-3xl mx-auto"
            >
                We at Field Force Tracking & Activity Software provide a specialized solution to monitor, manage, and optimize the performance of on-field sales or service teams in real-time. It helps businesses streamline operations, improve productivity, and ensure transparency.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {features.map((feature, idx) => (
                    <motion.div
                        key={feature.title}
                        className="group bg-white/80 dark:bg-black/70 border border-glass-border rounded-2xl shadow-xl hover:shadow-[0_8px_32px_0_rgba(255,152,0,0.18),0_2px_8px_0_rgba(183,33,255,0.10)] transition-all duration-300 p-8 flex flex-col items-center text-center backdrop-blur-xl cursor-default relative overflow-hidden hover:-translate-y-2"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                    >
                        <img
                            src={feature.image}
                            alt={feature.title}
                            className="w-20 h-20 object-contain mb-4 rounded-xl drop-shadow-md bg-gradient-to-br from-primary/10 to-accent/10"
                            loading="lazy"
                        />
                        <h3 className="text-xl font-bold text-primary leading-snug mb-3">{feature.title}</h3>
                        <ul className="flex flex-col gap-2 items-start mx-auto max-w-xs">
                            {feature.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-2 text-left text-base text-foreground/80">
                                    <svg className="inline w-5 h-5 text-green-500 mr-2 align-text-bottom flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
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

export default FieldForceFeatures;
