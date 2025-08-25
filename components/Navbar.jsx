import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-lg shadow-xl border-b border-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-extrabold text-cyan-400 text-xl sm:text-2xl tracking-widest drop-shadow-lg hover:drop-shadow-2xl transition-all duration-300 cursor-pointer">
              Kawish Iqbal
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="group relative px-3 py-2 font-semibold text-gray-200 hover:text-cyan-400 transition-all duration-300 rounded-lg hover:bg-slate-800/50"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme Toggle Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg hover:shadow-cyan-500/25 hover:shadow-2xl border border-cyan-400 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105">
              🌗
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <button className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              🌗
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-200 hover:text-cyan-400 hover:bg-slate-800/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-800/50 rounded-lg mt-2 backdrop-blur-sm border border-slate-700">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-semibold text-gray-200 hover:text-cyan-400 hover:bg-slate-700/50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;