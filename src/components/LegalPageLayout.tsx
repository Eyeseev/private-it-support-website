'use client';

import React from 'react';
import BackToHomeLink from './BackToHomeLink';

interface LegalPageLayoutProps {
  title: string;
  effectiveDate?: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, effectiveDate, children }: LegalPageLayoutProps) {
  return (
    <main className="section-spacing">
      <div className="section-content">
        <h1 className="text-3xl font-semibold mb-2">{title}</h1>
        {effectiveDate && <p className="text-sm text-gray-500 mb-8">Effective Date: {effectiveDate}</p>}
        {children}
        <hr className="my-8" />
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} Private IT Support. All rights reserved.</p>
        <div className="mt-8">
          <BackToHomeLink />
        </div>
      </div>
    </main>
  );
} 