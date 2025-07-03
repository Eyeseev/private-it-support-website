'use client';

import React from 'react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  service: string;
}

export default function TestimonialCard({ quote, name, service }: TestimonialCardProps) {
  return (
    <blockquote className="bg-gray-50 p-6 rounded-lg shadow text-center min-h-[220px] flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg">
      <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
        Verified Client
      </span>
      <p className="text-xl text-gray-800 italic mb-6">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-auto">
        <p className="font-semibold text-blue-900">— {name}</p>
        <p className="text-sm text-gray-600">{service}</p>
      </footer>
    </blockquote>
  );
} 