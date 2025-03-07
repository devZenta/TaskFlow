"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Profile } from "@/components/LandingPage/Profile";

export function Navbar() {
  const { data: session } = useSession();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setActiveDropdown(null);
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "Home", position: "start", href: "/" },
    { name: "Dashboard", position: "end", href: "/dashboard" },
    { name: "Learn More", position: "middle", hasDropdown: true },
  ];

  const learnMoreDropdown = [
    {
      name: "Demo",
      description: "See how AI transforms your project management.",
      id: "demo-section",
    },
    {
      name: "Features",
      description: "Discover our AI-powered project tools.",
      id: "features-section",
    },
    {
      name: "Pricing",
      description: "Simple plans for teams of all sizes.",
      id: "pricing-section",
    },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#030014]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <div className="flex-shrink-0 ml-3">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-purple-600">
              TaskFlow AI.
            </span>
          </div>

          <div className="flex-1 flex justify-center space-x-8 mt-1">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown("features")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-1 group border border-transparent hover:border-purple-500/20">
                    {item.name}
                    <ChevronDown className="h-4 w-4 opacity-50 group-hover:opacity-100 transition-all group-hover:text-purple-400" />
                  </button>

                  {activeDropdown === "features" && (
                    <div className="absolute top-full left-0 pt-2">
                    <div className="w-64 rounded-xl bg-[#030014] border border-purple-500/20 shadow-xl shadow-purple-500/10 p-2">
                      {learnMoreDropdown.map((subItem) => (
                        <button
                          key={subItem.name}
                          onClick={() => scrollToSection(subItem.id)}
                          className="w-full flex items-center space-x-3 rounded-lg px-4 py-3 text-sm text-gray-300 hover:bg-purple-500/10 transition-all text-left group"
                        >
                          <div className="flex flex-col">
                            <span className="font-medium text-white group-hover:text-purple-400 transition-colors">
                              {subItem.name}
                            </span>
                            <span className="text-xs text-gray-400/80">
                              {subItem.description}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href ?? "#"}
                  className="px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all border border-transparent hover:border-purple-500/20"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-4">
            {session?.user ? (
              <DropdownMenu>
                <DropdownMenuTrigger className="focus:outline-none group flex items-center gap-2 px-2 py-1 rounded-full hover:bg-white/5 transition-all border border-transparent hover:border-purple-500/20">
                  <Image
                    src={session.user.image || "/default-avatar.png"}
                    alt="User avatar"
                    width={36}
                    height={36}
                    className="rounded-full ring-2 ring-purple-500/30 group-hover:ring-purple-500/50 transition-all"
                  />
                  <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-purple-400 transition-all" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  sideOffset={8}
                  className="w-[280px] sm:w-80 bg-[#030014]/95 backdrop-blur-lg border border-purple-500/20 rounded-lg shadow-lg shadow-purple-500/10"
                >
                  <Profile
                    avatar={session.user.image || "/default-avatar.png"}
                    className="bg-transparent text-white"
                  />
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 rounded-md bg-gradient-to-r from-violet-500 to-purple-600 text-white font-medium hover:from-violet-600 hover:to-purple-700 transition-colors"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}