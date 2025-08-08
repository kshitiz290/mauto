import { motion } from "framer-motion";

const features = [
    {
        title: "Custom Website Design",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
        desc: "Your website is your digital storefront. Our design experts create intuitive, mobile-optimized, and brand-aligned layouts that ensure a seamless user experience and strong visual impact."
    },
    {
        title: "Website Development",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        desc: "We develop high-performance websites using modern technologies and frameworks. Whether it’s a static website, dynamic CMS, or full-scale web application — we ensure fast loading, secure, and scalable solutions."
    },
    {
        title: "E-Commerce Development",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
        desc: "Launch your online store with powerful e-commerce platforms like Shopify, WooCommerce, or custom-built solutions. We focus on high-conversion design, secure payments, and smooth checkout processes."
    },
    {
        title: "CMS Integration",
        image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
        desc: "Easily manage your website with powerful content management systems like WordPress, Drupal, or a custom CMS—empowering your team to update content and images without needing technical expertise."
    },
    {
        title: "Responsive & Mobile-Friendly",
        image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80",
        desc: "Every website we build is responsive and mobile-friendly website adapts seamlessly to all screen sizes—desktops, tablets, and smartphones—ensuring a smooth user experience across devices."
    },
    {
        title: "SEO Performance Optimization",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
        desc: "Our development includes technical SEO performance optimization, best practices and speed optimization to help your rank better on Google and deliver a lightning-fast experience to users."
    }
];

const WebsiteDevelopmentFeatures = () => (
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
                    Website Design and Development Services
                </span>
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-base md:text-lg text-center text-foreground/70 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
                At Manacle Technologies, we offer comprehensive Website Design and Development Services tailored to meet your business goals. From concept to launch, we craft responsive, visually appealing, and user-friendly websites that elevate your brand and engage your audience.
            </motion.p>
            {/* Modern responsive card layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <motion.div
                        key={feature.title}
                        className="group bg-white/95 dark:bg-black/80 border border-glass-border rounded-2xl shadow-xl hover:shadow-2xl hover:bg-primary/10 dark:hover:bg-primary/20 hover:border-blue-400 transition-all duration-300 p-0 flex flex-col overflow-hidden cursor-default"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: idx * 0.08 }}
                    >
                        <div className="w-full h-44 overflow-hidden">
                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                        <div className="flex flex-col gap-2 p-6">
                            <h3 className="text-lg md:text-xl font-bold text-blue-700 dark:text-blue-400 mb-1 group-hover:text-pink-500 transition-colors duration-300">
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

export default WebsiteDevelopmentFeatures;
