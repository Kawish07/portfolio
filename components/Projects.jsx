import React, { useState, useEffect } from 'react';

const sampleProjects = [
  {
    title: 'Smart Dining Hub',
    description: 'MERN + Next.js + MongoDB Atlas project with AI-based recommendation system, chatbot, dashboards, real-time order tracking, payment integration.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    demo: 'https://smartdininghub.com',
    github: 'https://github.com/kawishiqbal/smart-dining-hub',
    tags: ['MERN', 'Next.js', 'AI', 'Payment'],
    featured: true
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

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('projects');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="projects" 
      className="relative py-20 px-4 md:px-16 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + i * 10}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          >
            <div className="w-1 h-1 bg-red-500/60 rounded-full animate-bounce" />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development with cutting-edge technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProjects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative transition-all duration-700 delay-${idx * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              onMouseEnter={() => setHoveredProject(idx)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className="relative h-full bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-red-500/20 overflow-hidden group-hover:border-red-500/40 transition-all duration-500">
                
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-red-400 mb-3 group-hover:text-red-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 bg-slate-700/50 text-red-300 rounded-full text-xs font-medium border border-red-500/20 hover:border-red-400/40 hover:bg-red-500/10 transition-all duration-300 transform hover:scale-105`}
                        style={{
                          animationDelay: `${tagIdx * 0.1}s`
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-red-500/0 group-hover:border-red-500/30 transition-all duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;