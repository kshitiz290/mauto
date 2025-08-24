import { Header } from "../components/ui/header";
import { Hero } from "../components/ui/hero";
import { WhyChooseUs } from "../components/ui/why-choose-us";
import { ThemeProvider } from "../components/ui/theme-provider";
import { Button } from "../components/ui/button";
import { Facebook, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import Footer from "../components/ui/footer";
import { lazy, Suspense } from "react";
const HowHelpingCompanies = lazy(() => import("../components/ui/how-helping-companies"));
const CustomerCarousel = lazy(() => import("../components/ui/customer-carousel"));




export default function Index() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="codifye-theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
        <Header />
        <main className="pt-4 sm:pt-6">
          <Hero />
          <WhyChooseUs />
          {/* Transforming Retail Industry Section */}
          <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-[#18181b] dark:via-[#23232a] dark:to-[#18181b] relative overflow-hidden cv-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-14">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent leading-tight sm:leading-[1.15] pb-2">Transforming Retail Industry with Integrated Technology</h2>
                <p className="text-xl sm:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                  Empower your FMCG and retail business with Manacle’s suite of integrated solutions: SFA, DMS, Visual Merchandising, Attendance & Leave Management, and more. Achieve operational excellence, real-time insights, and exponential growth with our innovative, scalable platforms.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-center">
                {/* SFA */}
                <div className="bg-white dark:bg-[#23232a] rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 border-t-4 border-orange-400 dark:border-orange-500">
                  <img src="/icons/marketing-3d.svg" alt="SFA" className="w-20 h-20 mb-4" loading="lazy" decoding="async" fetchPriority="low" />
                  <h3 className="text-xl font-bold mb-2 text-orange-500 dark:text-orange-400">Sales Force Automation</h3>
                  <p className="text-foreground/80 dark:text-foreground/70 text-center">Automate field sales, order management, and activity tracking for your sales team.</p>
                </div>
                {/* DMS */}
                <div className="bg-white dark:bg-[#23232a] rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 border-t-4 border-yellow-400 dark:border-yellow-500">
                  <img src="/icons/branding-3d.svg" alt="DMS" className="w-20 h-20 mb-4" loading="lazy" decoding="async" fetchPriority="low" />
                  <h3 className="text-xl font-bold mb-2 text-yellow-500 dark:text-yellow-400">Distributor Management</h3>
                  <p className="text-foreground/80 dark:text-foreground/70 text-center">Optimize your distribution network and supply chain for maximum efficiency.</p>
                </div>
                {/* Visual Merchandising */}
                <div className="bg-white dark:bg-[#23232a] rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 border-t-4 border-pink-400 dark:border-pink-500">
                  <img src="/icons/web-design-3d.svg" alt="Visual Merchandising" className="w-20 h-20 mb-4" loading="lazy" decoding="async" fetchPriority="low" />
                  <h3 className="text-xl font-bold mb-2 text-pink-500 dark:text-pink-400">Visual Merchandising</h3>
                  <p className="text-foreground/80 dark:text-foreground/70 text-center">Enhance retail space appeal and boost sales with advanced merchandising tools.</p>
                </div>
                {/* Attendance & Leave Management */}
                <div className="bg-white dark:bg-[#23232a] rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300 border-t-4 border-green-400 dark:border-green-500">
                  <img src="/icons/maintenance-3d.svg" alt="Attendance & Leave" className="w-20 h-20 mb-4" loading="lazy" decoding="async" fetchPriority="low" />
                  <h3 className="text-xl font-bold mb-2 text-green-500 dark:text-green-400">Attendance & Leave</h3>
                  <p className="text-foreground/80 dark:text-foreground/70 text-center">Cloud-based solution for employee time tracking, leave, and compliance.</p>
                </div>
              </div>
            </div>
          </section>
          {/* <TechStack /> */}
          {/* How Are We Helping Companies Section */}
          <div className="cv-auto"><Suspense fallback={null}><HowHelpingCompanies /></Suspense></div>
          <div className="cv-auto"><Suspense fallback={null}><CustomerCarousel /></Suspense></div>
          {/* AI Website Builder CTA Section */}
          {/* <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating-animation"></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl floating-animation"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
              <AuthWebsiteBuilderCTA />
              <Button
                className="px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent transition-all duration-300 text-base sm:text-lg w-full sm:w-auto mt-6"
                onClick={() => window.location.href = '/contact-us'}
              >
                Learn More
              </Button>
            </div>
          </section> */}
          {/* Magical CTA Section with links to About and Contact pages */}
          <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden cv-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-2">
                  Discover More About <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">Manacle</span>
                </h2>
                <p className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto px-2 leading-relaxed">
                  Learn about our story or get in touch with us to start your project.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-md sm:max-w-none mx-auto px-2">
                <Button
                  className="px-8 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
                  onClick={() => window.location.href = '/about-us'}
                >
                  About Us
                </Button>
                <Button
                  className="px-8 py-4 rounded-xl text-lg font-semibold bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
                  onClick={() => window.location.href = '/contact-us'}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </section>
          {/* Magical CTA Section */}
          {/* <MagicalCTA /> */}
        </main>
        {/* Footer */}
        <Footer />
        {/* Floating Action Buttons */}
        {/* WhatsApp for Desktop */}
        <a
          href="https://wa.me/919873250200"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 hidden md:flex w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </a>
        {/* Phone Call for Mobile */}
        <a
          href="tel:+919873250200"
          className="fixed bottom-6 right-6 z-50 flex md:hidden w-14 h-14 bg-blue-500 hover:bg-blue-600 rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          aria-label="Call us"
        >
          <Phone className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </a>
      </div>
    </ThemeProvider>
  );
}
