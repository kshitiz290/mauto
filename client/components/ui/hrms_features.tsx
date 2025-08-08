import { motion } from "framer-motion";
import { Users, CalendarCheck2, FileText, TrendingUp, Settings2, BookOpenCheck, BadgePercent } from "lucide-react";

const features = [
    {
        title: "Employee Information Management",
        icon: <Users className="w-8 h-8 text-primary" />,
        points: [
            "Manage all employee profiles.",
            "Documents and job roles.",
            "Lifecycle events in one secure, centralized location.",
            "Job & Compensation Details.",
            "Performance & Evaluation.",
            "Compliance and Legal."
        ],
        image: "solutions/employee.jpg"
    },
    {
        title: "Attendance & Leave Management",
        icon: <CalendarCheck2 className="w-8 h-8 text-primary" />,
        points: [
            "Attendance Daily, Weekly & Monthly.",
            "App-based Leave Requests & Approvals.",
            "Geo-fenced Attendance Control.",
            "Integration with Payroll.",
            "Clock-in/Clock-out Systems.",
            "Timesheet Management.",
            "Reporting and Analytics."
        ],
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "Recruitment & Onboarding",
        icon: <FileText className="w-8 h-8 text-primary" />,
        points: [
            "Attendance Daily, Weekly & Monthly.",
            "App-based Leave Requests & Approvals.",
            "Geo-fenced Attendance Control.",
            "Integration with Payroll.",
            "Clock-in/Clock-out Systems.",
            "Timesheet Management.",
            "Reporting and Analytics."
        ],
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "Payroll Management",
        icon: <BadgePercent className="w-8 h-8 text-primary" />,
        points: [
            "Employee Information.",
            "Time Tracking.",
            "Salary Calculation.",
            "Deductions & Benefit Keeping Maintain.",
            "Payroll Processing.",
            "Tax Filing & Reporting.",
            "Payroll Disbursement."
        ],
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "Automate Processes for Efficiency",
        icon: <Settings2 className="w-8 h-8 text-primary" />,
        points: [
            "Streamline Operations with Smart Automation.",
            "Boost Efficiency by Automating Routine Tasks.",
            "Automate to Eliminate Manual Errors and Save Time.",
            "Drive Productivity with Process Automation.",
            "Transform Workflows with Intelligent Automation."
        ],
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
    },
    {
        title: "Training & Development",
        icon: <BookOpenCheck className="w-8 h-8 text-primary" />,
        points: [
            "Organize training programs.",
            "Track employee skills.",
            "Development Initiatives Leadership.",
            "Learning Methods.",
            "Training Programs Technical and Soft Skills.",
            "Development Initiatives Leadership.",
            "Learning Methods: e-Learning, Workshops."
        ],
        image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80"
    }
];

const HRMSFeatures = () => (
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
                    Smarter HR Starts Here <span className="text-blue-700 dark:text-blue-400">(HRMS)</span>
                </span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-base md:text-lg text-center text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
                Manacle Technologies is your all-in-one Human Resource Management System designed to simplify HR processes, boost employee engagement, and drive business growth. Whether you’re managing a team of 10 or 10,000, our scalable and cloud-based HRMS helps you manage your people with precision and care — all in real time.
            </motion.p>
            {/* Responsive alternating image-feature layout */}
            <div className="flex flex-col gap-12">
                {features.map((feature, idx) => (
                    <motion.div
                        key={feature.title}
                        className={`group flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-16 bg-white/95 dark:bg-black/80 border border-glass-border rounded-3xl shadow-xl hover:shadow-2xl hover:bg-primary/10 dark:hover:bg-primary/20 hover:border-orange-400 transition-all duration-300 p-6 md:p-10 cursor-default`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                    >
                        <div className="w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="rounded-2xl shadow-lg w-full max-w-xs object-cover aspect-[4/3] border border-orange-100 dark:border-orange-900 bg-white/80 dark:bg-black/60"
                                loading="lazy"
                            />
                        </div>
                        <div className="w-full md:w-2/3 flex flex-col items-start">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange-100 via-yellow-100 to-pink-100 dark:from-orange-900 dark:via-yellow-900 dark:to-pink-900 shadow-lg">
                                    {feature.icon}
                                </span>
                                <h3 className="text-xl md:text-2xl font-bold text-primary leading-tight group-hover:text-orange-500 transition-colors duration-300 drop-shadow-md">
                                    {feature.title}
                                </h3>
                            </div>
                            <ul className="text-sm md:text-base text-foreground/80 leading-relaxed flex flex-col gap-2 pl-2">
                                {feature.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-orange-400 mt-1 text-base">✔</span>
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default HRMSFeatures;
