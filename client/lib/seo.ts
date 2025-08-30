export type SeoMeta = {
    title?: string;
    description?: string;
    keywords?: string[];
    canonical?: string;
    ogImage?: string;
    ogType?: string;
};

function upsertMeta(selector: string, attrs: Record<string, string>) {
    let el = document.head.querySelector<HTMLMetaElement>(selector);
    if (!el) {
        el = document.createElement('meta');
        document.head.appendChild(el);
    }
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
}

function upsertLink(rel: string, href: string) {
    let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
    }
    el.setAttribute('href', href);
}

export function applySeo(path: string, meta: SeoMeta = {}) {
    const { title, description, keywords, canonical, ogImage, ogType } = meta;
    if (title) document.title = title;
    if (description) upsertMeta('meta[name="description"]', { name: 'description', content: description });
    if (keywords && keywords.length) upsertMeta('meta[name="keywords"]', { name: 'keywords', content: keywords.join(', ') });
    if (canonical) upsertLink('canonical', canonical);

    const url = canonical || (typeof window !== 'undefined' ? window.location.href : undefined);
    if (title) upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    if (description) upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    if (url) upsertMeta('meta[property="og:url"]', { property: 'og:url', content: url });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: ogType || 'website' });
    if (ogImage) upsertMeta('meta[property="og:image"]', { property: 'og:image', content: ogImage });
    // Twitter
    if (title) upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    if (description) upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    if (ogImage) upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: ogImage });
}

