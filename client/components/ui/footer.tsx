import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 border-t border-glass-border/30 glass-effect backdrop-blur-xl bg-gradient-to-r from-card/50 via-card/30 to-card/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center mb-4 group">
                            <div className="flex flex-col">
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                                    Manacle Technologies
                                </h3>
                                <span className="text-sm text-foreground/60 font-medium -mt-1">A bond to deliver Success</span>
                            </div>
                            {/* <img
                                src="/manacle_logo.png"
                                alt="Manacle Logo"
                                className="w-20 h-8 md:w-10 md:h-10 lg:w-44 lg:h-24 xl:w-52 xl:h-10 object-contain mr-2"
                            /> */}
                        </div>
                        <p className="text-foreground/70 text-lg font-medium">
                            Creating digital experiences that drive business growth
                            through innovative technology solutions.
                        </p>
                        <div className="mt-6">
                            <h5 className="font-bold mb-3 text-base">Connect With Us</h5>
                            <div className="flex space-x-4">
                                <a
                                    href="https://x.com/ManacleTech"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-card/80 border border-glass-border flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                                >
                                    <img src="/x.svg" alt="X" className="w-5 h-5 filter brightness-75 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                                </a>
                                <a
                                    href="https://www.facebook.com/techmanacle/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-card/80 border border-glass-border flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 group"
                                >
                                    <Facebook className="w-5 h-5 text-foreground/70 group-hover:text-white" />
                                </a>
                                <a
                                    href="https://www.instagram.com/techmanacle/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-card/80 border border-glass-border flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:scale-110 transition-all duration-300 group"
                                >
                                    <Instagram className="w-5 h-5 text-foreground/70 group-hover:text-white" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/manacletechnologies/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-card/80 border border-glass-border flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 group"
                                >
                                    <Linkedin className="w-5 h-5 text-foreground/70 group-hover:text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-xl">Solutions</h4>
                        <ul className="space-y-3 text-lg text-foreground/70 font-medium">
                            <li>
                                <a href="/attendance-leave-management" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Attendance & Leave Management</a>
                            </li>
                            <li>
                                <a href="/order-management-solution" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Order Management System</a>
                            </li>
                            <li>
                                <a href="/hrms" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Human Resource Management (HRMS)</a>
                            </li>
                            <li>
                                <a href="/crm-software" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">CRM Software</a>
                            </li>
                            <li>
                                <a href="/production-management" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Production Management</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-xl">Contact</h4>
                        <ul className="space-y-3 text-lg text-foreground/70 font-medium">
                            <li>
                                <a href="mailto:sales@manacleindia.com" className="flex items-center hover:text-primary hover:underline transition-all duration-300 break-all">
                                    <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                                    <span>Email: sales@manacleindia.com</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+919873250200" className="flex items-center hover:text-primary hover:underline transition-all duration-300 break-all">
                                    <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                                    <span>Phone: +91 9873250200</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://maps.app.goo.gl/EBSUNvyE5Ca69yuj9" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary hover:underline transition-all duration-300 break-all">
                                    <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                                    <span>Location: E-71, 4th floor, Sector-6, Noida
                                        Uttar-Pradesh 201301</span>
                                </a>
                            </li>
                        </ul>


                    </div>
                    <div>
                        <h4 className="font-bold mb-4 text-xl">Download Our App</h4>

                        {/* App Store Buttons */}
                        <div className="space-y-3 mb-6">
                            <a
                                href="https://apps.apple.com/in/app/msell-app/id1544410438" target="_blank"
                                className="flex items-center space-x-3 bg-card/80 border border-glass-border rounded-lg p-3 hover:bg-card hover:scale-105 transition-all duration-300 group"
                            >
                                <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-foreground/60">Download on the</div>
                                    <div className="text-sm font-semibold text-foreground">App Store</div>
                                </div>
                            </a>

                            <a
                                href="https://play.google.com/store/apps/details?id=manacle.msell&pli=1" target="_blank"
                                className="flex items-center space-x-3 bg-card/80 border border-glass-border rounded-lg p-3 hover:bg-card hover:scale-105 transition-all duration-300 group"
                            >
                                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-md flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="text-xs text-foreground/60">Get it on</div>
                                    <div className="text-sm font-semibold text-foreground">Google Play</div>
                                </div>
                            </a>
                        </div>

                        {/* Certifications */}
                        <div>
                            <div className="flex space-x-4">
                                <img
                                    src="/certifications/iso.png"
                                    alt="ISO Certification"
                                    className="w-20 h-20 object-contain"
                                />
                                <img
                                    src="/certifications/cmmi3.png"
                                    alt="CMMI Level 3 Certification"
                                    className="w-20 h-20 object-contain dark:invert"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-glass-border/30 text-center">
                    <div className="flex items-center justify-center mb-3">
                        <span className="text-base font-medium bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                            MANACLE
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3">
                        <a href="/privacy-policy" className="text-foreground/70 hover:text-primary transition-colors duration-300 font-medium">Privacy Policy</a>
                        <span className="hidden sm:inline text-foreground/40">|</span>
                        <a href="/contact-us" className="text-foreground/70 hover:text-primary transition-colors duration-300 font-medium">Contact Us</a>
                        <span className="hidden sm:inline text-foreground/40">|</span>
                        <a href="/faqs" className="text-foreground/70 hover:text-primary transition-colors duration-300 font-medium">FAQs</a>
                        <span className="hidden sm:inline text-foreground/40">|</span>
                        <a href="/sitemap" className="text-foreground/70 hover:text-primary transition-colors duration-300 font-medium">Sitemap</a>
                    </div>
                    <p className="text-lg text-foreground/60 font-medium">All rights reserved © 2025 Manacle Technologies Pvt Ltd.</p>
                </div>
            </div>
        </footer>
    );
}
