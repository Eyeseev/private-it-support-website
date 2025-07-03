'use client';
import ContactInfoItem from '@/components/ContactInfoItem';
import FAQItem from '@/components/FAQItem';
import { contactInfo, faqs } from '@/data/contact';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Contact() {
  const scrollToSection = () => {
    // No-op for contact page as it's not a single-page layout
  };

  return (
    <div className="flex flex-col min-h-screen text-gray-900">
      <Navigation scrollToSection={scrollToSection} />
      <main className="flex-grow">
        {/* Contact Area */}
        <section className="section-spacing bg-[#f2f4f6]">
          <div className="section-content">
            <h1 className="text-3xl font-semibold mb-2 text-center">Contact Us</h1>
            <p className="text-sm text-gray-500 mb-10 text-center">Get in touch for IT support and consultations</p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Contact Info Card */}
              <div className="bg-white rounded-xl shadow p-8 flex flex-col justify-center">
                <h2 className="text-xl font-bold mb-6 text-[#1c398e]">Get In Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <ContactInfoItem key={item.title} {...item} />
                  ))}
                </div>
              </div>
              {/* Contact Form/CTA Card */}
              <div className="bg-white rounded-xl shadow p-8 flex flex-col justify-center">
                <h3 className="font-semibold text-gray-900 mb-4">Quick Contact Form</h3>
                <p className="text-gray-700 mb-2">Prefer email or text? You can also reach out directly.</p>
                <p className="text-gray-600 mb-6">For immediate assistance, please use the consultation booking system below.</p>
                <a 
                  href="https://calendly.com/victor-privateitsupport/consultation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1c398e] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-all duration-200 inline-block hover:shadow-md hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  aria-label="Book a free 15-minute consultation (opens in new tab)"
                  aria-describedby="consult-desc"
                >
                  Book Free Consultation
                </a>
                <p id="consult-desc" className="text-sm text-gray-700 mt-3">15-minute free consultation to discuss your IT needs.</p>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        <section className="section-spacing bg-[#dbe9fd]">
          <div className="section-content text-[#222]">
            <h2 className="text-xl font-bold mb-6 text-[#1c398e]">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} {...faq} />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <a 
                href="https://calendly.com/victor-privateitsupport/consultation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#1c398e] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition-all duration-200 inline-block hover:shadow-md hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                aria-label="Book a free 15-minute consultation (opens in new tab)"
                aria-describedby="consult-desc"
              >
                Book Free Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
} 