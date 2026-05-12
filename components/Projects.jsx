import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Smart Dining Hub",
    description: "AI-powered restaurant management platform with real-time order tracking, role-based authentication (Admin/Staff/Customer), AI chatbot via Gemini API, and payment integration.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    demo: "https://smart-dining-hub.vercel.app/",
    github: "https://github.com/Kawish07/smart-dining-hub",
    tags: ["MERN", "Next.js", "Gemini API", "SSE", "JWT"],
    featured: true,
    gradient: "from-indigo-900/40 to-violet-900/30",
  },
  {
    num: "02",
    title: "Muniba Mian Real Estate",
    description: "Client real estate website featuring property listings, advanced search filters, contact forms, and a fully responsive design.",
    image: "https://plus.unsplash.com/premium_photo-1678903964473-1271ecfb0288?w=800&auto=format&fit=crop&q=60",
    demo: "https://muniba-mian.vercel.app/",
    github: "https://github.com/Kawish07/Muniba-Mian",
    tags: ["React", "Vite", "Tailwind CSS"],
    gradient: "from-blue-900/40 to-indigo-900/30",
  },
  {
    num: "03",
    title: "Jeremy Real Estate",
    description: "Property listing platform with agent profiles, advanced filtering, and lead capture forms. Built for an international real estate client.",
    image: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=800&auto=format&fit=crop&q=60",
    demo: "https://jeremy-website-rose.vercel.app/",
    github: "https://github.com/Kawish07/Jeremy-website",
    tags: ["React", "Vite", "Tailwind CSS"],
    gradient: "from-violet-900/40 to-purple-900/30",
  },
  {
    num: "04",
    title: "Floor Detection System",
    description: "AI-based floor detection using Python and Meta's Segment Anything Model (SAM). Automated pipeline for smart building applications with image segmentation.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/Kawish07",
    tags: ["Python", "SAM", "Computer Vision", "AI"],
    gradient: "from-emerald-900/30 to-indigo-900/30",
  },
  {
    num: "05",
    title: "Proactive Cleaner",
    description: "Full-stack cleaning service platform with online booking, EmailJS contact integration, and service management dashboard.",
    image: "https://plus.unsplash.com/premium_photo-1664301014580-9d9941d1fb51?w=800&auto=format&fit=crop&q=60",
    demo: "https://proactive-seven.vercel.app/",
    github: "https://github.com/Kawish07/proactive",
    tags: ["React", "Node.js", "Express.js", "EmailJS"],
    gradient: "from-sky-900/30 to-indigo-900/30",
  },
  {
    num: "06",
    title: "TriWeb Studio",
    description: "MERN stack business website for a web development studio, featuring service pages, portfolio showcase, and client inquiry system.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
    demo: "https://tri-web-studio.vercel.app/",
    github: "https://github.com/Kawish07/TriWebStudio",
    tags: ["MERN"],
    gradient: "from-rose-900/20 to-indigo-900/30",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Projects = () => (
  <section id="projects" className="relative min-h-screen bg-[#0d1117] py-16 lg:py-24 px-6 sm:px-12 lg:px-16 overflow-hidden flex flex-col justify-center">

    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

    {/* Label */}
    <div className="flex items-center gap-4 mb-8 reveal">
      <span className="text-[10px] font-mono text-indigo-400/70 tracking-[0.25em] uppercase">05 / Projects</span>
      <div className="flex-1 h-px bg-white/[0.06]" />
    </div>

    {/* Heading */}
    <div className="mb-12 reveal">
      <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.9] tracking-tighter text-[#e2e8f0] uppercase">
        Selected<br />
        <span style={{ WebkitTextStroke: '2px rgba(99,102,241,0.4)', color: 'transparent' }}>Work</span>
      </h2>
    </div>

    {/* Card grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
      {projects.map((project, idx) => (
        <motion.article
          key={project.num}
          custom={idx}
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="group glass-card rounded-2xl overflow-hidden flex flex-col hover:border-indigo-500/25 hover:shadow-[0_8px_40px_rgba(99,102,241,0.12)] transition-all duration-300"
          aria-label={project.title}
        >
          {/* Thumbnail */}
          <div className="relative h-44 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`} />
            {/* Featured badge */}
            {project.featured && (
              <span className="absolute top-3 left-3 text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/30 text-indigo-300 border border-indigo-500/40 backdrop-blur-sm">
                Featured
              </span>
            )}
            {/* Number */}
            <span className="absolute top-3 right-3 font-mono text-xs text-white/30">{project.num}</span>
          </div>

          {/* Body */}
          <div className="flex flex-col flex-1 p-5">
            <h3 className="text-base font-bold text-[#e2e8f0] mb-2 group-hover:text-indigo-300 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-[#94a3b8] leading-relaxed line-clamp-3 mb-4 flex-1">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map(tag => (
                <span key={tag} className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-indigo-500/20 text-indigo-300/70 bg-indigo-500/5">
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions — always visible on mobile, hover-reveal on desktop */}
            <div className="flex items-center gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live`}
                  className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-full transition-all hover:scale-105">
                  <ExternalLink size={11} /> View Project
                </a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} source code`}
                className="flex items-center gap-1.5 px-4 py-2 border border-white/[0.1] text-[#94a3b8] hover:text-white text-xs font-bold rounded-full hover:border-indigo-500/40 transition-all hover:scale-105">
                <Github size={11} /> GitHub
              </a>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default Projects;
