import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Background from './components/Background';

function App() {
  const rafId = useRef(null);
  const lenisRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const { default: Lenis } = await import('@studio-freight/lenis');
        if (!mounted) return;
        lenisRef.current = new Lenis({
          duration: 1.2,
          smooth: true,
        });

        const onRaf = (time) => {
          if (lenisRef.current) lenisRef.current.raf(time);
          rafId.current = requestAnimationFrame(onRaf);
        };

        rafId.current = requestAnimationFrame(onRaf);
      } catch (e) {
        console.warn('Lenis failed to load', e);
      }
    })();

    return () => {
      mounted = false;
      if (rafId.current) cancelAnimationFrame(rafId.current);
      if (lenisRef.current && typeof lenisRef.current.destroy === 'function') {
        lenisRef.current.destroy();
      }
    };
  }, []);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white dark:text-white">
        <Background />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      </div>
    </Router>
  );
}

export default App;
