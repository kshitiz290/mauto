import { motion } from "framer-motion";

const features = [
    {
        title: "Lead & Contact Management",
        image: "https://img.freepik.com/free-vector/refer-friend-concept-with-illustrations_52683-24293.jpg?t=st=1755721220~exp=1755724820~hmac=44f3743507535f7b7d35671507fa1c59d1db13a31f3545a261457d38666de5b9&w=740",
        desc: "Capture leads from multiple channels in a centralized system. Track every interaction and nurture relationships from first contact to conversion."
    },
    {
        title: "Sales Pipeline Automation",
        image: "https://img.freepik.com/premium-vector/big-digital-data-analysis-classification-storage-tiny-people-work-with-funnel_1135642-529.jpg?w=740",
        desc: "Visualize and manage your sales process with customizable pipelines. Automate follow-ups, set reminders, and never miss a deal again."
    },
    {
        title: "Task & Activity Tracking",
        image: "https://img.freepik.com/free-vector/hand-drawn-business-planning-concept_23-2149181420.jpg?t=st=1755721507~exp=1755725107~hmac=b819d9b61deb6802c71e6b9818cafebb731f91cb073fc3e5ec0814f51137a0aa&w=740",
        desc: "Assign tasks, set priorities, and monitor performance. Stay productive and ensure your team is aligned and accountable."
    },
    {
        title: "Email Integration",
        image: "https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support-get-touch-initiate-contact-contact-us-feedback-online-form-talk-customers-concept_335657-25.jpg?t=st=1755721570~exp=1755725170~hmac=03f6652c20f49b82b3c7b239a7034cab5a2087d7d51de024df8638e50b93459e&w=740",
        desc: "Connect your email to streamline communications. Track conversations, schedule emails, and access communication history in one place."
    },
    {
        title: "Reporting & Analytics",
        image: "https://img.freepik.com/free-vector/stock-market-analysis-with-chart_23-2148584739.jpg?t=st=1755718583~exp=1755722183~hmac=abaf6104c3a7ed492b01134f48e251e9dd3c3d78a38a781da06a2ee10b7e9f14&w=740",
        desc: "Make data-driven decisions with real-time dashboards and detailed reports. Analyze sales performance, customer behavior, and campaign results."
    },
    {
        title: "Workflows Automation",
        image: "https://img.freepik.com/free-vector/hr-manager-with-employee-interview-business-flow-chart-employee-assessment-software-hr-company-system-employee-check-programme-concept-illustration_335657-2088.jpg?t=st=1755721655~exp=1755725255~hmac=f3df2e14d76375a280ef308e4aaec4610d2dcadde384b3e9493e23e843ef62da&w=2000",
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
                    Keep your pipeline clear and customers close.
                </span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-base md:text-lg text-center text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
                Keep contacts tidy, track deals, and stay on top of follow‑ups. Works well for small teams and scales as you grow.
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
                        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-t-2xl bg-muted/20 dark:bg-muted/30">
                            <img
                                src={feature.image}
                                alt={feature.title}
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
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
