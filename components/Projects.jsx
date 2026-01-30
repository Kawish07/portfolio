import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Github, ExternalLink, Code2 } from "lucide-react";

// --- YOUR PROJECT DATA WITH RESTORED LINKS ---
const sampleProjects = [
  {
    title: "Smart Dining Hub",
    description: "MERN + Next.js + MongoDB Atlas project with AI-based recommendation system, chatbot, dashboards, real-time order tracking, payment integration.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
    demo: "https://smart-dining-hub.vercel.app/",
    github: "https://github.com/Kawish07/smart-dining-hub",
    tags: ["MERN", "Next.js", "AI", "Payment"],
    featured: true,
  },
  {
    title: "Iqra University Website",
    description: "Responsive university website built with Bootstrap.",
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    github: "https://github.com/Kawish07/iqra-university",
    demo: "https://iqra-university-1.vercel.app/",
    tags: ["Bootstrap", "Responsive"],
  },
  {
    title: "Proactive Cleaner Website",
    description: "Mern Stack-based cleaning service site.",
    image:
      "https://plus.unsplash.com/premium_photo-1664301014580-9d9941d1fb51?w=600&auto=format&fit=crop&q=60",
    demo: "https://proactive-seven.vercel.app/",
    github: "https://github.com/Kawish07/proactive",
    tags: ["EmailJS", "ReactJs", "NodeJs", "ExpressJs"],
  },
  {
    title: "PK News Website",
    description: "News website using MERN stack.",
    image:
      "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?w=600&auto=format&fit=crop&q=60",
    demo: "https://news-client-bice.vercel.app/",
    github: "https://github.com/Kawish07/news-client",
    tags: ["MERN"],
  },
  {
    title: "TriWeb Studio Website",
    description: "Business website using MERN stack.",
    image:
      "https://images.unsplash.com/photo-1577045060575-07424f4e7aa7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJpd2ViJTIwc3R1ZGlvfGVufDB8fDB8fHww",
    demo: "https://tri-web-studio.vercel.app/",
    github: "https://github.com/Kawish07/TriWebStudio",
    tags: ["MERN"],
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const section = document.getElementById("projects");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white dark:from-slate-900 dark:to-slate-950 -z-20"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-2 block">My Portfolio</span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-slate-400 max-w-2xl mx-auto">
            Showcasing high-performance web applications built with the MERN stack, AI integrations, and modern UI/UX principles.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="h-full"
            >
              <Tilt 
                tiltMaxAngleX={5} 
                tiltMaxAngleY={5} 
                scale={1.02} 
                glareEnable={true} 
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
                className="h-full"
              >
                <div className="group h-full bg-white dark:bg-slate-900/60 backdrop-blur-md rounded-2xl border border-gray-300 dark:border-slate-800 overflow-hidden hover:border-red-500/50 transition-all duration-500 shadow-2xl flex flex-col relative">
                  
                  {/* Image Area */}
                  <div className="relative overflow-hidden h-56">
                    <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent opacity-80 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Top Icon Badge */}
                    <div className="absolute top-4 right-4 z-20 bg-white dark:bg-slate-900/90 backdrop-blur p-2 rounded-lg border border-gray-300 dark:border-slate-700 text-red-500 shadow-lg">
                      <Code2 size={20} />
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-6 flex-1 flex flex-col relative z-20 -mt-10">
                    <div className="bg-white dark:bg-slate-900/80 backdrop-blur-xl p-4 rounded-xl border border-gray-300 dark:border-slate-700/50 shadow-lg flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-500 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-slate-400 text-sm mb-4 line-clamp-3 flex-1">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span 
                            key={i} 
                            className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* RESTORED LINKS SECTION */}
                      <div className="flex gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-slate-800">
                        {/* Live Demo Button */}
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-red-600/25"
                        >
                          <ExternalLink size={16} />
                          <span>Live</span>
                        </a>
                        
                        {/* GitHub Button */}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-800 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white text-sm font-bold transition-all duration-300 border border-gray-300 dark:border-slate-700"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;