export const routeSeo: Record<string, SeoMeta> = {
    '/': {
        title: 'Manacle Technologies – Digital Transformation & Business Solutions',
        description: 'Leading provider of SFA, ERP, DMS, HRMS and digital automation solutions for FMCG and enterprise sectors. Transform your business with scalable, data‑driven technology from Manacle.',
        keywords: ['FMCG software', 'SFA', 'ERP', 'DMS', 'HRMS', 'field force automation', 'distributor management', 'retail execution', 'enterprise automation', 'India'],
        canonical: 'https://www.manacletech.com/',
        ogImage: '/manacle_logo.png'
    },
    '/about-us': {
        title: 'About Manacle – Your Technology Partner for FMCG & Enterprises',
        description: 'Learn about Manacle’s mission and expertise in SFA, ERP, DMS, HRMS, CRM and digital solutions for FMCG and enterprises.',
        keywords: ['about Manacle', 'technology partner', 'FMCG solutions', 'enterprise software', 'SaaS India'],
        canonical: 'https://www.manacletech.com/about-us',
        ogImage: '/manacle_logo.png'
    },
    '/contact-us': {
        title: 'Contact Manacle – Request a Demo or Consultation',
        description: 'Talk to our team about SFA, ERP, DMS, HRMS, CRM or custom digital solutions. Request a demo or consultation today.',
        keywords: ['contact', 'demo', 'consultation', 'FMCG software demo', 'enterprise solutions India'],
        canonical: 'https://www.manacletech.com/contact-us',
        ogImage: '/manacle_logo.png'
    },
    '/auto-site': {
        title: 'AI Website Builder – Launch a Modern Business Website | Manacle',
        description: 'Build a beautiful, responsive website powered by Manacle’s AI Website Builder. Fast, SEO‑ready and mobile‑friendly.',
        keywords: ['AI website builder', 'responsive website', 'SEO ready', 'business website', 'Vite React Tailwind'],
        canonical: 'https://www.manacletech.com/auto-site',
        ogImage: '/manacle_logo.png'
    },
    '/blogs': {
        title: 'Manacle Blogs – FMCG, SFA, DMS, ERP, HRMS & Digital Transformation',
        description: 'Insights on dispatch management, CRM, DMS, HRMS and enterprise automation from the Manacle team.',
        keywords: ['FMCG insights', 'dispatch automation', 'CRM fundamentals', 'last‑mile delivery', 'enterprise SaaS'],
        canonical: 'https://www.manacletech.com/blogs',
        ogImage: '/manacle_logo.png'
    },
    '/blogs/crm-software-fundamentals': {
        title: 'CRM Software Fundamentals – Build Better Customer Relationships',
        description: 'Understand CRM basics, sales pipelines, customer data and implementation best practices for growing businesses.',
        keywords: ['CRM fundamentals', 'customer relationship management', 'sales pipeline', 'B2B CRM'],
        canonical: 'https://www.manacletech.com/blogs/crm-software-fundamentals',
        ogImage: '/manacle_logo.png'
    },
    '/blogs/dispatch-automation-fundamentals': {
        title: 'From Chaos to Control: Why Dispatch Automation Wins',
        description: 'A practical deep dive into modern dispatch automation—route optimisation, tracking, cost reduction and fleet efficiency.',
        keywords: ['dispatch automation', 'last‑mile delivery', 'route optimisation', 'fleet management', 'logistics software'],
        canonical: 'https://www.manacletech.com/blogs/dispatch-automation-fundamentals',
        ogImage: '/manacle_logo.png'
    },
    '/podcasts': {
        title: 'Podcasts – Tech, FMCG & Operations by Manacle',
        description: 'Tune into conversations on SFA, ERP, DMS, HRMS and digital transformation trends.',
        keywords: ['podcasts', 'FMCG tech', 'operations', 'digital transformation'],
        canonical: 'https://www.manacletech.com/podcasts',
        ogImage: '/manacle_logo.png'
    },
    '/seminars-webinars': {
        title: 'Seminars & Webinars – Learn with Manacle',
        description: 'Upcoming and recorded sessions on enterprise automation, FMCG operations and digital products.',
        keywords: ['webinars', 'seminars', 'enterprise automation', 'FMCG operations'],
        canonical: 'https://www.manacletech.com/seminars-webinars',
        ogImage: '/manacle_logo.png'
    },
    // Visual Merchandising
    '/visual-merchandising': {
        title: 'Visual Merchandising Solutions – Retail Space Optimization | Manacle',
        description: 'Transform retail spaces with intelligent merchandising tools. Planogram management, compliance monitoring, and sales analytics for optimal customer experience.',
        keywords: ['visual merchandising', 'planogram management', 'retail space optimization', 'compliance monitoring', 'customer experience', 'retail analytics'],
        canonical: 'https://www.manacletech.com/visual-merchandising',
        ogImage: '/manacle_logo.png'
    },
    // Solutions
    '/attendance-leave-management': {
        title: 'Attendance & Leave Management Software – HRMS | Manacle',
        description: 'Cloud HRMS for attendance tracking, leave workflows, timesheets and compliance. Biometric and mobile support.',
        keywords: ['attendance management', 'leave management', 'HRMS', 'timesheets', 'biometric', 'mobile HR'],
        canonical: 'https://www.manacletech.com/attendance-leave-management',
        ogImage: '/manacle_logo.png'
    },
    '/order-management-solution': {
        title: 'Order Management System (OMS) – Faster Order‑to‑Cash',
        description: 'Digitise order capture, approvals and fulfilment with real‑time inventory visibility and analytics.',
        keywords: ['order management', 'OMS', 'order to cash', 'inventory visibility', 'approvals'],
        canonical: 'https://www.manacletech.com/order-management-solution',
        ogImage: '/manacle_logo.png'
    },
    '/field-force-tracking': {
        title: 'Field Force Tracking & Activity – SFA Mobile App',
        description: 'Track visits, geo‑fence, tasks and productivity with SFA mobile app and dashboards for sales teams.',
        keywords: ['field force tracking', 'SFA app', 'geo‑fencing', 'sales productivity', 'visit tracking'],
        canonical: 'https://www.manacletech.com/field-force-tracking',
        ogImage: '/manacle_logo.png'
    },
    '/distributor-management-solution': {
        title: 'Distributor Management System (DMS) – Secondary Sales Control',
        description: 'Real‑time stock, schemes, claims and secondary sales automation across distributor networks.',
        keywords: ['DMS', 'distributor management', 'secondary sales', 'schemes', 'claims'],
        canonical: 'https://www.manacletech.com/distributor-management-solution',
        ogImage: '/manacle_logo.png'
    },
    '/merchandising-retail-execution': {
        title: 'Merchandising & Retail Execution – Perfect Store',
        description: 'Planograms, audits, photo capture and execution analytics to drive perfect store performance.',
        keywords: ['retail execution', 'merchandising', 'planogram', 'store audit', 'perfect store'],
        canonical: 'https://www.manacletech.com/merchandising-retail-execution',
        ogImage: '/manacle_logo.png'
    },
    '/expenses-claims-management': {
        title: 'Expenses & Claims Management – Policy‑Compliant Reimbursements',
        description: 'Automate expense capture, approvals and payouts with policy checks and analytics.',
        keywords: ['expense management', 'claims', 'reimbursements', 'policy compliance', 'approvals'],
        canonical: 'https://www.manacletech.com/expenses-claims-management',
        ogImage: '/manacle_logo.png'
    },
    '/retailer-management-solution': {
        title: 'Retailer Management Solution – Onboarding to Loyalty',
        description: 'Digitise retailer onboarding, catalogues, orders and loyalty programs with real‑time insights.',
        keywords: ['retailer management', 'onboarding', 'loyalty', 'catalogue', 'orders'],
        canonical: 'https://www.manacletech.com/retailer-management-solution',
        ogImage: '/manacle_logo.png'
    },
    '/sales-activity-management': {
        title: 'Sales Activity Management – Plan, Execute, Analyse',
        description: 'Visit planning, beat routes, tasks and KPIs to manage sales activity at scale.',
        keywords: ['sales activity', 'beat plan', 'tasks', 'KPIs', 'SFA'],
        canonical: 'https://www.manacletech.com/sales-activity-management',
        ogImage: '/manacle_logo.png'
    },
    '/purchase-order-management': {
        title: 'Purchase Order Management – Approvals, GRN & Analytics',
        description: 'Create POs, manage approvals, receipts and vendor performance with transparent workflows.',
        keywords: ['purchase order', 'PO approvals', 'GRN', 'procure to pay', 'vendor management'],
        canonical: 'https://www.manacletech.com/purchase-order-management',
        ogImage: '/manacle_logo.png'
    },
    '/store-management-software': {
        title: 'Store Management Software – Inventory, Bins & Movements',
        description: 'Control inventory, bin locations, stock movements and audits with real‑time visibility.',
        keywords: ['store management', 'inventory', 'warehouse', 'bin locations', 'stock audit'],
        canonical: 'https://www.manacletech.com/store-management-software',
        ogImage: '/manacle_logo.png'
    },
    '/production-management': {
        title: 'Production Management – Planning, WIP & Quality',
        description: 'Plan production, track WIP and ensure quality with shop‑floor visibility and controls.',
        keywords: ['production planning', 'WIP tracking', 'quality control', 'manufacturing ERP'],
        canonical: 'https://www.manacletech.com/production-management',
        ogImage: '/manacle_logo.png'
    },
    '/packing-management': {
        title: 'Packing Management – BOM, Lines & Labels',
        description: 'Manage packing lines, materials, BOM and labelling with precise tracking and reporting.',
        keywords: ['packing management', 'BOM', 'labels', 'packaging lines', 'traceability'],
        canonical: 'https://www.manacletech.com/packing-management',
        ogImage: '/manacle_logo.png'
    },
    '/demand-generation': {
        title: 'Demand Generation – Leads, Campaigns & Conversions',
        description: 'Plan and track campaigns, leads and conversions for predictable pipeline growth.',
        keywords: ['demand generation', 'leads', 'campaigns', 'pipeline', 'marketing automation'],
        canonical: 'https://www.manacletech.com/demand-generation',
        ogImage: '/manacle_logo.png'
    },
    '/invoice-generation-solution': {
        title: 'Invoice Generation – Accurate Billing & GST Compliance',
        description: 'Automate invoice generation with tax compliance, templates and integrations.',
        keywords: ['invoice generation', 'billing', 'GST', 'templates', 'integrations'],
        canonical: 'https://www.manacletech.com/invoice-generation-solution',
        ogImage: '/manacle_logo.png'
    },
    '/dispatch-management': {
        title: 'Dispatch Management Software – Route Optimisation & Last‑Mile',
        description: 'Optimise routes, assign orders, track deliveries and manage fleet/couriers with real‑time visibility.',
        keywords: ['dispatch management', 'route optimisation', 'last‑mile delivery', 'fleet management', 'POD tracking'],
        canonical: 'https://www.manacletech.com/dispatch-management',
        ogImage: '/manacle_logo.png'
    },
    '/plant-management': {
        title: 'Plant Management – Production Lines & Maintenance',
        description: 'Monitor plant performance, downtimes and maintenance with actionable dashboards.',
        keywords: ['plant management', 'downtime', 'maintenance', 'OEE', 'manufacturing'],
        canonical: 'https://www.manacletech.com/plant-management',
        ogImage: '/manacle_logo.png'
    },
    '/hrms': {
        title: 'HRMS – Core HR, Attendance, Leave & Payroll Integrations',
        description: 'A complete HRMS suite for employee data, attendance, leave and workflows.',
        keywords: ['HRMS', 'attendance', 'leave', 'payroll', 'employee self‑service'],
        canonical: 'https://www.manacletech.com/hrms',
        ogImage: '/manacle_logo.png'
    },
    '/website-development-services': {
        title: 'Website Development Services – Modern, Fast & SEO‑Ready',
        description: 'Full‑stack web development with React, Vite and Tailwind. Performance, accessibility and SEO best practices.',
        keywords: ['website development', 'React', 'Vite', 'Tailwind CSS', 'SEO'],
        canonical: 'https://www.manacletech.com/website-development-services',
        ogImage: '/manacle_logo.png'
    },
    '/crm-software': {
        title: 'CRM Software – Sales, Service & Customer 360',
        description: 'Manage leads, opportunities and customer service with a scalable CRM platform.',
        keywords: ['CRM software', 'sales CRM', 'customer 360', 'pipeline', 'support'],
        canonical: 'https://www.manacletech.com/crm-software',
        ogImage: '/manacle_logo.png'
    },
    '/digital-marketing-services': {
        title: 'Digital Marketing Services – SEO, Performance & Content',
        description: 'Search, social, content and performance marketing for predictable growth.',
        keywords: ['digital marketing', 'SEO', 'performance marketing', 'content', 'paid ads'],
        canonical: 'https://www.manacletech.com/digital-marketing-services',
        ogImage: '/manacle_logo.png'
    },
    '/whatsapp-ordering-system': {
        title: 'WhatsApp Ordering System – Conversational Commerce',
        description: 'Enable catalog, ordering and notifications on WhatsApp with seamless integrations.',
        keywords: ['WhatsApp ordering', 'conversational commerce', 'chat commerce', 'catalog', 'notifications'],
        canonical: 'https://www.manacletech.com/whatsapp-ordering-system',
        ogImage: '/manacle_logo.png'
    },
};
