import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-red-500/20 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 hover:scale-105 transition-transform duration-300">
              KAWISH.DEV
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-sm font-medium text-gray-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors relative group py-2"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-700 dark:text-slate-300 transition-all duration-300 border border-gray-300 dark:border-slate-700"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
             <button 
               onClick={toggleTheme}
               className="p-2 rounded-full bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-slate-300 transition-all duration-300"
               aria-label="Toggle theme"
             >
                {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-gray-200 dark:border-slate-800 rounded-2xl p-4 animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-lg font-medium text-gray-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800/50 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;