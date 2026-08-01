import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, MapPin, Download } from 'lucide-react';

/* ── Typewriter hook ── */
const useTypewriter = (words, speed = 90, pause = 2200) => {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = words[wordIdx];
    let timeout;
    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIdx, words, speed, pause]);
  return text;
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const ROLES = ['Full Stack Developer', 'MERN Stack Expert', 'AI Builder', 'UI/UX Enthusiast', 'Problem Solver'];

const Hero = () => {
  const marqueeRef = useRef(null);
  const typed = useTypewriter(ROLES);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0a0a0f] pt-16 lg:pt-0">

      {/* ── Radial glow ── */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.15),transparent)]" />
      {/* Violet blob bottom-right */}
      <div className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.08),transparent_70%)]" />

      {/* ── Main content ── */}
      <div className="flex flex-col lg:flex-row items-center justify-between flex-1 px-6 sm:px-12 lg:px-16 pt-24 lg:pt-0 gap-12 lg:gap-0">

        {/* LEFT — text content */}
        <div className="flex-1 max-w-2xl">
          {/* Location / status row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex items-center gap-6 mb-8"
          >
            <div className="flex items-center gap-2 text-[#94a3b8] text-xs tracking-[0.15em] uppercase">
              <MapPin size={12} className="text-indigo-400" />
              Islamabad, Pakistan
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
              </span>
              <span className="text-xs text-[#94a3b8] tracking-[0.15em] uppercase">Open to Work</span>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl text-[#e2e8f0] font-semibold mb-3"
          >
            Hi, I'm Kawish 👋
          </motion.p>

          {/* Giant headline */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="overflow-hidden mb-6">
            <motion.div variants={fadeUp} className="overflow-hidden">
              <h1 className="text-[clamp(2.4rem,6vw,5.5rem)] font-black leading-[0.88] tracking-tighter text-[#e2e8f0] uppercase">
                Full Stack
              </h1>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-hidden">
              <h1 className="text-[clamp(2.4rem,6vw,5.5rem)] font-black leading-[0.88] tracking-tighter uppercase"
                style={{ WebkitTextStroke: '2px rgba(99,102,241,0.4)', color: 'transparent' }}>
                Developer
              </h1>
            </motion.div>
            <motion.div variants={fadeUp} className="overflow-hidden">
              <h1 className="text-[clamp(2.4rem,6vw,5.5rem)] font-black leading-[0.88] tracking-tighter text-[#e2e8f0] uppercase">
                &amp; AI Builder
              </h1>
            </motion.div>
          </motion.div>

          {/* Typewriter subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.7 }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="text-lg text-indigo-400 font-semibold min-w-[18ch]">{typed}</span>
            <span className="typewriter-cursor" />
          </motion.div>

          {/* Tech stack */}
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 0.7 }}
            className="text-[#94a3b8] text-sm max-w-sm leading-relaxed mb-10"
          >
            MERN · Next.js · Node.js · MongoDB · Docker · Gemini API
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.7 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#projects"
              className="group flex items-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:scale-[1.03]">
              View My Work
              <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a href="/Kawish_Iqbal_Resume.pdf" download
              className="flex items-center gap-2 px-7 py-3.5 border border-indigo-500/40 hover:border-indigo-400 text-[#e2e8f0] hover:text-white text-sm font-bold rounded-full transition-all duration-300 hover:bg-indigo-500/10 hover:scale-[1.03]">
              <Download size={15} /> Download CV
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Glowing avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 flex items-center justify-center"
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="avatar-glow absolute inset-0 rounded-full" />
            {/* Decorative spinning ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-indigo-500/20 animate-spin" style={{ animationDuration: '20s' }} />
            {/* Inner accent ring */}
            <div className="absolute -inset-1 rounded-full border-2 border-indigo-500/50" />
            {/* Avatar image */}
            <div className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-indigo-600/60">
              <img
                src="/kawishimage.jpg"
                alt="Kawish Iqbal"
                loading="lazy"
                aria-label="Kawish Iqbal profile photo"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 via-transparent to-transparent" />
            </div>
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
                  <span className="text-xs text-[#94a3b8]/40 tracking-[0.2em] uppercase">{t}</span>
                  <span className="text-indigo-500/40 text-lg">·</span>
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

