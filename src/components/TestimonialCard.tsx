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
      <p className="text-xl text-gray-800 italic mb-6">&ldquo;{quote}&rdquo;</p>
      <footer className="mt-auto">
        <p className="font-semibold text-blue-900">— {name}</p>
        <p className="text-sm text-gray-600">{service}</p>
      </footer>
    </blockquote>
  );
} 