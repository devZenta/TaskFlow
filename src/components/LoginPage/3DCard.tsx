"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { 
  Brain, 
  MessageSquareCode, 
  GitBranch, 
  BarChart2, 
  Shield,
  Zap,
  ArrowRight
} from 'lucide-react';

export function ThreeDCard() {
  return (
    <div className="flex items-center justify-center h-full min-h-screen">
      <div className="-mt-48"></div>
      <CardContainer className="inter-var bg-black/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 w-auto sm:w-[35rem] md:w-[40rem]">
        <CardBody className="relative group/card w-full h-auto">
          <CardItem
            translateZ="50"
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 text-center w-full mb-4"
          >
            Simplify Your Workflow
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-lg md:text-2xl italic bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent mb-8 font-bold tracking-wide pt-2 text-center w-full"
          >
            From idea to execution, AI creates for you.
          </CardItem>
          <CardItem
            translateZ="75"
            className="text-xs md:text-sm text-gray-200 mb-8 w-full px-2"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              <div className="p-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-1">
                  <Brain className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="font-medium">AI Assistant</span>
                </div>
                <p className="text-xs text-gray-300">Chat with AI to manage projects</p>
              </div>
              
              <div className="p-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-1">
                  <MessageSquareCode className="w-4 h-4 text-green-400 mr-2" />
                  <span className="font-medium">Code Integration</span>
                </div>
                <p className="text-xs text-gray-300">Seamless development workflow</p>
              </div>
              
              <div className="p-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-1">
                  <GitBranch className="w-4 h-4 text-yellow-400 mr-2" />
                  <span className="font-medium">Issue Tracking</span>
                </div>
                <p className="text-xs text-gray-300">Smart bug management</p>
              </div>
              
              <div className="p-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-1">
                  <BarChart2 className="w-4 h-4 text-red-400 mr-2" />
                  <span className="font-medium">Analytics</span>
                </div>
                <p className="text-xs text-gray-300">Real-time project insights</p>
              </div>
              
              <div className="p-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-1">
                  <Shield className="w-4 h-4 text-emerald-400 mr-2" />
                  <span className="font-medium">Security First</span>
                </div>
                <p className="text-xs text-gray-300">Enterprise-grade protection</p>
              </div>
              
              <div className="p-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-1">
                  <Zap className="w-4 h-4 text-amber-400 mr-2" />
                  <span className="font-medium">Fast Integration</span>
                </div>
                <p className="text-xs text-gray-300">Quick setup with popular tools</p>
              </div>
            </div>
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/LoginPage/Popup.png"
                height="1000"
                width="1000"
                className="h-64 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </div>
          </CardItem>
          
          <CardItem translateZ="120" className="w-full mt-6 flex justify-center">
            <button className="px-6 py-3 rounded-lg font-medium text-gray-200 bg-[#030014] hover:bg-[#05001f] border border-white/10 shadow-md transition-all duration-300 flex items-center group">
              Try the tool
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}