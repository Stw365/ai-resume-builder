import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter= Inter({subsets: ["latin"]})

export const metadata: Metadata = {
  title:{
  template: "%s - AI Resume Creator | Fast & Professional",
  absolute: "AI Resume Creator | Fast & Professional",
  },
  description: "Create professional,AI-Powered resumes fast. Build job-winning resumes with smart suggestions, ATs optimised and an easy-to-use resume creator tool.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
        <Toaster/>
      </body>
    </html>
    </ClerkProvider>
  );
}
