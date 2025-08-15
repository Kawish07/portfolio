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
            <a href="https://www.linkedin.com/in/kawish-iqbal/222767264/" target="_blank" rel="noopener noreferrer" className="text-lg underline text-neon">LinkedIn Profile</a>
          </div>
        </div>
        <p className="mt-8 text-gray-300">Feel free to reach out via email, phone, or LinkedIn!</p>
      </div>
    </section>
  );
};

export default Contact;
