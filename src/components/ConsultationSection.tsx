'use client';

import React from 'react';
import { InlineWidget } from 'react-calendly';
import { SITE_CONSTANTS } from '@/data/constants';

interface ConsultationSectionProps {
  consultationRef: React.RefObject<HTMLDivElement | null>;
}

export default function ConsultationSection({ consultationRef }: ConsultationSectionProps) {
  return (
    <section ref={consultationRef} id="consultation" className="section-spacing bg-blue-100 text-center">
      <h2 className="text-3xl font-semibold mb-4">Book Your Free 15-Minute IT Consultation</h2>
      <p className="mb-8 text-lg">Use this free 15-min call to find out if I can save you time, money, or frustration. No obligation—just friendly advice and honest answers.</p>
      <div className="mx-auto" style={{ width: '100%', maxWidth: 1200 }}>
        <InlineWidget
          url={SITE_CONSTANTS.CALENDLY_URL}
          styles={{ minWidth: '320px', height: '630px' }}
        />
      </div>
    </section>
  );
} 