import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Framer Motion'],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Server-Sent Events (SSE)', 'SQL (Basic)'],
  },
  {
    id: 'database',
    label: 'Database',
    skills: ['MongoDB', 'Mongoose ODM', 'MongoDB Atlas', 'SQL Basics'],
  },
  {
    id: 'devops',
    label: 'DevOps & Cloud',
    skills: ['Docker', 'GitHub Actions CI/CD', 'AWS (Basics)', 'Vercel', 'Hostinger'],
  },
  {
    id: 'ai',
    label: 'AI Integration',
    skills: ['Gemini API', 'OpenAI API', 'Botpress', 'Prompt Engineering'],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: ['Git & GitHub', 'Postman', 'Agile / Scrum', 'VS Code'],
  },
];

const Skills = () => {
  const [active, setActive] = useState('frontend');
  const current = categories.find(c => c.id === active);

  return (
    <section id="skills" className="relative min-h-screen bg-[#0d0d0d] py-16 lg:py-24 px-6 sm:px-12 lg:px-16 overflow-hidden flex flex-col justify-center">

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Label */}
      <div className="flex items-center gap-4 mb-8 reveal">
        <span className="text-[10px] font-mono text-red-500/70 tracking-[0.25em] uppercase">03 / Skills</span>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>

      {/* Heading */}
      <div className="mb-10 reveal">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.9] tracking-tighter text-white uppercase">
          Technical<br />
          <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', color: 'transparent' }}>Arsenal</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

        {/* Category tabs */}
        <div className="space-y-1 reveal">
          {categories.map((cat) => (
            <button key={cat.id} onClick={() => setActive(cat.id)}
              className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-left transition-all duration-300 group ${
                active === cat.id
                  ? 'bg-red-600/10 border border-red-500/30'
                  : 'border border-transparent hover:border-white/[0.06] hover:bg-white/[0.03]'
              }`}>
              <span className={`text-sm font-semibold transition-colors ${
                active === cat.id ? 'text-white' : 'text-white/40 group-hover:text-white/70'
              }`}>{cat.label}</span>
              {active === cat.id && <div className="w-1.5 h-1.5 rounded-full bg-red-500" />}
            </button>
          ))}
        </div>

        {/* Skill pills */}
        <div className="lg:col-span-2 reveal">
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="flex flex-wrap gap-3"
            >
              {current.skills.map((skill, i) => (
                <motion.div key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-5 py-3 border border-white/[0.08] rounded-xl text-sm text-white/60 hover:text-white hover:border-red-500/40 hover:bg-red-500/5 transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
