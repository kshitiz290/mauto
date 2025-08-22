export default function AppLoader() {
    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background text-foreground overflow-hidden">
            {/* subtle background gradient blobs to match site theme */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-500/10 via-fuchsia-600/10 to-transparent" />
            <div className="absolute -top-40 -right-20 w-[520px] h-[520px] bg-primary/20 blur-3xl rounded-full opacity-40" />

            {/* center content */}
            <div className="flex flex-col items-center">
                <div className="relative flex items-center justify-center opacity-0 animate-[fadeIn_.5s_ease-out_.05s_forwards]" aria-hidden>
                    {/* ring spinner */}
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-primary/25 border-t-primary animate-spin" />
                    {/* inner logo wordmark */}
                    <span className="absolute text-lg md:text-xl font-black bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent tracking-wider">
                        MANACLE
                    </span>
                </div>
                <div className="mt-4 text-sm md:text-base text-foreground/70 opacity-0 animate-[fadeUp_.5s_ease-out_.12s_forwards]">
                    Preparing your experience…
                </div>
            </div>

            {/* top progress shimmer */}
            <div className="pointer-events-none fixed left-0 right-0 top-0 h-1 bg-muted/40 overflow-hidden">
                <div className="h-full w-1/3 bg-primary/80 animate-[loaderSlide_1.2s_ease-in-out_infinite]" />
            </div>

            {/* keyframes for the sliding bar */}
            <style>{`
        @keyframes loaderSlide {
          0% { transform: translateX(-120%); }
          50% { transform: translateX(30%); }
          100% { transform: translateX(120%); }
        }
    @keyframes fadeIn { from { opacity: 0; transform: scale(.96) } to { opacity: 1; transform: scale(1) } }
    @keyframes fadeUp { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: translateY(0) } }
      `}</style>

            {/* a11y text */}
            <span className="sr-only">Loading…</span>
        </div>
    );
}
