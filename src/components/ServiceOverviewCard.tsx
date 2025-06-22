'use client';

import React from 'react';

interface ServiceOverviewCardProps {
  title: string;
  description: string;
}

export default function ServiceOverviewCard({ title, description }: ServiceOverviewCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
} 