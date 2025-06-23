'use client';
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import TrustPoint from "@/components/TrustPoint";
import NavigationComponent from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ConsultationSection from "@/components/ConsultationSection";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { trustPoints } from "@/data/trustPoints";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Home() {
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
        <section className="section-spacing bg-white" id="services">
          <div className="section-content">
            <h2 className="text-3xl font-semibold mb-8 text-center">Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
              {services.map((service, index) => (
                <AnimateOnScroll key={index} delay={index * 0.1}>
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    audience={service.audience}
                    price={service.price}
                  />
                </AnimateOnScroll>
              ))}
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

      {/* Packages (Coming Soon) */}
      <AnimateOnScroll>
        <section className="section-spacing bg-gray-200 text-center">
          <div className="section-content">
            <h2 className="text-3xl font-semibold mb-4">Service Packages <span className="text-base font-normal">(Coming Soon)</span></h2>
            <p>Bundled IT support offerings for even more value. Stay tuned!</p>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Footer */}
      <AnimateOnScroll>
        <Footer scrollToSection={scrollToSection} />
      </AnimateOnScroll>
    </div>
  );
}
