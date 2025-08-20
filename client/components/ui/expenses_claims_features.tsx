import { motion } from 'framer-motion';

const features = [
    {
        title: 'Automated Expense Tracking',
        desc: 'Say goodbye to manual entry and spreadsheets. Our solution allows employees to submit expenses digitally with real-time tracking and auto-categorization of costs.',
        img: 'https://img.freepik.com/free-photo/invoice-bill-paid-payment-financial-account-concept_53876-122994.jpg?t=st=1755719039~exp=1755722639~hmac=db6d84853a6f8b87bdabafe2376665a75b71e03cf4a56a99801e563c77320e17&w=740'
    },
    {
        title: 'Smart Approval Workflows',
        desc: 'Customize multi-level approval flows to match your organizational hierarchy. Approvers can view, verify, and better compliance—reducing bottlenecks while boosting productivity.',
        img: 'https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595828.jpg?t=st=1755719109~exp=1755722709~hmac=ae1da91db323f760d497d1c764a9c5367300772d33ef3a522f58459d57622031&w=2000'
    },
    {
        title: 'Policy Compliance Monitoring',
        desc: 'Ensure that all expense claims are compliant with your company’s internal policies. Our system auto-flags non-compliant entries, reducing fraud and misuse.',
        img: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80'
    },
    {
        title: 'Real-Time Analytics & Reports',
        desc: 'Gain insights into company spending with dashboards and detailed reports. Analyze patterns, detect anomalies, and make informed financial decisions.',
        img: 'https://img.freepik.com/free-photo/business-people-working-with-ipad-side-view_23-2150103553.jpg?t=st=1755719154~exp=1755722754~hmac=cd4d5e39bc2078a01f52e5eea5e7dfed605bc0b6c73966acac1ac1917351391a&w=740'
    },
    {
        title: 'Reimbursement Tracking',
        desc: 'Refers to the process of managing, monitoring, and ensuring timely repayment of expenses incurred by employees, field staff, or business units.',
        img: 'https://img.freepik.com/free-photo/closeup-shot-entrepreneur-working-from-home-his-personal-finances-savings_181624-21394.jpg?t=st=1755719226~exp=1755722826~hmac=59793ab9bf64203945b0a2211ac9d92c88a03018121d0b3b89d559b4933bb0d8&w=740'
    },
    {
        title: 'Mobile Access & Cloud Sync',
        desc: 'Let your workforce submit claims, upload receipts, and check statuses on the go. All data syncs securely to the cloud, ensuring accessibility and data integrity.',
        img: 'https://img.freepik.com/free-photo/hand-touching-tablet_1134-426.jpg?t=st=1755719281~exp=1755722881~hmac=de7058f8426594118753ebdc22c39d6d0a133f86c60c8036495d5a299caae501&w=2000'
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.10, type: 'spring', bounce: 0.18, duration: 0.7 }
    })
};

const ExpensesClaimsFeatures = () => (
    <section className="w-full flex flex-col items-center justify-center py-14 px-2 sm:px-6">
        <div className="max-w-6xl w-full mx-auto rounded-3xl bg-white/80 dark:bg-black/70 border border-glass-border shadow-2xl p-6 md:p-12 backdrop-blur-xl">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl md:text-4xl font-extrabold text-center mb-2 leading-tight"
                style={{ background: 'linear-gradient(90deg, #FF9800 40%, #B721FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
                Expenses & Claims Management Solution
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center text-base md:text-lg text-foreground/70 mb-10 max-w-3xl mx-auto"
            >
                At Manacle India, we specialize in delivering cutting-edge digital solutions to streamline your business operations. Our Expenses & Claims Management Solution is designed to eliminate manual processes, reduce errors, and enhance compliance for companies of all sizes. Here’s what we offer:
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <motion.div
                        key={feature.title}
                        className="group bg-white/90 dark:bg-black/80 border border-glass-border rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-0 flex flex-col items-stretch text-left hover:-translate-y-2 "
                        custom={idx}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={cardVariants}
                    >
                        <img
                            src={feature.img}
                            alt={feature.title}
                            className="w-full h-40 object-cover rounded-t-2xl border-b border-glass-border"
                            loading="lazy"
                        />
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-lg md:text-xl font-bold mb-2 text-primary leading-snug">{feature.title}</h3>
                            <p className="text-base text-foreground/80 leading-relaxed">{feature.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default ExpensesClaimsFeatures;
