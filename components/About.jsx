import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: 'Years Experience', value: '1.5+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '10+' },
    { label: 'CGPA', value: '3.51' }
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-4 md:px-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Content Side */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            {/* Introduction */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-500/10 rounded-2xl blur-xl group-hover:from-red-600/20 group-hover:to-red-500/20 transition-all duration-500" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I am <span className="text-red-400 font-bold">Kawish Iqbal</span>, a passionate MERN Stack Developer with a strong grip on frontend technologies. I love building visually stunning, modern web applications that deliver smooth user experiences.
                </p>
              </div>
            </div>

            {/* Education & Experience */}
            <div className="space-y-6">
              {[
                {
                  title: 'Education',
                  content: 'BSCS (Iqra University Islamabad), CGPA: 3.51, Graduation: June 2025',
                  icon: '🎓'
                },
                {
                  title: 'Experience',
                  content: '1.5 years MERN stack, 3 Months Frontend Intern (Crafting Colons), 3 Months Backend (Crafting Colons), Freelancing, 3 months head of web development intern,1 month ML internship (Sparks Foundation), ',
                  icon: '💼'
                },
                {
                  title: 'Certifications',
                  content: 'Frontend Development (Crafting Colons)',
                  icon: '🏆'
                }
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`flex items-start space-x-4 transition-all duration-700 delay-${500 + i * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-red-400 mb-2">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Summary */}
            <div className={`transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-red-500/10 rounded-2xl blur-xl" />
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-red-400 mb-4">Technical Expertise</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I specialize in <span className="text-red-400">React.js, Next.js, Tailwind CSS, Bootstrap, MongoDB Atlas, Node.js, Express.js, REST APIs</span>, AI chatbot integration, real-time features, and payment gateway integration.
                  </p>
                </div>
              </div>
            </div>

            {/* Career Goal */}
            <div className={`transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-2xl blur-xl animate-pulse" />
                <div className="relative bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm border-2 border-red-500/30 rounded-2xl p-6 text-center">
                  <span className="text-xl font-bold text-red-400 block">🌍 Ready for Global Opportunities</span>
                  <span className="text-lg text-white">Especially in Dubai!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Side */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`group relative transition-all duration-700 delay-${700 + i * 100} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-2xl blur-xl group-hover:from-red-500/30 group-hover:to-red-600/30 transition-all duration-500" />
                  <div className="relative bg-slate-800/70 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 text-center group-hover:border-red-400/50 transition-all duration-300">
                    <div className="text-3xl font-black text-red-400 mb-2 group-hover:text-red-300 transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 font-medium tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Cloud */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center text-red-400 mb-8">Tech Stack</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'React.js', 'Next.js', 'Node.js', 'MongoDB', 'Express.js',
                  'Tailwind CSS', 'JavaScript', 'TypeScript', 'REST APIs', 'Git'
                ].map((tech, i) => (
                  <span
                    key={tech}
                    className={`bg-slate-800/60 backdrop-blur-sm text-red-300 px-4 py-2 rounded-full border border-red-500/30 hover:border-red-400/60 hover:bg-red-500/10 transition-all duration-300 cursor-default text-sm font-medium transition-all duration-700 delay-${900 + i * 50} ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                      }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;