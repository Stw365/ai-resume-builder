// src/components/Hero.js
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-black text-white text-center py-20">
      <div className="mb-6">
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full">
          Introducing ResumeAI ✨
        </button>
      </div>
      <h1 className="text-5xl font-bold mb-4">
        Build Your Perfect Resume with AI
      </h1>
      <p className="text-lg text-gray-400 mb-8">
        Create professional resumes with AI-powered summaries and job descriptions.
      </p>
      <div className="flex justify-center space-x-4">
        <Link href="/sign-in">
          <button className="bg-white text-black px-6 py-3 rounded">Build Resume</button>
        </Link>
        <Link href="/atsready.resumefuture.ai">
          <button className="bg-white text-black px-6 py-3 rounded">
          Make ATS-Friendly
          </button>
        </Link>
        <Link href="/atsready.resumefuture.ai/cover-letter-builder">
          <button className="bg-white text-black px-6 py-3 rounded">AI Powered Cover Letter</button>
        </Link>
      </div>
      <p className="text-gray-400 mt-4">
        Don’t have an account?{" "}
        <Link href="/sign-up" className="text-purple-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </section>
  );
}