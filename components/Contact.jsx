import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_0bsp86f';
const TEMPLATE_ID = 'template_zxq6mrs';
const PUBLIC_KEY = 'unLnuQ0vpWGog3kVz';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');

    // Add current time dynamically
    const timeInput = formRef.current.querySelector('input[name="time"]');
    if (timeInput) {
      timeInput.value = new Date().toLocaleString();
    }

    // Validate required fields
    const formData = new FormData(formRef.current);
    const requiredFields = ['user_name', 'user_email', 'user_number', 'message'];
    for (let field of requiredFields) {
      if (!formData.get(field) || formData.get(field).trim() === '') {
        setLoading(false);
        setError(`Please fill in the ${field.replace('user_', '').replace('_', ' ')} field.`);
        return;
      }
    }

    // Debug: log form data
    console.log('Form data being sent:');
    requiredFields.forEach(f => console.log(f + ':', formData.get(f)));
    console.log('time:', formData.get('time'));

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setLoading(false);
        setSuccess(true);
        formRef.current.reset();
      })
      .catch((err) => {
        setLoading(false);
        if (err && err.status === 412) {
          setError('Precondition Failed: Please check that all required fields match your EmailJS template and are not empty.');
        } else {
          setError('Something went wrong. Please try again.');
        }
        console.error('EmailJS error:', err);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-transparent py-20"
    >
      <div className="bg-slate-900/80 rounded-3xl shadow-2xl p-10 max-w-xl w-full mx-4 border border-red-500/20">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          Contact Me
        </h2>
        <p className="text-lg text-red-300 mb-8 text-center">
          Have a project or want to work together? Fill out the form below!
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
          {/* Name */}
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-slate-800/80 border border-red-500/30 rounded-xl px-5 py-3 text-white placeholder-red-300 focus:outline-none focus:border-red-500 transition-all duration-300 shadow-md"
          />

          {/* Email */}
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-slate-800/80 border border-red-500/30 rounded-xl px-5 py-3 text-white placeholder-red-300 focus:outline-none focus:border-red-500 transition-all duration-300 shadow-md"
          />

          {/* Phone Number */}
          <input
            type="text"
            name="user_number"
            placeholder="Your Phone Number"
            required
            className="bg-slate-800/80 border border-red-500/30 rounded-xl px-5 py-3 text-white placeholder-red-300 focus:outline-none focus:border-red-500 transition-all duration-300 shadow-md"
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="bg-slate-800/80 border border-red-500/30 rounded-xl px-5 py-3 text-white placeholder-red-300 focus:outline-none focus:border-red-500 transition-all duration-300 shadow-md resize-none"
          />

          {/* Hidden field for time */}
          <input type="hidden" name="time" />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-lg tracking-wide border-2 border-red-500/50"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {/* Success/Error Messages */}
          {success && (
            <p className="text-green-400 text-center font-semibold">
              ✅ Message sent successfully!
            </p>
          )}
          {error && (
            <p className="text-red-400 text-center font-semibold">{error}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
