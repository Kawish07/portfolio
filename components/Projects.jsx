
import React from 'react';
import { motion } from 'framer-motion';

const sampleProjects = [
  {
    title: 'Smart Dining Hub',
    description: 'MERN + Next.js + MongoDB Atlas project with AI-based recommendation system, chatbot, dashboards, real-time order tracking, payment integration.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    demo: 'https://smartdininghub.com',
    github: 'https://github.com/kawishiqbal/smart-dining-hub',
    tags: ['MERN', 'Next.js', 'AI', 'Payment']
  },
  {
    title: 'Iqra University Website',
    description: 'Responsive university website built with Bootstrap.',
  image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80',
    demo: 'https://iqrauniversity.edu.pk',
    github: 'https://github.com/kawishiqbal/iqra-university',
    tags: ['Bootstrap', 'Responsive']
  },
  {
    title: 'Portfolio Website',
    description: 'React.js-based portfolio site.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    demo: '',
    github: 'https://github.com/kawishiqbal/portfolio-old',
    tags: ['React.js']
  },
  {
    title: 'Learning Management System (LMS)',
    description: 'Bootstrap-based LMS for course and student management.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
    demo: '',
    github: 'https://github.com/kawishiqbal/lms',
    tags: ['Bootstrap', 'LMS']
  },
  {
    title: 'Evolvians Software Website',
    description: 'Software house website using MERN stack.',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    demo: '',
    github: 'https://github.com/kawishiqbal/evolvians',
    tags: ['MERN']
  }
];

const Projects = () => (
  <section id="projects" className="py-16 px-4 md:px-16">
    <motion.h2 className="text-3xl font-bold mb-6 text-neon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>Projects</motion.h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {sampleProjects.map((project, idx) => (
        <motion.div
          key={idx}
          className="bg-darkblue/80 rounded-2xl shadow-glass p-7 border-2 border-neon/40 relative overflow-hidden group cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05, boxShadow: '0 0 40px #ff1744, 0 4px 30px rgba(10,25,47,0.4)' }}
          transition={{ duration: 0.7, delay: idx * 0.2 }}
        >
          <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition bg-gradient-to-br from-neon/30 via-mate/40 to-darkblue/80 z-0"></div>
          <img src={project.image} alt={project.title} className="w-full h-44 object-cover rounded-xl mb-5 border-2 border-neon/60 z-10 group-hover:scale-105 group-hover:rotate-1 transition-transform duration-300" />
          <h3 className="text-2xl font-bold mb-2 text-neon drop-shadow-neon z-10 group-hover:text-red-500 transition-colors duration-300">{project.title}</h3>
          <p className="mb-3 text-gray-200 z-10 group-hover:text-gray-100 transition-colors duration-300">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-3 z-10">
            {project.tags.map(tag => <span key={tag} className="px-3 py-1 bg-neon text-darkblue rounded-full text-xs font-bold shadow-neon border border-neon/60 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">{tag}</span>)}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
