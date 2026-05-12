import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Zap, GraduationCap } from 'lucide-react';

const stats = [
  { value: '20+', label: 'Projects Shipped' },
  { value: '2+',  label: 'Years Experience' },
  { value: '15+', label: 'Happy Clients' },
  { value: '3.51', label: 'CGPA BS CS' },
];

const About = () => (
  <section id="about" className="relative min-h-screen bg-[#0a0a0f] py-16 lg:py-24 px-6 sm:px-12 lg:px-16 overflow-hidden flex flex-col justify-center">

    {/* Thin top border */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    {/* Section label */}
    <div className="flex items-center gap-4 mb-8 reveal">
      <span className="text-[10px] font-mono text-indigo-400/70 tracking-[0.25em] uppercase">02 / About</span>
      <div className="flex-1 h-px bg-white/[0.06]" />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

      {/* Left — heading */}
      <div className="reveal">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.9] tracking-tighter text-white uppercase mb-8">
          I Build Products<br />
            <span style={{ WebkitTextStroke: '2px rgba(99,102,241,0.35)', color: 'transparent' }}>That Ship</span>
        </h2>

        {/* Profile image */}
        <div className="relative mt-6 rounded-2xl overflow-hidden h-80 border border-white/[0.06]">
          <img src="/imagemyself.png" alt="Kawish Iqbal"
            className="w-full h-full object-cover object-[center_10%] transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* Right — text + stats */}
      <div className="reveal">
          <p className="text-[#e2e8f0]/60 text-lg leading-relaxed mb-6">
          I'm a <span className="text-[#e2e8f0] font-semibold">Full Stack (MERN) Developer</span> with 2+ years of experience
          turning complex problems into clean, performant products. I've worked across startups, led dev teams,
          and shipped AI-integrated platforms to production.
        </p>
          <p className="text-[#94a3b8] text-base leading-relaxed mb-6">
          From real-time SSE dashboards to Gemini API chatbots, Docker pipelines to role-based auth systems.
          I focus on clean architecture and code that scales. Based in <span className="text-[#e2e8f0]/70">Islamabad</span>,
          open to remote roles in <span className="text-[#e2e8f0]/70">Pakistan (Karachi, Lahore), UAE &amp; Qatar</span>.
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          {stats.map((s) => (
              <div key={s.label} className="p-4 border border-white/[0.07] rounded-xl hover:border-indigo-500/30 transition-colors">
              <p className="text-3xl font-black text-[#e2e8f0] mb-1">{s.value}</p>
              <p className="text-xs text-[#94a3b8] uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Education */}
          <div className="flex items-start gap-4 p-5 border border-white/[0.07] rounded-xl hover:border-indigo-500/20 transition-colors">
          <div className="p-2.5 rounded-lg bg-indigo-500/10">
            <GraduationCap size={18} className="text-indigo-400" />
          </div>
          <div>
            <p className="text-[#e2e8f0] font-semibold text-sm">BS Computer Science</p>
            <p className="text-[#94a3b8] text-xs mt-0.5">Iqra University, Islamabad · 2021 to 2025 · CGPA 3.51</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
