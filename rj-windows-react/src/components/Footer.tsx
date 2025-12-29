import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About R&J Window Company' },
    { to: '/bay-bow-windows', label: 'Bay & Bow Windows' },
    { to: '/casement-windows', label: 'Casement Windows' },
    { to: '/contact', label: 'Contact Us' },
  ];

  const services = [
    'Replacement Windows',
    'Double Hungs',
    'Casements',
    'Bows',
    'Entry Doors',
    'Storm Windows',
    'Gutters',
    'Leaders-Trim',
    'Facia',
  ];

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Navigation Links */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={handleLinkClick}
                  className="text-gray-400 hover:text-white font-semibold text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services */}
        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm">
            <span className="font-semibold text-gray-300">Specializing in: </span>
            {services.join(' • ')}
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            Copyright © {currentYear} R&J Window Company
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
