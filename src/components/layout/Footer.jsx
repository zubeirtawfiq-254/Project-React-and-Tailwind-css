import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-16" style={{
      backgroundColor: '#171717',
      color: '#d4d4d4',
      width: '1440px',
      opacity: 1,
      transform: 'rotate(0deg)',
    }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-24 py-12">
        {/* Top Section */}
        <div style={{ borderBottomColor: '#404040' }} className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-10">
          <h1 style={{ color: '#ffffff' }} className="text-2xl font-bold mb-6 md:mb-0 flex items-center gap-3">
            <span className="text-xl font-bold">Ibra<span style={{ color: '#f59e0b' }}>TechHub</span></span>
          </h1>
          <div className="flex space-x-6 text-xl" style={{ color: '#737373' }}>
            <a href="#" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#737373'}><FaInstagram /></a>
            <a href="#" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#737373'}><FaFacebookF /></a>
            <a href="#" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#737373'}><FaTwitter /></a>
            <a href="#" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#737373'}><FaGithub /></a>
            <a href="#" style={{ transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#737373'}><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-10 text-sm">
          <div>
            <h3 style={{ color: '#ffffff' }} className="font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>Tech for Rights</a></li>
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>Digital Safety</a></li>
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>Climate Voices</a></li>
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>Youth Innovation</a></li>
            </ul>
          </div>

          <div>
            <h3 style={{ color: '#ffffff' }} className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>Blogs</a></li>
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>Workshops</a></li>
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>Reports</a></li>
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>Documentation</a></li>
            </ul>
          </div>

          <div>
            <h3 style={{ color: '#ffffff' }} className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>About Us</a></li>
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>Contact</a></li>
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>Partners</a></li>
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 style={{ color: '#ffffff' }} className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>LinkedIn</a></li>
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>Twitter</a></li>
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>GitHub</a></li>
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>Email Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 style={{ color: '#ffffff' }} className="font-semibold mb-4">Careers</h3>
            <ul className="space-y-2">
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>Careers</a></li>
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>Internships</a></li>
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>Volunteer</a></li>
              <li><a href="#" style={{ transition: 'color 0.3s', color: '#d4d4d4' }} onMouseEnter={(e) => e.target.style.color = '#0d9488'} onMouseLeave={(e) => e.target.style.color = '#d4d4d4'}>Collaborate with Us</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTopColor: '#404040', color: '#a3a3a3' }} className="mt-10 text-center text-sm border-t pt-6">
          © IbraTechHub {new Date().getFullYear()} — All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
