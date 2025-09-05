import React, { useState, useRef, Suspense, lazy, useEffect, useMemo, useCallback } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Clock,
  Headphones,
  FileText,
  Globe,
  Zap
} from "lucide-react";
import { Header } from "../components/ui/header";
import { ThemeProvider } from "../components/ui/theme-provider";
import Footer from "@/components/ui/footer";
import "../styles/custom-dropdown.css";

// Declare window extensions for main-thread optimization
declare global {
  interface Window {
    deferComponentInit?: (fn: () => void, priority: string) => void;
    yieldToMain?: () => Promise<void>;
  }
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
  services: string[];
}

interface FormErrors {
  [key: string]: string;
}

// Optimized loading component - no animations to reduce main-thread work
const SimpleLoader = React.memo(() => (
  <div className="flex items-center justify-center p-4">
    <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
));
SimpleLoader.displayName = 'SimpleLoader';

// Memoized form field component to reduce re-renders
const FormField = React.memo(({ 
  type = "text", 
  name, 
  placeholder, 
  value, 
  onChange, 
  error,
  className = ""
}: {
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  className?: string;
}) => (
  <div>
    {type === 'textarea' ? (
      <Textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={5}
        className={`${error ? "border-red-500" : ""} ${className}`}
      />
    ) : (
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${error ? "border-red-500" : ""} ${className}`}
      />
    )}
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
));
FormField.displayName = 'FormField';

function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
    services: []
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showAdvancedForm, setShowAdvancedForm] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null);

  // Basic form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission - load emailjs dynamically
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Dynamically import emailjs only when needed
      const { default: emailjs } = await import('emailjs-com');
      
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const userId = import.meta.env.VITE_EMAILJS_USER_ID;

      if (!serviceId || !templateId || !userId) {
        throw new Error('Email service configuration is missing');
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        budget: formData.budget,
        timeline: formData.timeline,
        services: formData.services.join(', ')
      };

      await emailjs.send(serviceId, templateId, templateParams, userId);
      
      setSubmitStatus('success');
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        budget: "",
        timeline: "",
        services: []
      });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <Header />
        
        <main className="pt-20">
          {/* Hero Section - No animation for faster loading */}
          <section className="relative py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                  Let's Build Something Amazing Together
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Ready to transform your business? Our experts are here to help you every step of the way.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Contact Form - Simplified for faster loading */}
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Get In Touch
                  </h2>
                  
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Input
                          name="name"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={errors.name ? "border-red-500" : ""}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <Input
                          name="email"
                          type="email"
                          placeholder="Email Address *"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                      <Input
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <Input
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                    
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your project *"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    {/* Optional: Show advanced form toggle */}
                    {!showAdvancedForm && (
                      <button
                        type="button"
                        onClick={() => setShowAdvancedForm(true)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                      >
                        + Add project details (budget, timeline, services)
                      </button>
                    )}

                    {/* Advanced form fields - loaded on demand */}
                    {showAdvancedForm && (
                      <Suspense fallback={<SimpleLoader />}>
                        <div className="space-y-4 border-t pt-4">
                          <div className="grid md:grid-cols-2 gap-4">
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">Project Budget</option>
                              <option value="under-10k">Under ₹10,00,000</option>
                              <option value="10k-25k">₹10,00,000 - ₹25,00,000</option>
                              <option value="25k-50k">₹25,00,000 - ₹50,00,000</option>
                              <option value="50k-100k">₹50,00,000 - ₹1,00,00,000</option>
                              <option value="100k-plus">₹1,00,00,000+</option>
                            </select>
                            
                            <select
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleInputChange}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                              <option value="">Project Timeline</option>
                              <option value="asap">ASAP</option>
                              <option value="1-3-months">1-3 months</option>
                              <option value="3-6-months">3-6 months</option>
                              <option value="6-12-months">6-12 months</option>
                              <option value="12-plus-months">12+ months</option>
                            </select>
                          </div>
                        </div>
                      </Suspense>
                    )}
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        <>
                          Send Message
                          <MessageCircle className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                  
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                      ✅ Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                      ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
                    </div>
                  )}
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                      Contact Information
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <Mail className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                          <p className="text-gray-600 dark:text-gray-300">info@manacletech.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <Phone className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                          <p className="text-gray-600 dark:text-gray-300">+91 99999 99999</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <MapPin className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">Office</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            123 Business District<br />
                            Mumbai, Maharashtra 400001<br />
                            India
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-8 text-white">
                    <h3 className="text-xl font-bold mb-6">Why Choose Manacle?</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold">500+</div>
                        <div className="text-sm opacity-90">Projects Delivered</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">50+</div>
                        <div className="text-sm opacity-90">Happy Clients</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">24/7</div>
                        <div className="text-sm opacity-90">Support</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">99%</div>
                        <div className="text-sm opacity-90">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Load additional sections lazily */}
          <Suspense fallback={<SimpleLoader />}>
            {/* Additional content can be loaded here */}
            <div className="py-8 text-center text-gray-600">
              <p>Follow us on social media for updates and insights</p>
            </div>
          </Suspense>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default ContactUs;
