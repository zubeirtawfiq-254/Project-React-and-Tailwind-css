import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ backgroundColor: 'transparent', borderBottomColor: 'transparent' }} className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 lg:px-24 py-4 flex items-center justify-between" style={{boxSizing: 'border-box'}}>
        {/* Logo placeholder */}
        <div aria-label="logo" className="flex items-center gap-3">
          <div style={{ backgroundColor: '#0d9488' }} className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">I</div>
          <div>
            <h1 style={{ color: '#ffffff' }} className="font-bold">IbraTech</h1>
            <p style={{ color: '#d4d4d4' }} className="text-xs">Eat. Learn. Play. Connect.</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 text-sm items-center" aria-label="primary">
          <a href="#hero" style={{ color: '#ffffff' }} className="hover:text-teal-300 transition font-medium">Home</a>
          <a href="#about" style={{ color: '#ffffff' }} className="hover:text-teal-300 transition font-medium">About</a>
          <a href="#features" style={{ color: '#ffffff' }} className="hover:text-teal-300 transition font-medium">Features</a>
          <a href="#products" style={{ color: '#ffffff' }} className="hover:text-teal-300 transition font-medium">Services</a>
        </nav>

        {/* Mobile toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="p-2 rounded-md border text-white"
            style={{ borderColor: 'rgba(255,255,255,0.2)' }}
            title={open ? 'Close menu' : 'Open menu'}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu (collapsible) */}
      <div id="mobile-menu" className={`lg:hidden ${open ? 'block' : 'hidden'}`} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.5)' }}>
        <div className="px-6 py-4 space-y-3">
          <a href="#hero" onClick={() => setOpen(false)} className="block text-white font-medium">Home</a>
          <a href="#about" onClick={() => setOpen(false)} className="block text-white font-medium">About</a>
          <a href="#features" onClick={() => setOpen(false)} className="block text-white font-medium">Features</a>
          <a href="#products" onClick={() => setOpen(false)} className="block text-white font-medium">Services</a>
        </div>
      </div>
    </header>
  );
}
