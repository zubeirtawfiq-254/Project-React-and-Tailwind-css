import React from "react";

export default function Gallery() {
  const images = [
    { src: "/src/assets/Images/tech.jpg", alt: "Tech workspace" },
    { src: "/src/assets/Images/latest.jpg", alt: "Coding session" },
    { src: "/src/assets/Images/new.jpg", alt: "Workshop" },
    { src: "/src/assets/Images/workspace.jpg", alt: "Community event" },
  ];

  return (
    <section id="gallery" className="py-16 bg-white" style={{
      width: '1440px',
      opacity: 1,
      transform: 'rotate(0deg)',
    }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <h2 style={{ color: '#064e3b' }} className="text-3xl font-bold font-heading mb-6">New Tech in Town</h2>
            <p style={{ color: '#525252' }} className="text-lg mb-8">
              Get the latest take immediately with promo prices
            </p>
            <a href="#products" className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition">
              <span className="underline">Check all</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-lg h-48 bg-gray-100">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
