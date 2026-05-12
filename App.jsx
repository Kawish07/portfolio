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

function App() {
  const rafId = useRef(null);
  const lenisRef = useRef(null);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  /* ── Smooth scroll (Lenis) ── */
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const { default: Lenis } = await import('@studio-freight/lenis');
        if (!mounted) return;
        lenisRef.current = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        const onRaf = (time) => { if (lenisRef.current) lenisRef.current.raf(time); rafId.current = requestAnimationFrame(onRaf); };
        rafId.current = requestAnimationFrame(onRaf);
      } catch (e) { console.warn('Lenis failed', e); }
    })();
    return () => { mounted = false; if (rafId.current) cancelAnimationFrame(rafId.current); if (lenisRef.current?.destroy) lenisRef.current.destroy(); };
  }, []);

  /* ── Custom cursor ── */
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const ring = document.getElementById('cursor-ring');
    if (!cursor || !ring) return;
    let rx = 0, ry = 0;
    const move = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };
    const raf = () => {
      const style = ring.style;
      rx += (parseFloat(ring.dataset.x || 0) - rx) * 0.12;
      ry += (parseFloat(ring.dataset.y || 0) - ry) * 0.12;
      style.left = rx + 'px';
      style.top = ry + 'px';
      requestAnimationFrame(raf);
    };
    const track = (e) => { ring.dataset.x = e.clientX; ring.dataset.y = e.clientY; };
    window.addEventListener('mousemove', move);
    window.addEventListener('mousemove', track);
    requestAnimationFrame(raf);
    const grow = () => { cursor.style.transform = 'translate(-50%,-50%) scale(3)'; cursor.style.opacity = '0.4'; ring.style.width = '60px'; ring.style.height = '60px'; };
    const shrink = () => { cursor.style.transform = 'translate(-50%,-50%) scale(1)'; cursor.style.opacity = '1'; ring.style.width = '36px'; ring.style.height = '36px'; };
    document.querySelectorAll('a,button').forEach(el => { el.addEventListener('mouseenter', grow); el.addEventListener('mouseleave', shrink); });
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mousemove', track); };
  }, []);

  /* ── Scroll reveal ── */
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ── Force dark class ── */
  useEffect(() => { document.documentElement.classList.add('dark'); }, []);

  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      {/* Custom cursor */}
      <div id="cursor" />
      <div id="cursor-ring" />

      <div className="grain min-h-screen bg-[#0a0a0f] text-[#e2e8f0] selection:bg-indigo-600 selection:text-white">
        {/* Fixed Left Sidebar */}
        <Navbar />

        {/* Main scrollable content — offset by sidebar width on lg+ */}
        <main className="lg:ml-[280px]">
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
  );
}

export default App;