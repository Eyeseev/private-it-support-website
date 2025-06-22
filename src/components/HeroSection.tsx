'use client';

import React from 'react';

interface HeroSectionProps {
  onBookConsultation: () => void;
}

export default function HeroSection({ onBookConsultation }: HeroSectionProps) {
  return (
    <section id="hero" className="section-spacing bg-blue-900 text-white text-center" aria-label="Hero Section">
      <div className="section-content">
        <h1 className="text-5xl font-semibold mb-4 tracking-tight">Fast, Reliable IT Support That Actually Works</h1>
        <p className="text-xl mb-6 font-medium">Stop struggling with slow computers, Wi-Fi issues, and tech headaches. Get expert help from a real person who speaks your language—not tech jargon.</p>
        <p className="text-lg mb-8 text-blue-100">Book a free 15-minute consultation and see how quickly we can solve your tech problems.</p>
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