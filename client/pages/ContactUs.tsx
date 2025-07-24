import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
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
  Facebook
} from "lucide-react";
import { Header } from "../components/ui/header";
import { ThemeProvider } from "../components/ui/theme-provider";

export function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [meetingFormData, setMeetingFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    meetingType: "",
    preferredDate: "",
    preferredTime: "",
    timezone: "",
    platform: "",
    agenda: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [isMeetingSubmitting, setIsMeetingSubmitting] = useState(false);
  const [isMeetingSubmitted, setIsMeetingSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMeetingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setMeetingFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      
      // Reset success message after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const handleMeetingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsMeetingSubmitting(true);
    
    // Simulate meeting form submission
    setTimeout(() => {
      setIsMeetingSubmitting(false);
      setIsMeetingSubmitted(true);
      
      // Reset form after submission
      setMeetingFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        meetingType: "",
        preferredDate: "",
        preferredTime: "",
        timezone: "",
        platform: "",
        agenda: "",
      });
      
      // Close modal and reset success message after a few seconds
      setTimeout(() => {
        setIsMeetingSubmitted(false);
        setIsMeetingModalOpen(false);
      }, 3000);
    }, 1500);
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="codifye-theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
        <Header />
        <main>
          <div className="min-h-screen pt-32 pb-16">
            <div className="container mx-auto px-4">
              {/* Header */}
              <div className="text-center mb-20">
                <h1 className="text-5xl md:text-6xl font-bold mb-8">
                  Ready to start your <span className="gradient-text">Projects?</span>
                </h1>
                <p className="text-2xl text-foreground max-w-4xl mx-auto leading-relaxed">
                  Get in touch with us and let's create something amazing together.
                </p>
              </div>

              {/* Main Contact Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                
                {/* Contact Information & Quick Actions */}
                <div className="lg:col-span-1 space-y-6">
                  
                  {/* Contact Methods */}
                  <div className="contact-card-sticky p-8 rounded-2xl bg-card/90 backdrop-blur-sm border border-glass-border">
                    <h2 className="text-2xl font-extrabold mb-8 gradient-text">Get In Touch</h2>
                    
                    <div className="space-y-4">
                      <a href="mailto:codifyee@gmail.com" className="contact-item-sticky flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/10 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-extrabold text-lg">Email Us</h3>
                          <p className="text-foreground text-base font-medium">codifyee@gmail.com</p>
                        </div>
                      </a>

                      <a href="tel:+918540889842" className="contact-item-sticky flex items-center space-x-4 p-3 rounded-lg hover:bg-accent/10 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-accent to-neon-purple rounded-full flex items-center justify-center">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-extrabold text-lg">Call Us</h3>
                          <p className="text-foreground text-base font-medium">+91 8540889842</p>
                        </div>
                      </a>

                      <a href="https://wa.me/918540889842" target="_blank" rel="noopener noreferrer" className="contact-item-sticky flex items-center space-x-4 p-3 rounded-lg hover:bg-green-500/10 transition-all duration-300">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-extrabold text-lg">WhatsApp</h3>
                          <p className="text-foreground text-base font-medium">Quick chat support</p>
                        </div>
                      </a>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="contact-card-sticky p-8 rounded-2xl bg-card/90 backdrop-blur-sm border border-glass-border">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-pink rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-xl font-extrabold">Office Hours</h2>
                    </div>
                    <div className="space-y-4 text-base">
                      <div className="flex justify-between">
                        <span className="text-foreground font-bold">Monday - Friday</span>
                        <span className="font-bold text-primary">9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground font-bold">Saturday</span>
                        <span className="font-bold text-primary">10:00 AM - 4:00 PM</span>
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
                  </div>

                  {/* Quick Support Links */}
                  <div className="contact-card-sticky p-8 rounded-2xl bg-card/90 backdrop-blur-sm border border-glass-border">
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
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
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
                            Project Type
                          </label>
                          <select className="w-full px-6 py-4 text-lg bg-secondary/50 border border-glass-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300">
                            <option>Web Design & Development</option>
                            <option>WordPress Hosting & Maintenance</option>
                            <option>Search Engine Optimization</option>
                            <option>Digital Marketing</option>
                            <option>E-commerce Solutions</option>
                            <option>Mobile App Development</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-lg font-bold mb-3">
                          Project Details
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
                </div>
              </div>

              {/* Location & Map Section */}
              <div className="mb-16">
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
                          <h3 className="font-extrabold text-xl mb-4">Codifye Headquarters</h3>
                          <p className="text-foreground text-lg leading-relaxed font-medium">
                            Maharani Colony, Ranipur, Gulzarbagh<br />
                            Patna, Bihar 800007, India<br />
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
                        
                        <div className="mt-8">
                          <Button 
                            onClick={() => setIsMeetingModalOpen(true)}
                            className="w-full py-4 text-lg font-bold bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue transition-all duration-300"
                          >
                            Schedule a Virtual Meeting
                            <ArrowRight className="ml-3 w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl border border-glass-border overflow-hidden">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.4126515715367!2d85.19746987527516!3d25.597307077461098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58e6b52c8aab%3A0x5ce8d8e2e9b1b9b0!2sMaharani%20Colony%2C%20Gulzar%20Bagh%2C%20Patna%2C%20Bihar%20800007%2C%20India!5e0!3m2!1sen!2sus!4v1703025600000!5m2!1sen!2sus"
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
              </div>

              {/* Social Media & Connect */}
              <div className="text-center">
                <h3 className="text-3xl font-extrabold mb-8 gradient-text">Connect With Us</h3>
                <div className="flex justify-center space-x-6 mb-8">
                  <a
                    href="https://instagram.com/codifyee_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-sticky p-4 rounded-full bg-card border border-glass-border hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:border-pink-500/50 transition-all duration-300 group"
                  >
                    <Instagram className="w-6 h-6 group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href="https://youtube.com/codifye"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-sticky p-4 rounded-full bg-card border border-glass-border hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 hover:border-red-500/50 transition-all duration-300 group"
                  >
                    <Youtube className="w-6 h-6 group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href="mailto:codifyee@gmail.com"
                    className="social-link-sticky p-4 rounded-full bg-card border border-glass-border hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:border-blue-500/50 transition-all duration-300 group"
                  >
                    <Mail className="w-6 h-6 group-hover:text-white transition-colors duration-300" />
                  </a>
                  <a
                    href="https://wa.me/918540889842"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link-sticky p-4 rounded-full bg-card border border-glass-border hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:border-green-500/50 transition-all duration-300 group"
                  >
                    <MessageCircle className="w-6 h-6 group-hover:text-white transition-colors duration-300" />
                  </a>
                </div>
                
                <p className="text-lg text-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                  Follow us for the latest updates, web development tips, and behind-the-scenes content. 
                  We love sharing our knowledge and connecting with the developer community!
                </p>
              </div>
            </div>
            
            {/* Background Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </main>

        {/* Virtual Meeting Modal */}
        {isMeetingModalOpen && (
          <div className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="contact-card-sticky max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 rounded-3xl bg-card/95 backdrop-blur-sm border border-glass-border">
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
        )}

        {/* Footer */}
        <footer className="py-12 border-t border-glass-border/30 glass-effect backdrop-blur-xl bg-gradient-to-r from-card/50 via-card/30 to-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center mb-4 group">
                  <img 
                    src="/codifye_logo.png" 
                    alt="Codifye Logo" 
                    className="w-14 h-14 mr-3 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Codifye
                    </h3>
                    <span className="text-sm text-foreground/60 font-medium -mt-1">Web Solutions</span>
                  </div>
                </div>
                <p className="text-foreground/70 text-lg font-medium">
                  Creating digital experiences that drive business growth
                  through innovative technology solutions.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-xl">Services</h4>
                <ul className="space-y-3 text-lg text-foreground/70 font-medium">
                  <li className="hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer">Web Design & Development</li>
                  <li className="hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer">WordPress Hosting</li>
                  <li className="hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer">Search Engine Optimization</li>
                  <li className="hover:text-primary hover:translate-x-1 transition-all duration-300 cursor-pointer">Digital Marketing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-xl">Quick Links</h4>
                <ul className="space-y-3 text-lg text-foreground/70 font-medium">
                  <li><a href="/" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Home</a></li>
                  <li><a href="/about-us" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">About Us</a></li>
                  <li><a href="#services" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Services</a></li>
                  <li><a href="/contact-us" className="hover:text-primary hover:translate-x-1 transition-all duration-300 inline-block">Contact Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4 text-xl">Contact</h4>
                <ul className="space-y-3 text-lg text-foreground/70 font-medium">
                  <li>
                    <a href="mailto:codifyee@gmail.com" className="flex items-center hover:text-primary hover:underline transition-all duration-300">
                      <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                      Email: codifyee@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+918540889842" className="flex items-center hover:text-primary hover:underline transition-all duration-300">
                      <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                      Phone: +91 8540889842
                    </a>
                  </li>
                  <li>
                    <a href="https://maps.google.com/?q=India" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-primary hover:underline transition-all duration-300">
                      <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                      Location: India
                    </a>
                  </li>
                </ul>
                
                {/* Social Media Icons */}
                <div className="mt-6">
                  <h5 className="font-bold mb-3 text-base">Follow Us</h5>
                  <div className="flex space-x-4">
                    <a 
                      href="https://x.com/home" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-card/80 border border-glass-border flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
                    >
                      <img src="/x.svg" alt="X" className="w-5 h-5 filter brightness-75 group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                    </a>
                    <a 
                      href="https://www.facebook.com/profile.php?id=61574541927345" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-card/80 border border-glass-border flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 group"
                    >
                      <Facebook className="w-5 h-5 text-foreground/70 group-hover:text-white" />
                    </a>
                    <a 
                      href="https://instagram.com/codifyee_" 
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
                <img 
                  src="/codifye_logo.png" 
                  alt="Codifye Logo" 
                  className="w-7 h-7 mr-2 opacity-70"
                />
                <span className="text-base font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  CODIFYE
                </span>
              </div>
              <p className="text-lg text-foreground/60 font-medium">All rights reserved © 2025 CODIFYE</p>
            </div>
          </div>
        </footer>

        {/* Floating Action Buttons */}
        {/* WhatsApp for Desktop */}
        <a
          href="https://wa.me/918540889842"
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
          href="tel:+918540889842"
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

export default ContactUs; 