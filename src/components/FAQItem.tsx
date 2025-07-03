'use client';

import React, { useState, useId } from 'react';
import { HiQuestionMarkCircle, HiChevronDown } from 'react-icons/hi';

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <button
        className="flex items-center w-full text-left focus:outline-none focus-visible:ring focus-visible:ring-[#1c398e]"
        aria-expanded={open}
        aria-controls={`faq-answer-${id}`}
        onClick={() => setOpen((v) => !v)}
      >
        <HiQuestionMarkCircle className="h-6 w-6 text-[#1c398e] mr-2 flex-shrink-0" aria-hidden="true" />
        <span className="font-bold text-[1.25rem] text-[#1c398e] flex-1">{question}</span>
        <HiChevronDown className={`h-5 w-5 ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <div
        id={`faq-answer-${id}`}
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-40 mt-3' : 'max-h-0'}`}
        aria-hidden={!open}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
} 