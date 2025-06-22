'use client';
import Link from 'next/link';
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi';

export default function Contact() {
  return (
    <main className="section-spacing">
      <div className="section-content">
        <h1 className="text-3xl font-semibold mb-2">Contact Us</h1>
        <p className="text-sm text-gray-500 mb-8">Get in touch for IT support and consultations</p>
        
        {/* Contact Information */}
        <section className="mb-20">
          <h2 className="text-xl font-semibold mb-6 text-gray-900">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <HiMail className="text-blue-700 h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:victor@privateitsupport.com" className="text-blue-700 hover:text-blue-800 transition-colors duration-200">
                    victor@privateitsupport.com
                  </a>
                  <p className="text-sm text-gray-600 mt-1">I typically respond within 2-4 hours during business hours.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <HiPhone className="text-blue-700 h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-700">Available by appointment</p>
                  <p className="text-sm text-gray-600 mt-1">Call or text to schedule a consultation or service visit.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <HiLocationMarker className="text-blue-700 h-6 w-6 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Service Area</h3>
                  <p className="text-gray-700">New York City & Remote Support</p>
                  <p className="text-sm text-gray-600 mt-1">In-person service in NYC metro area. Remote support available worldwide.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Contact Form</h3>
              <p className="text-gray-600 mb-6">For immediate assistance, please use the consultation booking system below.</p>
              <a 
                href="https://calendly.com/victor-privateitsupport/consultation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-all duration-200 inline-block hover:shadow-md"
              >
                Book Free Consultation
              </a>
              <p className="text-sm text-gray-500 mt-3">15-minute free consultation to discuss your IT needs.</p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="mb-20">
          <h2 className="text-xl font-semibold mb-6 text-gray-900">Services Overview</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Computer Tune-Up</h4>
              <p className="text-sm text-gray-600">Speed up slow computers and optimize performance</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Wi-Fi & Network Help</h4>
              <p className="text-sm text-gray-600">Fix connection issues and improve network performance</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Security & Virus Removal</h4>
              <p className="text-sm text-gray-600">Remove malware and secure your devices</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Device Setup & Training</h4>
              <p className="text-sm text-gray-600">Get new tech set up with patient guidance</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Data Backup & Recovery</h4>
              <p className="text-sm text-gray-600">Protect your data and recover lost files</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Mobile Device Help</h4>
              <p className="text-sm text-gray-600">Expert help with phones and tablets</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-xl font-semibold mb-6 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">How quickly can you help me?</h4>
              <p className="text-gray-600">Most issues can be resolved within 1-2 hours. For urgent matters, I offer same-day service when possible.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Do you offer remote support?</h4>
              <p className="text-gray-600">Yes! Many issues can be resolved remotely, which is often faster and more convenient for both of us.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">What if I'm not satisfied with the service?</h4>
              <p className="text-gray-600">Customer satisfaction is my priority. If you're not happy with the results, I'll work to make it right or offer a refund.</p>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center pt-8 border-t border-gray-200">
          <Link href="/" className="text-blue-700 underline hover:text-blue-800 transition-colors duration-200">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
} 