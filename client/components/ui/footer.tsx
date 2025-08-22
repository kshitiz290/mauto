import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

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
                        <h4 className="font-bold mb-4 text-xl">Quick Links</h4>
                        <ul className="space-y-3 text-lg text-foreground/70 font-medium">
                            <li><a href="/" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Home</a></li>
                            <li><a href="/about-us" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">About Us</a></li>
                            <li><a href="/auto-site" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Website Builder</a></li>
                            <li><a href="/contact-us" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Contact Us</a></li>
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
                        {/* Social Media Icons */}
                        <div className="mt-6">
                            <h5 className="font-bold mb-3 text-base">Follow Us</h5>
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
                    <p className="text-lg text-foreground/60 font-medium">All rights reserved © 2025 Manacle Technologies Pvt Ltd.</p>
                </div>
            </div>
        </footer>
    );
}
