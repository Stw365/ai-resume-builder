// src/components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-black text-white w-full">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <span className="text-xl font-bold">ResumeAI</span>
        </Link>
        <span className="text-sm bg-gray-700 px-2 py-1 rounded">Beta</span>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-8 items-center">
          <Link href="/getting-started" className="hover:text-purple-500 transition-colors">
            Getting Started
          </Link>
          <Link href="/Features" className="hover:text-purple-500 transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-purple-500 transition-colors">
            Pricing
          </Link>
        </div>
      </div>
    </nav>
  );
}