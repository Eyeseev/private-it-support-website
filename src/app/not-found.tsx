'use client';

import { HiExclamationTriangle } from 'react-icons/hi2';
import StatusCard from "@/components/StatusCard";
import BackToHomeLink from "@/components/BackToHomeLink";

export default function NotFound() {
  return (
    <main className="section-spacing bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="section-content text-center max-w-2xl">
        <StatusCard
          icon={<HiExclamationTriangle className="h-16 w-16" />}
          title="404 - Page Not Found"
          description="Sorry, the page you are looking for doesn&apos;t exist or has been moved."
          iconColor="text-yellow-500"
        >
          <BackToHomeLink 
            text="Go Back to Home" 
            showBorder={false}
            className="mt-6"
          />
        </StatusCard>
      </div>
    </main>
  );
} 