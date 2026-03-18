import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    num: '01',
    role: 'MERN Stack Developer',
    company: 'Veclar Technologies',
    duration: 'Nov 2025 – Present',
    type: 'Full-time',
    bullets: [
      'Building scalable web applications using the full MERN stack',
      'Developing REST APIs serving real-time data with SSE',
      'Improving backend performance through optimized database queries',
    ],
  },
  {
    num: '02',
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    duration: 'Mar 2025 – Present',
    type: 'Freelance',
    bullets: [
      'Delivering end-to-end MERN solutions for clients in Pakistan & internationally',
      'Real estate platforms, AI dashboards, and business websites',
      'Strong focus on performance, clean architecture, and client satisfaction',
    ],
  },
  {
    num: '03',
    role: 'Web Development Lead',
    company: 'Evolvians Softwares',
    duration: 'July 2025 – Sep 2025',
    type: 'Contract',
    bullets: [
      'Led a team of 4 developers delivering React-based client projects',
      'Designed backend architecture using Express.js & MongoDB',
      'Conducted code reviews and maintained coding standards',
    ],
  },
  {
    num: '04',
    role: 'Full Stack Developer (AI Integration)',
    company: 'Crafting Colons',
    duration: 'Jan 2025 – Jun 2025',
    type: 'Full-time',
    bullets: [
      'Developed production-ready apps with Next.js and MERN stack',
      'Integrated AI chatbots using Gemini API and Botpress',
      'Built real-time dashboards with live tracking and analytics',
    ],
  },
];

const Experience = () => (
  <section id="experience" className="relative min-h-screen bg-[#0a0a0a] py-16 lg:py-24 px-6 sm:px-12 lg:px-16 overflow-hidden flex flex-col justify-center">

    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    {/* Label */}
    <div className="flex items-center gap-4 mb-8 reveal">
      <span className="text-[10px] font-mono text-red-500/70 tracking-[0.25em] uppercase">04 / Experience</span>
      <div className="flex-1 h-px bg-white/[0.06]" />
    </div>

    {/* Heading */}
    <div className="mb-10 reveal">
      <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.9] tracking-tighter text-white uppercase">
        Where I've<br />
        <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', color: 'transparent' }}>Worked</span>
      </h2>
    </div>

    {/* Experience list */}
    <div className="space-y-0 reveal">
      {experiences.map((exp, i) => (
        <motion.div key={exp.num}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          className="group grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-10 py-10 border-b border-white/[0.06] hover:border-white/[0.12] transition-colors"
        >
          {/* Number */}
          <span className="font-mono text-xs text-white/20 pt-1">{exp.num}</span>

          {/* Content */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors">{exp.role}</h3>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/[0.1] text-white/30">{exp.type}</span>
              </div>
              <p className="text-red-500/80 text-sm font-semibold mb-4">{exp.company}</p>
              <ul className="space-y-1.5">
                {exp.bullets.map(b => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-white/40">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-red-500/50 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0 text-xs text-white/25 font-mono mt-0.5 whitespace-nowrap">{exp.duration}</div>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
