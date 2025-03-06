'use client';

import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

export default function DashBoardPage() {

    const { data: session } = useSession()

    return (

        <>

        {session?.user ? (
            <>

                {session?.user?.image && (
                    <Image
                        src={session.user.image}
                        alt="User Avatar"
                        width={32}
                        height={32}
                        className="rounded-full"
                    />
                )}

                {session.user.name && (
                    <span>{session.user.name}</span>
                )}

                <button onClick={() => signOut()} className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors">
                    Sign Out
                </button>

            </>
        ) : (
            <Link href="/login">
                <button>Login</button>
            </Link>
        )}
        
        </>

    )
}