"use client";

import React, { useState } from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // TODO: Implement your email subscription logic here
    // Simulating API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <footer className="bg-[#030014] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Email Subscription */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
              Join the Beta
            </h3>
            <p className="text-gray-400 max-w-md">
              Be the first to experience the future of AI-powered project management.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 
                           text-white placeholder:text-gray-500 focus:outline-none 
                           focus:border-purple-500 transition-colors"
                  required
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 
                           text-white font-medium hover:opacity-90 transition-opacity
                           disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Subscribe'}
                </button>
              </div>
              {status === 'success' && (
                <p className="text-sm text-green-400">Thanks for subscribing!</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>

          {/* Right Side - Links & Social */}
          <div className="md:text-right">
            <div className="space-y-4">
              <div className="flex gap-4 md:justify-end">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
              <div className="text-sm text-gray-400">
                © 2025 TaskFlow AI. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}