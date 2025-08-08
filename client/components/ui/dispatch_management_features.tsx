import { motion } from "framer-motion";
import { ClipboardList, FileText, MapPin, Pin, Truck, CheckCircle2, Share2 } from "lucide-react";

const features = [
    {
        icon: <ClipboardList className="w-8 h-8 text-primary" />,
        title: "Automated Dispatch Scheduling",
        desc: "Auto-assign vehicles and delivery agents based on availability, priority, and delivery location."
    },
    {
        icon: <FileText className="w-8 h-8 text-primary" />,
        title: "Digital Dispatch Slips",
        desc: "Generate and share digital dispatch slips linked to invoices and packing lists for transparency and verification."
    },
    {
        icon: <Pin className="w-8 h-8 text-primary" />,
        title: "Real-Time Tracking & Alerts",
        desc: "Monitor dispatch status, vehicle location, and delivery milestones with instant alerts and updates."
    },
    {
        icon: <Share2 className="w-8 h-8 text-primary" />,
        title: "Route Optimization",
        desc: "Ensure faster deliveries and fuel savings with intelligent route suggestions based on traffic and location data."
    },
    {
        icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
        title: "Proof of Delivery (POD)",
        desc: "Capture digital signatures, photos, and timestamps to validate completed deliveries in real-time."
    },
    {
        icon: <MapPin className="w-8 h-8 text-primary" />,
        title: "Multi-Location Dispatch Support",
        desc: "Manage centralized or decentralized dispatches from multiple warehouses or distribution centers."
    }
];

const DispatchManagementFeatures = () => (
    <section className="w-full flex justify-center py-12 px-2 sm:px-6">
        <div className="max-w-6xl w-full mx-auto rounded-3xl bg-white/80 dark:bg-black/70 border border-glass-border shadow-2xl p-6 md:p-12 backdrop-blur-xl flex flex-col md:flex-row items-center gap-10">
            {/* Left: Headings and Description */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:pr-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl md:text-4xl font-extrabold text-left mb-2 leading-tight"
                >
                    <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent">
                        Dispatch Management
                    </span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-base md:text-lg text-foreground/70 mb-4 leading-relaxed"
                >
                    Efficient dispatching is the final, yet critical, step in your supply chain. Manacle Technologies Dispatch Management Solution ensures your goods reach the right destination, at the right time, with complete visibility and control. Whether you’re managing field operations, warehousing, or multi-location deliveries—our system brings accuracy, automation, and real-time tracking to your dispatch operations.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="text-base md:text-lg text-foreground/70 mb-4 leading-relaxed"
                >
                    Dispatch Management is the process of scheduling, assigning, tracking, and optimizing the movement of goods or services. It directly impacts customer satisfaction, delivery timelines, and operational costs.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-base md:text-lg text-foreground/70 mb-6 leading-relaxed"
                >
                    Manacle Dispatch Management Software streamlines dispatch operations by digitizing vehicle assignments, route optimization, dispatch slips, and delivery tracking—all in one unified platform.
                </motion.p>
            </div>
            {/* Right: Features List (animated, not grid) */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
                {features.map((feature, idx) => (
                    <motion.div
                        key={feature.title}
                        className="group flex items-start gap-4 bg-white/90 dark:bg-black/80 border border-glass-border rounded-2xl shadow-xl hover:shadow-2xl hover:bg-primary/10 dark:hover:bg-primary/20 hover:border-orange-400 transition-all duration-300 p-6 hover:-translate-y-1 cursor-default"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                    >
                        <div className="flex-shrink-0">
                            {feature.icon}
                        </div>
                        <div>
                            <h4 className="text-lg md:text-xl font-bold mb-1 text-primary leading-snug group-hover:text-orange-500 transition-colors duration-300">{feature.title}</h4>
                            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{feature.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default DispatchManagementFeatures;
