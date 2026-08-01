import React from 'react';
import { Download, FileText } from 'lucide-react';

const PDF_PATH = '/Kawish_Iqbal_Resume.pdf';

const Resume = () => (
  <section className="relative bg-[#0d1117] py-24 px-6 sm:px-12 lg:px-16 overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

    {/* Header row */}
    <div className="reveal flex flex-col sm:flex-row items-center justify-between gap-8 border border-white/[0.07] rounded-2xl p-10 hover:border-indigo-500/20 transition-colors mb-8">
      <div className="flex items-start gap-5">
        <div className="p-3.5 rounded-xl border border-white/[0.08] bg-indigo-500/10">
          <FileText size={24} className="text-indigo-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-1">Kawish Iqbal · Resume 2026</h3>
          <p className="text-sm text-white/35">Full Stack MERN Developer · 2+ Years · Islamabad, Pakistan</p>
        </div>
      </div>
      <a
        href={PDF_PATH}
        download
        className="flex items-center gap-2.5 px-7 py-3.5 bg-indigo-600 text-white text-sm font-bold rounded-full hover:bg-indigo-500 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] shrink-0"
      >
        <Download size={16} /> Download CV
      </a>
    </div>

    {/* Inline PDF viewer */}
    <div className="reveal rounded-2xl overflow-hidden border border-white/[0.07] hover:border-indigo-500/20 transition-colors">
      <iframe
        src={`${PDF_PATH}#toolbar=0&navpanes=0&scrollbar=0`}
        title="Kawish Iqbal Resume"
        className="w-full"
        style={{ height: '90vh', minHeight: '600px' }}
      />
    </div>
  </section>
);

export default Resume;
