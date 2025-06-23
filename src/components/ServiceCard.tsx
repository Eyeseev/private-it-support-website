'use client';

import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  audience: string;
  price: string;
}

export default function ServiceCard({ icon, title, description, audience, price }: ServiceCardProps) {
  return (
    <div className="h-full bg-gray-50 rounded-xl shadow p-6 flex flex-col items-start transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center mb-3 text-blue-700 text-2xl">
        {icon} {title}
      </div>
      <p className="mb-2 text-gray-800">{description}</p>
      <p className="mb-4 text-gray-600 text-base">{audience}</p>
      <p className="mb-4 font-semibold text-blue-900">{price}</p>
      <a 
        href="#consultation" 
        className="mt-auto bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800 transition-all duration-200 font-semibold cursor-pointer hover:shadow-md focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        aria-label={`Book consultation for ${title} service`}
      >
        Book Now
      </a>
    </div>
  );
} 