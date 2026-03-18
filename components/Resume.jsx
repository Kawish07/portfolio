import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume = () => (
  <section className="relative bg-[#111111] py-24 px-6 sm:px-12 lg:px-16 overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    <div className="reveal flex flex-col sm:flex-row items-center justify-between gap-8 border border-white/[0.07] rounded-2xl p-10 hover:border-red-500/20 transition-colors">
      <div className="flex items-start gap-5">
        <div className="p-3.5 rounded-xl border border-white/[0.08] bg-red-500/10">
          <FileText size={24} className="text-red-500" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Kawish Iqbal · Resume 2026</h3>
          <p className="text-sm text-white/35">Full Stack MERN Developer · 2+ Years · Islamabad, Pakistan</p>
        </div>
      </div>
      <a href="/Kawish_Iqbal_Full_Stack_Developer_Resume_2026.pdf" download
        className="flex items-center gap-2.5 px-7 py-3.5 bg-white text-black text-sm font-bold rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 shrink-0">
        <Download size={16} /> Download CV
      </a>
    </div>
  </section>
);

export default Resume;
