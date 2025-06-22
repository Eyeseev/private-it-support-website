'use client';

import Link from 'next/link';
import { HiCheckCircle, HiArrowLeft } from 'react-icons/hi';

export default function ThankYouPage() {
  return (
    <main className="section-spacing bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="section-content text-center max-w-2xl">
        <div className="bg-white p-10 rounded-xl shadow-lg">
          <HiCheckCircle className="text-green-500 h-16 w-16 mx-auto mb-6" />

          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Thank You For Booking!
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Your consultation is confirmed. You're one step closer to solving your tech issues.
          </p>

          <div className="text-left bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="font-semibold text-gray-900 mb-3">What Happens Next?</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold text-blue-700 mr-3">1.</span>
                <span>You will receive an email confirmation from Calendly with the meeting details.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-700 mr-3">2.</span>
                <span>Please check your spam/junk folder if you don't see it within 5 minutes.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-700 mr-3">3.</span>
                <span>I will call you at the scheduled time. I look forward to speaking with you!</span>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <Link href="/" className="inline-flex items-center text-blue-700 hover:text-blue-800 group transition-colors duration-200">
              <HiArrowLeft className="h-5 w-5 mr-2 transition-transform duration-200 group-hover:-translate-x-1" />
              Go Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 