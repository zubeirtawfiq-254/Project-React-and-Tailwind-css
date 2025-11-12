import React from "react";
import { FaLaptopCode, FaUsers, FaGlobeAfrica, FaShieldAlt } from "react-icons/fa";

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-4">
    <div style={{ color: '#a855f7' }} className="text-3xl shrink-0 mt-1"><Icon /></div>
    <div>
      <h3 style={{ color: '#171717' }} className="font-semibold mb-2">{title}</h3>
      <p style={{ color: '#525252' }} className="text-sm">{desc}</p>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: FaLaptopCode,
      title: "Tech Innovation",
      desc: "We merge technology with advocacy to build digital platforms for community empowerment.",
    },
    {
      icon: FaUsers,
      title: "Community Engagement",
      desc: "We train young people, CBOs, and rights defenders to use tech for social change.",
    },
    {
      icon: FaGlobeAfrica,
      title: "Climate Action",
      desc: "Our digital campaigns raise awareness and mobilize local climate action initiatives.",
    },
    {
      icon: FaShieldAlt,
      title: "Good Governance",
      desc: "We promote transparency and accountability through digital reporting systems.",
    },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-24">
        {/* Section Title */}
        <h2 style={{ color: '#064e3b' }} className="text-3xl font-bold font-heading mb-12 text-center">Our Core Features</h2>

        {/* Features with Image on Left, Text on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="/src/assets/Images/about.svg" alt="Features showcase" style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
          </div>

          {/* Right: Features List */}
          <div className="space-y-8">
            {features.map((f, i) => (
              <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
