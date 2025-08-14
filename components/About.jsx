import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="py-16 px-4 md:px-16">
    <motion.h2 className="text-3xl font-bold mb-6 text-neon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>About Me</motion.h2>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
      <p className="mb-4 text-lg">I am Kawish Iqbal, a passionate MERN Stack Developer with a strong grip on frontend technologies. I love building visually stunning, modern web applications that deliver smooth user experiences.</p>
      <ul className="mb-4">
        <li><strong>Education:</strong> BSCS (Iqra University Islamabad), CGPA: 3.51, Graduation: June 2025</li>
        <li><strong>Experience:</strong> 1.5 years MERN stack, 1 year Frontend Intern (Crafting Colons), 5 months Backend, 1 month ML internship (Sparks Foundation)</li>
        <li><strong>Certifications:</strong> Frontend Development (Crafting Colons)</li>
      </ul>
      <p className="mb-4">I specialize in React.js, Next.js, Tailwind CSS, Bootstrap, MongoDB Atlas, Node.js, Express.js, REST APIs, AI chatbot integration, real-time features, and payment gateway integration.</p>
      <div className="mt-6">
        <span className="font-bold text-neon">Ready for global opportunities, especially in Dubai!</span>
      </div>
    </motion.div>
  </section>
);

export default About;
