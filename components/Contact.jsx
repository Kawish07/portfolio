import React, { useRef, useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_0bsp86f';
const TEMPLATE_ID = 'template_zxq6mrs';
const PUBLIC_KEY = 'unLnuQ0vpWGog3kVz';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      })
      .catch((error) => {
        setLoading(false);
        setStatus('error');
        console.error(error);
      });
  };

  return (
    <section id="contact" className="py-24 relative bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Let's work together.</h2>
            <p className="text-gray-600 dark:text-slate-400 text-lg mb-10">
              I'm currently available for freelance projects and full-time opportunities. If you have a project that needs some creative touch, get in touch.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-800 dark:text-slate-300">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-slate-800 flex items-center justify-center text-red-500">
                  <Mail />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-slate-500">Email</p>
                  <p className="font-medium">kawishiqbal898@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-800 dark:text-slate-300">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-slate-800 flex items-center justify-center text-red-500">
                  <Phone />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-slate-500">Phone</p>
                  <p className="font-medium">+92 3179511056</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-800 dark:text-slate-300">
                <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-slate-800 flex items-center justify-center text-red-500">
                  <MapPin />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-slate-500">Location</p>
                  <p className="font-medium">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-300 dark:border-slate-800 shadow-2xl">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-600 dark:text-slate-400 ml-1">Name</label>
                  <input type="text" name="user_name" required className="w-full bg-gray-100 dark:bg-slate-950/50 border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-600 dark:text-slate-400 ml-1">Email</label>
                  <input type="email" name="user_email" required className="w-full bg-gray-100 dark:bg-slate-950/50 border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm text-gray-600 dark:text-slate-400 ml-1">Subject</label>
                <input type="text" name="subject" className="w-full bg-gray-100 dark:bg-slate-950/50 border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" placeholder="Project Inquiry" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-600 dark:text-slate-400 ml-1">Message</label>
                <textarea name="message" required rows="4" className="w-full bg-gray-100 dark:bg-slate-950/50 border border-gray-300 dark:border-slate-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" placeholder="Tell me about your project..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-900/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : <span>Send Message <Send size={18} /></span>}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-center animate-bounce">
                  Message Sent Successfully!
                </div>
              )}
               {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-center">
                  Failed to send. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;