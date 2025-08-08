import { useState, useEffect, useRef } from 'react'
import Footer from '@/components/ui/footer';
import { Header } from "@/components/ui/header";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { motion, useInView } from "framer-motion";

import DispatchManagementFeatures from '@/components/ui/dispatch_management_features';
import WeFocusQuality from '@/components/ui/we_focus_quality';
import Brochure from '@/components/ui/brochure';



const Dispatch_Management = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="codifye-theme">

            <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
                <Header />
                <main>
                    <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] min-h-[160px] flex items-center justify-center overflow-x-clip pt-32 bg-transparent">
                        {/* Animated floating shapes for light/dark theme */}
                        <div className="absolute left-10 top-1/2 -translate-y-1/2 w-36 h-36 bg-gradient-to-br from-primary/40 to-accent/30 rounded-full blur-3xl animate-float-slow z-0 mix-blend-lighten dark:mix-blend-normal" style={{ animationDelay: '0s' }} />
                        <div className="absolute right-20 top-10 w-20 h-20 bg-gradient-to-tr from-pink-400/40 to-purple-400/30 rounded-full blur-2xl animate-float-fast z-0 mix-blend-lighten dark:mix-blend-normal" style={{ animationDelay: '1.5s' }} />
                        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-80 h-16 bg-primary/20 rounded-full blur-2xl animate-float-medium z-0 mix-blend-lighten dark:mix-blend-normal" style={{ animationDelay: '2s' }} />
                        <div className="absolute right-32 bottom-0 w-16 h-16 bg-gradient-to-t from-yellow-400/40 to-orange-400/30 rounded-full blur-xl animate-float-fast z-0 mix-blend-lighten dark:mix-blend-normal" style={{ animationDelay: '2.5s' }} />

                        {/* Breadcrumb */}
                        <nav className="relative z-10 w-full max-w-7xl px-2 sm:px-10 flex items-center justify-center">
                            <div className="w-full">
                                <div className="rounded-2xl bg-white/70 dark:bg-black/70 backdrop-blur-2xl shadow-2xl border border-glass-border px-10 py-7 flex flex-wrap items-center justify-center gap-4 transition-colors duration-300">
                                    <div className="flex items-center gap-2 text-xl font-semibold">
                                        <svg className="w-8 h-8 text-primary mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4" /></svg>
                                        <span className="hidden sm:inline text-foreground/70 transition-colors duration-200">Home</span>
                                        <span className="inline sm:hidden">/</span>
                                    </div>
                                    <span className="mx-2 text-foreground/40 text-2xl font-light">/</span>
                                    <span className="text-primary font-bold text-xl tracking-wide transition-colors duration-200">Dispatch Management</span>
                                </div>
                            </div>
                        </nav>
                    </section>




                    <DispatchManagementFeatures />
                    <WeFocusQuality />
                    <Brochure />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    )
}

export default Dispatch_Management;