import { motion } from "framer-motion";

const features = [
    {
        title: "Lead & Contact Management",
        image: "/vectors/crm-lead.svg",
        desc: "Capture leads from multiple channels in a centralized system. Track every interaction and nurture relationships from first contact to conversion."
    },
    {
        title: "Sales Pipeline Automation",
        image: "/vectors/crm-pipeline.svg",
        desc: "Visualize and manage your sales process with customizable pipelines. Automate follow-ups, set reminders, and never miss a deal again."
    },
    {
        title: "Task & Activity Tracking",
        image: "/vectors/crm-task.svg",
        desc: "Assign tasks, set priorities, and monitor performance. Stay productive and ensure your team is aligned and accountable."
    },
    {
        title: "Email Integration",
        image: "/vectors/crm-email.svg",
        desc: "Connect your email to streamline communications. Track conversations, schedule emails, and access communication history in one place."
    },
    {
        title: "Reporting & Analytics",
        image: "/vectors/crm-analytics.svg",
        desc: "Make data-driven decisions with real-time dashboards and detailed reports. Analyze sales performance, customer behavior, and campaign results."
    },
    {
        title: "Workflows Automation",
        image: "/vectors/crm-automation.svg",
        desc: "Automate repetitive tasks, approvals, and notifications. Focus more on building relationships and less on admin work."
    }
];

const CRMFeatures = () => (
    <section className="w-full flex justify-center py-12 px-2 sm:px-6">
        <div className="max-w-7xl w-full mx-auto rounded-3xl bg-white/90 dark:bg-black/80 border border-glass-border shadow-2xl p-6 md:p-12 backdrop-blur-xl">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-4xl font-extrabold text-center mb-2 leading-tight"
            >
                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 bg-clip-text text-transparent">
                    Transform Relationships. Drive Growth. Simplify Sales.
                </span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-base md:text-lg text-center text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
                Our powerful CRM software helps you build stronger relationships, streamline your sales pipeline, and deliver exceptional customer experiences. Whether you’re a small business or an enterprise, our solution adapts to your needs and grows with your business.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <motion.div
                        key={feature.title}
                        className="group bg-white/95 dark:bg-black/80 border border-glass-border rounded-2xl shadow-xl hover:shadow-2xl hover:bg-primary/10 dark:hover:bg-primary/20 hover:border-orange-400 transition-all duration-300 p-0 flex flex-col overflow-hidden cursor-default"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                    >
                        <div className="w-full h-44 flex items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 dark:from-orange-900 dark:via-yellow-900 dark:to-pink-900">
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-28 h-28 object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-col gap-2 p-6">
                            <h3 className="text-lg md:text-xl font-bold text-primary mb-1 group-hover:text-orange-500 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default CRMFeatures;
