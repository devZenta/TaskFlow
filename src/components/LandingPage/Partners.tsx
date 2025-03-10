"use client";

import React from 'react';
import Image from 'next/image';
import Card from './Card';

const partners = [
  { name: 'GitHub', logo: '/Partners/github-partners.svg' },
  { name: 'Tailwind', logo: '/Partners/tailwind-partners.svg' },
  { name: 'Mistral', logo: '/Partners/mistral-partners.svg' },
  { name: 'Next JS', logo: '/Partners/nextjs-partners.svg' },
  { name: 'Google', logo: '/Partners/google-partners.svg' },
  { name: 'Railway', logo: '/Partners/railway-partners.svg' },
  { name: 'Prisma', logo: '/Partners/prisma-partners.svg' },
  { name: 'PostgreSQL', logo: '/Partners/postgresql-partners.svg' },
  { name: 'Stripe', logo: '/Partners/stripe-partners.svg' },
  { name: 'Discord', logo: '/Partners/discord-partners.svg' },
];

export function Partners() {
  return (
    <section className="py-12 bg-[#030014]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600 mb-12">
          Trusted by Industry Leaders
        </h2>
        
        <div className="flex justify-center">
          <Card partners={partners} />
        </div>
      </div>
    </section>
  );
}