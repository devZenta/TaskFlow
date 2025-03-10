"use client";

import { useState } from 'react';
import { Home, Settings, User, Calendar, FileText, PanelLeft } from 'lucide-react';
import Link from 'next/link';

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`bg-[#030014] border-r border-white/10 h-screen transition-all duration-300 ${
      collapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4 flex justify-between items-center border-b border-white/10">
        {!collapsed && (
          <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            TaskFlow
          </span>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)} 
          className="p-2 rounded-md hover:bg-white/5 transition-all"
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <PanelLeft size={20} className={`text-white transition-all ${collapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>
      
      <nav className="p-2">
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="flex items-center space-x-3 p-2 rounded-md text-white hover:bg-white/5 transition-all">
              <Home size={20} className="text-purple-500" />
              {!collapsed && <span>Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link href="/dashboard/calendar" className="flex items-center space-x-3 p-2 rounded-md text-white hover:bg-white/5 transition-all">
              <Calendar size={20} className="text-purple-500" />
              {!collapsed && <span>Calendar</span>}
            </Link>
          </li>
          <li>
            <Link href="/dashboard/tasks" className="flex items-center space-x-3 p-2 rounded-md text-white hover:bg-white/5 transition-all">
              <FileText size={20} className="text-purple-500" />
              {!collapsed && <span>Tasks</span>}
            </Link>
          </li>
          <li>
            <Link href="/dashboard/profile" className="flex items-center space-x-3 p-2 rounded-md text-white hover:bg-white/5 transition-all">
              <User size={20} className="text-purple-500" />
              {!collapsed && <span>Profile</span>}
            </Link>
          </li>
          <li>
            <Link href="/dashboard/settings" className="flex items-center space-x-3 p-2 rounded-md text-white hover:bg-white/5 transition-all">
              <Settings size={20} className="text-purple-500" />
              {!collapsed && <span>Settings</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}