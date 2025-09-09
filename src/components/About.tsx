import React from 'react';
import { Shield, Award, Users, Zap, Target, Crown, Flame, Star } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Warrior Spirit',
      description: 'Every bottle embodies the relentless determination of ancient gladiators who never backed down from a challenge.'
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'Premium Quality',
      description: 'We source only the finest ingredients from around the world to create flavors worthy of champions.'
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: 'Bold Innovation',
      description: 'Pushing the boundaries of taste with fearless flavor combinations that ignite your senses.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Precision Crafted',
      description: 'Each batch is meticulously crafted with surgical precision to deliver consistent excellence.'
    }
  ];

  const achievements = [
    { number: '3', label: 'Legendary Flavors' },
    { number: '100%', label: 'Natural Ingredients' }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3Cpattern%20id%3D%22grid%22%20width%3D%2240%22%20height%3D%2240%22%20patternUnits%3D%22userSpaceOnUse%22%3E%3Cpath%20d%3D%22m%2040%200%20l%200%2040%20m%20-40%200%20l%2040%200%22%20fill%3D%22none%22%20stroke%3D%22%23334155%22%20stroke-width%3D%220.3%22%2F%3E%3C%2Fpattern%3E%3C%2Fdefs%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22url%28%23grid%29%22%2F%3E%3C%2Fsvg%3E')] opacity-10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black font-orbitron mb-8 bg-gradient-to-r from-white via-teal-300 to-white bg-clip-text text-transparent">
            THE GLADIATOR LEGACY
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Born from the arena of flavor innovation, forged in the fires of excellence
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold font-orbitron text-white">
                OUR <span className="text-teal-400">BATTLE</span> STORY
              </h2>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                 
                  Tired of bland, ordinary beverages, they embarked on a mission to create something extraordinary—
                  something that would awaken the warrior spirit in every person who dared to taste it.
                </p>
                
                <p>
                  Drawing inspiration from the legendary gladiators of ancient Rome, who fought with unwavering 
                  courage and determination, The Gladiator was born. Just as those warriors entered the arena 
                  with fierce resolve, we entered the beverage industry with an uncompromising commitment to excellence.
                </p>
                
                <p>
                  Today, The Gladiator stands as a testament to what happens when passion meets precision, 
                  when bold vision meets meticulous craft. We don't just make sodas—we forge liquid experiences 
                  that transform ordinary moments into legendary ones.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-8 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-transparent rounded-3xl"></div>
                <div className="relative z-10">
                  <Quote className="w-12 h-12 text-teal-200 mb-6" />
                  <blockquote className="text-xl font-semibold text-white leading-relaxed mb-6">
                    "We don't create drinks for the weak. We craft liquid courage for those who dare to feel the fury."
                  </blockquote>
                  <cite className="text-teal-200 font-medium">— Varun Dahiya, Founder & Chief Warrior</cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-white">
              GLADIATOR <span className="text-teal-400">VALUES</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The pillars that guide our relentless pursuit of flavor perfection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-teal-500/50 transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-teal-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                
                <h3 className="text-xl font-bold font-orbitron mb-4 text-white group-hover:text-teal-300 transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {value.description}
                </p>

                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-white">
              CONQUEST <span className="text-teal-400">ACHIEVEMENTS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-4">
                  <div className="text-5xl md:text-6xl font-black font-orbitron bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {achievement.number}
                  </div>
                  <Star className="w-6 h-6 text-teal-400 absolute -top-2 -right-2 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <p className="text-lg text-gray-300 font-semibold">
                  {achievement.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl p-12 border border-teal-500/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-transparent rounded-3xl"></div>
            
            <div className="relative z-10">
              <Target className="w-16 h-16 text-teal-400 mx-auto mb-8" />
              
              <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-8 text-white">
                OUR MISSION
              </h2>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                To ignite the warrior spirit within every individual by delivering unparalleled flavor experiences 
                that challenge the ordinary and celebrate the extraordinary. We believe that life is too short for 
                boring beverages, and every moment deserves to be legendary.
              </p>
              
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Quote component for the testimonial
const Quote: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 32 32">
    <path d="M10 8v8c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4c.209 0 .411.017.611.048C6.722 10.686 7.213 9.394 8.184 8.32L10 8zm16 0v8c0 2.209-1.791 4-4 4s-4-1.791-4-4 1.791-4 4-4c.209 0 .411.017.611.048.111-1.362.602-2.654 1.573-3.728L26 8z" />
  </svg>
);

export default About;