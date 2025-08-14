import React, { useState, useEffect } from 'react';

const experiences = [
  {
    role: 'Frontend Developer Intern',
    company: 'Crafting Colons',
    duration: '1 year',
    description: 'Worked on portfolio sites, Iqra University site, LMS system. Built responsive and modern UIs.',
    icon: '💻',
    color: 'from-red-500 to-red-600'
  },
  {
    role: 'Backend Developer Intern',
    company: 'Crafting Colons',
    duration: '5 months',
    description: 'Developed REST APIs, integrated payment gateways, and implemented real-time features.',
    icon: '⚙️',
    color: 'from-red-600 to-red-700'
  },
  {
    role: 'Machine Learning Intern',
    company: 'The Sparks Foundation',
    duration: '1 month (remote)',
    description: 'Worked on ML models and data analysis for real-world problems.',
    icon: '🤖',
    color: 'from-red-500 to-red-600'
  },
  {
    role: 'Head of Web Development Intern',
    company: 'Evolvians Software',
    duration: '2 months (remote)',
    description: 'Led a team of developers to create a web application using MERN stack.',
    icon: '👑',
    color: 'from-red-700 to-red-800'
  }
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('experience');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="experience" 
      className="relative py-20 px-4 md:px-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-4">
            Professional Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
            My career progression through various roles and technologies
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-600 to-red-700 rounded-full shadow-lg shadow-red-500/50" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div 
                key={idx}
                className={`relative transition-all duration-700 delay-${idx * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.color} shadow-xl shadow-red-500/30 flex items-center justify-center text-white text-xl border-4 border-slate-800 transition-all duration-300 ${
                    hoveredIndex === idx ? 'scale-125 shadow-2xl shadow-red-500/50' : ''
                  }`}>
                    {exp.icon}
                  </div>
                  
                  {/* Pulse Effect */}
                  <div className="absolute inset-0 rounded-full bg-red-500/30 animate-ping" 
                       style={{ animationDelay: `${idx * 0.5}s`, animationDuration: '2s' }} />
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 ${idx % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'} md:w-1/2`}>
                  <div className="group relative">
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-5 rounded-2xl blur-xl group-hover:opacity-15 transition-all duration-500`} />
                    
                    {/* Card Content */}
                    <div className="relative bg-slate-800/60 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 group-hover:border-red-500/40 transition-all duration-500 shadow-xl">
                      
                      {/* Duration Badge */}
                      <div className={`inline-block mb-4 px-4 py-2 bg-gradient-to-r ${exp.color} text-white text-sm font-bold rounded-full shadow-lg`}>
                        {exp.duration}
                      </div>

                      {/* Role Title */}
                      <h3 className="text-2xl font-bold text-red-400 mb-2 group-hover:text-red-300 transition-colors duration-300">
                        {exp.role}
                      </h3>

                      {/* Company */}
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <span className="text-lg font-semibold text-gray-300">
                          {exp.company}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {exp.description}
                      </p>

                      {/* Decorative Corner */}
                      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-red-500/30 rounded-tr-lg group-hover:border-red-500/60 transition-colors duration-300" />
                      
                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm border border-red-500/20 rounded-full">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-gray-400 text-sm font-medium">Continuously Growing & Learning</span>
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-500/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;