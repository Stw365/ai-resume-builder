import { SparklesIcon, DocumentMagnifyingGlassIcon, DocumentTextIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Image from 'next/image';
import Testimonials from '../components/Testimonials';
import Link from 'next/link';

export default function Home() {
  const resumeEnhancementFeatures = [
    {
      icon: <SparklesIcon className="h-10 w-10 text-white" />,
      image: "/images/SmartSummary.gif",
      title: "Smart Summary & JobCraft Generator",
      description: "Leverage AI to craft compelling resume summaries and job descriptions tailored to your target roles with precision and creativity.",
      isExclusive: true,
    },
    {
      icon: <DocumentTextIcon className="h-10 w-10 text-white" />,
      image: "/images/cover letter builder.gif",
      title: "AI-Powered Cover Letter Creator",
      description: "Generate personalized cover letters instantly by inputting job descriptions, designed to impress hiring managers.",
    },
    {
      icon: <DocumentMagnifyingGlassIcon className="h-10 w-10 text-white" />,
      image: "/images/ATS Analyzer Tool.gif",
      title: "ATS Insight Analyzer",
      description: "Scan and analyze your resume with AI to ensure ATS compatibility, providing actionable insights for optimization.",
    },
    {
      icon: <ArrowDownTrayIcon className="h-10 w-10 text-white" />,
      title: "ATS-Optimized Resume Downloader",
      description: "Download your resume in ATS-friendly formats, ready to pass through applicant tracking systems with ease.",
    },
  ];

  return (
    <>
      {/* Navigation Bar with Logo */}
      <nav className="fixed top-0 w-full bg-black text-white p-4 flex items-center justify-between z-50 px-6 shadow-lg">
        {/* Logo on the Left */}
        <div className="flex items-center gap-4">
          <Image src="/images/logo-placeholder.png" alt="Logo" width={170} height={60} className="invert" />
          <span className="text-white font-bold text-2xl"></span>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8">
        <Link href="#pricing" className="hover:text-purple-500 transition-colors text-lg font-semibold">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-purple-500 transition-colors text-lg font-semibold">
            Pricing
          </Link>
        </div>
      </nav>

      {/* Video Section */}
      <section className="w-full bg-black py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Watch Our Intro</h2>
          <video
            controls
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
            poster="/images/video-poster.jpg"
          >
            <source src="/video/satisfactory copy.realesrgan.1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Elevate Your Resume Game</h2>
          <div className="space-y-20">
            {resumeEnhancementFeatures.map((feature, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-12">
                <div className="md:w-5/12">
                  <div className="flex items-center mb-6">
                    {feature.icon}
                    {feature.isExclusive && (
                      <span className="ml-3 bg-purple-500 text-white text-sm px-3 py-1 rounded">
                        Exclusive
                      </span>
                    )}
                  </div>
                  <h3 className="text-3xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-400 text-xl">{feature.description}</p>
                </div>
                {feature.image && (
                  <div className="md:w-7/12">
                    <Image
                      src={feature.image}
                      alt={`${feature.title} demo`}
                      width={800}
                      height={500}
                      className="rounded-lg w-full h-auto object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />
    </>
  );
}
