'use client';

import React from 'react';

interface StatusCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function StatusCard({ 
  icon, 
  title, 
  description, 
  iconColor = "text-blue-500",
  children,
  className = ""
}: StatusCardProps) {
  return (
    <div className={`bg-white p-10 rounded-xl shadow-lg ${className}`}>
      <div className={`h-16 w-16 mx-auto mb-6 ${iconColor}`}>
        {icon}
      </div>

      <h1 className="text-3xl font-semibold text-gray-900 mb-4 text-center">
        {title}
      </h1>

      <p className="text-lg text-gray-700 mb-8 text-center">
        {description}
      </p>

      {children}
    </div>
  );
} 