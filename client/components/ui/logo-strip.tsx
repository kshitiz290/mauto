import { Fragment, useEffect, useRef } from 'react';

const LogoStrip = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = scrollRef.current;
        if (!element) return;

        let animationId: number;
        let currentTranslateX = 0;

        // Responsive speed based on screen size and orientation
        const getAnimationSpeed = () => {
            const isPortrait = window.matchMedia('(orientation: portrait)').matches;
            const isLargeScreen = window.innerWidth >= 1024;

            if (isPortrait && isLargeScreen) {
                return 0.005; // Very slow speed for large portraits (slower)
            } else if (isPortrait) {
                return 0.015; // Medium speed for regular portraits (slower)
            } else {
                return 0.020; // Faster speed for landscape (slower)
            }
        };

        const animate = () => {
            const speed = getAnimationSpeed();

            // Continuously move left
            currentTranslateX -= speed;

            // Reset seamlessly when we've moved exactly 1/3 of total width (-33.333%)
            // This ensures we move exactly 2 logo sets before resetting, creating perfect seamless loop
            if (currentTranslateX <= -33.333333) {
                currentTranslateX = 0; // Reset to start position for perfect seamless loop
            }

            // Apply the transform directly with hardware acceleration
            element.style.transform = `translate3d(${currentTranslateX}%, 0, 0)`;

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, []);

    const logos = [
        { src: "/clients/haldirams_logo.png", alt: "Haldirams" },
        { src: "/clients/baidyanath_logo.png", alt: "Baidyanath" },
        { src: "/clients/havmor_logo.png", alt: "Havmor" },
        { src: "/clients/dsgroup_logo.png", alt: "DS Group" },
        { src: "/clients/gcfoods_logo.png", alt: "GC Foods" },
        { src: "/clients/Bambino_Logo.png", alt: "Bambino" },
        { src: "/clients/maxbeverages.png", alt: "Max Beverages" },
        { src: "/clients/flemingofood_logo.png", alt: "Flemingo Food" },
        { src: "/clients/Cloud9beverages_logo.png", alt: "Cloud9 Beverages" },
        { src: "/clients/HBL_logo.png", alt: "HBL" },
        { src: "/clients/aakash_namkeen_logo.png", alt: "Aakash Namkeen" },
        { src: "/clients/mahesh_namkeen_logo.png", alt: "Mahesh Namkeen" },
        { src: "/clients/mantra_logo.png", alt: "Mantra" },
        { src: "/clients/btw_logo.png", alt: "BTW" },
        { src: "/clients/finegrow_logo.png", alt: "Finegrow", invertInDark: true },
        { src: "/clients/inforcare_logo.png", alt: "Infocare", invertInDark: true },
        { src: "/clients/aeris_logo.png", alt: "Aeris", invertInDark: true },
        { src: "/clients/hindkush_logo.png", alt: "Hindkush", invertInDark: true },
        { src: "/clients/3p_logo.png", alt: "3P" },
        { src: "/clients/aipl_logo.png", alt: "AIPL" }
    ];

    // Helper function to get logo classes with dark theme inversion
    const getLogoClasses = (logo: typeof logos[0]) => {
        const baseClasses = "h-10 md:h-12 lg:h-14 lp:h-16 w-auto opacity-80 brightness-110 flex-shrink-0";
        if (logo.invertInDark) {
            return `${baseClasses} dark:invert`;
        }
        return baseClasses;
    };

    return (
        <div className="w-full overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/30 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 py-4 md:py-6 lg:py-8">
            {/* Heading */}
            <div className="text-center mb-4 md:mb-6 lg:mb-8">
                <h3 className="text-sm md:text-xl lg:text-2xl font-semibold text-foreground/70 mb-2">
                    Trusted by Leading Brands
                </h3>
            </div>

            {/* Logo Strip Container */}
            <div className="relative h-16 md:h-18 lg:h-20 lp:h-24 overflow-hidden edge-fade-x">
                {/* Infinite Scrolling Strip */}
                <div
                    ref={scrollRef}
                    className="items-center gap-6 md:gap-8 lg:gap-10 lp:gap-12"
                    style={{
                        display: 'flex',
                        width: '600%', // 6 sets of logos for seamless infinite loop
                        transform: 'translate3d(0%, 0, 0)'
                    }}
                >
                    {/* First Set */}
                    {logos.map((logo, index) => (
                        <img
                            key={`set1-${index}`}
                            src={logo.src}
                            alt={logo.alt}
                            className={getLogoClasses(logo)}
                            loading="lazy"
                        />
                    ))}

                    {/* Second Set */}
                    {logos.map((logo, index) => (
                        <img
                            key={`set2-${index}`}
                            src={logo.src}
                            alt=""
                            className={getLogoClasses(logo)}
                            loading="lazy"
                            aria-hidden="true"
                        />
                    ))}

                    {/* Third Set */}
                    {logos.map((logo, index) => (
                        <img
                            key={`set3-${index}`}
                            src={logo.src}
                            alt=""
                            className={getLogoClasses(logo)}
                            loading="lazy"
                            aria-hidden="true"
                        />
                    ))}

                    {/* Fourth Set - for ultra smooth transition */}
                    {logos.map((logo, index) => (
                        <img
                            key={`set4-${index}`}
                            src={logo.src}
                            alt=""
                            className={getLogoClasses(logo)}
                            loading="lazy"
                            aria-hidden="true"
                        />
                    ))}

                    {/* Fifth Set */}
                    {logos.map((logo, index) => (
                        <img
                            key={`set5-${index}`}
                            src={logo.src}
                            alt=""
                            className={getLogoClasses(logo)}
                            loading="lazy"
                            aria-hidden="true"
                        />
                    ))}

                    {/* Sixth Set */}
                    {logos.map((logo, index) => (
                        <img
                            key={`set6-${index}`}
                            src={logo.src}
                            alt=""
                            className={getLogoClasses(logo)}
                            loading="lazy"
                            aria-hidden="true"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoStrip;
