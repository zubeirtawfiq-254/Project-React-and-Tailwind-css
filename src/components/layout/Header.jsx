export default function Header() {
  return (
    <header style={{ backgroundColor: '#f5f5f5', borderBottomColor: '#e5e5e5' }} className="border-b sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-24 py-4 flex items-center justify-between">
        {/* Logo placeholder */}
        <div aria-label="logo" className="flex items-center gap-3">
          <div style={{ backgroundColor: '#0d9488' }} className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">I</div>
          <div>
            <h1 style={{ color: '#064e3b' }} className="font-bold">IbraTech</h1>
            <p style={{ color: '#525252' }} className="text-xs">Eat. Learn. Play. Connect.</p>
          </div>
        </div>

        {/* Navigation skeleton */}
        <nav className="hidden lg:flex gap-8 text-sm items-center" aria-label="primary">
          <a href="#hero" style={{ color: '#404040' }} className="hover:text-primary-500 transition font-medium">Home</a>
          <a href="#products" style={{ color: '#404040' }} className="hover:text-primary-500 transition font-medium">Services</a>
          <a href="#about" style={{ color: '#404040' }} className="hover:text-primary-500 transition font-medium">About</a>
          <a href="#cta" style={{ color: '#404040' }} className="hover:text-primary-500 transition font-medium">Contact</a>
        </nav>
      </div>
    </header>
  );
}
