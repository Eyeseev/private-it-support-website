'use client';

import React from 'react';
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function AboutSection() {
  return (
    <section className="section-spacing bg-gray-50" id="about">
      <div className="section-content">
        <h2 className="text-3xl font-semibold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
          <div className="md:col-span-1">
            <AnimateOnScroll delay={0.2}>
              <Image
                src="/images/victor-profile.png"
                alt="A friendly headshot of Victor, the IT support specialist."
                width={250}
                height={250}
                className="rounded-full mx-auto shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              />
            </AnimateOnScroll>
          </div>
          <div className="md:col-span-2 text-left">
            <AnimateOnScroll delay={0.3}>
              <p className="text-lg text-gray-800 mb-2 font-semibold">Hello, I&#39;m Victor.</p>
              <p className="text-lg text-gray-800 mb-4">
                I build simple, fast websites for small business owners, freelancers, and creators who want a clean online presence without dealing with tech headaches. Whether you need a brand-new site, a full makeover, or extras like a booking form or photo gallery, I make the process quick, easy, and affordable.
              </p>
              <p className="text-lg text-gray-800">
                I also offer monthly website plans to keep things running smoothly, plus one-time help with stuff like domain setup or picking the right tools for your business. Everything I do is straight to the point—no complicated tech lingo, just real support that works.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
        {/* Certifications / Tools Badges */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <span className="inline-flex items-center px-4 py-2 bg-[#f2f4f6] text-[#1c398e] font-semibold rounded-full shadow text-base border border-[#dbe9fd]">
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#4285F4" strokeWidth="2" fill="white" /><text x="7" y="16" fontSize="8" fill="#4285F4">Google</text></svg>
            Workspace Certified
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-[#f2f4f6] text-[#1c398e] font-semibold rounded-full shadow text-base border border-[#dbe9fd]">
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#00ADEF" strokeWidth="2" fill="white" /><text x="8" y="16" fontSize="8" fill="#00ADEF">Jamf</text></svg>
            Jamf Ready
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-[#f2f4f6] text-[#1c398e] font-semibold rounded-full shadow text-base border border-[#dbe9fd]">
            <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="#5E4FA2" strokeWidth="2" fill="white" /><text x="8" y="16" fontSize="8" fill="#5E4FA2">Okta</text></svg>
            Okta Specialist
          </span>
        </div>
      </div>
    </section>
  );
} 