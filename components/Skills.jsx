import React, { useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = {
  'Frontend': [
    { name: 'React.js', level: 95, icon: '⚛️' },
    { name: 'Next.js', level: 90, icon: '▲' },
    { name: 'TypeScript', level: 88, icon: '📘' },
    { name: 'Tailwind CSS', level: 95, icon: '🎨' },
    { name: 'Bootstrap', level: 90, icon: '🅱️' },
  ],
  'Backend': [
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Express.js', level: 85, icon: '🚀' },
    { name: 'MongoDB Atlas', level: 80, icon: '🍃' },
    { name: 'REST API', level: 90, icon: '🔗' },
    { name: 'SSE (Real-time)', level: 75, icon: '⚡' },
  ],
  'DevOps & Tools': [
    { name: 'Docker', level: 75, icon: '🐳' },
    { name: 'CI/CD Pipelines', level: 70, icon: '🔄' },
    { name: 'Vercel', level: 85, icon: '▲' },
    { name: 'Netlify', level: 85, icon: '🌐' },
    { name: 'Railway', level: 80, icon: '🚂' },
    { name: 'Render', level: 80, icon: '🎯' },
  ],
  'Design & Integration': [
    { name: 'Figma', level: 82, icon: '🎨' },
    { name: 'AI Chatbot (Gemini API)', level: 80, icon: '🤖' },
    { name: 'Payment Integration', level: 70, icon: '💳' },
  ]
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  const getSkillColor = (level) => {
    if (level >= 90) return 'from-green-400 to-emerald-600';
    if (level >= 80) return 'from-blue-400 to-cyan-600';
    if (level >= 70) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-pink-500';
  };

  return (
    <section id="skills" className="py-20 px-4 md:px-16 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-4">
            Technical Expertise
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various domains
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {skillCategories[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="group relative"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:transform hover:scale-105">
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="font-semibold text-white text-lg">{skill.name}</h3>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="relative">
                  <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full relative overflow-hidden`}
                      variants={progressVariants}
                      custom={skill.level}
                      initial="hidden"
                      animate="visible"
                    >
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer" />
                    </motion.div>
                  </div>
                </div>

                {/* Skill Level Indicator */}
                <div className="mt-3 text-xs text-gray-400">
                  {skill.level >= 90 && "Expert"}
                  {skill.level >= 80 && skill.level < 90 && "Advanced"}
                  {skill.level >= 70 && skill.level < 80 && "Intermediate"}
                  {skill.level < 70 && "Learning"}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category} className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {skills.length}
                </div>
                <div className="text-gray-400 text-sm mt-1">{category} Skills</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;