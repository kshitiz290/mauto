import { ArrowUpRight } from "lucide-react";
import { GlareCard } from "./glare-card";

interface ServiceItem {
  id: number;
  title: string;
  iconPath: string;
  iconAlt: string;
  isHighlighted?: boolean;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Sales Force Automation (SFA)",
    iconPath: "/icons/marketing-3d.svg", // SFA: marketing-3d.svg is appropriate
    iconAlt: "Sales Force Automation Icon",
    isHighlighted: true,
    description: "Automate field sales, order management, attendance, and activity tracking for your FMCG sales team.",
  },
  {
    id: 2,
    title: "Distributor Management System (DMS)",
    iconPath: "/icons/branding-3d.svg", // DMS: branding-3d.svg is appropriate
    iconAlt: "Distributor Management Icon",
    description: "Streamline your distribution network, inventory, and supply chain for maximum efficiency.",
  },
  {
    id: 3,
    title: "ERP Solutions",
    iconPath: "/icons/tech/custom/backend.svg", // ERP: backend.svg is more relevant
    iconAlt: "ERP Icon",
    description: "Integrated modules for purchase, store, production, packing, dispatch, and plant management.",
  },
  {
    id: 4,
    title: "Human Resource Management (HRMS)",
    iconPath: "/icons/maintenance-3d.svg", // HRMS: maintenance-3d.svg is appropriate
    iconAlt: "HRMS Icon",
    description: "Cloud-based HRMS for attendance, leave, payroll, and compliance management.",
  },
  {
    id: 5,
    title: "CRM & Customer Engagement",
    iconPath: "/icons/seo-3d.svg", // CRM: seo-3d.svg is more relevant for engagement/analytics
    iconAlt: "CRM Icon",
    description: "Boost customer relationships and retention with advanced CRM and analytics tools.",
  },
  {
    id: 6,
    title: "Digital & WhatsApp Ordering",
    iconPath: "/icons/tech/custom/digital.svg", // Digital Ordering: digital.svg is most relevant
    iconAlt: "Digital Ordering Icon",
    description: "Enable digital and WhatsApp-based ordering for seamless B2B and B2C transactions.",
  },
];

export function OurServices() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-50 dark:from-[#18181b] dark:to-[#23232a]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text text-orange-500 dark:text-orange-400">Our Solutions & ERP Modules</span>
          </h2>
          <p className="text-xl text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Empowering FMCG and enterprise businesses with scalable, data-driven automation for sales, distribution, HR, and more.
            <span className="text-orange-500 dark:text-orange-400"> Transform your operations with Manacle.</span>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const cardColors = [
              "bg-white/70 dark:bg-[#23232a] backdrop-blur-md",
              "bg-white/70 dark:bg-[#23232a] backdrop-blur-md",
              "bg-white/70 dark:bg-[#23232a] backdrop-blur-md",
              "bg-white/70 dark:bg-[#23232a] backdrop-blur-md",
              "bg-white/70 dark:bg-[#23232a] backdrop-blur-md",
              "bg-white/70 dark:bg-[#23232a] backdrop-blur-md",
            ];

            const iconBgColors = [
              "from-orange-500/20 to-amber-500/20 dark:from-orange-500/30 dark:to-amber-500/30",
              "from-orange-400/20 to-yellow-400/20 dark:from-orange-400/30 dark:to-yellow-400/30",
              "from-yellow-500/20 to-orange-400/20 dark:from-yellow-500/30 dark:to-orange-400/30",
              "from-orange-300/20 to-yellow-300/20 dark:from-orange-300/30 dark:to-yellow-300/30",
              "from-amber-500/20 to-orange-400/20 dark:from-amber-500/30 dark:to-orange-400/30",
              "from-yellow-400/20 to-orange-500/20 dark:from-yellow-400/30 dark:to-orange-500/30",
            ];

            const iconRingColors = [
              "ring-orange-400/50 dark:ring-orange-500/60",
              "ring-yellow-400/50 dark:ring-yellow-500/60",
              "ring-yellow-500/50 dark:ring-yellow-400/60",
              "ring-orange-300/50 dark:ring-orange-400/60",
              "ring-amber-400/50 dark:ring-orange-400/60",
              "ring-orange-500/50 dark:ring-orange-400/60",
            ];

            // Glare colors for each service
            const glareColors = [
              "rgba(249, 115, 22, 0.3)", // SFA
              "rgba(251, 191, 36, 0.3)", // DMS
              "rgba(253, 224, 71, 0.3)", // ERP
              "rgba(253, 186, 116, 0.3)", // HRMS
              "rgba(245, 158, 11, 0.3)", // CRM
              "rgba(251, 146, 60, 0.3)", // Digital Ordering
            ];

            return (
              <GlareCard
                key={service.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 ${cardColors[index]}`}
                glareColor={glareColors[index]}
                glareSize={400}
                glareOpacity={0.4}
              >
                {/* Centered 3D Icon */}
                <div className="flex flex-col items-center justify-center pt-8 pb-4 relative">
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${iconBgColors[index]} backdrop-blur-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 ${iconRingColors[index]} ring-2 ring-offset-4 ring-offset-background/80 shadow-lg`}
                  >
                    <img
                      src={service.iconPath}
                      alt={service.iconAlt}
                      className="w-16 h-16 object-contain transform group-hover:rotate-12 transition-all duration-500"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-all duration-300 text-center px-6">
                    {service.title}
                  </h3>

                  <p className="text-foreground/80 text-sm leading-relaxed px-6 text-center mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex items-center gap-1 text-sm font-medium text-primary cursor-pointer group-hover:text-accent transition-all duration-300">
                      Learn More
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </GlareCard>
            );
          })}
        </div>

        {/* Bottom spacing for visual balance */}
        <div className="mt-16"></div>
      </div>

      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 to-emerald-500/10 rounded-full blur-3xl floating-animation"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-accent/10 to-teal-500/10 rounded-full blur-3xl floating-animation"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl floating-animation"
        style={{ animationDelay: "6s" }}
      ></div>
    </section>
  );
}
