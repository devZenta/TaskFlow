'use client';

//import { FlipWords } from "../ui/flip-words";

export function Header() {
  return (
    <div className="relative bg-[#030014] pt-16">
      <div className="h-[50rem] w-full bg-[#030014] bg-grid-white/[0.1] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#030014] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-7xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-16 italic underline decoration-purple-500 decoration-wavy">
            TaskFlow AI.
          </h1>
          <p className="text-2xl md:text-4xl bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent mb-16 font-bold tracking-wide pt-4">
            The most powerful management tool.
          </p>
          {/*<FlipWords words={["task", "project", "team"]} duration={3000} className="inline" />*/}
          <div className="flex gap-6 justify-center">
            <button className="px-8 py-4 rounded-lg bg-transparent text-white text-lg font-semibold hover:bg-purple-600/10 transition-all duration-300 hover:scale-105 border-2 border-purple-600 hover:border-purple-400">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}