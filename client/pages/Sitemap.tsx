import { Link } from 'react-router-dom';

// Human-friendly HTML sitemap page inspired by large tech sites
export default function Sitemap() {
    const sections: { title: string; links: { href: string; label: string }[] }[] = [
        {
            title: 'Company',
            links: [
                { href: '/', label: 'Home' },
                { href: '/about-us', label: 'About Us' },
                { href: '/contact-us', label: 'Contact Us' },
                { href: '/privacy-policy', label: 'Privacy Policy' },
                { href: '/faqs', label: 'FAQs' },
            ],
        },
        {
            title: 'Solutions',
            links: [
                { href: '/sales-force-automation', label: 'Sales Force Automation' },
                { href: '/visual-merchandising', label: 'Visual Merchandising' },
                { href: '/attendance-leave-management', label: 'Attendance & Leave Management' },
                { href: '/order-management-solution', label: 'Order Management Solution' },
                { href: '/distributor-management-solution', label: 'Distributor Management Solution' },
                { href: '/field-force-tracking', label: 'Field Force Tracking' },
                { href: '/merchandising-retail-execution', label: 'Merchandising & Retail Execution' },
                { href: '/expenses-claims-management', label: 'Expenses & Claims Management' },
                { href: '/retailer-management-solution', label: 'Retailer Management Solution' },
                { href: '/sales-activity-management', label: 'Sales Activity Management' },
                { href: '/purchase-order-management', label: 'Purchase Order Management' },
                { href: '/store-management-software', label: 'Store Management Software' },
                { href: '/production-management', label: 'Production Management' },
                { href: '/packing-management', label: 'Packing Management' },
                { href: '/demand-generation', label: 'Demand Generation' },
                { href: '/invoice-generation-solution', label: 'Invoice Generation Solution' },
                { href: '/dispatch-management', label: 'Dispatch Management' },
                { href: '/plant-management', label: 'Plant Management' },
                { href: '/hrms', label: 'HRMS' },
                { href: '/website-development-services', label: 'Website Development Services' },
                { href: '/crm-software', label: 'CRM Software' },
                { href: '/digital-marketing-services', label: 'Digital Marketing Services' },
                { href: '/whatsapp-ordering-system', label: 'WhatsApp Ordering System' },
            ],
        },
        {
            title: 'Resources',
            links: [
                { href: '/blogs', label: 'Blogs' },
                { href: '/blogs/crm-software-fundamentals', label: 'Blog: CRM Software Fundamentals' },
                { href: '/blogs/dispatch-automation-fundamentals', label: 'Blog: Dispatch Automation Fundamentals' },
                { href: '/podcasts', label: 'Podcasts' },
                { href: '/seminars-webinars', label: 'Seminars & Webinars' },
            ],
        },
    ];

    return (
        <main className="min-h-screen">
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <header className="mb-12 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Sitemap</h1>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Explore all sections of our website. For XML version used by search engines, visit{' '}
                            <a className="text-primary hover:underline" href="/sitemap.xml">/sitemap.xml</a>.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sections.map((section) => (
                            <div key={section.title} className="bg-card border border-border rounded-2xl p-6">
                                <h2 className="text-xl font-semibold text-foreground mb-4">{section.title}</h2>
                                <ul className="space-y-2">
                                    {section.links.map((link) => (
                                        <li key={link.href}>
                                            <Link to={link.href} className="text-foreground/80 hover:text-primary transition-colors">
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
