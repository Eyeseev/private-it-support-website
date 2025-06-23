'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { SITE_CONSTANTS } from '@/data/constants';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  const handleFooterClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isHomepage) {
      e.preventDefault();
      scrollToSection(sectionId);
    }
    // On other pages, allow default anchor behavior
  };

  const footerLinks = [
    { href: isHomepage ? '#services' : '/#services', label: 'Services', sectionId: 'services' },
    { href: isHomepage ? '#consultation' : '/#consultation', label: 'Free Consultation', sectionId: 'consultation' },
    { href: isHomepage ? '#about' : '/#about', label: 'About', sectionId: 'about' }
  ];

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
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  onClick={(e) => handleFooterClick(e, link.sectionId)} 
                  className="hover:text-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
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
            <li><a href="/privacy-policy" className="hover:text-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-gray-100 transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
} 