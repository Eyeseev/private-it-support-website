'use client';

import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <h4 className="font-semibold text-gray-900 mb-2">{question}</h4>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
} 