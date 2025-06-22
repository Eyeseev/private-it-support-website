'use client';

import React from 'react';

interface LegalSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function LegalSection({ title, children, className = '' }: LegalSectionProps) {
  return (
    <section className={`mb-8 ${className}`}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {children}
    </section>
  );
} 