// pages/index.js
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
//import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>ResumeAI - Build Professional Resumes with AI</title>
        <meta
          name="description"
          content="Create professional resumes with ResumeAI. Use AI to populate summaries and job descriptions, customize for any job, and download as a PDF."
        />
        <meta name="keywords" content="AI resume builder, resume creation, job application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-black">
        <Navbar />
        <Hero />
        <Features />
        <Footer />
      </div>
    </>
  );
}