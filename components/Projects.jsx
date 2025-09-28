import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Github, ExternalLink } from "lucide-react";

const sampleProjects = [
  {
    title: "Smart Dining Hub",
    description:
      "MERN + Next.js + MongoDB Atlas project with AI-based recommendation system, chatbot, dashboards, real-time order tracking, payment integration.",
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
    title: "Learning Management System (LMS)",
    description: "Bootstrap-based LMS for course and student management.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    demo: "",
    github: "https://github.com/Kawish07/lms",
    tags: ["Bootstrap", "LMS"],
  },
  {
    title: "Evolvians Software Website",
    description: "Software house website using MERN stack.",
    image:
      "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?w=600&auto=format&fit=crop&q=60",
    demo: "",
    github: "https://github.com/Kawish07/evolvians",
    tags: ["MERN"],
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
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    const section = document.getElementById("projects");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-br from-slate-900 via-black to-slate-900 overflow-hidden"
    >
      {/* Glow blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-red-600/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/40 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-4 drop-shadow-lg">
          🚀 Featured Projects
        </h2>
        <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
          Showcasing my best web development work with modern stacks, sleek UI
          & real-time systems.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {sampleProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.2, duration: 0.8 }}
          >
            <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.05}>
              <div className="relative group bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700 overflow-hidden shadow-xl hover:shadow-red-600/40 transition-all duration-500">
                {/* Neon Gradient Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-500/60 group-hover:shadow-[0_0_30px_rgba(255,0,0,0.6)] transition-all duration-500" />

                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-red-400 mb-3 group-hover:text-red-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full font-medium bg-red-500/10 border border-red-500/30 text-red-300 hover:bg-red-500/20 hover:scale-105 transition-transform"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-full text-white bg-gradient-to-r from-red-500 to-red-700 hover:scale-105 transition-transform relative overflow-hidden"
                      >
                        <ExternalLink size={16} /> Live Demo
                        <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 animate-pulse" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-full text-red-400 border border-red-500/40 hover:bg-red-500 hover:text-white transition-all hover:scale-105"
                      >
                        <Github size={16} /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      <style>{`
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
