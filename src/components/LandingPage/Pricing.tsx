"use client";

import React from 'react';
import { Check } from 'lucide-react';

const betaFeatures = [
  "Unlimited AI Project Assistant Usage",
  "Real-time Project Analytics",
  "Smart Timeline Generation",
  "Unlimited Team Members",
  "Priority Support",
  "Early Access to New Features"
];

const premiumFeatures = [
  "Unlimited AI Project Assistant Usage",
  "Real-time Project Analytics",
  "Smart Timeline Generation",
  "Up to 10 Team Members",
  "Standard Support",
  "Regular Feature Updates"
];

export function Pricing() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-gray-400">
            Join our beta program or pre-register for our premium plan
          </p>
        </div>

        {/* Pricing Cards Container */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Beta Card */}
          <div className="relative rounded-2xl border border-purple-500/20 bg-[#030014]/50 backdrop-blur-sm p-8 shadow-xl hover:border-purple-500/40 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-600 to-purple-600 text-white">
                BETA
              </span>
            </div>

            <div className="text-center mb-8">
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-bold text-white">$0</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="mt-2 text-sm text-gray-400">
                Limited time beta offer
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {betaFeatures.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity">
              Join Beta Program
            </button>

            <p className="mt-4 text-xs text-center text-gray-400">
              Early adopters will receive special benefits when we launch
            </p>
          </div>

          {/* Premium Card */}
          <div className="relative rounded-2xl border border-purple-500/20 bg-[#030014]/50 backdrop-blur-sm p-8 shadow-xl hover:border-purple-500/40 transition-all duration-300">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                PREMIUM
              </span>
            </div>

            <div className="text-center mb-8">
              <div className="flex justify-center items-baseline">
                <span className="text-5xl font-bold text-white">$10</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <p className="mt-2 text-sm text-gray-400">
                Coming soon after beta
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:opacity-90 transition-opacity opacity-50 cursor-not-allowed">
              Coming Soon
            </button>

            <p className="mt-4 text-xs text-center text-gray-400">
              Pre-register now to get notified when we launch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}