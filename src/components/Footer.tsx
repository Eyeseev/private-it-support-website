'use client';

import React from 'react';
import { SITE_CONSTANTS } from '@/data/constants';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const handleFooterClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer id="footer" className="section-spacing bg-blue-900 text-white" aria-label="Site Footer">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Contact</h4>
          <p>Email: <a href={`mailto:${SITE_CONSTANTS.EMAIL}`} className="underline hover:text-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2">{SITE_CONSTANTS.EMAIL}</a></p>
          <p>Serving {SITE_CONSTANTS.SERVICE_AREA}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="#services" onClick={(e) => handleFooterClick(e, 'services')} className="hover:text-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2">Services</a></li>
            <li><a href="#consultation" onClick={(e) => handleFooterClick(e, 'consultation')} className="hover:text-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2">Free Consultation</a></li>
            <li><a href="#about" onClick={(e) => handleFooterClick(e, 'about')} className="hover:text-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2">About</a></li>
          </ul>
          {/* Future: Social Media & Newsletter */}
          {/* <div className="mt-4 flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-gray-300">FB</a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-300">IG</a>
            <a href="#" aria-label="Newsletter" className="hover:text-gray-300">Newsletter</a>
          </div> */}
        </div>

        {/* Legal / Placeholder Links */}
        <div>
          <h4 className="font-semibold mb-2 text-white">Legal</h4>
          <ul className="space-y-1">
            <li><a href="/privacy-policy" className="hover:text-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
} 