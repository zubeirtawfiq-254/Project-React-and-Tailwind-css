import React from "react";

const ProductCard = ({ title, price, image }) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden" style={{ borderTopColor: '#0d9488', borderTopWidth: '4px' }}>
    <div className="w-full h-40 bg-gray-200 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-6 flex flex-col">
      <h3 style={{ color: '#171717' }} className="text-lg font-semibold mb-2">{title}</h3>
      <div className="text-teal-600 font-bold text-xl">{price}</div>
    </div>
  </div>
);

export default function Products() {
  const products = [
    { title: "Coding Training", price: "$120", image: "/src/assets/Images/coding.jpg" },
    { title: "Tech Workshops", price: "$80", image: "/src/assets/Images/workshops.jpg" },
    { title: "Gaming Lounge", price: "$15", image: "/src/assets/Images/gaming.jpg" },
    { title: "Internet Access", price: "$5/hr", image: "/src/assets/Images/internet.jpg" },
    { title: "Coworking", price: "$40/day", image: "/src/assets/Images/coworking.jpg" },
    { title: "Hardware Lab", price: "$50/session", image: "/src/assets/Images/hardware.jpg" },
    { title: "Printing & Design", price: "$0.10/page", image: "/src/assets/Images/printing.jpg" },
    { title: "Media Production", price: "$75/hr", image: "/src/assets/Images/media.jpg" },
  ];

  return (
    <section id="products" className="py-16 bg-white w-full">
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
