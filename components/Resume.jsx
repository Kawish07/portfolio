import React from 'react';
import { Download } from 'lucide-react';

const Resume = () => {
  return (
    <section className="py-16 text-center bg-gray-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-slate-800 dark:to-slate-900 p-10 rounded-3xl border border-gray-300 dark:border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">Want the full details?</h2>
          <p className="text-gray-700 dark:text-slate-400 mb-8 max-w-xl mx-auto relative z-10">
            Download my resume to get a comprehensive look at my education, work history, and technical certifications.
          </p>
          <a 
            href="/KAWISH IQBAL_RESUME.pdf" 
            download 
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 relative z-10 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;