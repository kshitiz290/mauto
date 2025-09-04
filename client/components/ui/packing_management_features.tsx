import { motion } from "framer-motion";
import { ClipboardList, ShieldCheck, Truck, BarChart2, Users, Smile } from "lucide-react";

const features = [
    {
        icon: <ClipboardList className="w-10 h-10 text-primary mx-auto mb-3" />,
        title: "Faster, cleaner packing",
        desc: "Auto‑apply packing rules by order type, print clear instructions, and track every box from bench to dispatch (RFID/barcode ready)."
    },
    {
        icon: <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-3" />,
        title: "Compliance made simple",
        desc: "Use ready templates, set your own checks, and keep records tidy for audits—without extra spreadsheets."
    },
    {
        icon: <Truck className="w-10 h-10 text-primary mx-auto mb-3" />,
        title: "Use space and stock well",
        desc: "Right‑size cartons, avoid over/under‑stock, and see where items sit in the warehouse in real time."
    },
    {
        icon: <BarChart2 className="w-10 h-10 text-primary mx-auto mb-3" />,
        title: "Live checks and reports",
        desc: "See efficiency by shift, station, or SKU. Simple validations and photo checks reduce wrong‑item picks."
    },
    {
        icon: <Users className="w-10 h-10 text-primary mx-auto mb-3" />,
        title: "Team views that sync",
        desc: "Supervisors and packers share the same live boards, so hand‑offs are smooth and calls are fewer."
    },
    {
        icon: <Smile className="w-10 h-10 text-primary mx-auto mb-3" />,
        title: "On‑time, accurate orders",
        desc: "Fewer errors and clear tracking mean fewer complaints and quicker turnarounds."
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
                Packing is where orders become real. We help teams pack right the first time, keep stock visible, and ship on schedule—without extra steps.
            </motion.p>
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent leading-[1.25] md:leading-[1.3]"
            >
                What you get
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
