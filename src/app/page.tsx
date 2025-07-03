'use client';
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import AnimateOnScroll from "@/components/AnimateOnScroll";
import TestimonialCard from "@/components/TestimonialCard";
import TrustPoint from "@/components/TrustPoint";
import NavigationComponent from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ConsultationSection from "@/components/ConsultationSection";
import { testimonials } from "@/data/testimonials";
import { trustPoints } from "@/data/trustPoints";
import {
  coreWebsitePackage,
  addOns,
  websiteRedesign,
  carePlans,
  oneTimeTechServices
} from "@/data/services";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
  const consultationRef = useRef<HTMLDivElement>(null);
  const [showAddOns, setShowAddOns] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <NavigationComponent scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <HeroSection onBookConsultation={() => consultationRef.current?.scrollIntoView({ behavior: 'smooth' })} />

      {/* About Section */}
      <AnimateOnScroll>
        <AboutSection />
      </AnimateOnScroll>

      {/* Services Section */}
      <AnimateOnScroll>
        <section className="section-spacing bg-[#dbe9fd]" id="services">
          <div className="section-content space-y-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">Services</h2>

            {/* Core Website Package */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-50 rounded-xl shadow p-8 flex flex-col items-start mb-8">
                <span className="inline-block bg-blue-700 text-white text-sm font-bold px-5 py-2 rounded-full mb-3 tracking-wide shadow-lg">Done-for-You Website</span>
                <div className="flex items-center mb-3 text-blue-700 text-2xl">
                  {coreWebsitePackage.icon} {coreWebsitePackage.title}
                </div>
                <p className="mb-4 text-gray-800 font-medium">{coreWebsitePackage.description}</p>
                <ul className="mb-4 list-disc list-inside text-gray-700 pl-2">
                  {coreWebsitePackage.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="font-bold text-blue-900 text-lg mb-2">{coreWebsitePackage.price}</div>
              </div>
            </div>

            {/* Add-Ons */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Add-On Services (Optional Upgrades)</h3>
              <div className="max-w-2xl mx-auto">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 mb-2 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-800 transition focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={() => setShowAddOns(!showAddOns)}
                  aria-expanded={showAddOns}
                  aria-controls="addons-list"
                >
                  <span>{showAddOns ? 'Hide Add-Ons' : 'Show Add-Ons'}</span>
                  <svg className={`ml-4 w-5 h-5 text-white transition-transform duration-200 ${showAddOns ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {showAddOns && (
                  <ul id="addons-list" className="divide-y divide-gray-200 rounded-lg bg-white shadow animate-fade-in">
                    {addOns.map((addon, idx) => (
                      <li key={idx} className="flex justify-between items-center px-6 py-4">
                        <span className="font-semibold text-blue-900 text-base">{addon.title}</span>
                        <span className="font-bold text-blue-700 text-base">{addon.price}</span>
                        <span className="text-gray-700 text-sm ml-4">{addon.details}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Website Audit & Redesign */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-50 rounded-xl shadow p-8 flex flex-col items-start mb-8">
                <div className="flex items-center mb-3 text-blue-700 text-2xl">
                  {websiteRedesign.icon} {websiteRedesign.title}
                </div>
                <p className="mb-4 text-gray-800 font-medium">{websiteRedesign.description}</p>
                <ul className="mb-4 list-disc list-inside text-gray-700 pl-2">
                  {websiteRedesign.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <div className="font-bold text-blue-900 text-lg mb-2">{websiteRedesign.price}</div>
              </div>
            </div>

            {/* Care Plans */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Website Care Plans (Monthly)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
                {carePlans.map((plan, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl shadow p-8 flex flex-col items-start">
                    <div className="flex items-center mb-3 text-blue-700 text-2xl">
                      {plan.icon} {plan.title}
                    </div>
                    <p className="mb-4 text-gray-800 font-medium">{plan.description}</p>
                    <ul className="mb-4 list-disc list-inside text-gray-700 pl-2">
                      {plan.features.map((feature, fidx) => (
                        <li key={fidx}>{feature}</li>
                      ))}
                    </ul>
                    <div className="font-bold text-blue-900 text-lg mb-2">{plan.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* One-Time Tech Services */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-center">One-Time Tech Services</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-2 px-4 text-left font-semibold">Service</th>
                      <th className="py-2 px-4 text-left font-semibold">Price</th>
                      <th className="py-2 px-4 text-left font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {oneTimeTechServices.map((svc, idx) => (
                      <tr key={idx} className="border-t border-gray-100">
                        <td className="py-2 px-4">{svc.title}</td>
                        <td className="py-2 px-4">{svc.price}</td>
                        <td className="py-2 px-4">{svc.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>
      </AnimateOnScroll>

      {/* Testimonials Section */}
      <AnimateOnScroll>
        <section id="testimonials" className="section-spacing bg-white">
          <div className="section-content">
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
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
                    <TestimonialCard
                      quote={testimonial.quote}
                      name={testimonial.name}
                      service={testimonial.service}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Why Trust Us Section */}
      <AnimateOnScroll>
        <section id="why-trust" className="section-spacing bg-gray-100">
          <div className="section-content">
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
              Why Clients Trust Private IT Support
            </h2>
            <ul className="text-left space-y-5 text-lg max-w-2xl mx-auto text-gray-800">
              {trustPoints.map((point, index) => (
                <TrustPoint key={index} icon={point.icon}>
                  {point.content}
                </TrustPoint>
              ))}
            </ul>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Free Consultation CTA */}
      <AnimateOnScroll>
        <ConsultationSection consultationRef={consultationRef} />
      </AnimateOnScroll>

      {/* Footer */}
      <AnimateOnScroll>
        <Footer scrollToSection={scrollToSection} />
      </AnimateOnScroll>
    </div>
  );
}
