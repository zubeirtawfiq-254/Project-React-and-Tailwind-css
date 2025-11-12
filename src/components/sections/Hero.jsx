const Stat = ({ value, label }) => (
  <div style={{ background: 'rgba(255, 255, 255, 0.15)', borderColor: 'rgba(255, 255, 255, 0.3)', backdropFilter: 'blur(10px)' }} className="text-center p-4 rounded-lg border">
    <div style={{ color: '#f59e0b' }} className="text-2xl md:text-3xl font-bold">{value}</div>
    <div style={{ color: '#f5f5f5' }} className="text-xs md:text-sm mt-2">{label}</div>
  </div>
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="py-32 relative flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: 'url(/src/assets/Images/hero.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for better text readability */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center w-full">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 style={{ color: '#ffffff' }} className="text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
            Make space for work, study, and play — right in your neighborhood.
          </h1>
          <p style={{ color: '#f5f5f5' }} className="text-lg mb-8 max-w-2xl mx-auto">
            Fast internet, hands-on tech lessons, and a safe gaming lounge — all under one roof.
          </p>
          <button style={{ backgroundColor: '#0d9488' }} className="px-8 py-4 rounded-lg font-medium text-white hover:opacity-90 transition text-lg">
            Book a Session
          </button>
        </div>
      </div>

      {/* Stats at bottom */}
      <div className="relative z-10 w-full bg-linear-to-t from-black/60 to-transparent py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
            <Stat value="1.2k+" label="Visitors/month" />
            <Stat value="320+" label="Coding students" />
            <Stat value="45" label="Community events" />
            <Stat value="95%" label="Satisfaction" />
          </div>
        </div>
      </div>
    </section>
  );
}
