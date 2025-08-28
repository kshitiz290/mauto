import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle, Search, Phone, Mail } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Header } from "../components/ui/header";
import Footer from "../components/ui/footer";
import { ThemeProvider } from "../components/ui/theme-provider";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What is Manacle Technologies?",
        answer: "Manacle Technologies is a Delhi-based software development company providing customized software solutions to organizations. We specialize in Sales Force Automation (SFA), ERP solutions, CRM software, and digital transformation services for manufacturing, FMCG, Pharma, Dairy, and Healthcare industries."
      },
      {
        question: "What industries do you serve?",
        answer: "We serve a wide range of industries including Manufacturing, FMCG (Fast-Moving Consumer Goods), Pharmaceutical, Dairy, Healthcare, Educational institutions, Municipal corporations, and various other business sectors requiring digital transformation solutions."
      },
      {
        question: "How long has Manacle Technologies been in business?",
        answer: "Manacle Technologies has been providing software solutions for several years, building a strong reputation in the industry with proven credentials and commitment to quality services. We have successfully served clients including New Delhi Municipal Corporation and numerous private organizations."
      }
    ]
  },
  {
    category: "Products & Services",
    questions: [
      {
        question: "What is mSELL and how does it work?",
        answer: "mSELL is our flagship Sales Force Automation application that digitalizes sales and sales force monitoring processes. It includes features like field force tracking, order management, retailer management, attendance tracking, expense management, and real-time reporting to streamline your entire sales operation."
      },
      {
        question: "What is mCIVIC?",
        answer: "mCIVIC is our specialized application designed for municipal corporations. It fully automates citizen relationship management processes, helping municipalities manage citizen services, complaints, requests, and administrative processes efficiently. We're proud to serve New Delhi Municipal Corporation through this solution."
      },
      {
        question: "Do you provide custom software development?",
        answer: "Yes, we specialize in customized software solutions tailored to your specific business needs. Our experienced development team works closely with clients to understand their requirements and deliver solutions that perfectly fit their operational processes and business goals."
      },
      {
        question: "What is your Website Builder service?",
        answer: "Our Website Builder service allows you to create professional, responsive websites quickly and easily. It includes modern design templates, SEO optimization, mobile responsiveness, and integration capabilities with your existing business systems."
      }
    ]
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "Do you provide 24/7 technical support?",
        answer: "Yes, we provide comprehensive technical support to ensure your systems run smoothly. Our dedicated support team is available to assist with any technical issues, system maintenance, updates, and user training to maximize your software's effectiveness."
      },
      {
        question: "How do you handle software updates and maintenance?",
        answer: "We provide regular software updates, security patches, and maintenance services. Our team monitors your systems proactively and schedules updates during off-peak hours to minimize business disruption. We also provide detailed documentation and training for any new features."
      },
      {
        question: "Can you integrate with our existing systems?",
        answer: "Absolutely! Our solutions are designed to integrate seamlessly with your existing business systems, databases, and third-party applications. We conduct thorough analysis of your current infrastructure and ensure smooth data migration and system integration."
      }
    ]
  },
  {
    category: "Pricing & Implementation",
    questions: [
      {
        question: "How is your pricing structured?",
        answer: "Our pricing is customized based on your specific requirements, number of users, features needed, and implementation scope. We offer flexible pricing models including one-time licensing, subscription-based, and custom enterprise packages. Contact us for a detailed quote tailored to your needs."
      },
      {
        question: "How long does implementation typically take?",
        answer: "Implementation timelines vary based on project complexity and scope. Simple solutions can be deployed within 2-4 weeks, while comprehensive enterprise solutions may take 2-6 months. We provide detailed project timelines during the planning phase and keep you updated throughout the process."
      },
      {
        question: "Do you provide training for our team?",
        answer: "Yes, we provide comprehensive training programs for your team including user training, administrator training, and ongoing support. We offer both on-site and remote training sessions, along with detailed documentation and video tutorials to ensure your team can effectively use the software."
      },
      {
        question: "What is included in your implementation service?",
        answer: "Our implementation service includes requirement analysis, system design, development/customization, data migration, integration setup, testing, user training, go-live support, and post-implementation support. We ensure a smooth transition from your current processes to the new system."
      }
    ]
  }
];

