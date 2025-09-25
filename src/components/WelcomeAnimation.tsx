import React, { useState, useEffect } from 'react';
import { Zap, Target, Crown } from 'lucide-react';

interface WelcomeAnimationProps {
  onComplete: () => void;
}

const WelcomeAnimation: React.FC<WelcomeAnimationProps> = ({ onComplete }) => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [showElements, setShowElements] = useState({
    name: false,
    subtitle: false,
    logo: false,
    particles: false,
    fadeOut: false
  });

  useEffect(() => {
    const timeline = [
      // Phase 0: Initial load
      { delay: 500, action: () => setShowElements(prev => ({ ...prev, logo: true })) },
      // Phase 1: Show logo with glow
      { delay: 1000, action: () => setShowElements(prev => ({ ...prev, particles: true })) },
      // Phase 2: Show particles
      { delay: 1500, action: () => setShowElements(prev => ({ ...prev, name: true })) },
      // Phase 3: Show name with typewriter effect
      { delay: 2500, action: () => setShowElements(prev => ({ ...prev, subtitle: true })) },
      // Phase 4: Show subtitle
      { delay: 4000, action: () => setShowElements(prev => ({ ...prev, fadeOut: true })) },
      // Phase 5: Fade out and complete
      { delay: 5000, action: onComplete }
    ];

    timeline.forEach(({ delay, action }) => {
      setTimeout(action, delay);
    });
  }, [onComplete]);

  const nameLetters = "VARUN DAHIYA".split("");
  const subtitle = "GLADIATOR CREATOR";

  return (
    <div className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-1000 ${
      showElements.fadeOut ? 'opacity-0' : 'opacity-100'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22[...]
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-teal-300/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating Particles */}
        {showElements.particles && (
          <div className="absolute inset-0">
            {Array.from({ length: 20 }, (_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-teal-400 rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Logo Animation */}
        <div className={`mb-12 transition-all duration-1000 ${
          showElements.logo ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-10'
        }`}>
          <div className="relative group">
            <div className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center shadow-2xl mx-auto">
              {/* Replacing Sword icon with "The Soda Company" text, keeping theme */}
              <span
                className="text-white text-xl sm:text-2xl md:text-3xl font-extrabold font-orbitron tracking-widest drop-shadow-lg"
                style={{
                  letterSpacing: '0.18em'
                }}
              >
                The Soda Company
              </span>
            </div>
            <div className="absolute inset-0 bg-teal-400/30 rounded-full blur-2xl animate-pulse"></div>
            
            {/* Rotating Icons */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '8s' }}>
              <Zap className="absolute w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-teal-400 -top-1 sm:-top-2 left-1/2 transform -translate-x-1/2" />
              <Target className="absolute w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-teal-400 top-1/2 -right-1 sm:-right-2 transform -translate-y-1/2" />
              <Crown className="absolute w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-teal-400 -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2" />
              {/* Removed Sword icon, as requested */}
            </div>
          </div>
        </div>

        {/* Name Animation */}
        <div className={`mb-8 transition-all duration-1000 ${
          showElements.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black font-orbitron tracking-wider">
            {nameLetters.map((letter, index) => (
              <span
                key={index}
                className={`inline-block bg-gradient-to-r from-white via-teal-300 to-white bg-clip-text text-transparent transition-all duration-300 ${
                  showElements.name ? 'animate-bounce' : ''
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: '0.6s',
                  animationFillMode: 'both'
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>
        </div>

        {/* Subtitle Animation */}
        <div className={`mb-12 transition-all duration-1000 delay-500 ${
          showElements.subtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-teal-400 tracking-widest">
              {subtitle.split('').map((char, index) => (
                <span
                  key={index}
                  className="inline-block opacity-0 animate-fadeInUp"
                  style={{
                    animationDelay: `${index * 0.05 + 0.5}s`,
                    animationDuration: '0.6s',
                    animationFillMode: 'forwards'
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 md:w-48 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent"></div>
          </div>
        </div>

        {/* Pulsing Ring Effect */}
        {showElements.logo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 border-2 border-teal-400/20 rounded-full animate-ping"></div>
            <div className="absolute w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 border border-teal-400/30 rounded-full animate-ping delay-300"></div>
            <div className="absolute w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 border border-teal-400/40 rounded-full animate-ping delay-700"></div>
          </div>
        )}

        {/* Loading Bar */}
        {showElements.subtitle && (
          <div className="relative w-48 sm:w-56 md:w-64 h-1 bg-gray-800 rounded-full mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-400 rounded-full animate-loadingBar"></div>
          </div>
        )}
      </div>

      {/* Warrior Quote */}
      {showElements.subtitle && (
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 text-center animate-fadeInUp delay-1000 px-4">
          <p className="text-gray-400 text-sm sm:text-base md:text-lg font-medium tracking-wide">
            "FORGING LEGENDARY EXPERIENCES"
          </p>
        </div>
      )}
    </div>
  );
};

export default WelcomeAnimation;
