'use client';

import { HiCheckCircle } from 'react-icons/hi';
import StatusCard from "@/components/StatusCard";
import BackToHomeLink from "@/components/BackToHomeLink";

export default function ThankYouPage() {
  return (
    <main className="section-spacing bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="section-content text-center max-w-2xl">
        <StatusCard
          icon={<HiCheckCircle className="h-16 w-16" />}
          title="Thank You For Booking!"
          description="Your consultation is confirmed. You&apos;re one step closer to solving your tech issues."
          iconColor="text-green-500"
        >
          <div className="text-left bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="font-semibold text-gray-900 mb-3">What Happens Next?</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="font-bold text-blue-700 mr-3">1.</span>
                <span>You will receive an email confirmation from Calendly with the meeting details.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-700 mr-3">2.</span>
                <span>Please check your spam/junk folder if you don&apos;t see it within 5 minutes.</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-blue-700 mr-3">3.</span>
                <span>I will call you at the scheduled time. I look forward to speaking with you!</span>
              </li>
            </ul>
          </div>

          <BackToHomeLink 
            text="Go Back to Home" 
            showBorder={false}
            className="mt-10"
          />
        </StatusCard>
      </div>
    </main>
  );
} 