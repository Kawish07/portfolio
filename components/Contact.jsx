import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = 'service_0bsp86f';
const TEMPLATE_ID = 'template_zxq6mrs';
const PUBLIC_KEY  = 'unLnuQ0vpWGog3kVz';

const inputCls = 'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-3.5 text-white text-sm placeholder:text-white/20 focus:outline-none focus:border-red-500/60 focus:bg-white/[0.06] transition-all';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('idle');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => { setLoading(false); setStatus('success'); formRef.current.reset(); setTimeout(() => setStatus('idle'), 5000); })
      .catch(() => { setLoading(false); setStatus('error'); });
  };

  return (
    <section id="contact" className="relative min-h-screen bg-[#0d0d0d] py-16 lg:py-24 px-6 sm:px-12 lg:px-16 overflow-hidden flex flex-col justify-center">

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Label */}
      <div className="flex items-center gap-4 mb-8 reveal">
        <span className="text-[10px] font-mono text-red-500/70 tracking-[0.25em] uppercase">06 / Contact</span>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* Left */}
        <div className="reveal">
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.9] tracking-tighter text-white uppercase mb-8">
            Let's Build<br />
            <span style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)', color: 'transparent' }}>Together</span>
          </h2>
          <p className="text-white/40 text-base leading-relaxed mb-8 max-w-sm">
            Available for freelance projects and full-time roles. Got something interesting? Let's talk.
          </p>

          <div className="space-y-5">
            {[
              { icon: <Mail size={16} />, label: 'Email',    value: 'kawishiqbal898@gmail.com',  href: 'mailto:kawishiqbal898@gmail.com' },
              { icon: <Phone size={16} />, label: 'Phone',   value: '+92 317 9511056',             href: 'tel:+923179511056' },
              { icon: <MapPin size={16} />, label: 'Location', value: 'Islamabad, Pakistan',      href: null },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center text-red-500 shrink-0">{icon}</div>
                <div>
                  <p className="text-[10px] text-white/25 uppercase tracking-wider">{label}</p>
                  {href
                    ? <a href={href} className="text-sm text-white/60 hover:text-white transition-colors">{value}</a>
                    : <p className="text-sm text-white/60">{value}</p>}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-10">
            <a href="https://github.com/Kawish07" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-white/[0.08] rounded-full text-white/40 hover:text-white hover:border-white/20 text-sm transition-all">
              <Github size={14} /> GitHub
            </a>
            <a href="https://linkedin.com/in/kawish-iqbal/222767264" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-white/[0.08] rounded-full text-white/40 hover:text-white hover:border-white/20 text-sm transition-all">
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div className="reveal">
          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] text-white/25 uppercase tracking-wider mb-2">Name</label>
                <input type="text" name="user_name" required className={inputCls} placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-[10px] text-white/25 uppercase tracking-wider mb-2">Email</label>
                <input type="email" name="user_email" required className={inputCls} placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-[10px] text-white/25 uppercase tracking-wider mb-2">Subject</label>
              <input type="text" name="subject" className={inputCls} placeholder="Project inquiry" />
            </div>
            <div>
              <label className="block text-[10px] text-white/25 uppercase tracking-wider mb-2">Message</label>
              <textarea name="message" required rows={5} className={inputCls} placeholder="Tell me about your project..." />
            </div>

            <button type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-3 py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] disabled:opacity-60">
              {loading ? 'Sending...' : <><Send size={16} /> Send Message</>}
            </button>

            {status === 'success' && (
              <p className="text-center text-green-400 text-sm py-3 border border-green-500/20 rounded-xl bg-green-500/5">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-400 text-sm py-3 border border-red-500/20 rounded-xl bg-red-500/5">Failed to send. Try again.</p>
            )}
          </form>
        </div>
      </div>

      {/* Footer line */}
      <div className="mt-24 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-white/20">© {new Date().getFullYear()} Kawish Iqbal. All rights reserved.</p>
        <p className="text-xs text-white/20">Islamabad, Pakistan · Open to Remote</p>
      </div>
    </section>
  );
};

export default Contact;
