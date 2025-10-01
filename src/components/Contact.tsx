import React, { useState } from 'react';
import { Mail, Send, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['dahiyavarun11@gmail.com', 'warriors@thegladiator.com'],
      subtitle: 'We respond within 24 hours'
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, name: 'Instagram', handle: '@thegladiator' },
    { icon: <Twitter className="w-6 h-6" />, name: 'Twitter', handle: '@gladiatorsoda' },
    { icon: <Facebook className="w-6 h-6" />, name: 'Facebook', handle: 'TheGladiatorSoda' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black font-orbitron mb-6 bg-gradient-to-r from-white to-teal-300 bg-clip-text text-transparent">
            JOIN THE <span className="text-teal-400">ARENA</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to taste the fury? Connect with our warrior community and let us know how we can serve you better.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-teal-500/50 transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-teal-400 group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-teal-300 transition-colors duration-300">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm text-gray-500 mt-1">{info.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-teal-500/20">
              <h3 className="text-2xl font-bold font-orbitron mb-6 text-white">
                Follow The <span className="text-teal-400">Warrior</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Join our community of flavor warriors and stay updated on our latest conquests.
              </p>

              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className="group w-full flex items-center space-x-4 p-4 bg-black/50 rounded-xl border border-gray-700 hover:border-teal-500 hover:bg-teal-500/5 transition-all duration-300"
                  >
                    <div className="text-teal-400 group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-white font-semibold">{social.name}</p>
                      <p className="text-gray-400 text-sm">{social.handle}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 border border-teal-500/20 shadow-2xl max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-transparent rounded-3xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold font-orbitron mb-6 text-white">
                Ready To <span className="text-teal-400">Join The Legion?</span>
              </h3>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Become part of the gladiator family and be the first to experience new flavors, 
                exclusive events, and warrior-only perks.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full font-bold text-lg hover:from-teal-500 hover:to-teal-400 hover:shadow-xl hover:shadow-teal-500/25 hover:-translate-y-1 transition-all duration-300 text-white">
                  TASTE THE FURY
                </button>
                <button className="px-8 py-4 border-2 border-teal-500 rounded-full font-bold text-lg hover:bg-teal-500/10 transition-all duration-300 text-teal-400 hover:text-white">
                  FIND STORES
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;