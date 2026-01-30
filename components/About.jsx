import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Code2 />, label: 'Projects Completed', value: '20+' },
    { icon: <Users />, label: 'Happy Clients', value: '10+' },
    { icon: <Zap />, label: 'Years Experience', value: '2+' },
  ];

  return (
    <section id="about" className="py-24 bg-gray-100 dark:bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-300 dark:border-slate-700 group">
              {/* YOUR SECOND PERSONAL IMAGE */}
              <img 
                src="public/kawishimage.jpg" 
                alt="About Kawish" 
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-200 dark:from-slate-900 via-transparent to-transparent opacity-60"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-300 dark:border-slate-700 shadow-xl hidden md:block">
              <p className="text-4xl font-bold text-gray-900 dark:text-white mb-1">100%</p>
              <p className="text-sm text-gray-600 dark:text-slate-400">Job Success</p>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-red-500 tracking-wider uppercase mb-2">About Me</h2>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Passionate about creating <span className="text-red-500">impactful</span> digital solutions.</h3>
            <p className="text-gray-600 dark:text-slate-400 text-lg mb-6 leading-relaxed">
              I am a dedicated MERN Stack Developer with a knack for turning complex problems into elegant, user-friendly interfaces. I specialize in building scalable web applications that not only look great but perform flawlessly.
            </p>
            <p className="text-gray-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              Whether it's integrating AI chatbots, managing real-time data, or crafting responsive dashboards, I bring a technical depth and creative touch to every project.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white dark:bg-slate-800/50 rounded-xl border border-gray-300 dark:border-slate-700/50 hover:border-red-500/50 dark:hover:border-red-500/30 transition-colors">
                  <div className="text-red-500 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-slate-500 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;