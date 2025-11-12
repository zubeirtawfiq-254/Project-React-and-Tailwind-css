import React from "react";

export default function CTA() {
  return (
    <section id="cta" className="py-20" style={{ background: 'linear-gradient(135deg, #064e3b 0%, #0d9488 100%)' }}>
      <div className="max-w-4xl mx-auto px-6 lg:px-24 text-center">
        <h2 style={{ color: '#ffffff' }} className="text-4xl lg:text-5xl font-bold font-heading mb-6">
          Ready to Transform Your Community?
        </h2>
        <p style={{ color: '#f0fdf4' }} className="text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of youth, CBOs, and community leaders using IbraTech Hub to drive digital innovation and social change.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            style={{ backgroundColor: '#f59e0b' }}
            className="px-8 py-4 rounded-lg font-semibold text-white hover:opacity-90 transition"
          >
            Get Started Now
          </button>
          <button
            style={{ backgroundColor: 'transparent', borderColor: '#ffffff', borderWidth: '2px', color: '#ffffff' }}
            className="px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition"
          >
            Learn More
          </button>
        </div>

        {/* Trust Badge */}
        <p style={{ color: '#d4d4d4' }} className="mt-12 text-sm">
          ✓ 1.2k+ Monthly Visitors | ✓ 320+ Students Trained | ✓ 95% Satisfaction Rate
        </p>
      </div>
    </section>
  );
}
