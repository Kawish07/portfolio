import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React.js', level: 95 },
  { name: 'Next.js', level: 90 },
  { name: 'Tailwind CSS', level: 95 },
  { name: 'Bootstrap', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Express.js', level: 85 },
  { name: 'MongoDB Atlas', level: 80 },
  { name: 'REST API', level: 90 },
  { name: 'AI Chatbot (Gemini API)', level: 80 },
  { name: 'SSE (Real-time)', level: 75 },
  { name: 'Payment Integration', level: 70 },
];

const Skills = () => (
  <section id="skills" className="py-16 px-4 md:px-16">
    <motion.h2 className="text-3xl font-bold mb-6 text-neon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>Skills</motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skills.map(skill => (
        <motion.div key={skill.name} className="mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="flex justify-between mb-1">
            <span className="font-semibold">{skill.name}</span>
            <span className="text-neon">{skill.level}%</span>
          </div>
          <div className="w-full bg-glass rounded-full h-4">
            <motion.div className="bg-neon h-4 rounded-full" style={{ width: `${skill.level}%` }} initial={{ width: 0 }} animate={{ width: `${skill.level}%` }} transition={{ duration: 1.5 }} />
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;
