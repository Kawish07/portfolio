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
    const res = await fetch('http://localhost:5000/api/contact', {
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
  };

  return (
    <section id="contact" className="py-16 px-4 md:px-16">
      <motion.h2 className="text-3xl font-bold mb-6 text-neon" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>Contact</motion.h2>
      <form className="bg-glass rounded-lg shadow-glass p-6 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="p-2 rounded bg-gray-800 text-white" />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="p-2 rounded bg-gray-800 text-white" />
        <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required className="p-2 rounded bg-gray-800 text-white" rows={4} />
        <button type="submit" className="bg-neon text-black font-bold py-2 px-4 rounded">Send</button>
        {status && <div className="mt-2 text-neon">{status}</div>}
      </form>
    </section>
  );
};

export default Contact;
