'use client';

import React from 'react';
import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showBackLink?: boolean;
  backLinkText?: string;
  backLinkHref?: string;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  showBackLink = false, 
  backLinkText = "Back to Home",
  backLinkHref = "/"
}: PageHeaderProps) {
  return (
    <div className="mb-8">
      {showBackLink && (
        <div className="mb-4">
          <Link 
            href={backLinkHref} 
            className="inline-flex items-center text-blue-700 hover:text-blue-800 group transition-colors duration-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded"
            aria-label={`Navigate back to ${backLinkText}`}
          >
            <HiArrowLeft className="h-5 w-5 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
            {backLinkText}
          </Link>
        </div>
      )}
      <h1 className="text-3xl font-semibold mb-2">{title}</h1>
      {subtitle && (
        <p className="text-sm text-gray-500">{subtitle}</p>
      )}
    </div>
  );
} 