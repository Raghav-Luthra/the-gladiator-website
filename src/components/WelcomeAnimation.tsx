import React, { useEffect, useState } from 'react';
import { Sword, Zap, Flame } from 'lucide-react';

interface WelcomeAnimationProps {
  onComplete: () => void;
}

const WelcomeAnimation: React.FC<WelcomeAnimationProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 500);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22%20width%3D%2240%22%20height%3D%2240%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22M%2040%200%20L%200%200%200%2040%22%20fill%3D%22none%22%20stroke%3D%22%23334155%22%20stroke-width%3D%220.5%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url%28%23grid%29%22%2F%3E%3C%2Fsvg%3E')] opacity-20"></div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10 text-center px-4 max-w-2xl">
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            <div className="w-32 h-32 relative animate-fadeInUp">
              <img
                src="/PHOTO-2025-09-01-20-56-59-removebg-preview.png"
                alt="The Gladiator Logo"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-teal-400/30 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>
        </div>

        <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          <div className="flex justify-center space-x-8 mb-8">
            <Zap className="w-8 h-8 text-teal-400 animate-pulse" />
            <Flame className="w-8 h-8 text-teal-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
            <Sword className="w-8 h-8 text-teal-400 animate-pulse" style={{ animationDelay: '0.6s' }} />
          </div>

          <h1 className="text-5xl md:text-7xl font-black font-orbitron tracking-wider mb-6">
            <span className="bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent">
              THE
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-teal-400 bg-clip-text text-transparent">
              GLADIATOR
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-teal-400 font-bold animate-pulse">
            FEEL THE FURY
          </p>

          <div className="w-64 mx-auto mt-8">
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-600 via-teal-400 to-teal-600 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              >
                <div className="h-full w-full bg-white/20 animate-pulse"></div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-3 font-semibold">
              {progress < 100 ? 'Awakening the warrior...' : 'Ready to conquer!'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeAnimation;
