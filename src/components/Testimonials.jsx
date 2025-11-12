import React from "react";

const TestimonialCard = ({ quote, name, avatar }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
    {/* Left: Testimony */}
    <div>
      <p style={{ color: '#525252' }} className="italic text-lg mb-6">"{quote}"</p>
      <div style={{ color: '#0d9488' }} className="font-semibold">{name}</div>
    </div>

    {/* Right: Avatar Image */}
    <div className="flex justify-center md:justify-end">
      <img src={avatar} alt={name} style={{ width: 120, height: 120, borderRadius: 12, objectFit: 'cover' }} />
    </div>
  </div>
);

export default function Testimonials() {
  const items = [
    { quote: "I learned HTML & CSS and started small jobs.", name: "Jamal K.", avatar: "/src/assets/Images/avatar1.svg" },
    { quote: "Great space to study after night shift — reliable Wi-Fi.", name: "Fatima N.", avatar: "/src/assets/Images/avatar2.svg" }
  ];

  return (
    <section id="testimonials" style={{ backgroundColor: '#fafafa' }} className="py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        <h2 style={{ color: '#064e3b' }} className="text-3xl font-bold font-heading mb-12 text-center">What people say</h2>
        <div className="space-y-8">
          {items.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
