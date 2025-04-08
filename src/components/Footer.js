// src/components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-black text-gray-400 py-6">
        <div className="max-w-6xl mx-auto flex justify-between">
          <p>
            Built by [Your Name] • Hosted on Vercel • Component Credits to shadcn
          </p>
          <div className="flex space-x-4">
            <a href="#">←</a>
            <a href="#">→</a>
          </div>
        </div>
      </footer>
    );
  }