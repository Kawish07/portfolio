import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDarkMode } = useTheme();
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundColor: isDarkMode ? '#0f172a' : '#ffffff',
        background: isDarkMode 
          ? `linear-gradient(135deg, #0f172a 0%, #1e293b 100%), radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(220, 38, 38, 0.1) 0%, transparent 50%)`
          : `linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%), radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(220, 38, 38, 0.08) 0%, transparent 50%)`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            Available for Freelance
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
            Building Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
              Masterpieces
            </span>
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Hi, I'm <strong className="text-gray-900 dark:text-white">Kawish Iqbal</strong>. A MERN Stack Developer crafting high-performance web applications with intelligent design and fluid interactions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#projects" className="group relative px-8 py-4 bg-red-600 text-white font-bold rounded-xl overflow-hidden shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="relative flex items-center gap-2">View Work <ArrowRight size={18} /></span>
            </a>
            <a href="#contact" className="px-8 py-4 bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-900 dark:text-white font-bold rounded-xl border border-gray-300 dark:border-slate-700 hover:border-gray-400 dark:hover:border-slate-500 transition-all duration-300">
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right: Personal Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-red-500 to-blue-500 rounded-full blur-[100px] opacity-30 animate-pulse"></div>
          
          {/* Profile Image Container */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300 dark:border-slate-600 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border border-gray-400 dark:border-slate-700"></div>
            <div className="absolute -inset-4 rounded-full border border-red-500/30 animate-pulse"></div>
            
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-slate-800 shadow-2xl">
              {/* YOUR PERSONAL IMAGE */}
              <img 
                src="/imagemyself.png" 
                alt="Kawish Iqbal" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-10 right-0 bg-slate-900/90 backdrop-blur border border-slate-700 p-3 rounded-xl shadow-xl flex items-center gap-3 animate-float">
              <div className="bg-green-500/20 p-2 rounded-full text-green-400">
                <span className="text-xl">💻</span>
              </div>
              <div>
                <p className="text-xs text-slate-400">Current Focus</p>
                <p className="text-sm font-bold text-white">MERN Stack + AI</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;