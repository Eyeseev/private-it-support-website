'use client';

import React from 'react';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  description?: string;
}

export default function ContactInfoItem({ icon, title, content, description }: ContactInfoItemProps) {
  return (
    <div className="flex items-start">
      <div className="text-blue-700 h-6 w-6 mr-4 flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <div>{content}</div>
        {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
      </div>
    </div>
  );
} 