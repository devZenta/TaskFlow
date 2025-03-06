import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";


export const metadata: Metadata = {
  title: "TaskFlow AI",
  description: "TaskFlow AI is a platform that helps you manage your tasks and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
