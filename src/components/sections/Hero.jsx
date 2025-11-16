const Stat = ({ value, label }) => (
  <div className="text-center">
    <div style={{ color: '#f59e0b' }} className="text-2xl md:text-3xl font-bold">{value}</div>
    <div style={{ color: '#f5f5f5' }} className="text-xs md:text-sm mt-2">{label}</div>
  </div>
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="py-16 relative flex flex-col items-center justify-center min-h-screen"
      style={{
        width: '1440px',
        height: '1000px',
        opacity: 1,
        transform: 'rotate(0deg)',
        backgroundImage: 'url(/src/assets/Images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
      }}
    >
      {/* Overlay for better text readability */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', zIndex: 5 }}
      />

      {/* Content */}
      <div className="relative flex-1 flex items-center justify-center w-full" style={{ zIndex: 15 }}>
        {/* Absolute framed H1 per measurements (width:888, height:154, top:225, left:276) */}
        <div style={{
          position: 'absolute',
          width: '888px',
          height: '154px',
          top: '225px',
          left: '276px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 30,
          boxSizing: 'border-box',
          opacity: 1,
          transform: 'rotate(0deg)',
          overflow: 'hidden',
        }}>
          <h1 style={{ color: '#ffffff', textAlign: 'center', lineHeight: '1.05', margin: 0, fontSize: '48px', maxWidth: '100%' }} className="font-bold font-heading leading-tight">
            Space for Every Dream — Work, Study, Eat & Play
          </h1>
        </div>
      </div>

      {/* Subtitle paragraph - absolutely positioned relative to hero section */}
      <p
        style={{
          position: 'absolute',
          width: '627px',
          height: '60px',
          top: '409px',
          left: '414px',
          opacity: 1,
          transform: 'rotate(0deg)',
          color: '#ffffff',
          fontFamily: 'Saira, Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: '20px',
          lineHeight: '150%',
          letterSpacing: '1%',
          textAlign: 'center',
          boxSizing: 'border-box',
          margin: 0,
          zIndex: 31,
          textShadow: '0 4px 12px rgba(0,0,0,0.6)'
        }}
      >
        Where Work, Study & Play Meet — Right in Your Neighborhood.
      </p>

      {/* CTA button - absolutely positioned relative to hero section */}
      <button
        style={{
          position: 'absolute',
          width: '257px',
          height: '62px',
          top: '534px',
          left: '591px',
          opacity: 1,
          transform: 'rotate(0deg)',
          borderRadius: '10px',
          paddingTop: '16px',
          paddingRight: '80px',
          paddingBottom: '16px',
          paddingLeft: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          backgroundColor: '#E2E2E266',
          color: '#ffffff',
          border: 'none',
          cursor: 'pointer',
          boxSizing: 'border-box',
          zIndex: 25,
          backdropFilter: 'blur(30px)',
        }}
        className="font-medium text-lg"
      >
        Book a Session
      </button>

      {/* Stats at bottom (blue continuous frame, near hero bottom) */}
      <div style={{
        position: 'absolute',
        width: '1240px',
        height: '180px',
        top: '790px',
        left: '100px',
        opacity: 0.95,
        transform: 'rotate(0deg)',
        background: 'rgba(40,111,108,0.95)',
        borderRadius: '12px',
        padding: '24px',
        zIndex: 10,
        boxSizing: 'border-box',
      }}>
        {/* positioned stats inside the frame (measurements provided) */}
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* separators (vertical) between stats */}
          <div style={{ position: 'absolute', top: '40px', left: '162px', width: '1px', height: '100px', background: '#f59e0b', borderWidth: '1px' }} />
          <div style={{ position: 'absolute', top: '40px', left: '464px', width: '1px', height: '100px', background: '#f59e0b', borderWidth: '1px' }} />
          <div style={{ position: 'absolute', top: '40px', left: '766px', width: '1px', height: '100px', background: '#f59e0b', borderWidth: '1px' }} />

          <div style={{ position: 'absolute', top: '38px', left: '11px', width: '112px', height: '105px' }}>
            <Stat value="1.2k+" label="Visitors/month" />
          </div>

          <div style={{ position: 'absolute', top: '38px', left: '313px', width: '112px', height: '105px' }}>
            <Stat value="320+" label="Coding students" />
          </div>

          <div style={{ position: 'absolute', top: '38px', left: '615px', width: '112px', height: '105px' }}>
            <Stat value="45" label="Community events" />
          </div>

          <div style={{ position: 'absolute', top: '38px', left: '917px', width: '112px', height: '105px' }}>
            <Stat value="95%" label="Satisfaction" />
          </div>
        </div>
      </div>
    </section>
  );
}
