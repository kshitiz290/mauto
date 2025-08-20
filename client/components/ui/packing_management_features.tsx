import { motion } from "framer-motion";
import { ClipboardList, ShieldCheck, Truck, BarChart2, Users, Smile } from "lucide-react";

const features = [
    {
        icon: <ClipboardList className="w-10 h-10 text-primary mx-auto mb-3" />,
        title: "Efficient Operations",
        desc: "Streamline your packing process with automated personalised packing based on order characteristic. Alongside get access to precise order tracking, transparency, and real-time visibility reducing errors. Trace each order’s journey with RFID integration."
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-3" />,
        title: "Regulatory Compliance",
        desc: "Meet industry standards with in-built customised regulatory system. Tailor the workflows to the company’s unique business needs. Utilise automated updates, packing processes with changing revolution, user-friendly packing templates. Enjoy dynamic adaptability for a diverse range of products."
    },
    {
        icon: <Truck className="w-10 h-10 text-primary mx-auto mb-3" />,
        title: "Inventory Optimization",
        desc: "Track the real-time dynamics of inventory and prevent extreme situations like overstock or no stock at all. Use customised packing rules for varying product sizes to gain optimal space in the inventory. Utilise advanced tech to gain insights about order locations in warehouses."
    },
    {
        icon: <BarChart2 className="w-10 h-10 text-primary mx-auto mb-3" />,
        title: "Real-Time Analytics",
        desc: "Gain access into live dashboard, utilise the packing efficiency with workflow insights and performance metrics. Automation offers validation & visual aids to minimise the packing errors. Use the power of AI image recognition for item verification which reduces the shipping errors of incorrect products."
    },
    {
        icon: <Users className="w-10 h-10 text-primary mx-auto mb-3" />,
        title: "Collaboration & Scaling",
        desc: "Establish a warm communication between team with multi-user packing views and real-time communication tools to enhance team’s coordination in packing. Easy scaling features for business expansion and forecasting tools to predict needs."
    },
    {
        icon: <Smile className="w-10 h-10 text-primary mx-auto mb-3" />,
        title: "Customer Satisfaction",
        desc: "Establish a trusted brand name among customers with timely deliveries, error-free packing, waste reduction, data-driven insights, and proactive cost management strategies. Tracks the packing details with complete transparency to teams & users, upholding the customer satisfaction."
    }
];

const PackingManagementFeatures = () => (
    <section className="w-full flex justify-center py-12 px-2 sm:px-6">
        <div className="max-w-6xl w-full mx-auto rounded-3xl bg-white/80 dark:bg-black/70 border border-glass-border shadow-2xl p-6 md:p-12 backdrop-blur-xl">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-4xl font-extrabold text-center mb-2 leading-tight"
            >
                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent leading-[1.25] md:leading-[1.3]">
                    Packing Management Solution
                </span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-base md:text-lg text-center text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
                In a competitive supply chain environment, accuracy and efficiency in packaging can make or break your delivery promise. <span className="font-bold text-primary">Manacle Technologies Packing Management Solution</span> empowers manufacturers, distributors, and logistics providers to manage, monitor, and optimize their packing operations—ensuring error-free dispatch, reduced wastage, and improved productivity. Packing Management refers to the systematic planning, execution, and monitoring of packing operations across warehouses, factories, and fulfillment centers. It ensures the right products, in the right quantities, are packed securely and dispatched on time. We automate this entire process with real-time tracking, barcode verification, packing instructions, and integration with inventory and dispatch systems.
            </motion.p>
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent leading-[1.25] md:leading-[1.3]"
            >
                Key Features of Manacle’s Packing Management System
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <motion.div
                        key={feature.title}
                        className="group bg-white/90 dark:bg-black/80 border border-glass-border rounded-2xl shadow-xl hover:shadow-2xl hover:bg-primary/10 dark:hover:bg-primary/20 hover:border-orange-400 transition-all duration-300 p-7 flex flex-col items-center text-center hover:-translate-y-2 cursor-default"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                    >
                        {feature.icon}
                        <h4 className="text-lg md:text-xl font-bold mb-2 text-primary leading-snug group-hover:text-orange-500 transition-colors duration-300">{feature.title}</h4>
                        <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default PackingManagementFeatures;
