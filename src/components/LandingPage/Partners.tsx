"use client";

import React from 'react';
import Image from 'next/image';

const partners = [
  { name: 'GitHub', logo: '/partners/github.svg' },
  { name: 'GitLab', logo: '/partners/gitlab.svg' },
  { name: 'Slack', logo: '/partners/slack.svg' },
  { name: 'Jira', logo: '/partners/jira.svg' },
  { name: 'Microsoft', logo: '/partners/microsoft.svg' },
  { name: 'Google', logo: '/partners/google.svg' },
  { name: 'Discord', logo: '/partners/discord.svg' },
  { name: 'Linear', logo: '/partners/linear.svg' },
];

export function Partners() {
  return (
    <section className="py-12 bg-[#030014]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600 mb-12">
          Trusted by Industry Leaders
        </h2>
        
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#030014] to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#030014] to-transparent z-10" />
          
          {/* Scrolling Container */}
          <div className="flex animate-scroll">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex space-x-12 min-w-full">
                {partners.map((partner, pIndex) => (
                  <div
                    key={`${partner.name}-${index}-${pIndex}`}
                    className="flex items-center justify-center w-32 h-16"
                  >
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={60}
                      className="opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}