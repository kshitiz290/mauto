import { motion } from 'framer-motion';

const features = [
    {
        title: 'Digital Purchase Order Creation',
        desc: 'Create and send professional, error-free purchase orders with pre-filled vendor and item data. Easily customize terms, taxes, and payment details.',
        img: 'solutions/digital_order.jpg' // Placeholder, replace with static PNG/SVG if needed
    },
    {
        title: 'Approval Workflow Automation',
        desc: 'Set up multi‑level approvals with role‑based rules. Get notified, track status, and keep things moving.',
        img: 'solutions/workflow_automation.jpg' // Placeholder, replace with static PNG/SVG if needed
    },
    {
        title: 'Vendor & Supplier Management',
        desc: 'Manage all your vendor details, pricing contracts, and order history in one place. Maintain strong supplier relationships with real-time communication tools.',
        img: 'solutions/vendor.jpg'
    },
    {
        title: 'Order Tracking & Status Updates',
        desc: 'Track every PO from issue to delivery. Get real-time updates on status, delays, or discrepancies to avoid supply chain disruptions.',
        img: 'solutions/appointment.jpg'
    },
    {
        title: 'Budget Control & Spend Analysis',
        desc: 'Compare planned vs. actual spends. Monitor budgets across departments, identify cost leaks, and generate reports for better financial control.',
        img: 'solutions/budget.jpg'
    },
    {
        title: 'Works with Inventory & Finance',
        desc: 'Sync POs with stock and accounts to avoid double entry and keep books clean.',
        img: 'solutions/integration.jpg'
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

const PurchaseOrderFeatures = () => (
    <section className="w-full flex flex-col items-center justify-center py-14 px-2 sm:px-6">
        <div className="max-w-4xl w-full mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-2xl md:text-3xl font-extrabold mb-2 text-left leading-tight"
                style={{ background: 'linear-gradient(90deg, #FF9800 40%, #B721FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
                Purchase Order Management Solution
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-base md:text-lg text-foreground/70 mb-8 leading-relaxed"
            >
                Purchase Order Management Solution helps businesses automate and streamline their procurement process from order creation to vendor fulfillment. Say goodbye to manual paperwork, delays, and miscommunication with a solution built for modern business needs.
            </motion.p>
            <div className="flex flex-col gap-7">
                {features.map((feature, idx) => (
                    <motion.div
                        key={feature.title}
                        className="group flex flex-col sm:flex-row items-center gap-5 bg-white/90 dark:bg-black/80 border border-glass-border rounded-2xl shadow-xl hover:shadow-2xl hover:bg-primary/10 dark:hover:bg-primary/20 hover:border-orange-400 transition-all duration-300 p-5 sm:p-7 "
                        custom={idx}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                    >
                        <img
                            src={feature.img}
                            alt={feature.title}
                            className="w-24 h-24 object-contain rounded-xl bg-white/80 dark:bg-black/70 border border-glass-border flex-shrink-0"
                            loading="lazy"
                            decoding="async"
                            fetchPriority="low"
                            width="96"
                            height="96"
                        />
                        <div className="flex-1 w-full">
                            <h3 className="text-lg md:text-xl font-bold mb-1 text-primary leading-snug group-hover:text-orange-500 transition-colors duration-300">{feature.title}</h3>
                            <p className="text-base text-foreground/80 leading-relaxed">{feature.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default PurchaseOrderFeatures;
