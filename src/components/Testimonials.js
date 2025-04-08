export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Marketing Specialist",
      quote:
        "ResumeAI made creating my resume so easy! The AI-generated summaries and job descriptions were spot-on, and I landed my dream job within weeks. I also used their sub-website to scan my resume for ATS compatibility, which gave me the confidence to apply to top companies.",
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      quote:
        "I was struggling to get interviews until I used ResumeAI. The customization feature helped me tailor my resume for each job, and the spell-checker caught errors I’d missed. The ATS scan on their sub-website was a game-changer—it showed me exactly what to improve to get noticed by recruiters.",
    },
    {
      name: "Emily Davis",
      role: "Graphic Designer",
      quote:
        "As a freelancer, I needed a resume that stood out. ResumeAI’s intuitive tools made the process seamless, and I loved how I could download my resume as a PDF. I also checked my resume with the ATS scanner on their sub-website, which helped me optimize it and land my dream design role.",
    },
  ];

  return (
    <section className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8">What Our Users Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-400 italic mb-4">
                &quot;{review.quote}&quot;
              </p>
              <p className="text-white font-semibold">{review.name}</p>
              <p className="text-gray-500">{review.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}