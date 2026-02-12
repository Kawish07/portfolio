import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

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
    { name: 'Ruby on Rails', level: 85 },
    { name: 'SQLite3', level: 80 },
  ],
  'Tools': [
    { name: 'Git/GitHub', level: 90 },
    { name: 'Docker', level: 70 },
    { name: 'Vercel/Netlify', level: 95 },
    { name: 'Postman', level: 85 },
  ]
};

const featuredProject = {
  title: "DevBlog - Ruby on Rails Blog Application",
  description: "A fully functional blog application built from scratch using Ruby on Rails 7. Features full CRUD operations, MVC architecture, RESTful routing, database migrations, and server-side rendering with ERB templates.",
  image: "/Screenshot 2026-02-13 021208.png",
  github: "https://lnkd.in/d68Dbdw2",
  tags: ["Ruby 3.4", "Rails 7.1", "SQLite3", "Puma", "ERB", "CSS3"],
  highlights: [
    "🔹 MVC Architecture - Understanding how Models, Views, and Controllers work together",
    "🔹 Full CRUD Operations - Create, Read, Update, and Delete blog posts",
    "🔹 Database Design - SQLite3, migrations, model validations, and seeding data",
    "🔹 Asset Pipeline - Modern, responsive UI with custom CSS using Sprockets",
    "🔹 RESTful Routing - Clean, convention-based URL structures",
    "🔹 Server-Side Rendering - Using ERB templates for dynamic HTML generation"
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

        {/* Featured Project Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Skills in Action</h3>
            <p className="text-gray-600 dark:text-slate-400">Real-world projects showcasing my technical expertise</p>
          </div>

          <div className="bg-white dark:bg-slate-800/40 rounded-2xl overflow-hidden border border-gray-300 dark:border-slate-700/50 hover:border-red-500/50 transition-all duration-300 shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-red-500/10 to-orange-500/10">
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Details */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{featuredProject.title}</h4>
                  <p className="text-gray-600 dark:text-slate-400 mb-4">{featuredProject.description}</p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs font-semibold bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    <p className="font-semibold text-gray-900 dark:text-white mb-3">Key Takeaways:</p>
                    {featuredProject.highlights.map((highlight, idx) => (
                      <p key={idx} className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                        {highlight}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 font-medium"
                  >
                    <Github size={18} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;