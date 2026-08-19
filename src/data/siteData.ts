import { checkoutRoutes } from "@/lib/checkout";
import type { CheckoutPlan } from "@/lib/checkout";

export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

export type PlanItem = {
  plan: CheckoutPlan;
  name: string;
  price: string;
  period: string;
  cta: string;
  href: string;
  featured?: boolean;
  features: string[];
};

export type OneTimeService = {
  title: string;
  price: string;
};

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Memberships", href: "#memberships" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Service Area", href: "#service-area" },
  { label: "FAQ", href: "#faq" },
];

export const trustItems = [
  "LOCAL 409 TEAM",
  "EASY SCHEDULING",
  "UPFRONT PRICING",
  "RECURRING PLANS",
];

export const serviceItems: ServiceItem[] = [
  {
    title: "Lawn Care",
    description: "Consistent mowing, edging, and yard presentation built for curb appeal.",
    icon: "Leaf",
  },
  {
    title: "Pressure Washing",
    description: "Restore driveways, siding, and hard surfaces with deep-clean precision.",
    icon: "SprayCan",
  },
  {
    title: "Gutter Cleaning",
    description: "Keep drainage flowing and protect your home from overflow damage.",
    icon: "ArrowDownToLine",
  },
  {
    title: "Yard Cleanup",
    description: "Fast removal of overgrowth, debris, and seasonal buildup.",
    icon: "Shovel",
  },
  {
    title: "Handyman Services",
    description: "Reliable repairs and small projects homeowners put off too long.",
    icon: "Hammer",
  },
  {
    title: "Property Cleanup",
    description: "Full exterior and utility-space cleanups for neglected properties.",
    icon: "House",
  },
  {
    title: "Move-Out Cleanup",
    description: "Get homes and rentals clear, clean, and ready for next steps.",
    icon: "Truck",
  },
  {
    title: "Estate / Inherited Property Cleanup",
    description: "Compassionate cleanup support during transitions and estate handling.",
    icon: "KeyRound",
  },
  {
    title: "Pre-Sale Home Preparation",
    description: "Focused prep so listing photos and walkthroughs make a strong impression.",
    icon: "BadgeCheck",
  },
  {
    title: "Home Maintenance",
    description: "Scheduled recurring care that prevents little issues from becoming big ones.",
    icon: "Wrench",
  },
];

export const problemCards = [
  "Yard getting out of control? We'll handle it.",
  "Gutters overflowing? We'll handle it.",
  "Need the house cleaned up before selling? We'll handle it.",
  "Inherited a property? We'll help get it ready.",
  "Don't have time for maintenance? Put it on autopilot.",
];

export const plans: PlanItem[] = [
  {
    plan: "care",
    name: "HDM CARE",
    price: "$99",
    period: "/ MONTH",
    cta: "START CARE PLAN →",
    href: checkoutRoutes.care,
    features: [
      "Lawn maintenance",
      "Trimming & edging",
      "Basic yard cleanup",
      "Monthly HVAC filter replacement",
      "Priority scheduling",
      "Member pricing",
    ],
  },
  {
    plan: "home",
    name: "HDM HOME",
    price: "$199",
    period: "/ MONTH",
    cta: "START HOME PLAN →",
    href: checkoutRoutes.home,
    featured: true,
    features: [
      "Everything in Care",
      "Pressure washing",
      "Gutter cleaning",
      "Seasonal cleanup",
      "Minor handyman tasks",
      "Priority service",
    ],
  },
  {
    plan: "total",
    name: "HDM TOTAL",
    price: "$299",
    period: "/ MONTH",
    cta: "START TOTAL PLAN →",
    href: checkoutRoutes.total,
    features: [
      "Everything in Home",
      "Larger recurring maintenance",
      "Exterior property maintenance",
      "Seasonal property inspection",
      "Priority scheduling",
      "Best member pricing",
    ],
  },
];

export const oneTimeServices: OneTimeService[] = [
  { title: "Lawn Cleanup", price: "From $79" },
  { title: "Pressure Washing", price: "From $149" },
  { title: "Gutter Cleaning", price: "From $129" },
  { title: "Yard Cleanup", price: "From $99" },
  { title: "Move-Out / Property Cleanup", price: "From $249" },
  { title: "Handyman Services", price: "From $95/hr" },
  { title: "Pre-Sale Preparation", price: "FREE ESTIMATE" },
  { title: "Estate / Inherited Property", price: "FREE ESTIMATE" },
  { title: "Large Property Projects", price: "FREE ESTIMATE" },
];

export const areaCities = [
  "Beaumont",
  "Port Arthur",
  "Nederland",
  "Port Neches",
  "Groves",
  "Orange",
  "Vidor",
  "Lumberton",
  "Silsbee",
  "Bridge City",
  "Kountze",
  "Winnie",
  "Mauriceville",
  "And surrounding communities",
];

export const whyCards = [
  {
    title: "LOCAL",
    copy: "We're not some faceless national company.",
  },
  {
    title: "SIMPLE",
    copy: "One team for the jobs homeowners constantly put off.",
  },
  {
    title: "UPFRONT",
    copy: "Clear communication before work begins.",
  },
  {
    title: "RELIABLE",
    copy: "Recurring plans keep your property maintained.",
  },
  {
    title: "HUMAN",
    copy: "Real people. Real local service.",
  },
];

export const faqs = [
  "What areas do you serve?",
  "Do you offer recurring maintenance?",
  "Can I request a one-time service?",
  "Do you work with inherited properties?",
  "Can you help prepare my house for sale?",
  "Do you offer estimates?",
  "Can I cancel my membership?",
  "What happens if my project is larger than the membership covers?",
];
