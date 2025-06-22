'use client';

import Link from 'next/link';
import { HiExclamationTriangle, HiArrowLeft } from 'react-icons/hi2';

export default function NotFound() {
  return (
    <main className="section-spacing bg-gray-50 flex items-center justify-center min-h-screen">
      <div className="section-content text-center max-w-2xl">
        <div className="bg-white p-10 rounded-xl shadow-lg">
          <HiExclamationTriangle className="text-yellow-500 h-16 w-16 mx-auto mb-6" />

          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            404 - Page Not Found
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-sm hover:bg-blue-800 transition-all duration-200 text-lg hover:scale-105 hover:shadow-lg"
          >
            <HiArrowLeft className="h-5 w-5 mr-2" />
            Go Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
} 