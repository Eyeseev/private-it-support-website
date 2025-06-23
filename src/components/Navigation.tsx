'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ scrollToSection }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (isHomepage) {
      e.preventDefault();
      scrollToSection(sectionId);
    }
    // On other pages, the default anchor link behavior will handle navigation.
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: isHomepage ? '#services' : '/#services', label: 'Services', sectionId: 'services', isScrollLink: true },
    { href: isHomepage ? '#about' : '/#about', label: 'About', sectionId: 'about', isScrollLink: true },
    { href: isHomepage ? '#testimonials' : '/#testimonials', label: 'Testimonials', sectionId: 'testimonials', isScrollLink: true },
    { href: '/contact', label: 'Contact' },
    { href: isHomepage ? '#consultation' : '/#consultation', label: 'Book Consultation', sectionId: 'consultation', isButton: true, isScrollLink: true }
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50" aria-label="Main Navigation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a 
              href={isHomepage ? "#" : "/"} 
              onClick={isHomepage ? (e) => handleNavClick(e, 'hero') : undefined} 
              className="text-xl font-semibold text-blue-900 hover:text-blue-700 transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-offset-2"
              aria-label="Go to homepage"
            >
              Private IT Support
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={link.isScrollLink ? (e) => handleNavClick(e, link.sectionId!) : undefined}
                  className={`${
                    link.isButton 
                      ? 'bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-offset-2'
                      : 'text-gray-800 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-offset-2'
                  }`}
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-offset-2"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200/50">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={link.isScrollLink ? (e) => handleNavClick(e, link.sectionId!) : undefined}
                  className={`${
                    link.isButton 
                      ? 'bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-offset-2'
                      : 'text-gray-800 hover:text-blue-700 block px-3 py-2 text-base font-medium transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-offset-2'
                  }`}
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 