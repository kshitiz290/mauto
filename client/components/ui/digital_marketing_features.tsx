import { motion } from "framer-motion";

const services = [
    {
        title: "Search Engine Optimization (SEO)",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        desc: "Improve your website’s visibility on Google and other search engines with advanced SEO strategies.",
        points: [
            "On-page & Off-page Optimization",
            "Technical SEO",
            "Keyword Research",
            "Local SEO"
        ]
    },
    {
        title: "Social Media Marketing (SMM)",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        desc: "Build a strong brand presence across platforms like Facebook, Instagram, LinkedIn, and Twitter.",
        points: [
            "Strategy and Content Creation",
            "Paid Advertising",
            "Engagement & Community Management",
            "Analytics & Reporting"
        ]
    },
    {
        title: "Email Marketing",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
        desc: "Stay connected with your audience and convert leads into customers through personalized email campaigns.",
        points: [
            "Campaign Strategy",
            "Email Design & Automation",
            "List Segmentation",
            "Performance Tracking"
        ]
    },
    {
        title: "Pay-Per-Click Advertising (PPC)",
        image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
        desc: "Drive instant traffic and leads with targeted ads on Google, Bing, Facebook, and more.",
        points: [
            "Google Ads & Bing Ads",
            "Display & Video Advertising",
            "Retargeting Campaigns",
            "ROI Tracking"
        ]
    },
    {
        title: "E-Commerce Marketing",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
        desc: "Boost your online store’s traffic and conversions with specialized marketing strategies.",
        points: [
            "Product Listing Optimization",
            "Shopping Ads",
            "Cart Abandonment Campaigns",
            "Conversion Rate Optimization"
        ]
    },
    {
        title: "Content Marketing",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        desc: "Improve your website’s visibility on Google and other search engines with advanced SEO strategies.",
        points: [
            "Blog Writing",
            "Infographics",
            "Video Content",
            "Whitepapers & Case Studies"
        ]
    }
];

const DigitalMarketingFeatures = () => (
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
                    Full-Manage Service Digital Agency providing growth Manacle Technologies Pvt Ltd
                </span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-base md:text-lg text-center text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
                Grow your business online with our result-driven digital marketing solutions. At Manacle, we offer a comprehensive suite of digital marketing services designed to enhance your online presence, attract the right audience, and boost your ROI.
            </motion.p>
            {/* Responsive, alternating image-feature layout (not grid) */}
            <div className="flex flex-col gap-12">
                {services.map((service, idx) => (
                    <motion.div
                        key={service.title}
                        className={`group flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-16 bg-white/95 dark:bg-black/80 border border-glass-border rounded-3xl shadow-xl hover:shadow-2xl hover:bg-primary/10 dark:hover:bg-primary/20 hover:border-orange-400 transition-all duration-300 p-6 md:p-10 cursor-default`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                    >
                        <div className="w-full md:w-1/3 flex justify-center items-center mb-4 md:mb-0">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="rounded-2xl shadow-lg w-full max-w-xs object-cover aspect-[4/3] border border-orange-100 dark:border-orange-900 bg-white/80 dark:bg-black/60"
                                loading="lazy"
                            />
                        </div>
                        <div className="w-full md:w-2/3 flex flex-col items-start">
                            <h3 className="text-xl md:text-2xl font-bold text-primary leading-tight group-hover:text-orange-500 transition-colors duration-300 drop-shadow-md mb-2">
                                {service.title}
                            </h3>
                            <p className="text-sm md:text-base text-foreground/80 leading-relaxed mb-2">
                                {service.desc}
                            </p>
                            <ul className="text-sm md:text-base text-foreground/80 leading-relaxed flex flex-col gap-2 pl-2">
                                {service.points.map((point, i) => (
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

export default DigitalMarketingFeatures;
