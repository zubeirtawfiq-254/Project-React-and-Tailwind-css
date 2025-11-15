import React from "react";

const TestimonialCard = ({ quote, name, avatar, photo, photoPosition = 'right' }) => {
  // photoPosition: 'left' | 'right'
  const photoElement = photo ? (
    <div className="w-full h-40 bg-gray-200 overflow-hidden">
      <img src={photo} alt={`photo-${name}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  ) : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white rounded-lg shadow-sm hover:shadow-md transition overflow-hidden">
      {/* If photo is left on md, render photo first and content second */}
      {photo && photoPosition === 'left' && (
        <div className="md:order-1">{photoElement}</div>
      )}

      <div className="p-8 md:order-2">
        <p style={{ color: '#525252' }} className="italic text-lg mb-6">"{quote}"</p>
        <div style={{ color: '#0d9488' }} className="font-semibold">{name}</div>
      </div>

      {/* If photo is right on md, render photo after content */}
      {photo && photoPosition === 'right' && (
        <div className="md:order-3">{photoElement}</div>
      )}
    </div>
  );
};

export default function Testimonials() {
  // Only one testimonial
  const item = {
    quote: "This space completely changed my daily routine. I can finish my work, take my online classes, grab a snack, and relax with games — all in one place. It feels safe, productive, and fun. Honestly, it's the best spot in the neighborhood.",
    name: "Jamal K.",
    photo: "/src/assets/Images/testimony1.jpg",
    photoPosition: 'right',
  };

  return (
    <section id="testimonials" className="py-16" style={{
      width: '1440px',
      opacity: 1,
      backgroundColor: '#fafafa',
      transform: 'rotate(0deg)',
    }}>
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '90%' }}>
          <TestimonialCard {...item} />
        </div>
      </div>
    </section>
  );
}
