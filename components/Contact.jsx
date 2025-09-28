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

    // Get form data
    const formData = new FormData(formRef.current);
    
    // Validate required fields
    const requiredFields = ['user_name', 'user_email', 'user_number', 'message'];
    for (let field of requiredFields) {
      const value = formData.get(field);
      if (!value || value.trim() === '') {
        setLoading(false);
        setError(`Please fill in the ${field.replace('user_', '').replace('_', ' ')} field.`);
        return;
      }
    }

    // Email validation
    const email = formData.get('user_email').trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setLoading(false);
      setError('Please enter a valid email address.');
      return;
    }

    // Create template parameters object that exactly matches the template
    const templateParams = {
      user_name: formData.get('user_name').trim(),
      user_email: formData.get('user_email').trim(),
      user_number: formData.get('user_number').trim(),
      message: formData.get('message').trim(),
      time: new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Singapore',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    };

    // Debug logging
    console.log('Sending email with template params:', templateParams);
    console.log('Using Service ID:', SERVICE_ID);
    console.log('Using Template ID:', TEMPLATE_ID);
    console.log('Using Public Key:', PUBLIC_KEY);

    // Initialize EmailJS (sometimes this helps with 412 errors)
    emailjs.init(PUBLIC_KEY);

    // Send email
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then((response) => {
        console.log('EmailJS SUCCESS!', response.status, response.text);
        setLoading(false);
        setSuccess(true);
        formRef.current.reset();
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        setLoading(false);
        console.error('EmailJS ERROR:', error);
        
        // More specific error handling
        if (error.status === 412) {
          setError('Configuration error. Please verify your EmailJS template settings.');
        } else if (error.status === 400) {
          setError('Bad request. Please check your form data.');
        } else if (error.status === 401) {
          setError('Unauthorized. Please check your EmailJS public key.');
        } else if (error.status === 404) {
          setError('Service or template not found. Please check your IDs.');
        } else if (error.text) {
          setError(`Error: ${error.text}`);
        } else {
          setError('Failed to send message. Please try again later.');
        }
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-transparent py-20"
    >
      <div className="bg-slate-900/80 rounded-3xl shadow-2xl p-10 max-w-xl w-full mx-4 border border-red-500/20 backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          Contact Me
        </h2>
        <p className="text-lg text-red-300 mb-8 text-center">
          Have a project or want to work together? Fill out the form below!
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
          {/* Name */}
          <div>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              minLength={2}
              maxLength={50}
              className="w-full bg-slate-800/80 border border-red-500/30 rounded-xl px-5 py-3 text-white placeholder-red-300 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 shadow-md"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-slate-800/80 border border-red-500/30 rounded-xl px-5 py-3 text-white placeholder-red-300 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 shadow-md"
            />
          </div>

          {/* Phone Number */}
          <div>
            <input
              type="tel"
              name="user_number"
              placeholder="Your Phone Number"
              required
              minLength={10}
              maxLength={15}
              className="w-full bg-slate-800/80 border border-red-500/30 rounded-xl px-5 py-3 text-white placeholder-red-300 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 shadow-md"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              required
              minLength={10}
              maxLength={1000}
              rows={5}
              className="w-full bg-slate-800/80 border border-red-500/30 rounded-xl px-5 py-3 text-white placeholder-red-300 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all duration-300 shadow-md resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-lg tracking-wide border-2 border-red-500/50 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </button>

          {/* Success/Error Messages */}
          {success && (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-green-400 text-center font-semibold flex items-center justify-center gap-2">
                <span className="text-xl">✅</span>
                Message sent successfully! I'll get back to you soon.
              </p>
            </div>
          )}
          
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-red-400 text-center font-semibold flex items-center justify-center gap-2">
                <span className="text-xl">❌</span>
                {error}
              </p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;