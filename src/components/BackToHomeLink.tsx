'use client';

import React from 'react';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';

interface BackToHomeLinkProps {
  text?: string;
  className?: string;
  showBorder?: boolean;
}

export default function BackToHomeLink({ 
  text = "← Back to Home", 
  className = "",
  showBorder = true 
}: BackToHomeLinkProps) {
  return (
    <div className={`text-center ${showBorder ? 'pt-8 border-t border-gray-200' : ''} ${className}`}>
      <Link 
        href="/" 
        className="inline-flex items-center text-blue-700 hover:text-blue-800 group transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
        aria-label="Navigate back to the home page"
      >
        <HiArrowLeft className="h-5 w-5 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
        {text}
      </Link>
    </div>
  );
} 