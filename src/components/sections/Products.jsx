import React from "react";
import { FaLaptopCode, FaBook, FaGamepad, FaWifi } from "react-icons/fa";

const ProductCard = ({ icon: Icon, title, desc, image }) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden" style={{ borderTopColor: '#0d9488', borderTopWidth: '4px' }}>
    {/* Image */}
    <div className="w-full h-40 bg-gray-200 overflow-hidden">
      <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    {/* Content */}
    <div className="p-6">
      <div style={{ color: '#a855f7' }} className="text-3xl mb-3"><Icon /></div>
      <h3 style={{ color: '#171717' }} className="text-lg font-semibold mb-3">{title}</h3>
      <p style={{ color: '#525252' }} className="text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function Products() {
  const products = [
    {
      icon: FaLaptopCode,
      title: "Coding Training",
      desc: "Hands-on coding lessons in HTML, CSS, JavaScript, and modern frameworks. Learn from industry experts.",
      image: "/src/assets/Images/hero.svg",
    },
    {
      icon: FaBook,
      title: "Tech Workshops",
      desc: "Intensive workshops on digital marketing, data analysis, and tech entrepreneurship for youth.",
      image: "/src/assets/Images/about.svg",
    },
    {
      icon: FaGamepad,
      title: "Gaming Lounge",
      desc: "Safe and inclusive gaming space with high-speed internet and gaming tournaments.",
      image: "/src/assets/Images/avatar1.svg",
    },
    {
      icon: FaWifi,
      title: "Internet Access",
      desc: "Fast and reliable internet access for studying, working, and digital projects.",
      image: "/src/assets/Images/avatar2.svg",
    },
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        <h2 style={{ color: '#064e3b' }} className="text-3xl font-bold font-heading mb-12 text-center">
          All Products & Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <ProductCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
