"use client";

import React from 'react';
import { Widget } from './Widget';
import { Notifications } from './Notifications';

export function Content() {
  const notifications = [
    "New task assigned to you: Design homepage mockup",
    "John commented on your task",
    "Meeting scheduled for tomorrow at 10:00 AM"
  ];

  return (
    <main className="flex-1 p-6 overflow-auto bg-[#030014] bg-grid-white/[0.05]">
      <div className="relative">
        {/* Grid background with mask overlay */}
        <div className="absolute inset-0 bg-[#030014] bg-dot-white/[0.1] -z-10"></div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Welcome Back
          </h2>
          <p className="text-white/60">Here's what's happening with your projects today.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Widget 
            titre="Total Tasks" 
            content="42"
          />
          <Widget 
            titre="Completed" 
            content="24" 
          />
          <Widget 
            titre="In Progress" 
            content="18" 
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-lg shadow-lg backdrop-blur-sm p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-3 rounded-md border border-white/5 bg-white/5 hover:bg-white/10 transition-all">
                  <div className="flex items-center justify-between">
                    <p className="text-white">Task {item} updated</p>
                    <span className="text-xs text-white/60">2h ago</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <Notifications notifications={notifications} />
          </div>
        </div>
      </div>
    </main>
  );
}