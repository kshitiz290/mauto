import { motion } from "framer-motion";
import { Users, TrendingUp, BarChart2, MailCheck, Smartphone, CheckCircle2, Zap } from "lucide-react";

const features = [
    {
        icon: <Users className="w-10 h-10 text-primary mx-auto mb-3" />,
        title: "Lead Identification & Qualification",
        desc: "Target the right buyers with smart segmentation, behavior tracking, and lead scoring systems integrated into your CRM."
    },
    {
        icon: <BarChart2 className="w-10 h-10 text-primary mx-auto mb-3" />,
        title: "Marketing & Sales Alignment",
        desc: "Ensure seamless collaboration between marketing and sales teams with shared dashboards, KPIs, and automated workflows."
    },
    {
        icon: <MailCheck className="w-10 h-10 text-primary mx-auto mb-3" />,
        title: "Multi-Channel Campaign Automation",
        desc: "Run targeted campaigns across email, SMS, field activities, and digital platforms to maximize engagement and lead nurturing."
    },
    {
        icon: <TrendingUp className="w-10 h-10 text-primary mx-auto mb-3" />,
        title: "Sales Funnel Optimization",
        desc: "Analyze every stage of your funnel—from MQL to SQL—and take action to improve conversion with data-backed insights."
    },
    {
        icon: <Smartphone className="w-10 h-10 text-primary mx-auto mb-3" />,
        title: "Field-Driven Demand Capture",
        desc: "Equip your field force with mobile tools to capture in-market demand, conduct surveys, and generate interest in real time."
    },
    {
        icon: <BarChart2 className="w-10 h-10 text-primary mx-auto mb-3" />,
        title: "Real-Time Analytics & ROI Tracking",
        desc: "Measure what matters—track campaign performance, lead sources, and ROI with intuitive dashboards and custom reports."
    }
];

const DemandGenerationFeatures = () => (
    <section className="w-full flex justify-center py-12 px-2 sm:px-6">
        <div className="max-w-6xl w-full mx-auto rounded-3xl bg-white/80 dark:bg-black/70 border border-glass-border shadow-2xl p-6 md:p-12 backdrop-blur-xl">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-4xl font-extrabold text-left md:text-center mb-2 leading-tight"
            >
                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent">
                    Demand Generation Solution
                </span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-base md:text-lg text-center text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
                In today's competitive digital economy, awareness alone isn't enough. Businesses need strategic tools to create, capture, and convert interest into qualified leads. Demand Generation Solutions help you attract the right audience, engage them meaningfully, and drive sustained revenue growth.
            </motion.p>
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-2xl md:text-3xl font-bold text-center mb-8 leading-tight bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent"
            >
                Key Features of Manacle’s Demand Generation System
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

export default DemandGenerationFeatures;
