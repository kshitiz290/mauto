import { motion } from "framer-motion";
import { FileText, BadgePercent, Layers, Share2, Users, CheckCircle2, Settings2 } from "lucide-react";

const features = [
    {
        icon: <FileText className="w-8 h-8 text-primary" />,
        title: "Auto-Invoice Creation",
        desc: "Automatically generate invoices from completed sales orders, delivery notes, or payment entries."
    },
    {
        icon: <BadgePercent className="w-8 h-8 text-primary" />,
        title: "GST & Tax Compliance",
        desc: "Fully compliant with Indian GST regulations and other regional tax formats—ensuring error-free taxation and documentation."
    },
    {
        icon: <Layers className="w-8 h-8 text-primary" />,
        title: "Customizable Invoice Templates",
        desc: "Add your logo, branding, terms, and payment details to create professional-looking invoices."
    },
    {
        icon: <Share2 className="w-8 h-8 text-primary" />,
        title: "Multi-Format Export & Sharing",
        desc: "Download or share invoices in PDF, Excel, or print-ready formats. Email directly to customers from the platform."
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Integration with Sales & Inventory",
        desc: "Seamlessly sync with Manacle’s sales, SFA, and inventory modules for real-time billing accuracy."
    },
    {
        icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
        title: "Multi-User Access & Approval Workflow",
        desc: "Set user roles for invoice creation, verification, and approval—ensuring control and compliance."
    }
];

const InvoiceGenerationFeatures = () => (
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
                        Generate Dynamic <span className="text-orange-500">Invoice Every Time</span> with Manacle Technologies ERP
                    </span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-base md:text-lg text-foreground/70 mb-4 leading-relaxed"
                >
                    Manual invoicing is slow, error-prone, and inefficient. Manacle Technologies Invoice Generation Solution is designed to automate and simplify your entire billing process—enabling fast, accurate, and professional invoicing for businesses of all sizes. Whether you’re in sales, distribution, services, or manufacturing, we help you stay compliant, save time, and get paid faster.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="text-base md:text-lg text-foreground/70 mb-4 leading-relaxed"
                >
                    Invoice Generation is the process of creating detailed, tax-compliant bills for customers after a sale or service is completed. With Manacle, this process becomes automated, streamlined, and fully integrated with your sales and order systems.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-base md:text-lg text-foreground/70 mb-6 leading-relaxed"
                >
                    Our solution generates real-time invoices based on sales transactions—reducing manual input, ensuring accuracy, and supporting digital records for faster approvals and audits.
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

export default InvoiceGenerationFeatures;