export function FAQs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter FAQs based on search term and category
  const filteredFAQs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(faq =>
      (selectedCategory === "All" || category.category === selectedCategory) &&
      (faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
       faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(category => category.questions.length > 0);

  const categories = ["All", ...faqData.map(cat => cat.category)];

  return (
    <ThemeProvider defaultTheme="dark" storageKey="manacle_theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative w-screen left-1/2 right-1/2 -mx-[50vw] min-h-[200px] flex items-center justify-center overflow-x-clip pt-32 pb-16 bg-transparent">
            {/* Animated floating shapes */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 w-36 h-36 bg-gradient-to-br from-primary/40 to-accent/30 rounded-full blur-3xl animate-float-slow z-0 mix-blend-lighten dark:mix-blend-normal" style={{ animationDelay: '0s' }} />
            <div className="absolute right-20 top-10 w-20 h-20 bg-gradient-to-tr from-pink-400/40 to-purple-400/30 rounded-full blur-2xl animate-float-fast z-0 mix-blend-lighten dark:mix-blend-normal" style={{ animationDelay: '1.5s' }} />
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-80 h-16 bg-primary/20 rounded-full blur-2xl animate-float-medium z-0 mix-blend-lighten dark:mix-blend-normal" style={{ animationDelay: '2s' }} />

            <div className="relative z-10 w-full max-w-7xl px-4 sm:px-10 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    Frequently Asked
                  </span>
                  <br />
                  <span className="text-foreground">Questions</span>
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                  Find answers to common questions about our software solutions, services, and support. 
                  Can't find what you're looking for? We're here to help!
                </p>
              </motion.div>
            </div>
          </section>

          {/* Search and Filter Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto px-4 pb-12"
          >
            <div className="glass-effect rounded-2xl p-6 md:p-8 space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/50" />
                <Input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg bg-card/50 border-glass-border focus:border-primary/50 transition-colors duration-300"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={`transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg"
                        : "hover:bg-primary/10 hover:border-primary/30"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </motion.section>

          {/* FAQs Section */}
          <section className="max-w-6xl mx-auto px-4 pb-16">
            {filteredFAQs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-16"
              >
                <HelpCircle className="w-16 h-16 text-foreground/30 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground/70 mb-2">No FAQs Found</h3>
                <p className="text-foreground/50">Try adjusting your search terms or category filter.</p>
              </motion.div>
            ) : (
              <div className="space-y-8">
                {filteredFAQs.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    className="space-y-4"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 flex items-center">
                      <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full mr-4" />
                      {category.category}
                    </h2>

                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((faq, index) => (
                        <AccordionItem
                          key={index}
                          value={`${category.category}-${index}`}
                          className="glass-effect rounded-xl border-none overflow-hidden"
                        >
                          <AccordionTrigger className="hover:no-underline p-4 md:p-6 text-left">
                            <div className="flex items-start gap-4 w-full">
                              <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm mt-1">
                                Q
                              </div>
                              <span className="text-base md:text-lg font-semibold text-foreground flex-1">
                                {faq.question}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-4 md:px-6 pb-6 pt-4 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                            <div className="flex items-start gap-4 ml-0">
                              <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">
                                A
                              </div>
                              <div className="flex-1 text-foreground/80 leading-relaxed text-base md:text-lg">
                                {faq.answer}
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                ))}
              </div>
            )}
          </section>

          {/* Contact Support Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto px-4 pb-16"
          >
            <div className="glass-effect p-6 md:p-8 text-center space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl md:text-3xl font-bold">
                  <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                    Still Have Questions?
                  </span>
                </h2>
                <p className="text-base text-foreground/80 max-w-xl mx-auto">
                  Get in touch with us for personalized assistance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="glass-effect p-4 rounded-lg space-y-3">
                  <svg className="w-8 h-8 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                  </svg>
                  <h3 className="text-lg font-semibold">Chat with Us</h3>
                  <Button 
                    size="sm" 
                    className="w-full bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => window.open('https://wa.me/919873250200', '_blank')}
                  >
                    WhatsApp
                  </Button>
                </div>

                <div className="glass-effect p-4 rounded-lg space-y-3">
                  <Phone className="w-8 h-8 text-accent mx-auto" />
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <Button 
                    size="sm"
                    variant="outline" 
                    className="w-full border-accent text-accent hover:bg-accent hover:text-white"
                    onClick={() => window.location.href = '/contact-us'}
                  >
                    Contact Us
                  </Button>
                </div>

                <div className="glass-effect p-4 rounded-lg space-y-3">
                  <Mail className="w-8 h-8 text-primary mx-auto" />
                  <h3 className="text-lg font-semibold">Email Support</h3>
                  <Button 
                    size="sm"
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.location.href = 'mailto:sales@manacleindia.com'}
                  >
                    Send Email
                  </Button>
                </div>
              </div>
            </div>
          </motion.section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default FAQs;