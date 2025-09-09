import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sword } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/#products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-lg border-b border-teal-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Sword className="h-8 w-8 text-teal-400 group-hover:text-teal-300 transition-colors duration-300" />
              <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-lg group-hover:bg-teal-300/30 transition-all duration-300"></div>
            </div>
            <span className="text-xl font-bold font-orbitron tracking-wide text-white group-hover:text-teal-300 transition-colors duration-300">
              THE GLADIATOR
            </span>
          </Link>

          <div className="hidden md:block">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-teal-400 transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-lg rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-3 py-2 text-gray-300 hover:text-teal-400 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;