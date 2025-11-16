import React from "react";
import Section from "../common/Section";
import Button from "../common/Button";

export default function About() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="/src/assets/Images/about.jpg" alt="About IbraTech Hub" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        {/* Content */}
        <div>
          <h2 style={{ color: '#064e3b' }} className="text-3xl font-bold font-heading mb-4">About IbraTech Hub</h2>
          <p style={{ color: '#525252' }} className="mb-4">
            IbraTech Hub is a digital advocacy platform that empowers communities, youth, and CBOs
            to champion human rights, gender equality, and climate action using modern technology.
          </p>
          <p style={{ color: '#525252' }} className="mb-6">
            We integrate coding, data, and media to amplify voices, strengthen governance,
            and create innovative tech solutions for social impact.
          </p>
          <Button variant="primary">Learn More</Button>
        </div>
      </div>
    </Section>
  );
}
