import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

type Props = {
    title?: string;
    subtitle?: string;
    note?: string;
};

export function InProgressSection({
    title = "We’re building something amazing",
    subtitle = "This section is in progress. Our team is crafting a great experience—check back soon!",
    note,
}: Props) {
    return (
        <section className="relative overflow-hidden py-20 md:py-28">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-500/10 via-fuchsia-600/10 to-transparent" />
            <div className="absolute -top-32 -right-24 w-[520px] h-[520px] bg-primary/20 blur-3xl rounded-full opacity-40" />
            <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/15 text-primary shadow-sm border border-primary/20 mb-6"
                    aria-hidden
                >
                    <Sparkles className="w-7 h-7" />
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
                    className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
                >
                    {title}
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
                    className="text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto"
                >
                    {subtitle}
                </motion.p>
                {note && (
                    <p className="mt-5 text-sm text-foreground/60">{note}</p>
                )}
            </div>
        </section>
    );
}

export default InProgressSection;
