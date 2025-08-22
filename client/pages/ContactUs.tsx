import { useState, useRef } from "react";
import emailjs from 'emailjs-com';
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { motion, useInView } from "framer-motion";
import {
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  MessageCircle,
  Clock,
  Headphones,
  FileText,
  Globe,
  Zap,
  Facebook,
  Linkedin
} from "lucide-react";
import { Header } from "../components/ui/header";
import { ThemeProvider } from "../components/ui/theme-provider";
import Footer from "@/components/ui/footer";

export function ContactUs() {
  // Shared ref for synchronizing animations (must be inside component)
  const contactGridRef = useRef(null);
  const isContactGridInView = useInView(contactGridRef, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    companyName: "",
    solutionType: "Web Design & Development",
  });

  // const [meetingFormData, setMeetingFormData] = useState({
  //   fullName: "",
  //   email: "",
  //   phone: "",
  //   company: "",
  //   meetingType: "",
  //   preferredDate: "",
  //   preferredTime: "",
  //   timezone: "",
  //   platform: "",
  //   agenda: "",
  // });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  // const [isMeetingSubmitting, setIsMeetingSubmitting] = useState(false);
  // const [isMeetingSubmitted, setIsMeetingSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleMeetingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  //   const { name, value } = e.target;
  //   setMeetingFormData((prev) => ({ ...prev, [name]: value }));
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare email content
    const templateParams = {
      to_email: 'kshitizkant290@gmail.com',
      from_name: formData.fullName,
      from_email: formData.email,
      email: formData.email,
      phone: formData.phone,
      company_name: formData.companyName,
      solution_type: formData.solutionType,
      message: formData.message,
      subject: 'New Lead from the Site',
      formatted_message: `New lead from the site:\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCompany Name: ${formData.companyName}\nQuery Solution: ${formData.solutionType}\nMessage: ${formData.message}`
    };

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const userId = import.meta.env.VITE_EMAILJS_USER_ID;

      // console.log(serviceId, templateId, userId);

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        companyName: "",
        solutionType: "Web Design & Development",
      });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      alert('Failed to send email. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleMeetingSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsMeetingSubmitting(true);

  //   // Simulate meeting form submission
  //   setTimeout(() => {
  //     setIsMeetingSubmitting(false);
  //     setIsMeetingSubmitted(true);

  //     // Reset form after submission
  //     setMeetingFormData({
  //       fullName: "",
  //       email: "",
  //       phone: "",
  //       company: "",
  //       meetingType: "",
  //       preferredDate: "",
  //       preferredTime: "",
  //       timezone: "",
  //       platform: "",
  //       agenda: "",
  //     });

  //     // Close modal and reset success message after a few seconds
  //     setTimeout(() => {
  //       setIsMeetingSubmitted(false);
  //       setIsMeetingModalOpen(false);
  //     }, 3000);
  //   }, 1500);
  // };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="codifye-theme">
      <style>{`
        html, body, #root { overflow-x: hidden !important; }
        body { position: relative; }
      * { box-sizing: border-box; }
      /* Removed the overly broad max-width rule that forced all descendants to full width
        (was collapsing the header dropdown & stretching desktop layout). */
  /* Allow images to scale responsively */
  .contact-us-page-wrapper img { max-width: 100%; height: auto; }
  /* Ensure embedded iframes (Google Maps) fill their container height */
  .contact-us-page-wrapper iframe { width: 100%; height: 100%; display: block; }
      `}</style>
      <div className="contact-us-page-wrapper min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden w-full">
        <Header />
        <main className="w-full overflow-x-hidden">
          {/* Hero / Breadcrumb Section - adjusted to prevent horizontal overflow on mobile */}
          <section className="relative w-full min-h-[160px] flex items-center justify-center overflow-hidden pt-32 bg-transparent ">
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
                  <span className="text-primary font-bold text-xl tracking-wide transition-colors duration-200">Contact Us</span>
                </div>
              </div>
            </nav>
          </section>


          <div className="min-h-screen py-16 w-full overflow-x-hidden">
            <div className="container mx-auto px-4 max-w-full">
              {/* Header with Framer Motion Animation */}
              <motion.div
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-center mb-20"
              >
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-5xl md:text-6xl font-bold mb-8"
                >
                  Ready to start with our{' '}
                  <span
                    style={{ background: 'linear-gradient(90deg, #FF9800 40%, #B721FF 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  >
                    Solutions?
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="text-2xl text-foreground max-w-4xl mx-auto leading-relaxed"
                >
                  Get in touch with us and let's create something amazing together.
                </motion.p>
              </motion.div>

              {/* Main Contact Grid */}
              <div ref={contactGridRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">

                {/* Contact Information & Quick Actions */}
                <div className="lg:col-span-1 space-y-6">

                  {/* Contact Methods - Animated */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isContactGridInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="contact-card-sticky p-8 rounded-2xl bg-card/90 backdrop-blur-sm border border-glass-border"
                  >
                    <h2 className="text-2xl font-extrabold mb-8 gradient-text">Get In Touch</h2>
                    <div className="space-y-4">
                      <a href="mailto:sales@manacleindia.com" className="contact-item-sticky flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-extrabold text-lg">Email Us</h3>
                          <p className="text-foreground text-base font-medium">sales@manacleindia.com</p>
                        </div>
                      </a>

                      <a href="tel:+919873250200" className="contact-item-sticky flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/10 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-accent to-neon-purple rounded-full flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-extrabold text-lg">Call Us</h3>
                          <p className="text-foreground text-base font-medium">+91 9873250200</p>
                        </div>
                      </a>

                      <a href="https://wa.me/919873250200" target="_blank" rel="noopener noreferrer" className="contact-item-sticky flex items-center space-x-4 p-3 rounded-lg hover:bg-green-500/10 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-extrabold text-lg">WhatsApp</h3>
                          <p className="text-foreground text-base font-medium">Quick chat support</p>
                        </div>
                      </a>
                    </div>
                  </motion.div>

                  {/* Office Hours - Animated */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="contact-card-sticky p-8 rounded-2xl bg-card/90 backdrop-blur-sm border border-glass-border"
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-pink rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-xl font-extrabold">Office Hours</h2>
                    </div>
                    <div className="space-y-4 text-base">
                      <div className="flex justify-between">
                        <span className="text-foreground font-bold">Monday - Saturday</span>
                        <span className="font-bold text-primary">9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground font-bold">Sunday</span>
                        <span className="font-bold text-accent">Closed</span>
                      </div>
                      <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                        <p className="text-sm text-center font-medium text-foreground">
                          <span className="font-bold">Response Time:</span> Within 2-4 hours during business hours
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Quick Support Links */}
                  {/* <div className="contact-card-sticky p-8 rounded-2xl bg-card/90 backdrop-blur-sm border border-glass-border">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <Headphones className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-xl font-extrabold">Quick Support</h2>
                    </div>
                    <div className="space-y-3">
                      <a href="#faq" className="support-link-sticky flex items-center justify-between p-3 rounded-lg hover:bg-primary/10 transition-all duration-300 group">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-primary" />
                          <span className="text-base font-bold">FAQ & Help Center</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-primary transform group-hover:translate-x-1 transition-transform duration-300" />
                      </a>

                      <a href="#portfolio" className="support-link-sticky flex items-center justify-between p-3 rounded-lg hover:bg-accent/10 transition-all duration-300 group">
                        <div className="flex items-center space-x-3">
                          <Globe className="w-5 h-5 text-accent" />
                          <span className="text-base font-bold">Portfolio & Examples</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-accent transform group-hover:translate-x-1 transition-transform duration-300" />
                      </a>

                      <a href="#pricing" className="support-link-sticky flex items-center justify-between p-3 rounded-lg hover:bg-neon-blue/10 transition-all duration-300 group">
                        <div className="flex items-center space-x-3">
                          <Zap className="w-5 h-5 text-neon-blue" />
                          <span className="text-base font-bold">Pricing & Packages</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-neon-blue transform group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div> */}
                </div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isContactGridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="lg:col-span-2"
                >
                  <div className="contact-card-sticky p-12 rounded-3xl bg-card/90 backdrop-blur-sm border border-glass-border">
                    <h2 className="text-4xl font-extrabold mb-10 gradient-text">Send us a Message</h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-lg font-bold mb-3">
                            Full Name
                          </label>
                          <Input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 text-lg bg-secondary/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                            placeholder="Your Name"
                          />
                        </div>
                        <div>
                          <label className="block text-lg font-bold mb-3">
                            Email Address
                          </label>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 text-lg bg-secondary/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-lg font-bold mb-3">
                            Company Name (optional)
                          </label>
                          <Input
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full px-6 py-4 text-lg bg-secondary/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                            placeholder="Your Company Name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-lg font-bold mb-3">
                            Phone Number
                          </label>
                          <Input
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-6 py-4 text-lg bg-secondary/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                        <div>
                          <label className="block text-lg font-bold mb-3">
                            Solution Type
                          </label>
                          <div className="w-full">
                            <select
                              name="solutionType"
                              value={formData.solutionType}
                              onChange={handleChange}
                              className="w-full px-6 py-4 text-lg bg-secondary/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                            >
                              <option>Attendance & Leave Management</option>
                              <option>CRM Software</option>
                              <option>Order Management Solution</option>
                              <option>HRMS</option>
                              <option>Distributor Management Solution</option>
                              <option>Purchase Order Management</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-lg font-bold mb-3">
                          Additional Message
                        </label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full px-6 py-4 text-lg bg-secondary/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all duration-300"
                          placeholder="Tell us about your project requirements, timeline, and budget..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-6 text-xl font-bold bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 neon-glow transform hover:scale-[1.02] hover:shadow-lg"
                      >
                        {isSubmitting ? "Sending..." : isSubmitted ? "Sent Successfully!" : "Get A Quote"}
                        <ArrowRight className="ml-3 w-6 h-6" />
                      </Button>

                      {isSubmitted && (
                        <div className="text-center text-emerald-500 font-medium mt-4 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                          Thank you! Your request has been submitted. We'll be in touch within 24 hours.
                        </div>
                      )}
                    </form>
                  </div>
                </motion.div>
              </div>

              {/* Location & Map Section with Framer Motion */}
              <motion.div
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="mb-16"
              >
                <div className="contact-card-sticky p-8 rounded-2xl bg-card/90 backdrop-blur-sm border border-glass-border">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-pink rounded-full flex items-center justify-center">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold gradient-text">Our Location</h2>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="font-extrabold text-xl mb-4">Main Office</h3>
                          <p className="text-foreground text-lg leading-relaxed font-medium">
                            E-71, 4th floor, Sector-6, Noida<br />
                            Uttar-Pradesh 201301<br />
                            <span className="text-primary font-bold">Serving clients worldwide</span>
                          </p>
                        </div>

                        <div className="border-t border-glass-border pt-6">
                          <h4 className="font-bold text-lg mb-4">Service Areas</h4>
                          <div className="flex flex-wrap gap-3">
                            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold">Global Remote</span>
                            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-bold">India</span>
                            <span className="px-4 py-2 bg-neon-blue/10 text-neon-blue rounded-full text-sm font-bold">USA/Canada</span>
                            <span className="px-4 py-2 bg-neon-purple/10 text-neon-purple rounded-full text-sm font-bold">Europe</span>
                          </div>
                        </div>

                        {/* <div className="mt-8">
                          <Button
                            onClick={() => setIsMeetingModalOpen(true)}
                            className="w-full py-4 text-lg font-bold bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-300"
                          >
                            Schedule a Virtual Meeting
                            <ArrowRight className="ml-3 w-5 h-5" />
                          </Button>
                        </div> */}
                      </div>
                    </div>

                    <div>
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl border border-glass-border overflow-hidden">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224203.07933862173!2d77.01536178588864!3d28.59458299677065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5d5cd8c0c95%3A0x4717ef18de1436b5!2sManacle%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1754559661411!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Codifye Location - Maharani Colony, Patna"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Social Media & Connect */}
              <div className="text-center">
                <h3 className="text-3xl font-extrabold mb-8 gradient-text">Connect With Us</h3>
                <div className="flex flex-wrap justify-center gap-6 mb-8 max-w-xs mx-auto">
                  <a
                    href="https://www.facebook.com/techmanacle/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-sticky p-4 rounded-full bg-card border border-glass-border hover:bg-gradient-to-r hover:from-[#1877F3] hover:to-[#1877F3] hover:border-[#1877F3]/50 transition-all duration-300 group"
                  >
                    <Facebook className="w-6 h-6 group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href="https://x.com/ManacleTech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-sticky p-4 rounded-full bg-card border border-glass-border hover:bg-gradient-to-r hover:from-[#000000] hover:to-[#1DA1F2] hover:border-[#1DA1F2]/50 transition-all duration-300 group"
                  >
                    <img src="/x.svg" alt="X" className="w-5 h-5 filter brightness-75 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                  </a>
                  <a
                    href="https://www.instagram.com/techmanacle/"
                    target="_blank"
                    className="social-link-sticky p-4 rounded-full bg-card border border-glass-border hover:bg-gradient-to-r hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#515BD4] hover:border-[#DD2A7B]/50 transition-all duration-300 group"
                  >
                    <Instagram className="w-6 h-6 group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/manacletechnologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-sticky p-4 rounded-full bg-card border border-glass-border hover:bg-gradient-to-r hover:from-[#0A66C2] hover:to-[#0A66C2] hover:border-[#0A66C2]/50 transition-all duration-300 group"
                  >
                    <Linkedin className="w-6 h-6 group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href="https://youtube.com/@techmanacle?si=lKZw7FngfmlXE49z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-sticky p-4 rounded-full bg-card border border-glass-border hover:bg-gradient-to-r hover:from-[#FF0000] hover:to-[#FF0000] hover:border-[#FF0000]/50 transition-all duration-300 group"
                  >
                    <Youtube className="w-6 h-6 group-hover:text-white transition-colors duration-300" />
                  </a>
                </div>

                <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                  Follow Manacle for the latest updates, company news, and to connect with our team. We're here to help you grow and succeed. Reach out anytime!
                </p>
              </div>
            </div>

            {/* Background Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </main>

        {/* Virtual Meeting Modal */}
        {/* {isMeetingModalOpen && (
          <div className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="contact-card-sticky max-w-2xl w-full max-h-[90vh] p-8 rounded-3xl bg-card/95 backdrop-blur-sm border border-glass-border">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-extrabold gradient-text">Schedule Virtual Meeting</h2>
                <button
                  onClick={() => setIsMeetingModalOpen(false)}
                  className="p-2 rounded-full hover:bg-secondary/50 transition-colors duration-300"
                >
                  <span className="text-2xl">×</span>
                </button>
              </div>

              <form onSubmit={handleMeetingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-bold mb-3">
                      Full Name *
                    </label>
                    <Input
                      name="fullName"
                      value={meetingFormData.fullName}
                      onChange={handleMeetingChange}
                      required
                      className="w-full px-4 py-3 text-base bg-secondary/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-bold mb-3">
                      Email Address *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={meetingFormData.email}
                      onChange={handleMeetingChange}
                      required
                      className="w-full px-4 py-3 text-base bg-secondary/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-base font-bold mb-3">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={meetingFormData.phone}
                      onChange={handleMeetingChange}
                      className="w-full px-4 py-3 text-base bg-secondary/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-bold mb-3">
                      Company/Organization
                    </label>
                    <Input
                      name="company"
                      value={meetingFormData.company}
                      onChange={handleMeetingChange}
                      className="w-full px-4 py-3 text-base bg-secondary/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-base font-bold mb-3">
                    Meeting Type *
                  </label>
                  <select
                    name="meetingType"
                    value={meetingFormData.meetingType}
                    onChange={handleMeetingChange}
                    required
                    className="w-full px-4 py-3 text-base bg-secondary/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  >
                    <option value="">Select Meeting Type</option>
                    <option value="consultation">Project Consultation</option>
                    <option value="demo">Product Demo</option>
                    <option value="proposal">Project Proposal Discussion</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-base font-bold mb-3">
                      Preferred Date *
                    </label>
                    <Input
                      name="preferredDate"
                      type="date"
                      value={meetingFormData.preferredDate}
                      onChange={handleMeetingChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 text-base bg-secondary/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-bold mb-3">
                      Preferred Time *
                    </label>
                    <Input
                      name="preferredTime"
                      type="time"
                      value={meetingFormData.preferredTime}
                      onChange={handleMeetingChange}
                      required
                      className="w-full px-4 py-3 text-base bg-secondary/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-base font-bold mb-3">
                      Timezone *
                    </label>
                    <select
                      name="timezone"
                      value={meetingFormData.timezone}
                      onChange={handleMeetingChange}
                      required
                      className="w-full px-4 py-3 text-base bg-secondary/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    >
                      <option value="">Select Timezone</option>
                      <option value="IST">IST (India Standard Time)</option>
                      <option value="EST">EST (Eastern Standard Time)</option>
                      <option value="PST">PST (Pacific Standard Time)</option>
                      <option value="GMT">GMT (Greenwich Mean Time)</option>
                      <option value="CET">CET (Central European Time)</option>
                      <option value="JST">JST (Japan Standard Time)</option>
                      <option value="AEST">AEST (Australian Eastern Time)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-base font-bold mb-3">
                    Preferred Platform *
                  </label>
                  <select
                    name="platform"
                    value={meetingFormData.platform}
                    onChange={handleMeetingChange}
                    required
                    className="w-full px-4 py-3 text-base bg-secondary/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  >
                    <option value="">Select Platform</option>
                    <option value="zoom">Zoom</option>
                    <option value="google-meet">Google Meet</option>
                    <option value="microsoft-teams">Microsoft Teams</option>
                    <option value="whatsapp">WhatsApp Video Call</option>
                    <option value="phone">Phone Call</option>
                  </select>
                </div>

                <div>
                  <label className="block text-base font-bold mb-3">
                    Meeting Agenda / What would you like to discuss?
                  </label>
                  <Textarea
                    name="agenda"
                    value={meetingFormData.agenda}
                    onChange={handleMeetingChange}
                    rows={4}
                    className="w-full px-4 py-3 text-base bg-secondary/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all duration-300"
                    placeholder="Please describe what you'd like to discuss during the meeting..."
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={() => setIsMeetingModalOpen(false)}
                    className="flex-1 py-3 text-base font-bold bg-secondary hover:bg-secondary/80 transition-all duration-300"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isMeetingSubmitting}
                    className="flex-1 py-3 text-base font-bold bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-300"
                  >
                    {isMeetingSubmitting ? "Scheduling..." : isMeetingSubmitted ? "Meeting Scheduled!" : "Schedule Meeting"}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                {isMeetingSubmitted && (
                  <div className="text-center text-emerald-500 font-medium mt-4 p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                    🎉 Thank you! Your meeting has been scheduled. We'll send you a confirmation email with the meeting details within 24 hours.
                  </div>
                )}
              </form>
            </div>
          </div>
        )} */}

        {/* Footer */}
        <Footer />


      </div>
    </ThemeProvider>
  );
}

export default ContactUs; 