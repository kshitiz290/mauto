
import { motion } from 'framer-motion';
import { BarChart2, Settings, FileText, Layers, Link2, Smartphone } from 'lucide-react';
import AnimatedDashboard from './AnimatedDashboard';

const features = [
    {
        icon: <BarChart2 className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1" />,
        title: 'See Everything as It Happens',
        desc: 'Know exactly where each order stands right now. From materials hitting the floor to products ready for shipping - no more wondering or waiting for updates.'
    },
    {
        icon: <Settings className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1" />,
        title: 'Stop Wasting Money on Resources',
        desc: 'We help you figure out exactly what you need, when you need it. Less waste, smarter inventory decisions, and your team working where they matter most.'
    },
    {
        icon: <FileText className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1" />,
        title: 'Reports That Actually Help',
        desc: 'Get the numbers you need without spending hours creating spreadsheets. Quick insights on what\'s working, what\'s not, and where to focus next.'
    },
    {
        icon: <Layers className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1" />,
        title: 'Built Around How You Work',
        desc: 'Every factory is different. Set up workflows that match your actual processes, not some generic template that doesn\'t fit.'
    },
    {
        icon: <Link2 className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1" />,
        title: 'Plays Nice with Your Current Systems',
        desc: 'Already using other software? No problem. Our system connects with what you have, so you don\'t start from scratch.'
    },
    {
        icon: <Smartphone className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1" />,
        title: 'Check Things from Anywhere',
        desc: 'Walking the factory floor or stuck in traffic? Pull up your dashboard on your phone and stay in the loop wherever you are.'
    }
];

const whyChoose = [
    {
        icon: <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Industry" className="w-12 h-12 mx-auto mb-2" />,
        title: 'We Know Your Industry',
        desc: 'Whether you’re in textiles, electronics, pharmaceuticals, or FMCG, we provide customized tools suited for your sector.'
    },
    {
        icon: <img src="https://cdn-icons-png.flaticon.com/512/2906/2906279.png" alt="Insights" className="w-12 h-12 mx-auto mb-2" />,
        title: 'Numbers That Make Sense',
        desc: 'Unlock actionable intelligence to improve lead times, reduce costs, and boost production capacity.'
    },
    {
        icon: <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="User Interface" className="w-12 h-12 mx-auto mb-2" />,
        title: 'Easy for Everyone to Use',
        desc: 'Intuitive dashboards for both floor supervisors and senior management.'
    },
    {
        icon: <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Cloud" className="w-12 h-12 mx-auto mb-2" />,
        title: 'Grows with Your Business',
        desc: 'Access your production data anytime, anywhere—with a scalable system that grows with your business.'
    }
];

const ProductionManagementSections = () => (
    <>
        {/* About & Features Section */}
        <section className="w-full flex justify-center py-12 px-2 sm:px-6">
            <div className="max-w-5xl w-full mx-auto rounded-3xl bg-white/80 dark:bg-black/70 border border-glass-border shadow-2xl p-6 md:p-10 backdrop-blur-xl flex flex-col md:flex-row items-center gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="w-full md:w-1/2 flex flex-col gap-5"
                >
                    <h2 className="text-xl md:text-2xl font-bold mb-2 text-left leading-tight" style={{ color: '#FF9800' }}>
                        What is <span className="text-orange-500">Production Management?</span>
                    </h2>
                    <p className="text-base md:text-lg text-foreground/70 mb-2 leading-relaxed">
                        Running a manufacturing business? You know how challenging it can be to keep everything running smoothly. That's where our production management solutions come in. We've spent years working with factories and manufacturing units, understanding their pain points, and building tools that actually solve real problems.
                    </p>
                    <p className="text-base md:text-lg text-foreground/70 mb-4 leading-relaxed">
                        Production Management is the backbone of any manufacturing operation. It involves planning, coordinating, and controlling all production activities to deliver high-quality goods—on time and within budget. With Manacle’s intelligent software solutions, production leaders gain real-time insights, enabling smarter decision-making and smoother workflows.
                    </p>
                    <h3 className="text-lg md:text-xl font-bold mb-3 text-primary leading-tight">
                        Key Features of Manacle’s Production Management System
                    </h3>
                    <ul className="flex flex-col gap-3">
                        {features.map((feature, idx) => (
                            <motion.li
                                key={feature.title}
                                className="flex items-start gap-3 bg-white/80 dark:bg-black/70 border border-glass-border rounded-xl p-4 shadow hover:shadow-lg hover:bg-primary/10 dark:hover:bg-primary/20 transition-all duration-300 cursor-default"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                            >
                                {feature.icon}
                                <div>
                                    <div className="font-semibold text-primary mb-0.5 leading-snug">{feature.title}</div>
                                    <div className="text-foreground/80 text-sm leading-relaxed">{feature.desc}</div>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
                {/* Animated Illustration (reused from HowHelpingCompanies) */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="w-full md:w-1/2 flex justify-center"
                >
                    <AnimatedDashboard />
                </motion.div>
            </div>
        </section>

        {/* Why Choose Section */}
        <section className="w-full flex flex-col items-center justify-center py-10 px-2 sm:px-6">
            <div className="max-w-5xl w-full mx-auto rounded-3xl bg-white/80 dark:bg-black/70 border border-glass-border shadow-2xl p-6 md:p-10 backdrop-blur-xl">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-2xl md:text-3xl font-extrabold text-left md:text-center mb-2 leading-tight"
                >
                    <span style={{ color: '#FF9800' }}>Why Our Clients</span> <span className="text-primary">Keep Coming Back</span>
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 mt-6">
                    {whyChoose.map((item, idx) => (
                        <motion.div
                            key={item.title}
                            className="group bg-white/90 dark:bg-black/80 border border-glass-border rounded-2xl shadow-xl hover:shadow-2xl hover:bg-primary/10 dark:hover:bg-primary/20 hover:border-orange-400 transition-all duration-300 p-6 flex flex-col items-center text-center hover:-translate-y-2 cursor-default"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                        >
                            {item.icon}
                            <h3 className="text-base md:text-lg font-bold mb-1 text-primary leading-snug group-hover:text-orange-500 transition-colors duration-300">{item.title}</h3>
                            <p className="text-sm text-foreground/80 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    </>
);

export default ProductionManagementSections;
