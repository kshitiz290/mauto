import { Header } from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import { ThemeProvider } from '../../components/ui/theme-provider';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

// NOTE: Replace placeholder paragraphs with your full self‑written blog content.

const sections = [
    { id: 'intro', title: 'Intro' },
    { id: 'streamlined-order-allocation', title: 'Streamlined Order Allocation' },
    { id: 'real-time-delivery-tracking', title: 'Real-Time Delivery Tracking for Transparency' },
    { id: 'cost-savings-route-planning', title: 'Cost-Savings Delivery Route Planning' },
    { id: 'centralised-inventory-dispatch', title: 'Centralised Inventory and Dispatch Management' },
    { id: 'optimised-fleet-courier', title: 'Optimised Fleet and Courier Management' },
    { id: 'dispatch-software-30-cost-reduction', title: 'How Dispatch Management Software Cut Down Logistics Costs by a Margin of 30%!' },
    { id: 'final-thoughts', title: 'Final Thoughts' }
];

const DispatchFundamentals = () => {
    const [activeId, setActiveId] = useState<string>('intro');
    const [progress, setProgress] = useState(0);

    // Reading progress only
    useEffect(() => {
        const onScroll = () => {
            const doc = document.documentElement;
            const scrolled = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
            setProgress(scrolled);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Robust scroll spy using IntersectionObserver so up/down scrolling feels smooth
    useEffect(() => {
        const sectionEls = sections
            .map(s => document.getElementById(s.id))
            .filter(Boolean) as HTMLElement[];

        if (!sectionEls.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter(e => e.isIntersecting);
                if (visible.length) {
                    // Prefer the one most visible in the viewport
                    const top = visible.reduce((prev, curr) =>
                        curr.intersectionRatio > prev.intersectionRatio ? curr : prev
                    );
                    const id = (top.target as HTMLElement).id;
                    setActiveId(id);
                } else {
                    // Fallback: choose the section closest to the middle
                    const mid = window.innerHeight / 2;
                    let closestId = activeId;
                    let closestDist = Infinity;
                    for (const el of sectionEls) {
                        const rect = el.getBoundingClientRect();
                        const center = rect.top + rect.height / 2;
                        const dist = Math.abs(center - mid);
                        if (dist < closestDist) {
                            closestDist = dist;
                            closestId = el.id;
                        }
                    }
                    setActiveId(closestId);
                }
            },
            {
                root: null,
                // Favor the middle of the viewport: when a section's center enters this band, it becomes active
                rootMargin: '-35% 0px -45% 0px',
                threshold: [0.15, 0.35, 0.6, 0.85]
            }
        );

        sectionEls.forEach(el => observer.observe(el));
        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ThemeProvider defaultTheme="dark" storageKey="codifye-theme">
            <div className="min-h-screen flex flex-col bg-background text-foreground">
                <Header />

                {/* Hero */}
                <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-500/10 via-fuchsia-600/10 to-transparent" />
                    <div className="absolute -top-40 -right-24 w-[520px] h-[520px] bg-primary/20 blur-3xl rounded-full opacity-40" />
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <motion.div initial={{ opacity: 0, y: 48 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="text-center">
                            <p className="text-xs uppercase tracking-wider font-semibold text-primary mb-5">Dispatch • Operations</p>
                            <h1 className="font-extrabold leading-tight mb-3 text-[clamp(1.25rem,6.4vw,2rem)] sm:text-4xl md:text-5xl">
                                <span className="block whitespace-nowrap">From Chaos to Control:</span>
                                <span className="block">Why Dispatch Automation <span className="block sm:inline">Wins</span></span>
                            </h1>
                            <div className="text-sm md:text-base font-semibold text-foreground/70 mb-6">By Apoorv Mohan</div>
                            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-medium">
                                A practical deep dive into modern dispatch automation—how it removes bottlenecks, boosts service reliability and makes operations scalable.
                            </p>
                            <div className="mt-6 text-sm text-foreground/50 font-medium">Aug 21, 2025 • 6 min read</div>
                        </motion.div>
                    </div>
                    {/* Reading progress bar */}
                    <div className="fixed left-0 top-0 h-1 bg-primary/70 z-40 transition-all" style={{ width: `${progress}%` }} />
                </section>

                {/* Article Layout */}
                <div className="flex-1 w-full">
                    <div className="relative max-w-7xl mx-auto px-6 lg:px-10 flex gap-10">
                        {/* Sidebar TOC (desktop) */}
                        <nav className="hidden lg:block w-60 pt-4 pb-24 sticky top-36 self-start">
                            <ul className="space-y-2 text-sm">
                                {sections.map(s => (
                                    <li key={s.id}>
                                        <a
                                            href={`#${s.id}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                const el = document.getElementById(s.id);
                                                if (el) {
                                                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                                    // optional: update URL hash without jump
                                                    window.history.replaceState(null, '', `#${s.id}`);
                                                }
                                            }}
                                            className={
                                                'block rounded-md px-3 py-2 transition-colors ' +
                                                (activeId === s.id
                                                    ? 'bg-primary/10 text-primary'
                                                    : 'text-foreground/60 hover:text-foreground hover:bg-muted/30')
                                            }
                                        >
                                            {s.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        {/* Article */}
                        <article className="prose prose-invert max-w-none flex-1 pb-28">
                            <style>{`
                            .prose :where(h2,h3){scroll-margin-top:40vh}
                            .prose h2{font-weight:800;letter-spacing:-.01em;margin-bottom:1rem}
                            .prose h3{font-weight:700;margin-top:2.2rem}
                            .prose p{line-height:1.72}
                            .prose section + section{margin-top:3.75rem}
                            @media (min-width:1024px){.prose section + section{margin-top:4.5rem}}
                            .prose ul>li{margin-top:.45rem;margin-bottom:.45rem}
              `}</style>
                            <section id="intro">
                                <h2 className="!mb-4">Intro</h2>
                                <p>In today's fast-paced digital world, a logistics company's speed and accuracy determine
                                    whether it's winning or not. No matter if you're running a tiny courier business or a huge
                                    distribution company, dispatch management is usually an essential part that keeps
                                    everything running smoothly, manual stuff always needing to sync up, and random hold-ups
                                    make sending things out a bit tricky and pricey. This is where logistics automation and smart
                                    dispatch systems change the game for how businesses run things. Thanks to digital logistics
                                    platforms, companies can now automate stuff like optimising routes, keeping an eye on
                                    deliveries, assigning orders, and managing fleets, saving cash and making customers
                                    happier. Turns out, good dispatch management software can cut logistics costs by up to 30%<br />
                                    Let's see how automation boosts efficiency and why businesses across the board are
                                    jumping on automated dispatch systems for their workflows.</p>
                            </section>
                            <section id="streamlined-order-allocation">
                                <h2>Streamlined Order Allocation</h2>
                                <p>Manual order assignments always lead to inefficiencies; either the trucks sit idle, or drivers
                                    end up in the wrong delivery zones. Order fulfilment and delivery management software
                                    together nail the perfect driver-to-route matchup on their own when figuring out stuff like how
                                    big the package is, where the customer is, and how much the vehicle can carry. All that info
                                    gets summed up live; this cuts down on staff and keeps things moving on time.</p>
                            </section>
                            <section id="real-time-delivery-tracking">
                                <h2>Real-Time Delivery Tracking for Transparency</h2>
                                <p>Today's customers want to see stuff, you know? If they can track their pizza, they'll expect
                                    the same for pricey shipments with logistics tracking software and live tracking. Both
                                    companies and customers can see exactly where every package is on its journey.
                                    This transparency helps reduce customer questions and builds confidence. Logistics peeps
                                    get ahead by spotting issues early, like if a shipment's late, they can switch it up or shuffle
                                    things around when things get unexpectedly jammed up, getting real-time insights upgrades
                                    how we connect with clients and boosts their happiness scores.</p>
                            </section>
                            <section id="cost-savings-route-planning">
                                <h2>Cost-Savings Delivery Route Planning</h2>
                                <p>If you don't plan your routes smartly, fuel costs and delivery times can skyrocket a digitally
                                    advanced dispatch system figures out the quickest and cheapest paths for deliveries for a
                                    fleet that's juggling hundreds of deliveries a day, this cuts down on travel time and saves on
                                    fuel costs big time in city areas where getting packages to the final stop is key, smart route
                                    planning helps companies dodge traffic jams and make sure drivers hit their delivery
                                    deadlines. Over time, businesses can save up to 30% on their running costs just by getting
                                    their routes smarter.</p>
                            </section>
                            <section id="centralised-inventory-dispatch">
                                <h2>Centralised Inventory and Dispatch Management</h2>
                                <p>If you don't plan your routes smartly, fuel costs and delivery times can skyrocket a digitally
                                    advanced dispatch system figures out the quickest and cheapest paths for deliveries for a
                                    fleet that's juggling hundreds of deliveries a day, this cuts down on travel time and saves on
                                    fuel costs big time in city areas where getting packages to the final stop is key, smart route
                                    planning helps companies dodge traffic jams and make sure drivers hit their delivery
                                    deadlines. Over time, businesses can save up to 30% on their running costs just by getting
                                    their routes smarter.</p>
                            </section>
                            <section id="optimised-fleet-courier">
                                <h2>Optimised Fleet and Courier Management</h2>
                                <p>For businesses with a bunch of delivery trucks, having a fleet management system is key to
                                    keeping things running smoothly and efficiently. Courier dispatch software lets managers
                                    keep track of which vehicles are free, watch how much fuel they're using, and check out the
                                    state of drivers. Using predictive analytics, companies can plan for vehicle maintenance
                                    ahead of time, avoiding expensive breakdowns and keeping things running smoothly. This
                                    automation converts basic data into useful inputs, giving logistics teams the edge to keep
                                    things simple and cut down on risks.</p>
                            </section>
                            <section id="dispatch-software-30-cost-reduction">
                                <h2>How Dispatch Management Software Cut Down Logistics Costs by a Margin of 30%!</h2>
                                <p>Companies shell out a ton of cash on doing stuff by hand, messing up resources, and slow deliveries. By going with automated dispatch software, businesses cut out the old-school manual work, save resources, and use digital logistics for precise tasks.</p>
                                <p>Here’s how automation contributes directly to cost reduction:</p>
                                <ul className="not-prose space-y-2 my-3">
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 inline-block w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/15" />
                                        <span>Lower fuel consumption due to optimised routes.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 inline-block w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/15" />
                                        <span>Reduced workforce requirements for scheduling and coordination.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 inline-block w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/15" />
                                        <span>Fewer delivery delays and penalties.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 inline-block w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/15" />
                                        <span>Better vehicle utilisation through intelligent fleet management systems.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="mt-1.5 inline-block w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/15" />
                                        <span>Better order accuracy because the software and dispatch systems are always in sync in real-time.</span>
                                    </li>
                                </ul>
                                {/* Visual summary of the key cost levers – responsive and theme‑friendly */}
                                <figure className="not-prose my-8">
                                    <img
                                        src="/blogs_thumbs/dispatch_blog_image.jpeg"
                                        alt="Dispatch automation benefits: lower fuel usage, fewer delays and penalties, reduced scheduling effort, and better fleet utilisation"
                                        loading="lazy"
                                        decoding="async"
                                        width="1200"
                                        height="800"
                                        sizes="(min-width: 1024px) 768px, 100vw"
                                        className="block w-full max-w-3xl mx-auto h-auto object-contain rounded-xl shadow-sm max-h-64 sm:max-h-72 md:max-h-80 lg:max-h-96"
                                    />
                                    <figcaption className="mt-3 text-center text-sm text-foreground/60">Key cost-saving levers of dispatch automation</figcaption>
                                </figure>
                                <p>Over time, these savings add up to big profit margins and also make the customer experience better.</p>
                                <p>The Broader Benefits of Automating Dispatch Operations using a solid delivery management system aren't just about saving money; it totally changes how efficiently everything runs in the supply chain. Here are the top five benefits businesses experience:.</p>
                                <p>Companies get their deliveries done quicker and way better than customers hoped for, thanks to smart route planning and automation.</p>
                                <p>Scalable Operations – No matter if you're managing just a handful of deliveries or a whole fleet, an automated dispatch system grows with you without a hitch. Automation cuts down on human mistakes by taking over the data entry and messaging stuff, which means less risk, better customer happiness, and real-time tracking of where your stuff is, keeping things clear and making customers stick around.</p>
                                <p>Smarter resource allocation from vehicles to wareh</p>
                            </section>
                            <section id="final-thoughts">
                                <h2>Final Thoughts</h2>
                                <p>As online shopping and quick delivery on the go are on the up, smooth dispatch
                                    management is a must-have now. Businesses that don't keep up with changes are gonna
                                    see their costs go up, unhappy customers, and all sorts of problems that slow them down.
                                    The key to resolving this is to go all in on future-proofing with logistics automation, think
                                    dispatch systems, delivery software, and tracking tools. Automation's not just a luxury; it's a
                                    necessity for staying ahead in last-mile delivery, inventory, and dispatch management.
                                    Businesses aiming to slash logistics costs, ramp up efficiency, and win over customers
                                    should seriously consider getting an automated dispatch system ASAP.</p>
                            </section>
                            {/* CTA */}
                            <section className="mt-24 not-prose rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-10 relative overflow-hidden">
                                <div className="absolute -right-20 -top-20 w-72 h-72 bg-primary/20 blur-3xl rounded-full opacity-40" />
                                <div className="relative">
                                    <h2 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">Know More About Our Dispatch Management</h2>
                                    <p className="text-foreground/70 max-w-2xl mb-6 leading-relaxed">
                                        Explore how our Dispatch Management solution optimizes allocation, boosts on‑time performance and gives real‑time operational clarity.
                                    </p>
                                    <Link
                                        to="/dispatch-management"
                                        className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground font-semibold px-6 py-3 text-sm shadow-md hover:shadow-lg hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                                    >
                                        Explore Dispatch Management <span aria-hidden>→</span>
                                    </Link>
                                </div>
                            </section>
                            <div className="mt-16 flex justify-center not-prose">
                                <Link to="/blogs" className="text-sm font-semibold text-primary hover:underline">← Back to all blogs</Link>
                            </div>
                        </article>
                    </div>
                </div>

                <Footer />
            </div>
        </ThemeProvider>
    );
};

export default DispatchFundamentals;