import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-darkblue/90 backdrop-blur-lg shadow-glass flex justify-between items-center px-6 py-4 border-b-2 border-neon">
    <div className="font-extrabold text-neon text-2xl tracking-widest drop-shadow-neon">Kawish Iqbal</div>
    <ul className="flex gap-8">
      {['Home','About','Skills','Projects','Experience','Contact','Resume'].map((item, idx) => (
        <li key={item}>
          <a href={`#${item.toLowerCase()}`} className="relative px-3 py-1 font-semibold text-gray-200 hover:text-neon transition-all duration-200">
            {item}
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-neon scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        </li>
      ))}
    </ul>
    <button className="ml-6 px-3 py-2 rounded-full bg-neon text-darkblue font-bold shadow-neon border-2 border-neon hover:bg-darkblue hover:text-neon transition-all duration-200">🌗</button>
  </nav>
);

export default Navbar;
