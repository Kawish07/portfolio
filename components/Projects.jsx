import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Smart Dining Hub",
    description: "AI-powered restaurant management platform with real-time order tracking, role-based authentication (Admin/Staff/Customer), AI chatbot via Gemini API, and payment integration.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    demo: "https://smart-dining-hub.vercel.app/",
    github: "https://github.com/Kawish07/smart-dining-hub",
    tags: ["MERN", "Next.js", "Gemini API", "SSE", "JWT"],
    featured: true,
  },
  {
    num: "02",
    title: "Muniba Mian Real Estate",
    description: "Client real estate website featuring property listings, advanced search filters, contact forms, and a fully responsive design.",
    image: "https://plus.unsplash.com/premium_photo-1678903964473-1271ecfb0288?w=1200&auto=format&fit=crop&q=60",
    demo: "https://muniba-mian.vercel.app/",
    github: "https://github.com/Kawish07/Muniba-Mian",
    tags: ["React", "Vite", "Tailwind CSS"],
  },
  {
    num: "03",
    title: "Jeremy Real Estate",
    description: "Property listing platform with agent profiles, advanced filtering, and lead capture forms. Built for an international real estate client.",
    image: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=1200&auto=format&fit=crop&q=60",
    demo: "https://jeremy-website-rose.vercel.app/",
    github: "https://github.com/Kawish07/Jeremy-website",
    tags: ["React", "Vite", "Tailwind CSS"],
  },
  {
    num: "04",
    title: "Floor Detection System",
    description: "AI-based floor detection using Python and Meta's Segment Anything Model (SAM). Automated pipeline for smart building and real estate applications with image segmentation.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    github: "https://github.com/Kawish07",
    tags: ["Python", "SAM", "Computer Vision", "AI"],
  },
  {
    num: "05",
    title: "Proactive Cleaner",
    description: "Full-stack cleaning service platform with online booking, EmailJS contact integration, and service management dashboard.",
    image: "https://plus.unsplash.com/premium_photo-1664301014580-9d9941d1fb51?w=1200&auto=format&fit=crop&q=60",
    demo: "https://proactive-seven.vercel.app/",
    github: "https://github.com/Kawish07/proactive",
    tags: ["React", "Node.js", "Express.js", "EmailJS"],
  },
  {
    num: "06",
    title: "TriWeb Studio",
    description: "MERN stack business website for a web development studio, featuring service pages, portfolio showcase, and client inquiry system.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    demo: "https://tri-web-studio.vercel.app/",
    github: "https://github.com/Kawish07/TriWebStudio",
    tags: ["MERN"],
  },
];

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="relative min-h-screen bg-[#0d0d0d] py-16 lg:py-24 px-6 sm:px-12 lg:px-16 overflow-hidden flex flex-col justify-center">

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Label */}
      <div className="flex items-center gap-4 mb-8 reveal">
        <span className="text-[10px] font-mono text-red-500/70 tracking-[0.25em] uppercase">05 / Projects</span>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>

      {/* Heading */}
      <div className="mb-10 reveal">
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.9] tracking-tighter text-white uppercase">
          Selected<br />
          <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', color: 'transparent' }}>Work</span>
        </h2>
      </div>

      {/* Project list — Trigger-style hover reveal */}
      <div className="space-y-0 reveal">
        {projects.map((project, idx) => (
          <motion.div
            key={project.num}
            onHoverStart={() => setHovered(idx)}
            onHoverEnd={() => setHovered(null)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            className="group relative grid grid-cols-1 md:grid-cols-[60px_1fr_auto] gap-4 md:gap-8 py-8 border-b border-white/[0.06] hover:border-white/[0.12] transition-all duration-300 cursor-pointer"
          >
            {/* Number */}
            <span className="font-mono text-xs text-white/20 pt-1.5">{project.num}</span>

            {/* Content */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-1.5">
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-sm text-white/35 max-w-xl leading-relaxed line-clamp-2 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-white/[0.07] text-white/25">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 shrink-0 mt-2 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-red-500 hover:text-white transition-all">
                  <ExternalLink size={12} /> Live
                </a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 border border-white/[0.1] text-white/60 hover:text-white text-xs font-bold rounded-full hover:border-white/30 transition-all">
                <Github size={12} /> Code
              </a>
            </div>

            {/* Hover image — desktop only */}
            {hovered === idx && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="hidden lg:block absolute right-48 top-1/2 -translate-y-1/2 w-52 h-32 rounded-xl overflow-hidden border border-white/[0.1] shadow-2xl z-20"
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
