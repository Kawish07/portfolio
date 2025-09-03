import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(220, 38, 127, 0.3) 0%, 
            transparent 50%),
          linear-gradient(135deg, 
            #0f172a 0%, 
            #1e293b 25%, 
            #dc2626 50%, 
            #1e293b 75%, 
            #0f172a 100%)
        `
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`
            }}
          >
            <div 
              className="w-2 h-2 bg-red-500 rotate-45 opacity-60"
              style={{
                transform: `rotate(${i * 60}deg)`,
                animation: `float ${4 + i}s ease-in-out infinite`
              }}
            />
          </div>
        ))}
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(220, 38, 127, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220, 38, 127, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        
        {/* Animated Name Badge */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
            <div className="relative bg-slate-900/90 backdrop-blur-sm border border-red-500/30 rounded-2xl px-8 py-4 shadow-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                <span className="text-2xl font-bold text-white tracking-wider">Kawish Iqbal</span>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
              </div>
            </div>
          </div>
        </div>

        {/* Main Title with Staggered Animation */}
        <div className="mb-6">
          <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight">
            {['MERN', 'STACK', 'DEVELOPER'].map((word, i) => (
              <span
                key={word}
                className="inline-block mx-2 px-4 py-2 rounded-xl"
                style={{
                  animation: `slideInUp 1s ease-out ${i * 0.2}s both`,
                  background: 'linear-gradient(135deg, #181824 0%, #1e293b 60%, #dc2626 100%)',
                  color: 'white',
                  boxShadow: '0 2px 16px 0 rgba(220, 38, 127, 0.15)',
                  border: '1px solid #dc2626',
                  fontWeight: 'bold',
                  letterSpacing: '0.05em'
                }}
              >
                <span style={{
                  background: 'linear-gradient(90deg, #fff 0%, #ff4a4a 50%, #fff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'inherit'
                }}>{word}</span>
              </span>
            ))}
          </h1>
        </div>

        {/* Expertise Tags */}
        <div className="mb-8 flex flex-wrap justify-center gap-4">
          {[
            'Frontend Specialist',
             'AI Chatbot',
             'Real-time Apps',
             'Payment Integration'
          ].map((skill, i) => (
            <div
              key={skill}
              className="group relative"
              style={{
                animation: `fadeInScale 0.8s ease-out ${0.5 + i * 0.1}s both`
              }}
            >
              <div className="absolute inset-0 bg-red-600/20 rounded-full blur-md group-hover:bg-red-600/40 transition-all duration-300" />
              <span className="relative bg-slate-800/80 backdrop-blur-sm text-red-400 px-6 py-2 rounded-full border border-red-500/30 text-sm font-semibold tracking-wide hover:text-white hover:border-red-400 transition-all duration-300 cursor-default">
                {skill}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Buttons */}
        <div 
          className="flex flex-col sm:flex-row justify-center gap-6"
          style={{
            animation: 'fadeInUp 1s ease-out 1s both'
          }}
        >
          <a
            href="#projects"
            className="group relative overflow-hidden bg-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-2xl hover:shadow-red-600/50 transform hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <span className="relative z-10 text-lg tracking-wide">View Projects</span>
            <div className="absolute inset-0 border-2 border-red-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <a
            href="#contact"
            className="group relative bg-transparent text-red-400 font-bold py-4 px-8 rounded-xl border-2 border-red-500 hover:bg-red-500 hover:text-white shadow-xl hover:shadow-red-500/30 transform hover:-translate-y-1 transition-all duration-300"
          >
            <span className="relative z-10 text-lg tracking-wide">Contact Me</span>
            <div className="absolute inset-0 bg-red-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;