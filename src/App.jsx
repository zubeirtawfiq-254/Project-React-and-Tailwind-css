import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Gallery from './components/sections/section 4';
import About from './components/sections/About';
import Products from './components/sections/Products';
import CTA from './components/sections/CTA';
import Testimonials from './components/Testimonials';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Gallery />
        <About />
        <Products />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
