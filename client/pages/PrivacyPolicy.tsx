import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText } from "lucide-react";
import { Header } from "../components/ui/header";
import Footer from "../components/ui/footer";
import { ThemeProvider } from "../components/ui/theme-provider";

const privacyData = [
  {
    title: "Information We Collect",
    icon: <FileText className="w-6 h-6" />,
    content: "We collect essential business information including name, phone number, email address, designation, company address, and encrypted passwords. For our SFA and ERP solutions, we collect location data for field sales tracking, images for verification, and business documents. We also collect usage analytics, system logs, and performance metrics to improve our software solutions. All data collection complies with IT Act 2000, GDPR, and international data protection standards."
  },
  {
    title: "Data Processing & Usage",
    icon: <Eye className="w-6 h-6" />,
    content: "We process your data to provide Sales Force Automation, ERP, CRM, and HRMS solutions. Data is used for user authentication, business analytics, reporting, system optimization, and customer support. We analyze usage patterns to enhance software performance, develop new features, and provide personalized business insights. Processing is based on legitimate business interests and contractual obligations."
  },
  {
    title: "Data Security & Compliance",
    icon: <Lock className="w-6 h-6" />,
    content: "We implement enterprise-grade security measures including SSL/TLS encryption, secure data centers, regular security audits, and ISO 27001 compliance. Our cloud infrastructure uses advanced firewalls, intrusion detection systems, and 24/7 monitoring. Data is backed up regularly with disaster recovery protocols. All employees undergo security training and sign confidentiality agreements."
  },
  {
    title: "Third-Party Integrations",
    icon: <Shield className="w-6 h-6" />,
    content: "Our software solutions integrate with trusted third-party services including payment gateways, cloud storage providers, analytics platforms, and business intelligence tools. We ensure all partners maintain equivalent security standards through data processing agreements. We do not sell or rent personal information for marketing purposes. Data sharing occurs only for service delivery, legal compliance, or with explicit consent."
  },
  {
    title: "Data Retention & Deletion",
    icon: <FileText className="w-6 h-6" />,
    content: "We retain business data as long as necessary for service provision, legal compliance, and legitimate business purposes. Personal data is deleted upon account termination unless required for legal obligations. Business records may be retained for 7 years as per Indian accounting standards. Users can request data deletion, though some information may persist in backups for security purposes."
  },
  {
    title: "Your Privacy Rights",
    icon: <Eye className="w-6 h-6" />,
    content: "Under GDPR and Indian data protection laws, you have rights to access, rectify, delete, and port your data. You can object to processing, restrict data usage, and withdraw consent. We provide data export tools and account management features. For enterprise clients, we offer dedicated privacy controls and audit logs. Contact our Data Protection Officer for privacy-related queries."
  },
  {
    title: "Cookies & Tracking",
    icon: <Shield className="w-6 h-6" />,
    content: "We use essential cookies for authentication, session management, and security. Analytics cookies help improve user experience and software performance. Marketing cookies are used only with consent for targeted communications. Users can manage cookie preferences through browser settings. We comply with cookie consent requirements and provide clear opt-out mechanisms."
  },
  {
    title: "International Data Transfers",
    icon: <Lock className="w-6 h-6" />,
    content: "For global software delivery, we may transfer data to secure servers in different jurisdictions. All transfers comply with applicable data protection laws using standard contractual clauses, adequacy decisions, or other approved mechanisms. We ensure equivalent protection levels regardless of data location and maintain transparency about data processing locations."
  }
];

export function PrivacyPolicy() {
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent bg-size-200 animate-gradient-x leading-normal pb-2">
                  Privacy Policy
                </h1>
                <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                  Where transparency meets security — our unwavering commitment to protecting your privacy in the digital age.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Introduction Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto px-4 pb-12"
          >
            <div className="glass-effect rounded-2xl p-6 md:p-8 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent mb-4">Our Commitment to Your Privacy</h2>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                Manacle Technologies Pvt Ltd is committed to protecting your privacy and ensuring transparent data practices across all our software solutions including Sales Force Automation (SFA), Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), and Human Resource Management Systems (HRMS). This comprehensive privacy policy outlines how we collect, process, store, and protect your personal and business data.
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                As a leading software solutions provider serving manufacturing, FMCG, pharmaceutical, dairy, and healthcare industries, we adhere to the highest standards of data protection including IT Act 2000, GDPR compliance, and international privacy frameworks. By using our applications, websites, or services, you consent to the data practices described in this policy.
              </p>
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                This policy applies to all Manacle Technologies products including mSELL (Sales Force Automation), mCIVIC (Municipal Management), mEDU (Education Management), and our custom enterprise software solutions. We regularly update this policy to reflect changes in our services and applicable privacy laws.
              </p>
            </div>
          </motion.section>

          {/* Privacy Sections */}
          <section className="max-w-6xl mx-auto px-4 pb-16">
            <div className="space-y-6">
              {privacyData.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-effect rounded-xl p-6 md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black">
                      {section.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent mb-4">{section.title}</h3>
                      <p className="text-base md:text-lg text-foreground/80 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Key Points Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto px-4 pb-16"
          >
            <div className="glass-effect rounded-2xl p-6 md:p-8 space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent mb-6">Key Privacy Points</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">
                    1
                  </div>
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    We are committed to protecting and respecting our privacy. We do collect your personal information and process your personal data in accordance with the IT Act, 2000 and other National and State Laws which relate the processing of personal data.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">
                    2
                  </div>
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    Our privacy policy is subject to change at any time without notice. To make sure you are aware of any changes, please review this policy periodically.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">
                    3
                  </div>
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    All partner firms and any third-party working with or for us, and who have access to personal information, will be expected to read and comply with this policy. No third party may access or process sensitive personal information held by us without having first entered into a confidentiality agreement.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto px-4 pb-16"
          >
            <div className="glass-effect rounded-2xl p-6 md:p-8 text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                  Questions About Our Privacy Policy?
                </span>
              </h2>
              <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto">
                If you have any questions about this Privacy Policy or how we handle your personal information, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:sales@manacleindia.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Get Support
                </a>
              </div>
            </div>
          </motion.section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default PrivacyPolicy;