
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Crafting Colons',
    duration: '1 year',
    description: 'Worked on portfolio sites, Iqra University site, LMS system. Built responsive and modern UIs.'
  },
  {
    role: 'Backend Developer Intern',
    company: 'Crafting Colons',
    duration: '5 months',
    description: 'Developed REST APIs, integrated payment gateways, and implemented real-time features.'
  },
  {
    role: 'Machine Learning Intern',
    company: 'The Sparks Foundation',
    duration: '1 month (remote)',
    description: 'Worked on ML models and data analysis for real-world problems.'
  },
  {
    role: 'Head of Web Development Intern',
    company: 'Evolvians Software',
    duration: '2 months (remote)',
    description: 'Led a team of developers to create a web application using MERN stack.'
  }
];

const Experience = () => (
  <section id="experience" className="py-16 px-4 md:px-16">
    <motion.h2 className="text-4xl font-extrabold mb-10 text-neon drop-shadow-neon text-center tracking-wide" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>Experience</motion.h2>
    <div className="flex flex-col gap-10">
      {experiences.map((exp, idx) => (
        <motion.div key={idx} className="bg-darkblue/80 rounded-2xl shadow-glass p-7 border-l-8 border-neon/70 relative overflow-hidden group" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: idx * 0.2 }}>
          <div className="absolute -left-4 top-8 w-8 h-8 bg-neon rounded-full shadow-neon border-4 border-mate"></div>
          <h3 className="text-2xl font-bold mb-1 text-neon drop-shadow-neon z-10">{exp.role}</h3>
          <span className="font-semibold text-gray-300 z-10">{exp.company}</span>
          <span className="block text-sm text-neon mb-2 z-10">{exp.duration}</span>
          <p className="text-gray-200 z-10">{exp.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Experience;
