"use client";

export function Header() {
  return (
    <header className="bg-[#030014] border-b border-white/10 p-4 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          TaskFlow Dashboard
        </h1>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all" title="Notifications">
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white text-sm font-bold"></span>
            </div>
            <span className="text-white text-sm hidden md:block"></span>
          </div>
        </div>
      </div>
    </header>
  );
}