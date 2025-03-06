'use client';

import { useRouter } from 'next/navigation';
import { Login } from '@/components/LoginPage/LoginForm';
import { ThreeDCard } from '@/components/LoginPage/3DCard';
import { CurveText } from '@/components/LoginPage/CurveText';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#030014] flex relative">
      {/* Left Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <ThreeDCard />
      </div>

      {/* Middle section for curved text */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[50px] -translate-x-1/2 z-20 pointer-events-none">
        <CurveText />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 relative bg-[#030014] flex items-center justify-center">
        {/* Grid background with mask overlay */}
        <div className="absolute inset-0 bg-[#030014] bg-grid-white/[0.1]"></div>
        <div className="absolute pointer-events-none inset-0 bg-[#030014] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        {/* Login form with relative positioning to appear above the background */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8">
          <Login onBack={() => router.push('/')} />
        </div>
      </div>
    </div>
  );
}