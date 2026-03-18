import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, MapPin } from 'lucide-react';

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const Hero = () => {
  const marqueeRef = useRef(null);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0a0a0a] pt-16 lg:pt-0">

      {/* ── Radial glow ── */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(220,38,38,0.12),transparent)]" />

      {/* ── Main content ── */}
      <div className="flex flex-col justify-center flex-1 px-6 sm:px-12 lg:px-16 pt-24 lg:pt-0">

        {/* Location / status row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="flex items-center gap-6 mb-6"
        >
          <div className="flex items-center gap-2 text-white/30 text-xs tracking-[0.15em] uppercase">
            <MapPin size={12} className="text-red-500" />
            Islamabad, Pakistan
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
            </span>
            <span className="text-xs text-white/30 tracking-[0.15em] uppercase">Open to Work</span>
          </div>
        </motion.div>

        {/* Giant headline */}
        <motion.div variants={stagger} initial="hidden" animate="show" className="overflow-hidden">
          <motion.div variants={fadeUp} className="overflow-hidden">
            <h1 className="text-[clamp(2.2rem,6vw,5.5rem)] font-black leading-[0.88] tracking-tighter text-white uppercase">
              Full Stack
            </h1>
          </motion.div>
          <motion.div variants={fadeUp} className="overflow-hidden">
            <h1 className="text-[clamp(2.2rem,6vw,5.5rem)] font-black leading-[0.88] tracking-tighter uppercase"
              style={{ WebkitTextStroke: '2px rgba(255,255,255,0.18)', color: 'transparent' }}>
              Developer
            </h1>
          </motion.div>
          <motion.div variants={fadeUp} className="overflow-hidden">
            <h1 className="text-[clamp(2.2rem,6vw,5.5rem)] font-black leading-[0.88] tracking-tighter text-white uppercase">
              &amp; AI Builder
            </h1>
          </motion.div>
        </motion.div>

        {/* Sub-row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8"
        >
          {/* Name + tagline */}
          <div>
            <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-2">Kawish Iqbal</p>
            <p className="text-white/60 text-sm max-w-xs leading-relaxed">
              MERN · Next.js · Node.js · MongoDB · Docker · Gemini API
            </p>
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-4">
            <a href="#projects"
              className="group flex items-center gap-2 px-7 py-3.5 bg-red-600 hover:bg-red-500 text-white text-sm font-bold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(220,38,38,0.4)]">
              View Work
              <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a href="#contact"
              className="px-7 py-3.5 border border-white/[0.12] hover:border-white/30 text-white/60 hover:text-white text-sm font-bold rounded-full transition-all duration-300">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── Marquee strip ── */}
      <div className="border-t border-white/[0.06] py-5 overflow-hidden">
        <div ref={marqueeRef} className="flex whitespace-nowrap marquee-track">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-8 mr-8">
              {['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Express.js', 'Docker', 'Gemini API', 'Tailwind CSS', 'REST APIs', 'JWT Auth', 'CI/CD'].map((t) => (
                <React.Fragment key={t}>
                  <span className="text-xs text-white/20 tracking-[0.2em] uppercase">{t}</span>
                  <span className="text-red-600/40 text-lg">·</span>
                </React.Fragment>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
