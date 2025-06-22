'use client';
import ContactInfoItem from '@/components/ContactInfoItem';
import ServiceOverviewCard from '@/components/ServiceOverviewCard';
import FAQItem from '@/components/FAQItem';
import { contactInfo, faqs } from '@/data/contact';
import { serviceOverviews } from '@/data/services';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToHomeLink from '@/components/BackToHomeLink';

export default function Contact() {
  const scrollToSection = () => {
    // No-op for contact page as it's not a single-page layout
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Navigation scrollToSection={scrollToSection} />
      <main className="section-spacing flex-grow">
        <div className="section-content">
          <h1 className="text-3xl font-semibold mb-2">Contact Us</h1>
          <p className="text-sm text-gray-500 mb-8">Get in touch for IT support and consultations</p>
          {/* Contact Information */}
          <section className="mb-20">
            <h2 className="text-xl font-semibold mb-6 text-gray-900">Get In Touch</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <ContactInfoItem key={item.title} {...item} />
                ))}
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Contact Form</h3>
                <p className="text-gray-600 mb-6">For immediate assistance, please use the consultation booking system below.</p>
                <a 
                  href="https://calendly.com/victor-privateitsupport/consultation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-all duration-200 inline-block hover:shadow-md hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  aria-label="Book a free 15-minute consultation (opens in new tab)"
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
              {serviceOverviews.map((service) => (
                <ServiceOverviewCard key={service.title} {...service} />
              ))}
            </div>
          </section>
          {/* FAQ Section */}
          <section className="mb-20">
            <h2 className="text-xl font-semibold mb-6 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
          </section>
          {/* Back to Home */}
          <div className="text-center pt-8 border-t border-gray-200">
            <BackToHomeLink />
          </div>
        </div>
      </main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
} 