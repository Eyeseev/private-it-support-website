'use client';

import React from 'react';

interface TrustPointProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function TrustPoint({ icon, children }: TrustPointProps) {
  return (
    <li className="flex items-start transition-all duration-200 hover:translate-x-1">
      <div className="text-blue-700 h-7 w-7 mr-4 flex-shrink-0">
        {icon}
      </div>
      <span>{children}</span>
    </li>
  );
} 