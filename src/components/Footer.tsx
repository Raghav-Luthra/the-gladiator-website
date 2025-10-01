import React from 'react';
import { Sword, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    products: [
      { name: 'Strawberry Fusion', href: '#' },
      { name: 'Citrus Blend', href: '#' },
      { name: 'Cranberry Blast', href: '#' },
      { name: 'Limited Editions', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Story', href: '/about' },
      { name: 'Press Kit', href: '#' }
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Nutrition Info', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Accessibility', href: '#' }
    ]
  };

  const socialIcons = [
    { icon: <Instagram className="w-6 h-6" />, href: '#', name: 'Instagram' },
    { icon: <Twitter className="w-6 h-6" />, href: '#', name: 'Twitter' },
    { icon: <Facebook className="w-6 h-6" />, href: '#', name: 'Facebook' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Sword className="h-8 w-8 text-teal-400" />
                <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-lg"></div>
              </div>
              <span className="text-2xl font-bold font-orbitron tracking-wide text-white">
                THE GLADIATOR
              </span>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Unleashing the warrior spirit through legendary flavored sodas. 
              Every sip is a battle cry, every drop a victory.
            </p>
            
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group p-3 bg-gray-900 rounded-full border border-gray-800 hover:border-teal-500 hover:bg-teal-500/10 transition-all duration-300"
                  aria-label={social.name}
                >
                  <div className="text-gray-400 group-hover:text-teal-400 group-hover:scale-110 transition-all duration-300">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-lg font-bold font-orbitron text-white mb-6">
              FLAVORS
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-orbitron text-white mb-6">
              COMPANY
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold font-orbitron text-white mb-6">
              SUPPORT
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} The Gladiator. All rights reserved. Feel the fury responsibly.
            </div>
            
            <div className="flex space-x-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;