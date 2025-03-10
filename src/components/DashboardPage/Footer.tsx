"use client";

import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#030014] border-t border-white/10 p-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-white/50 text-sm">© 2025 TaskFlow. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-white/50 hover:text-white text-sm">Privacy Policy</a>
          <a href="#" className="text-white/50 hover:text-white text-sm">Terms of Service</a>
          <a href="#" className="text-white/50 hover:text-white text-sm">Support</a>
        </div>
      </div>
    </footer>
  );
}