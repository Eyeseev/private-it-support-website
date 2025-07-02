import React from 'react';
import { HiOutlineGlobeAlt, HiOutlineArrowPath, HiOutlineShieldCheck, HiOutlineWrenchScrewdriver, HiOutlineDocumentText, HiOutlineUserGroup, HiOutlineCheckCircle, HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

// --- Core Website Package ---
export const coreWebsitePackage = {
  icon: <HiOutlineGlobeAlt className="mr-2" />,
  title: 'Launch-Ready Website Package',
  price: '$200',
  description: 'A fast, affordable 1-page site built for small business owners, freelancers, and creators who need a clean online presence — fast.',
  features: [
    '1-page responsive site (Home, About, Services, Contact)',
    'Mobile-friendly + fast-loading',
    'Hosted on Vercel.com',
    'Domain connection + basic SEO setup',
    'One round of revisions',
    'Delivered in 3–5 business days',
  ],
};

// --- Add-Ons ---
export const addOns = [
  { title: 'Booking Form Integration', price: '$30', details: 'Connects to your calendar or email.' },
  { title: 'Google Business Profile Help', price: '$20', details: 'Setup or improve your Google Business listing.' },
  { title: 'Contact Form + Auto-Reply', price: '$25', details: 'Visitors get an automatic confirmation email.' },
  { title: 'Instagram Feed Embed', price: '$20', details: 'Displays your latest posts directly on your site.' },
  { title: 'Analytics Setup', price: '$20', details: 'Google Analytics or Vercel Insights setup.' },
  { title: 'Extra Page (e.g., FAQ, Blog, Gallery)', price: '$50', details: 'Add a fully custom second page.' },
  { title: 'Image Portfolio / Gallery Grid', price: '$30', details: 'Clickable photo grid layout to showcase your work.' },
  { title: 'Testimonials Slider', price: '$25', details: 'Rotating reviews or quotes section.' },
  { title: 'Cookie Consent Banner', price: '$10', details: 'Privacy-compliant cookie pop-up.' },
];

// --- Website Audit & Redesign ---
export const websiteRedesign = {
  icon: <HiOutlineArrowPath className="mr-2" />,
  title: 'Website Audit & Full Redesign',
  price: '$300',
  description: 'Perfect for older or DIY sites that need a full refresh. You\'ll get a custom-built, modern site based on your content and goals.',
  features: [
    'Complete rebuild from scratch',
    'Fully responsive + clean modern layout',
    'Updated structure and content flow',
    'Basic SEO + performance improvements',
    'Delivered in 7–10 days',
    'One round of revisions',
    'Client must provide existing site URL and all necessary content.',
  ],
};

// --- Care Plans ---
export interface CarePlan {
  icon: React.ReactNode;
  title: string;
  price: string;
  description: string;
  features: string[];
}

export const carePlans: CarePlan[] = [
  {
    icon: <HiOutlineShieldCheck className="mr-2" />,
    title: 'Basic Care Plan',
    price: '$50/month',
    description: 'Keep your site healthy, secure, and updated.',
    features: [
      '1 content change per month (text/image/link)',
      'Monthly check-up + backup',
      'Performance monitoring',
      'Tech updates (scripts/plugins)',
      'Priority support (48-hr turnaround)',
    ],
  },
  {
    icon: <HiOutlineWrenchScrewdriver className="mr-2" />,
    title: 'Care Plan Plus',
    price: '$75/month',
    description: 'Includes everything in Basic plus:',
    features: [
      '2 monthly content changes',
      'One 15-minute tech help call each month',
    ],
  },
];

// --- One-Time Tech Services ---
export const oneTimeTechServices = [
  { title: 'Domain Setup Help', price: '$40', details: 'Help purchasing and configuring a domain name.' },
  { title: 'Remote Tech Support (1 hour)', price: '$50', details: 'General IT help via Zoom or screen share.' },
  { title: 'Business Tools Mini Consult', price: '$30', details: 'Help picking apps or software for your workflow.' },
];

// (Legacy) For contact page overview, keep as-is for now
export interface ServiceOverview {
  title: string;
  description: string;
}

export const serviceOverviews: ServiceOverview[] = [
  { title: 'Launch-Ready Website', description: '1-page site for small business or creators' },
  { title: 'Website Redesign', description: 'Full rebuild for outdated or DIY sites' },
  { title: 'Care Plans', description: 'Ongoing site maintenance & support' },
  { title: 'Add-Ons', description: 'Booking, analytics, forms, and more' },
  { title: 'One-Time Tech Help', description: 'Domain, remote support, and consulting' },
]; 