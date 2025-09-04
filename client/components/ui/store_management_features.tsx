import { motion } from 'framer-motion';
import { Calculator, FileText, Truck, Users, ShoppingBag, BarChart2 } from 'lucide-react';

const features = [
    {
        icon: <Calculator className="w-12 h-12 text-primary mx-auto mb-3" />,
        title: 'Inventory Management',
        desc: 'See stock levels, movements, reorder points, and expiry in one place. Avoid overstock and stockouts with simple rules.'
    },
    {
        icon: <FileText className="w-12 h-12 text-primary mx-auto mb-3" />,
        title: 'Sales & Billing System',
        desc: 'Bill faster with barcode scan and multiple payment modes. Track what sells well across stores.'
    },
    {
        icon: <Truck className="w-12 h-12 text-primary mx-auto mb-3" />,
        title: 'Supplier & Purchase Management',
        desc: 'Keep vendor info, POs, and payments tidy. Get purchase suggestions when stock runs low.'
    },
    {
        icon: <Users className="w-12 h-12 text-primary mx-auto mb-3" />,
        title: 'Customer Relationship Management (CRM)',
        desc: 'Run loyalty offers and see purchase history to bring customers back.'
    },
    {
        icon: <ShoppingBag className="w-12 h-12 text-primary mx-auto mb-3" />,
        title: 'Multi-Store Integration',
        desc: 'Run multiple outlets from one dashboard with the same workflows everywhere.'
    },
    {
        icon: <BarChart2 className="w-12 h-12 text-primary mx-auto mb-3" />,
        title: 'Analytics & Reporting',
        desc: 'Check sales trends, inventory turns, and top products with clear reports.'
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

const StoreManagementFeatures = () => (
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
                Store Management Software
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center text-base md:text-lg text-foreground/70 mb-10 max-w-3xl mx-auto"
            >
                Running a store means juggling stock, billing, and people—often at the same time. Our Store Management Software puts the day-to-day in one place. Works for a single outlet or many.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <motion.div
                        key={feature.title}
                        className="group bg-white/90 dark:bg-black/80 border border-glass-border rounded-2xl shadow-xl hover:shadow-2xl hover:bg-primary/10 dark:hover:bg-primary/20 hover:border-orange-400 transition-all duration-300 p-7 flex flex-col items-center text-center hover:-translate-y-2 "
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

export default StoreManagementFeatures;
