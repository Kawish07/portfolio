import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home',       href: '#hero',       num: '01' },
  { label: 'About',      href: '#about',      num: '02' },
  { label: 'Skills',     href: '#skills',     num: '03' },
  { label: 'Experience', href: '#experience', num: '04' },
  { label: 'Projects',   href: '#projects',   num: '05' },
  { label: 'Contact',    href: '#contact',    num: '06' },
];

const Navbar = () => {
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ids = navLinks.map(n => n.href.replace('#', ''));
    // rootMargin shrinks the observable viewport to a band near the top,
    // so whichever section occupies that band is the "active" one.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Desktop Fixed Left Sidebar ── */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-[280px] flex-col justify-between border-r border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-sm z-50 px-8 py-10">

        {/* Logo */}
        <div>
          <a href="#hero" onClick={() => handleNav('#hero')} className="block mb-14">
            <span className="text-xl font-black tracking-tighter text-white">KAWISH<span className="text-red-500">.</span>DEV</span>
            <p className="text-[11px] text-white/30 tracking-[0.2em] uppercase mt-0.5">Full Stack Developer</p>
          </a>

          {/* Nav Links */}
          <nav className="space-y-1">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={`group w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left transition-all duration-300 ${
                    isActive ? 'bg-white/[0.06]' : 'hover:bg-white/[0.04]'
                  }`}
                >
                  <span className={`text-[10px] font-mono transition-colors ${isActive ? 'text-red-500' : 'text-white/20 group-hover:text-white/40'}`}>
                    {link.num}
                  </span>
                  <span className={`text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-white/40 group-hover:text-white/80'}`}>
                    {link.label}
                  </span>
                  {isActive && (
                    <motion.div layoutId="indicator" className="ml-auto w-1.5 h-1.5 rounded-full bg-red-500" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom: availability + socials */}
        <div>
          {/* Availability badge */}
          <div className="mb-6 flex items-center gap-2.5 px-4 py-3 rounded-lg border border-white/[0.08] bg-white/[0.03]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-white/50">Available for work</span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a href="https://github.com/Kawish07" target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/[0.08] text-white/40 hover:text-white hover:border-white/20 transition-all">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com/in/kawish-iqbal/222767264" target="_blank" rel="noopener noreferrer"
              className="p-2.5 rounded-lg border border-white/[0.08] text-white/40 hover:text-white hover:border-white/20 transition-all">
              <Linkedin size={16} />
            </a>
            <a href="mailto:kawishiqbal898@gmail.com"
              className="p-2.5 rounded-lg border border-white/[0.08] text-white/40 hover:text-white hover:border-white/20 transition-all">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </aside>

      {/* ── Mobile Top Bar ── */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0a0a0a]/90 backdrop-blur-sm border-b border-white/[0.06]">
        <span className="text-lg font-black tracking-tighter text-white">KAWISH<span className="text-red-500">.</span>DEV</span>
        <button onClick={() => setMenuOpen(v => !v)} className="text-white/60 hover:text-white transition-colors">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col px-8 pt-24 pb-10"
          >
            <nav className="space-y-2 flex-1">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => handleNav(link.href)}
                  className="flex items-center gap-4 w-full py-4 border-b border-white/[0.06] text-left">
                  <span className="text-[10px] font-mono text-red-500">{link.num}</span>
                  <span className="text-2xl font-bold text-white">{link.label}</span>
                </button>
              ))}
            </nav>
            <div className="flex gap-4 mt-6">
              <a href="https://github.com/Kawish07" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white"><Github size={20} /></a>
              <a href="https://linkedin.com/in/kawish-iqbal/222767264" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white"><Linkedin size={20} /></a>
              <a href="mailto:kawishiqbal898@gmail.com" className="text-white/40 hover:text-white"><Mail size={20} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
