import { motion } from 'framer-motion';

const features = [
    {
        title: 'Easy Retailer Onboarding',
        desc: 'Simplify the onboarding process with digital forms, document uploads, and automated KYC verification for quick and compliant retailer registration.'
    },
    {
        title: 'Order Management & Tracking',
        desc: 'Enable retailers to place orders directly through a user-friendly portal. Track order status in real time and streamline the entire supply chain from distributor to retailer.'
    },
    {
        title: 'Inventory Visibility & Replenishment',
        desc: 'Get complete visibility into stock movement across the retail network. Automate inventory replenishment based on real-time demand and reduce stockouts.'
    },
    {
        title: 'Promotions & Scheme Management',
        desc: 'Design and broadcast tailored offers, discounts, and loyalty programs to your retailers instantly. Track scheme performance and improve campaigns for better ROI.'
    },
    {
        title: 'Retailer Performance Analytics',
        desc: 'Monitor individual retailer performance through dashboards. Understand buying patterns, credit usage, and engagement levels to support strategic decisions.'
    },
    {
        title: 'Mobile App for Retailers',
        desc: 'Give your retailers the power of mobility. Our Android-based mobile app allows retailers to view products, place orders, and track deliveries on the go.'
    }
];

const RetailerManagementFeatures = () => (
    <section className="w-full flex flex-col items-center justify-center py-14 px-2 sm:px-6">
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Left: Vector Illustration */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full md:w-1/2 flex justify-center"
            >
                <img
                    src="solutions/retailer-management-solution.png"
                    alt="Retailer Management Illustration"
                    className="w-full "
                    loading="lazy"
                />
            </motion.div>
            {/* Right: Features List */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="w-full md:w-1/2"
            >
                <h2
                    className="text-3xl md:text-4xl font-extrabold mb-2 text-left  leading-[1.25] md:leading-[1.3]"
                    style={{ background: 'linear-gradient(90deg, #FF9800 40%, #B721FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                    Retailer Management Solution
                </h2>
                <p className="text-base md:text-lg text-foreground/70 mb-6 leading-relaxed">
                    Managing a retail network by hand gets messy. Our Retailer Management Solution makes daily work easier—fewer calls, fewer spreadsheets, faster decisions. Here’s what you get:
                </p>
                <div className="grid grid-cols-1 gap-5">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            className="p-0 flex flex-col items-start text-left rounded-xl transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                        >
                            <h3 className="text-lg md:text-xl font-bold mb-1 text-primary leading-snug">{feature.title}</h3>
                            <p className="text-base text-foreground/80 leading-relaxed mb-1">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

export default RetailerManagementFeatures;
