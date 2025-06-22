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
              <p className="text-lg text-gray-800 mb-4">
                Hello, I&apos;m Victor. After 5+ years of being the go-to tech person for friends, family, and small businesses, I started Private IT Support to bring clear, friendly, and effective tech help to everyone who needs it.
              </p>
              <p className="text-lg text-gray-800 mb-4">
                I specialize in solving the tech problems that slow you down—whether that&apos;s a computer that takes forever to start up, Wi-Fi that keeps dropping, or the anxiety of dealing with suspicious emails. My approach is simple: no jargon, no runaround, just honest answers and real solutions that work.
              </p>
              <p className="text-lg text-gray-800">
                I love helping entrepreneurs focus on their business instead of tech headaches, and individuals feel confident using their devices. Every client gets personalized attention and solutions that fit their specific needs and budget.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
} 