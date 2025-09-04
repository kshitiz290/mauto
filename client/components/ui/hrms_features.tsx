import { motion } from "framer-motion";
import { Users, CalendarCheck2, FileText, TrendingUp, Settings2, BookOpenCheck, BadgePercent } from "lucide-react";

const features = [
    {
        title: "Employee Information Management",
        icon: <Users className="w-8 h-8 text-primary" />,
        points: [
            "A single place for profiles, documents, roles, and changes over time.",
            "Track job, compensation, and reporting with easy updates.",
            "Store reviews, goals, and notes so feedback isn’t lost.",
            "Keep compliance docs and acknowledgements organized."
        ],
        image: "solutions/employee.jpg"
    },
    {
        title: "Attendance & Leave Management",
        icon: <CalendarCheck2 className="w-8 h-8 text-primary" />,
        points: [
            "Daily, weekly, and monthly attendance at a glance.",
            "Easy leave requests and approvals on mobile or web.",
            "Geo‑fenced check‑ins where it matters.",
            "Works with payroll to reduce manual work.",
            "Timesheets and simple reporting for teams."
        ],
        image: "https://img.freepik.com/free-vector/people-calendar-time-management-concept_23-2148822826.jpg?t=st=1755719363~exp=1755722963~hmac=30818bf9725b8645c8a103558bc8b3f25bd1e663cff82fbb487f2e40b59474ba&w=740"
    },
    {
        title: "Recruitment & Onboarding",
        icon: <FileText className="w-8 h-8 text-primary" />,
        points: [
            "Post openings and track candidates in simple stages.",
            "Offer letters and joining docs handled digitally.",
            "Checklists for day‑1 — laptop, accounts, and team intros."
        ],
        image: "https://img.freepik.com/free-vector/flat-employment-agency-search-new-employees-hire_88138-802.jpg?t=st=1755719418~exp=1755723018~hmac=aeb543a00d4a55ea2f7a1bb3160f84153617fa0aff8923ddca384b8d3ef4bac8&w=740"
    },
    {
        title: "Payroll Management",
        icon: <BadgePercent className="w-8 h-8 text-primary" />,
        points: [
            "Pull attendance and leave data automatically.",
            "Accurate salary run with deductions and benefits.",
            "Payslips, compliance, and exports when you need them."
        ],
        image: "https://img.freepik.com/premium-vector/salary-payroll-system-vector-illustration_108061-2093.jpg?w=740"
    },
    {
        title: "Automate Processes for Efficiency",
        icon: <Settings2 className="w-8 h-8 text-primary" />,
        points: [
            "Reminders for reviews, renewals, and paperwork.",
            "Auto‑create tasks from approvals to keep work moving.",
            "Reduce copy‑paste across tools with simple integrations."
        ],
        image: "https://img.freepik.com/free-vector/cartoon-man-robot-sitting-laptops-workplace-together_74855-20052.jpg?t=st=1755719567~exp=1755723167~hmac=26446866b35972528683781864082c2d80e9c24ae885737187a1fc25c664f34f&w=740"
    },
    {
        title: "Training & Development",
        icon: <BookOpenCheck className="w-8 h-8 text-primary" />,
        points: [
            "Share learning plans and track skill progress.",
            "Record sessions, feedback, and certificates.",
            "Support e‑learning, workshops, and on‑the‑job coaching."
        ],
        image: "https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg?t=st=1755719614~exp=1755723214~hmac=a099604e77a6d80d04dfce4f760b62e2395cfb8d9ddb2cba5ebdaee0c55c2be2&w=740"
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
