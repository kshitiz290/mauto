import { motion } from "framer-motion";
import { FileText, BadgePercent, Layers, Share2, Users, CheckCircle2, Settings2 } from "lucide-react";

const features = [
    {
        icon: <FileText className="w-8 h-8 text-primary" />,
        title: "No More Manual Invoice Typing",
        desc: "Sold something? Your invoice is ready instantly. Works with your sales orders, delivery receipts, whatever you use - we've got it covered."
    },
    {
        icon: <BadgePercent className="w-8 h-8 text-primary" />,
        title: "Tax Headaches? We Handle Them",
        desc: "GST, VAT, whatever tax rules you're dealing with - our system keeps up with the changes so you don't have to worry about getting it wrong."
    },
    {
        icon: <Layers className="w-8 h-8 text-primary" />,
        title: "Make It Look Like Yours",
        desc: "Your logo, your colors, your way of doing business. Create invoices that actually represent your brand, not some generic template."
    },
    {
        icon: <Share2 className="w-8 h-8 text-primary" />,
        title: "Send It However They Want It",
        desc: "PDF for email, Excel for their accounts team, or just hit print. Send invoices straight to your customers without jumping between apps."
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Everything Talks to Everything",
        desc: "Sync with Manacle’s sales, SFA, and inventory modules for real-time billing accuracy."
    },
    {
        icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
        title: "Keep Everyone in Their Lane",
        desc: "Sales creates, managers approve, accounts send out. Set up who can do what, so nothing goes out the door without the right eyes on it."
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
                        Stop Wrestling with <span className="text-orange-500">Invoice Creation</span> - We've Got This Covered
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
                    Here's the thing about invoicing - it should be the easiest part of your business, not the most frustrating. You make a sale, the invoice should just appear. That's how we've built our system - everything connects, so when you close a deal, your invoice is ready to go.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="text-base md:text-lg text-foreground/70 mb-6 leading-relaxed"
                >
                    No more copying numbers from one system to another. No more wondering if you got the tax calculation right. Everything happens automatically, and you've got a digital trail that makes your accountant happy and audits a breeze.
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
