"use client";

import React from 'react';
import { 
  Brain, 
  MessageSquareCode, 
  GitBranch, 
  BarChart2, 
  Boxes,
  Shield,
  Zap
} from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-6 h-6 text-purple-400" />,
    title: "AI Project Assistant",
    description: "Chat with AI to plan, track, and manage your projects effortlessly"
  },
  {
    icon: <MessageSquareCode className="w-6 h-6 text-green-400" />,
    title: "Code Integration",
    description: "Seamless integration with your development workflow and repositories"
  },
  {
    icon: <GitBranch className="w-6 h-6 text-yellow-400" />,
    title: "Issue Tracking",
    description: "Intelligent bug tracking and issue management with AI suggestions"
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-red-400" />,
    title: "Analytics",
    description: "Real-time insights and AI-powered project performance metrics"
  },
  {
    icon: <Boxes className="w-6 h-6 text-indigo-400" />,
    title: "Custom Workflows",
    description: "Adaptable project templates and automated workflow creation"
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    title: "Security First",
    description: "Enterprise-grade security with encrypted project data"
  },
  {
    icon: <Zap className="w-6 h-6 text-amber-400" />,
    title: "Fast Integration",
    description: "Quick setup with popular tools like GitHub, Slack, and Jira"
  }
];

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
            Powerful Features
          </h2>
          <p className="mt-4 text-gray-400">
            Transform your project management with AI-powered tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-white/10 bg-[#030014]/50 backdrop-blur-sm
                hover:bg-[#030014]/80 transition-all duration-300 hover:border-purple-500/50"
            >
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-white/5 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}