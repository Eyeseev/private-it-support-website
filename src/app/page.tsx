'use client';
import { useEffect, useRef } from "react";
import { HiDesktopComputer, HiShieldCheck, HiWifi, HiDeviceMobile, HiDatabase, HiAcademicCap, HiChatAlt2, HiLightningBolt, HiBadgeCheck, HiUserCircle, HiCalendar } from 'react-icons/hi';
import { InlineWidget } from 'react-calendly';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from "next/image";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote: "Victor's help was invaluable. He quickly resolved my Wi-Fi issues and set up my new devices with ease.",
    name: "John Doe",
    service: "Wi-Fi & Network Help"
  },
  {
    quote: "I've never had a tech support experience this smooth. Victor's advice saved me time and money.",
    name: "Jane Smith",
    service: "Computer Tune-Up"
  },
  {
    quote: "Victor's help was invaluable. He quickly resolved my Wi-Fi issues and set up my new devices with ease.",
    name: "John Doe",
    service: "Laptop Repair Client"
  }
];

export default function Home() {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const consultationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="section-spacing bg-blue-900 text-white text-center">
        <div className="section-content">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Fast, Reliable IT Support for Individuals and Small Businesses</h1>
          <p className="text-2xl mb-8 font-medium">Book a free 15-minute consultation and get expert help with slow computers, Wi-Fi issues, and more — no tech jargon.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => consultationRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-900 font-semibold px-8 py-4 rounded shadow hover:bg-blue-100 transition text-lg cursor-pointer"
            >
              Book a Free Consultation
            </button>
            <a
              href="#services"
              className="bg-blue-700 text-white font-semibold px-8 py-4 rounded shadow hover:bg-blue-800 transition text-lg border border-white border-opacity-20"
            >
              See Services
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-spacing bg-gray-50" id="about">
        <div className="section-content">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
            <div className="md:col-span-1">
              <Image
                src="/images/victor-profile.png"
                alt="A friendly headshot of Victor, the IT support specialist."
                width={250}
                height={250}
                className="rounded-full mx-auto shadow-lg"
              />
            </div>
            <div className="md:col-span-2 text-left">
              <p className="text-lg text-gray-800 mb-3">
                Hello, I'm Victor. After years of being the go-to tech person for friends and family, I started Private IT Support to bring clear, friendly, and effective tech help to everyone.
              </p>
              <p className="text-lg text-gray-800">
                I love helping entrepreneurs and individuals solve frustrating tech problems so they can get back to what matters most. No jargon, no runaround—just honest answers and real solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-spacing bg-white" id="services">
        <div className="section-content">
          <h2 className="text-3xl font-bold mb-10 text-center">Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-start transition-transform duration-200 transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center mb-3 text-blue-700 text-2xl"><HiDesktopComputer className="mr-2" /> Computer Tune-Up</div>
              <p className="mb-2 text-gray-800">Speed up slow computers, remove junk, and optimize performance for a smoother experience.</p>
              <p className="mb-4 text-gray-600 text-sm">Great for: Anyone frustrated by laggy or unresponsive devices.</p>
              <p className="mb-4 font-semibold text-blue-900">$99 flat rate</p>
              <a href="#consultation" className="mt-auto bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800 transition font-semibold cursor-pointer">Book Now</a>
            </div>
            {/* Service 2 */}
            <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-start transition-transform duration-200 transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center mb-3 text-blue-700 text-2xl"><HiWifi className="mr-2" /> Wi-Fi & Network Help</div>
              <p className="mb-2 text-gray-800">Fix connection issues, dead zones, or slow speeds so you can work and stream without interruption.</p>
              <p className="mb-4 text-gray-600 text-sm">Great for: Home offices, apartments, or anyone with spotty Wi-Fi.</p>
              <p className="mb-4 font-semibold text-blue-900">$89 per visit</p>
              <a href="#consultation" className="mt-auto bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800 transition font-semibold cursor-pointer">Book Now</a>
            </div>
            {/* Service 3 */}
            <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-start transition-transform duration-200 transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center mb-3 text-blue-700 text-2xl"><HiShieldCheck className="mr-2" /> Security & Virus Removal</div>
              <p className="mb-2 text-gray-800">Remove malware, secure your devices, and get peace of mind with expert protection.</p>
              <p className="mb-4 text-gray-600 text-sm">Great for: Anyone worried about scams, pop-ups, or online threats.</p>
              <p className="mb-4 font-semibold text-blue-900">$109 flat rate</p>
              <a href="#consultation" className="mt-auto bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800 transition font-semibold cursor-pointer">Book Now</a>
            </div>
            {/* Service 4 */}
            <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-start transition-transform duration-200 transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center mb-3 text-blue-700 text-2xl"><HiAcademicCap className="mr-2" /> New Device Setup & Training</div>
              <p className="mb-2 text-gray-800">Get new tech set up right and learn how to use it with patient, jargon-free guidance.</p>
              <p className="mb-4 text-gray-600 text-sm">Great for: New device owners or anyone needing a tech confidence boost.</p>
              <p className="mb-4 font-semibold text-blue-900">$79 per session</p>
              <a href="#consultation" className="mt-auto bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800 transition font-semibold cursor-pointer">Book Now</a>
            </div>
            {/* Service 5 */}
            <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-start transition-transform duration-200 transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center mb-3 text-blue-700 text-2xl"><HiDatabase className="mr-2" /> Data Backup & Recovery</div>
              <p className="mb-2 text-gray-800">Prevent data loss before it happens—or get help recovering lost files from failing drives or accidental deletion.</p>
              <p className="mb-4 text-gray-600 text-sm">Great for: Anyone without a backup plan or dealing with file loss.</p>
              <p className="mb-4 font-semibold text-blue-900">$99+ depending on complexity</p>
              <a href="#consultation" className="mt-auto bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800 transition font-semibold cursor-pointer">Book Now</a>
            </div>
            {/* Service 6 */}
            <div className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-start transition-transform duration-200 transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center mb-3 text-blue-700 text-2xl"><HiDeviceMobile className="mr-2" /> Mobile Device Help</div>
              <p className="mb-2 text-gray-800">Get expert help with phone or tablet setup, storage issues, iCloud/Google accounts, and syncing across devices.</p>
              <p className="mb-4 text-gray-600 text-sm">Great for: Anyone struggling with phones, tablets, or smart tech.</p>
              <p className="mb-4 font-semibold text-blue-900">$69 per session</p>
              <a href="#consultation" className="mt-auto bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800 transition font-semibold cursor-pointer">Book Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-spacing bg-white">
        <div className="section-content text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            What My Clients Say
          </h2>
          <div className="max-w-2xl mx-auto relative">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <blockquote className="bg-gray-50 p-8 rounded-lg shadow text-center min-h-[220px] flex flex-col justify-center items-center">
                    <p className="text-xl text-gray-800 italic mb-6">"{testimonial.quote}"</p>
                    <footer className="mt-auto">
                      <p className="font-semibold text-blue-900">— {testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.service}</p>
                    </footer>
                  </blockquote>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section id="why-trust" className="section-spacing bg-gray-100">
        <div className="section-content text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Why Clients Trust Private IT Support
          </h2>
          <ul className="text-left space-y-5 text-lg max-w-2xl mx-auto text-gray-800">
            <li className="flex items-start">
              <HiChatAlt2 className="text-blue-700 h-7 w-7 mr-4 flex-shrink-0" />
              <span><strong>Clear, honest communication</strong> — no tech jargon or confusing lingo.</span>
            </li>
            <li className="flex items-start">
              <HiLightningBolt className="text-blue-700 h-7 w-7 mr-4 flex-shrink-0" />
              <span><strong>Fast service with real solutions</strong> — no shortcuts or guesswork.</span>
            </li>
            <li className="flex items-start">
              <HiBadgeCheck className="text-blue-700 h-7 w-7 mr-4 flex-shrink-0" />
              <span><strong>5+ years of hands-on experience</strong> helping individuals and small businesses get back to work.</span>
            </li>
            <li className="flex items-start">
              <HiUserCircle className="text-blue-700 h-7 w-7 mr-4 flex-shrink-0" />
              <span><strong>One-on-one support from a real tech</strong> — not a chatbot or offshore call center.</span>
            </li>
            <li className="flex items-start">
              <HiCalendar className="text-blue-700 h-7 w-7 mr-4 flex-shrink-0" />
              <span><strong>Flexible booking</strong> — schedule when it works for you, online or in person.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Free Consultation CTA */}
      <section ref={consultationRef} id="consultation" className="section-spacing bg-blue-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Book Your Free 15-Minute IT Consultation</h2>
        <p className="mb-8 text-lg">Use this free 15-min call to find out if I can save you time, money, or frustration. No obligation—just friendly advice and honest answers.</p>
        <div className="mx-auto" style={{ width: '100%', maxWidth: 1200 }}>
          <InlineWidget
            url="https://calendly.com/victor-privateitsupport/consultation"
            styles={{ minWidth: '320px', height: '630px' }}
          />
        </div>
      </section>

      {/* Packages (Coming Soon) */}
      <section className="section-spacing bg-gray-200 text-center">
        <div className="section-content">
          <h2 className="text-3xl font-bold mb-4">Service Packages <span className="text-base font-normal">(Coming Soon)</span></h2>
          <p>Bundled IT support offerings for even more value. Stay tuned!</p>
        </div>
      </section>

      {/* Contact Info, Navigation, and Legal Footer */}
      <footer className="bg-blue-900 text-white px-6 py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-2 text-white">Contact</h4>
            <p>Email: <a href="mailto:victor@privateitsupport.com" className="underline hover:text-gray-300">victor@privateitsupport.com</a></p>
            <p>Serving NYC & Remote Clients</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-2 text-white">Quick Links</h4>
            <ul className="space-y-1">
              <li><a href="#services" className="hover:text-gray-300">Services</a></li>
              <li><a href="#consultation" className="hover:text-gray-300">Free Consultation</a></li>
              <li><a href="#about" className="hover:text-gray-300">About</a></li>
            </ul>
            {/* Future: Social Media & Newsletter */}
            {/* <div className="mt-4 flex gap-4">
              <a href="#" aria-label="Facebook" className="hover:text-gray-300">FB</a>
              <a href="#" aria-label="Instagram" className="hover:text-gray-300">IG</a>
              <a href="#" aria-label="Newsletter" className="hover:text-gray-300">Newsletter</a>
            </div> */}
          </div>

          {/* Legal / Placeholder Links */}
          <div>
            <h4 className="font-semibold mb-2 text-white">Legal</h4>
            <ul className="space-y-1">
              <li><a href="/privacy-policy" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
