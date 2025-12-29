import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About R&J Window Company' },
    { to: '/bay-bow-windows', label: 'Bay & Bow Windows' },
    { to: '/casement-windows', label: 'Casement Windows' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="bg-white border-t-4 border-gray-800">
      {/* Top Section - Logo and Contact */}
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo Section */}
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/images/rj_logo.png" 
                alt="R&J Window Company Logo" 
                className="h-14 md:h-16 w-auto"
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-gray-800 text-xl md:text-2xl font-bold italic uppercase tracking-wide leading-tight">
                  Window Company
                </h1>
                <p className="text-gray-500 text-[10px] md:text-xs font-semibold uppercase tracking-wider">
                  Serving Rockland & Westchester since 1978
                </p>
              </div>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden md:block text-right">
            <p className="text-gray-500 text-xs uppercase tracking-wide mb-1">Call for a free estimate</p>
            <a href="tel:845-268-0165" className="block text-gray-800 font-bold text-xl hover:text-gray-600 transition-colors">
              845-268-0165
            </a>
            <a href="tel:845-735-7602" className="block text-gray-800 font-bold text-xl hover:text-gray-600 transition-colors">
              845-735-7602
            </a>
          </div>
        </div>

        {/* Mobile Contact Info */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 text-center border-t border-gray-200 pt-4">
            <p className="text-gray-500 text-xs uppercase mb-2">Call for a free estimate</p>
            <a href="tel:845-268-0165" className="block text-gray-800 font-bold text-lg">
              845-268-0165
            </a>
            <a href="tel:845-735-7602" className="block text-gray-800 font-bold text-lg">
              845-735-7602
            </a>
          </div>
        )}
      </div>

      {/* Navigation Bar - Modern Clean Style */}
      <nav className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <ul className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:justify-start`}>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`block py-3 px-5 text-gray-600 hover:text-gray-900 font-medium transition-all duration-200 text-base border-b-2 ${
                    location.pathname === link.to 
                      ? 'border-gray-800 text-gray-900' 
                      : 'border-transparent hover:border-gray-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
