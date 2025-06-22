import React from 'react';
import { HiDesktopComputer, HiWifi, HiShieldCheck, HiAcademicCap, HiDatabase, HiDeviceMobile } from 'react-icons/hi';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  audience: string;
  price: string;
}

export const services: Service[] = [
  {
    icon: <HiDesktopComputer className="mr-2" />,
    title: "Computer Tune-Up & Performance Optimization",
    description: "Transform your slow computer into a speed demon. I'll clean up junk files, optimize startup programs, update drivers, and fine-tune your system for maximum performance. Perfect for computers that take forever to boot up or struggle with basic tasks.",
    audience: "Great for: Anyone frustrated by laggy computers, slow startups, or programs that freeze frequently.",
    price: "$99 flat rate"
  },
  {
    icon: <HiWifi className="mr-2" />,
    title: "Wi-Fi & Network Troubleshooting",
    description: "Say goodbye to dead zones and buffering. I'll diagnose connection issues, optimize router settings, extend your network coverage, and ensure you get the speeds you're paying for. Includes setup of mesh networks and range extenders if needed.",
    audience: "Great for: Home offices, apartments with thick walls, or anyone experiencing spotty Wi-Fi coverage.",
    price: "$89 per visit"
  },
  {
    icon: <HiShieldCheck className="mr-2" />,
    title: "Security & Virus Removal",
    description: "Protect your digital life from threats. I'll remove malware, viruses, and spyware, set up comprehensive security software, configure firewalls, and teach you how to spot phishing attempts. Includes ongoing security recommendations.",
    audience: "Great for: Anyone worried about online scams, experiencing pop-ups, or wanting to protect sensitive data.",
    price: "$109 flat rate"
  },
  {
    icon: <HiAcademicCap className="mr-2" />,
    title: "New Device Setup & Tech Training",
    description: "Get your new tech working perfectly from day one. I'll set up computers, phones, tablets, and smart devices, transfer your data safely, configure accounts and settings, and provide patient training on how to use everything effectively.",
    audience: "Great for: New device owners, tech beginners, or anyone wanting to get more from their gadgets.",
    price: "$79 per session"
  },
  {
    icon: <HiDatabase className="mr-2" />,
    title: "Data Backup & Recovery Solutions",
    description: "Never lose important files again. I'll set up automated backup systems, recover lost data from failing drives, and create disaster recovery plans. Includes cloud backup setup and local backup solutions for complete protection.",
    audience: "Great for: Anyone without a backup plan, dealing with file loss, or storing important documents and photos.",
    price: "$99+ depending on complexity"
  },
  {
    icon: <HiDeviceMobile className="mr-2" />,
    title: "Mobile Device Support & Optimization",
    description: "Master your mobile devices. I'll help with phone and tablet setup, storage management, app organization, iCloud/Google account configuration, and syncing across all your devices. Includes troubleshooting for common mobile issues.",
    audience: "Great for: Anyone struggling with phones, tablets, or smart home devices.",
    price: "$69 per session"
  }
];

// Simplified service data for contact page overview
export interface ServiceOverview {
  title: string;
  description: string;
}

export const serviceOverviews: ServiceOverview[] = [
  { title: 'Computer Tune-Up', description: 'Speed up slow computers and optimize performance' },
  { title: 'Wi-Fi & Network Help', description: 'Fix connection issues and improve network performance' },
  { title: 'Security & Virus Removal', description: 'Remove malware and secure your devices' },
  { title: 'Device Setup & Training', description: 'Get new tech set up with patient guidance' },
  { title: 'Data Backup & Recovery', description: 'Protect your data and recover lost files' },
  { title: 'Mobile Device Help', description: 'Expert help with phones and tablets' }
]; 