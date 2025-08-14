import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section id="hero" className="flex flex-col items-center justify-center h-screen text-center relative bg-gradient-to-br from-darkblue via-mate to-darkblue">
    <motion.img 
      src="/kawish-iqbal.jpg" 
      alt="Kawish Iqbal" 
      className="w-44 h-44 rounded-full mb-8 shadow-neon object-cover border-4 border-neon/80 bg-glass backdrop-blur-lg" 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    />
    <motion.h1 
      className="text-5xl md:text-7xl font-extrabold mb-4 text-neon drop-shadow-neon tracking-wide"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Kawish Iqbal
    </motion.h1>
    <motion.p 
      className="text-2xl md:text-3xl mb-2 text-gray-200 font-semibold"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      MERN Stack Developer
    </motion.p>
    <motion.div 
      className="text-neon text-xl font-mono animate-pulse mb-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
    >
      <span>Frontend Specialist | AI Chatbot | Real-time Apps | Payment Integration</span>
    </motion.div>
    <motion.div className="mt-8 flex justify-center gap-6">
      <a href="#projects" className="px-6 py-3 bg-neon text-darkblue font-bold rounded-full shadow-neon border-2 border-neon hover:bg-darkblue hover:text-neon transition-all duration-200">View Projects</a>
      <a href="#contact" className="px-6 py-3 bg-mate text-neon font-bold rounded-full border-2 border-neon hover:bg-neon hover:text-darkblue transition-all duration-200">Contact Me</a>
    </motion.div>
  </section>
);

export default Hero;
