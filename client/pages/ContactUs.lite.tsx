// Lightweight version of ContactUs for better mobile performance
import React, { useState, useRef, Suspense } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Header } from "../components/ui/header";
import { ThemeProvider } from "../components/ui/theme-provider";
import Footer from "@/components/ui/footer";

// Lazy load heavy components
const ContactUsHeavy = React.lazy(() => import('./ContactUs').then(module => ({ default: module.ContactUs })));

// Lightweight fallback component
function ContactUsLight() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        solutionType: "",
        message: "",
        privacyPolicy: false,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!formData.email.trim()) newErrors.email = "Email address is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        if (!formData.privacyPolicy) newErrors.privacyPolicy = "You must agree to the privacy policy";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);

        try {
            // Simple form submission without heavy EmailJS
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Thank you! Your message has been sent.');
                setFormData({
                    fullName: "", email: "", phone: "", companyName: "",
                    solutionType: "", message: "", privacyPolicy: false
                });
            }
        } catch (error) {
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <ThemeProvider defaultTheme="dark" storageKey="manacle_theme">
            <div className="min-h-screen bg-background text-foreground">
                <Header />
                <main className="container mx-auto px-4 py-16">
                    <div className="max-w-2xl mx-auto">
                        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Full Name *</label>
                                <Input
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className={errors.fullName ? 'border-red-500' : ''}
                                    required
                                />
                                {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Email *</label>
                                <Input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={errors.email ? 'border-red-500' : ''}
                                    required
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Phone</label>
                                <Input
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Company Name</label>
                                <Input
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Solution Type</label>
                                <select
                                    name="solutionType"
                                    value={formData.solutionType}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md bg-background"
                                >
                                    <option value="">Select a solution type</option>
                                    <option>Attendance & Leave Management</option>
                                    <option>CRM Software</option>
                                    <option>Order Management Solution</option>
                                    <option>HRMS</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Message *</label>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={errors.message ? 'border-red-500' : ''}
                                    rows={4}
                                    required
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>

                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    id="privacyPolicy"
                                    name="privacyPolicy"
                                    checked={formData.privacyPolicy}
                                    onChange={handleChange}
                                    className="mt-1"
                                />
                                <label htmlFor="privacyPolicy" className="text-sm">
                                    I agree to the <a href="/privacy-policy" className="text-primary underline">Privacy Policy</a> *
                                </label>
                            </div>
                            {errors.privacyPolicy && <p className="text-red-500 text-sm">{errors.privacyPolicy}</p>}

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}

// Progressive enhancement: Load full version after initial render
export default function ContactUsProgressive() {
    const [showFull, setShowFull] = useState(false);

    React.useEffect(() => {
        // Load full version after page is interactive
        const timer = setTimeout(() => {
            setShowFull(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (showFull) {
        return (
            <Suspense fallback={<ContactUsLight />}>
                <ContactUsHeavy />
            </Suspense>
        );
    }

    return <ContactUsLight />;
}