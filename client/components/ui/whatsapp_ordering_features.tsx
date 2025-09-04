import { motion } from "framer-motion";

const bannerImg = "solutions/whatsapp.jpg";

const features = [
    {
        title: "Instant Order Placement",
        desc: "Sales representatives and retailers can place orders directly via WhatsApp using a guided message flow or predefined product catalogs."
    },
    {
        title: "Real-Time Order Syncing",
        desc: "Orders placed through WhatsApp are instantly synchronized with your SFA system, ensuring up-to-date inventory, billing, and delivery data."
    },
    {
        title: "Interactive Product Catalog",
        desc: "Share digital product catalogs on WhatsApp with images, prices, and stock availability to streamline decision-making for buyers."
    },
    {
        title: "Automated Order Confirmation",
        desc: "Customers receive real-time order confirmation, estimated delivery times, and invoice details—all on WhatsApp."
    },
    {
        title: "Anytime requests",
        desc: "Let customers place requests outside working hours using guided WhatsApp flows."
    },
    {
        title: "Multi-Language Support",
        desc: "Communicate with your distributors and sales teams in their preferred language for higher adoption and satisfaction."
    },
    {
        title: "Status Tracking & Notifications",
        desc: "Automated WhatsApp updates keep customers informed about order status, dispatch, delivery, and payment reminders."
    }
];

const WhatsappOrderingFeatures = () => (
    <section className="w-full flex justify-center py-12 px-2 sm:px-6">
        <div className="max-w-6xl w-full mx-auto rounded-3xl bg-white/90 dark:bg-black/80 border border-glass-border shadow-2xl p-6 md:p-12 backdrop-blur-xl">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-4xl font-extrabold text-center mb-2 leading-tight"
            >
                <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-pink-500 bg-clip-text text-transparent">
                    Grow Your Business with WhatsApp Ordering System
                </span>
                <span className="block text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 via-yellow-400 to-pink-500 bg-clip-text text-transparent mt-1">Remodel Retail Ordering, Management & Deliveries</span>
            </motion.h2>
            <div className="flex flex-col md:flex-row items-center gap-8 mt-8 mb-8">
                {/* Banner Image */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={bannerImg}
                        alt="WhatsApp Ordering System Banner"
                        className="rounded-2xl shadow-xl w-full max-w-lg object-cover border border-orange-100 dark:border-orange-900 bg-white/80 dark:bg-black/60"
                        loading="lazy"
                    />
                </div>
                {/* Description and Features */}
                <div className="w-full md:w-1/2 flex flex-col items-start">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-base md:text-lg text-foreground/70 mb-6 leading-relaxed"
                    >
                        Power up field sales with WhatsApp Ordering inside your SFA. Sales and distributors can place, track, and manage orders right from WhatsApp—anytime.
                    </motion.p>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-2xl md:text-3xl font-bold mb-4 leading-tight bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent"
                    >
                        Key Features:
                    </motion.h3>
                    <ul className="flex flex-col gap-4">
                        {features.map((feature, idx) => (
                            <motion.li
                                key={feature.title}
                                className="group flex items-start gap-3 bg-white/80 dark:bg-black/70 border border-glass-border rounded-xl p-4 shadow hover:shadow-lg hover:bg-primary/10 dark:hover:bg-primary/20 hover:border-orange-400 transition-all duration-300 cursor-default"
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                            >
                                <span className="text-orange-500 text-lg mt-1">✔</span>
                                <div>
                                    <span className="font-semibold text-primary group-hover:text-orange-500 transition-colors duration-300">{feature.title}</span>
                                    <div className="text-foreground/80 text-sm leading-relaxed">{feature.desc}</div>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export default WhatsappOrderingFeatures;
