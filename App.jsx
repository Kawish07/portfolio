import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
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
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
    <ThemeProvider>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="relative min-h-screen bg-slate-950 dark:bg-slate-950 bg-gray-50 text-slate-900 dark:text-white selection:bg-red-500 selection:text-white transition-colors duration-300">
          <Background />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Resume />
            <Contact />
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;