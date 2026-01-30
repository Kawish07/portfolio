import React, { useState, useEffect } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Mern Stack Developer',
    company: 'Veclar Technologies',
    duration: 'Nov 2025 - Present',
    description: 'Developing scalable web applications, optimizing performance, and collaborating with cross-functional teams.',
    color: 'border-red-500'
  },
  {
    role: 'Full Stack Developer',
    company: 'Crafting Colons',
    duration: '6 Months',
    description: 'Built portfolio sites, University websites, and LMS systems. Focused on responsive design and accessibility.',
    color: 'border-blue-500'
  },
  {
    role: 'ML Intern',
    company: 'The Sparks Foundation',
    duration: '1 Month Remote',
    description: 'Worked on predictive modeling and data analysis using Python and Scikit-Learn.',
    color: 'border-green-500'
  },
  {
    role: 'Head of Web Dev',
    company: 'Evolvians Software',
    duration: '3 Months',
    description: 'Led a team of 5 developers, managed code reviews, and architected the database structure.',
    color: 'border-purple-500'
  }
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    const section = document.getElementById('experience');
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">Professional Journey</h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 h-full w-1 bg-gray-300 dark:bg-slate-800 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-6 h-6 bg-white dark:bg-slate-950 border-4 border-red-500 rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(220,38,38,0.5)]"></div>

                {/* Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.2 }}
                  className={`ml-16 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}
                >
                  <div className="bg-gray-100 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-300 dark:border-slate-700 hover:border-gray-400 dark:hover:border-slate-500 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-red-900/10 group">
                    <div className="flex items-center gap-3 text-red-500 mb-2">
                      <Briefcase size={18} />
                      <span className="text-sm font-semibold uppercase tracking-wider">{exp.company}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-500 transition-colors">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-slate-400 text-sm mb-4">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                    <p className="text-gray-700 dark:text-slate-300 leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;