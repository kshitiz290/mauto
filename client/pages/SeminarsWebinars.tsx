import { Header } from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { ThemeProvider } from '../components/ui/theme-provider';
import InProgressSection from '@/components/ui/in-progress-section';

export default function SeminarsWebinars() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="codifye-theme">
            <div className="min-h-screen flex flex-col bg-background text-foreground">
                <Header />
                <section className="relative min-h-[50svh] flex items-center justify-center text-center overflow-hidden">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-500/10 via-purple-600/10 to-transparent" />
                    <div className="max-w-6xl mx-auto px-6 lg:px-10">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Seminars & Webinars</h1>
                        <p className="text-foreground/70 text-lg md:text-xl max-w-3xl mx-auto">Live learning and community sessions—product deep dives, best practices, and real‑world case studies.</p>
                    </div>
                </section>
                <InProgressSection note="We’re scheduling the first batch of sessions. Save this page for updates." />
                <Footer />
            </div>
        </ThemeProvider>
    );
}
