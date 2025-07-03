'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onBookConsultation: () => void;
}

export default function HeroSection({ onBookConsultation }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="section-spacing text-white text-center relative overflow-hidden"
      aria-label="Hero Section"
      style={{
        backgroundImage: 'url(/images/chat-gpt-header-8.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 55%', // Adjust as needed to center laptop
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="section-content relative z-10">
        <motion.h1
          className="text-5xl font-semibold mb-12 tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Professional Websites Services - Get Rid of Tech Headaches
        </motion.h1>
        <p className="text-xl mb-6 font-medium drop-shadow">Need a clean, mobile-friendly website that just works? I help small business owners, freelancers, and creators launch fast, modern websites—with zero hassle, easy to understand, and expert support you can trust.</p>
        <p className="text-lg mb-8 text-blue-100 drop-shadow">Book a free 15-minute consultation and see how quickly we can solve your tech problems.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onBookConsultation}
            className="bg-white text-blue-900 font-semibold px-8 py-4 rounded shadow hover:bg-blue-100 transition-all duration-200 text-lg cursor-pointer hover:scale-105 hover:shadow-lg focus:outline-none focus-visible:ring focus-visible:ring-blue-400 focus-visible:ring-offset-2"
            aria-label="Book a Free Consultation"
          >
            Book a Free Consultation
          </button>
          <a
            href="#services"
            className="bg-transparent text-white font-semibold px-8 py-4 rounded shadow-sm hover:bg-white/10 transition-all duration-200 text-lg border border-white/50 hover:border-white hover:scale-105 hover:shadow-lg focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2"
            aria-label="See Services"
          >
            See Services
          </a>
        </div>
      </div>
    </section>
  );
} 