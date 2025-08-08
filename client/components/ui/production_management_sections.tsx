
import { motion } from 'framer-motion';
import { BarChart2, Settings, FileText, Layers, Link2, Smartphone } from 'lucide-react';
import AnimatedDashboard from './AnimatedDashboard';

const features = [
    {
        icon: <BarChart2 className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1" />,
        title: 'Real-Time Production Tracking',
        desc: 'Monitor every stage of production, from raw material input to finished goods, with live updates and performance analytics.'
    },
    {
        icon: <Settings className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1" />,
        title: 'Resource Optimization',
        desc: 'Reduce waste, manage inventory smartly, and allocate manpower efficiently.'
    },
    {
        icon: <FileText className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1" />,
        title: 'Automated Reporting',
        desc: 'Generate reports on productivity, downtime, machine usage, and more—with just a few clicks.'
    },
    {
        icon: <Layers className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1" />,
        title: 'Custom Workflow Design',
        desc: 'Tailor production stages and workflows to suit your business needs.'
    },
    {
        icon: <Link2 className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1" />,
        title: 'Integration with ERP & SCM',
        desc: 'Seamless integration with your existing systems for complete operational control.'
    },
    {
        icon: <Smartphone className="w-7 h-7 text-orange-500 flex-shrink-0 mt-1" />,
        title: 'Mobile Access',
        desc: 'Manage production on the go with mobile-friendly dashboards and alerts.'
    }
];

const whyChoose = [
    {
        icon: <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Industry" className="w-12 h-12 mx-auto mb-2" />,
        title: 'Industry Solutions',
        desc: 'Whether you’re in textiles, electronics, pharmaceuticals, or FMCG, we provide customized tools suited for your sector.'
    },
    {
        icon: <img src="https://cdn-icons-png.flaticon.com/512/2906/2906279.png" alt="Insights" className="w-12 h-12 mx-auto mb-2" />,
        title: 'Data-Driven Insights',
        desc: 'Unlock actionable intelligence to improve lead times, reduce costs, and boost production capacity.'
    },
    {
        icon: <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="User Interface" className="w-12 h-12 mx-auto mb-2" />,
        title: 'User-Friendly Interface',
        desc: 'Intuitive dashboards for both floor supervisors and senior management.'
    },
    {
        icon: <img src="https://cdn-icons-png.flaticon.com/512/845/845646.png" alt="Cloud" className="w-12 h-12 mx-auto mb-2" />,
        title: 'Cloud-Based & Scalable',
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
                        We offer cutting-edge Production Management solutions tailored to help manufacturing units, factories, and supply chains stay ahead of operational challenges. Our technology-driven approach enhances visibility, reduces downtime, and ensures that every production milestone is met with precision and efficiency.
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
                    <span style={{ color: '#FF9800' }}>Why Choose</span> <span className="text-primary">Manacle</span> for Production Management?
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
