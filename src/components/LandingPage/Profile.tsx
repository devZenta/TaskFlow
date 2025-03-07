"use client";

import { useSession, signOut } from "next-auth/react";
import { Settings, LogOut, CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Profile01Props {
  avatar: string;
  className?: string;
}

export function Profile({ avatar, className }: Profile01Props) {
  const { data: session } = useSession();

  return (
    <div className={`p-2 ${className}`}>
      <div className="flex items-center gap-4 p-2">
        <Image
          src={avatar}
          alt="User avatar"
          width={40}
          height={40}
          quality={100}
          className="rounded-full ring-2 ring-white/10"
        />
        <div className="flex-1">
          <p className="font-medium text-white">{session?.user?.name}</p>
          <p className="text-sm text-gray-400">{session?.user?.email}</p>
        </div>
      </div>

      <div className="border-t border-white/10 mt-2">
        <Link
          href="/settings"
          className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 transition-colors rounded-md mt-2"
        >
          <Settings className="w-4 h-4" />
          Settings
        </Link>

        <Link
          href="/subscription"
          className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-300 hover:bg-white/5 transition-colors rounded-md"
        >
          <CreditCard className="w-4 h-4" />
          <span>Subscription</span>
          <span className="px-2 py-0.5 text-xs bg-white/10 rounded-full text-gray-300 ml-2">
            Free
          </span>
        </Link>

        <button
          onClick={() => signOut()}
          className="flex items-center gap-2 px-4 py-2.5 text-sm text-red-400 hover:bg-white/5 transition-colors rounded-md w-full"
        >
          <LogOut className="w-4 h-4" />
          Log out
        </button>
      </div>
    </div>
  );
}