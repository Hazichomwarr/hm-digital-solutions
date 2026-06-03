// lib/constants/services.ts
import {
  Monitor,
  Palette,
  BriefcaseBusiness,
  Globe,
  Settings,
  Bot,
  Briefcase,
  Building2,
  Wrench,
  LucideIcon,
} from "lucide-react";

export type PageServices = {
  title: string;
  imageUrl: string;
  icon: LucideIcon;
  problem: string;
  solution: string;
  outcome: string;
};

export const landingServices = [
  {
    title: "Digital Solutions",
    icon: Monitor,
    color: "from-blue-600 to-blue-500",
    items: [
      "Website Development",
      "Landing Pages",
      "CRM & Booking Systems",
      "Business Automation",
      "E-commerce Solutions",
    ],
  },

  {
    title: "Creative Services",
    icon: Palette,
    color: "from-green-600 to-green-500",
    items: [
      "Branding & Logo Design",
      "Marketing Materials",
      "Flyers, Menus, Brochures",
      "Business Cards",
      "Social Media Graphics",
    ],
  },

  {
    title: "Business Support",
    icon: BriefcaseBusiness,
    color: "from-cyan-600 to-cyan-500",
    items: [
      "Google Business Setup",
      "LLC & Business Guidance",
      "Tech Support & Maintenance",
      "Workflow & Systems Setup",
      "Consulting & Training",
    ],
  },
];

export const PageServices: PageServices[] = [
  {
    title: "Website Development",
    imageUrl: "/services/hm_website.jpg",
    icon: Globe,
    problem:
      "Many businesses lose credibility and customers because they lack a modern online presence.",
    solution:
      "Professional websites designed to showcase your services, generate leads, and build trust.",
    outcome:
      "A digital storefront that works 24/7 to attract and convert customers.",
  },
  {
    title: "Business Automation",
    imageUrl: "/services/hm_automation.jpg",
    icon: Settings,
    problem: "Manual processes consume time and create costly errors.",
    solution:
      "Automate repetitive tasks, data collection, and internal workflows.",
    outcome: "Save time, reduce mistakes, and improve efficiency.",
  },
  {
    title: "AI Solutions",
    imageUrl: "/services/hm_ai-solution.jpg",
    icon: Bot,
    problem:
      "Businesses struggle to keep up with growing customer and operational demands.",
    solution:
      "Leverage AI-powered tools for customer support, content creation, and business operations.",
    outcome:
      "Do more with fewer resources while improving customer experience.",
  },
  {
    title: "CRM Setup",
    imageUrl: "/services/hm_crm-setup.jpg",
    icon: Briefcase,
    problem:
      "Customer information is scattered across spreadsheets, notebooks, and emails.",
    solution:
      "Implement systems that centralize customer relationships and follow-ups.",
    outcome:
      "Better organization, stronger customer retention, and increased sales opportunities.",
  },
  {
    title: "Google Business Profile",
    imageUrl: "/services/hm_google.jpg",
    icon: Building2,
    problem: "Local customers can't easily find your business online.",
    solution:
      "Set up and optimize your Google Business Profile for local visibility.",
    outcome: "More local traffic, calls, and customer inquiries.",
  },
  {
    title: "Technical Support",
    imageUrl: "/services/hm_tech-support.jpg",
    icon: Wrench,
    problem: "Technology issues slow down operations and frustrate staff.",
    solution:
      "Reliable troubleshooting, system assistance, and technical guidance.",
    outcome: "Reduced downtime and smoother business operations.",
  },
];
