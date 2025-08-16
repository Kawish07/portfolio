import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Sending...');
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
  try {
    const res = await fetch(`${backendUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus('Message sent!');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('Error sending message.');
    }
  } catch (error) {
    setStatus('Error sending message.');
  }
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-16">
      <h2 className="text-3xl font-bold mb-6 text-neon">Contact Information</h2>
      <div className="max-w-xl mx-auto bg-darkblue bg-opacity-60 rounded-xl shadow-lg p-8 text-center glassmorphism">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold">Email:</span>
            <span className="text-lg">kawishiqbal898@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold">Phone:</span>
            <span className="text-lg">+92 3179511056</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/kawishiqbal" target="_blank" rel="noopener noreferrer" className="text-lg underline text-neon">LinkedIn Profile</a>
          </div>
        {/* WhatsApp Floating Icon */}
        <a
          href="https://wa.me/923179511056"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full p-4 shadow-lg hover:bg-green-600 transition-all flex items-center justify-center"
          style={{ boxShadow: '0 4px 20px rgba(37,211,102,0.3)' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#25D366"/>
            <path d="M22.5 18.5c-.3-.1-1.7-.8-2-1-.3-.2-.5-.2-.7.1-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.3-.8-.7-1.3-1.5-1.5-1.8-.2-.3-.1-.5.1-.7.2-.2.4-.5.6-.7.2-.2.2-.4.3-.6.1-.2 0-.4-.1-.6-.1-.2-.7-1.7-.9-2.3-.2-.6-.4-.5-.6-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.7.3-.2.2-.7.7-.7 1.7 0 1 .7 2.1 1.1 2.6.4.5 1.7 2.1 4.1 2.9.6.2 1.1.3 1.5.2.4-.1 1.2-.5 1.4-1 .2-.5.2-.9.1-1.1z" fill="#fff"/>
          </svg>
        </a>
        </div>
        <p className="mt-8 text-gray-300">Feel free to reach out via email, phone, or LinkedIn!</p>
      </div>
    </section>
  );
};

export default Contact;
