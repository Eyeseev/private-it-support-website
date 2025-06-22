import React from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  description?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const contactInfo: ContactInfo[] = [
  {
    icon: <HiMail />,
    title: 'Email',
    content: (
      <a 
        href="mailto:victor@privateitsupport.com" 
        className="text-blue-700 hover:text-blue-800 transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
        aria-label="Send email to victor@privateitsupport.com"
      >
        victor@privateitsupport.com
      </a>
    ),
    description: 'I typically respond within 2-4 hours during business hours.'
  },
  {
    icon: <HiPhone />,
    title: 'Phone',
    content: <span className="text-gray-700">Available by appointment</span>,
    description: 'Call or text to schedule a consultation or service visit.'
  },
  {
    icon: <HiLocationMarker />,
    title: 'Service Area',
    content: <span className="text-gray-700">New York City & Remote Support</span>,
    description: 'In-person service in NYC metro area. Remote support available worldwide.'
  }
];

export const faqs: FAQ[] = [
  {
    question: 'How quickly can you help me?',
    answer: 'Most issues can be resolved within 1-2 hours. For urgent matters, I offer same-day service when possible. Remote support is often the fastest option for immediate help.'
  },
  {
    question: 'Do you offer remote support?',
    answer: 'Yes! Many issues can be resolved remotely, which is often faster and more convenient. I use secure screen sharing tools and can help with software issues, settings, and troubleshooting without needing to visit in person.'
  },
  {
    question: 'What if I\'m not satisfied with the service?',
    answer: 'Customer satisfaction is my priority. If you\'re not happy with the results, I\'ll work to make it right or offer a refund. I want you to feel confident in your tech setup.'
  },
  {
    question: 'Do you work with both Mac and Windows computers?',
    answer: 'Absolutely! I\'m experienced with both Mac and Windows systems, as well as mobile devices (iPhone, Android). I can help with any platform you use.'
  },
  {
    question: 'How much do your services cost?',
    answer: 'My services start at $69 per session, with most common issues costing between $79-$109. I offer flat-rate pricing so you know exactly what you\'ll pay upfront—no hidden fees or hourly charges.'
  },
  {
    question: 'Can you help with business IT needs?',
    answer: 'Yes! I work with small businesses and entrepreneurs on network setup, security, backup solutions, and employee training. I can help scale your tech as your business grows.'
  },
  {
    question: 'What areas do you serve for in-person visits?',
    answer: 'I provide in-person service throughout the New York City metro area, including Manhattan, Brooklyn, Queens, and the Bronx. For locations outside this area, remote support is available.'
  },
  {
    question: 'Do you provide ongoing support or maintenance?',
    answer: 'I offer ongoing support packages for businesses and individuals who want regular maintenance and priority support. This includes system updates, security monitoring, and proactive problem prevention.'
  }
]; 