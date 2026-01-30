import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = {
  'Frontend': [
    { name: 'React.js', level: 95 },
    { name: 'Next.js', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'Framer Motion', level: 90 },
  ],
  'Backend': [
    { name: 'Node.js', level: 90 },
    { name: 'Express.js', level: 85 },
    { name: 'MongoDB', level: 85 },
    { name: 'REST API', level: 90 },
    { name: 'Socket.io', level: 75 },
  ],
  'Tools': [
    { name: 'Git/GitHub', level: 90 },
    { name: 'Docker', level: 70 },
    { name: 'Vercel/Netlify', level: 95 },
    { name: 'Postman', level: 85 },
  ]
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  return (
    <section id="skills" className="py-24 relative bg-gray-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105'
                  : 'bg-gray-200 dark:bg-slate-800 text-gray-700 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          layout
        >
          {skillCategories[activeCategory].map((skill, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={skill.name}
              className="bg-white dark:bg-slate-800/40 p-6 rounded-xl border border-gray-300 dark:border-slate-700/50 hover:border-red-500/50 transition-all duration-300 group"
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-800 dark:text-slate-200 group-hover:text-red-500 transition-colors">{skill.name}</span>
                <span className="text-gray-600 dark:text-slate-400 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-red-600 to-orange-500 rounded-full relative"
                >
                  <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;