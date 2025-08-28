import { Header } from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '../../components/ui/theme-provider';

export default function CRMSoftwareFundamentals() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="manacle_theme">
            <div className="min-h-screen flex flex-col bg-background text-foreground">
                <Header />
                <article className="pt-40 pb-24 max-w-4xl mx-auto px-6 lg:px-8">
                    <motion.header initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="mb-12 text-center">
                        <p className="text-xs uppercase tracking-wider font-semibold text-primary mb-4">CRM • Strategy</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">CRM Software Fundamentals: Building Stronger Customer Relationships</h1>
                        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">A concise primer on what a CRM does, why adoption matters, and the essential modules modern teams start with.</p>
                        <div className="mt-6 text-sm text-foreground/60 font-medium">Aug 21, 2025 • 6 min read</div>
                    </motion.header>
                    <div className="prose prose-invert max-w-none prose-headings:font-bold prose-p:leading-relaxed prose-a:text-primary hover:prose-a:underline prose-img:rounded-xl">
                        <p>Customer Relationship Management (CRM) software is the operating system for scaling repeatable, personalized engagement across marketing, sales and post‑sale service. At its core, a CRM unifies interaction history so every touch point compounds rather than resets context.</p>
                        <h2>Core Objectives</h2>
                        <ul>
                            <li>Centralize all account & contact data</li>
                            <li>Track pipeline & revenue progression in real time</li>
                            <li>Automate routine follow‑ups & lead qualification</li>
                            <li>Surface actionable insights (win rates, cycle length, churn risk)</li>
                        </ul>
                        <h2>Foundational Modules</h2>
                        <ol>
                            <li><strong>Contact & Account Management</strong> – the single source of truth for people & organizations.</li>
                            <li><strong>Pipeline / Opportunity Tracking</strong> – visual progression with weighted forecasting.</li>
                            <li><strong>Activity & Task Automation</strong> – reminders, sequences, SLA adherence.</li>
                            <li><strong>Reporting & Dashboards</strong> – conversion funnels, cohort analysis, revenue attribution.</li>
                        </ol>
                        <h2>Adoption Tips</h2>
                        <p>Start lean: define one clear pipeline, standardize deal stages, and enforce that “if it’s not in the CRM it didn’t happen.” Layer automation only after consistent manual usage patterns emerge.</p>
                        <p>In future posts we will explore data hygiene frameworks, integration patterns, and calculating ROI of CRM automation.</p>
                        <p><em>Want deeper guidance?</em> <Link to="/contact-us">Talk to our team</Link> about tailoring CRM workflows to your organization.</p>
                    </div>
                    <div className="mt-16 flex justify-center">
                        <Link to="/blogs" className="text-sm font-semibold text-primary hover:underline">← Back to all blogs</Link>
                    </div>
                </article>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
