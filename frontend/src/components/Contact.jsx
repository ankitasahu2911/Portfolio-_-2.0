import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/contact', formData);
      setStatus(response.data.message);
    } catch (error) {
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <section
      id="contact"
      className="mt-20 py-20 bg-neutral-900 text-white flex items-center justify-center"
    >
      <div className="w-full max-w-5xl bg-neutral-800 shadow-2xl rounded-xl p-12 relative">
        {/* Decorative Circles */}
        <div className="absolute top-8 right-8 flex gap-2">
          <div className="w-4 h-4 bg-gray-500 rounded-full"></div>
          <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
          <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
        </div>

        {/* Heading */}
        <h2 className="text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          {/* Left Section - Contact Info */}
          <div className="text-left">
            <h3 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
              Get in Touch
            </h3>
            <p className="text-gray-400 mb-6">
              Interested in collaborating or have a question? Drop me a message and I'll get back
              to you shortly.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-indigo-400 text-xl" />
                <p className="text-gray-300">ankitasahu@example.com</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-indigo-400 text-xl" />
                <p className="text-gray-300">+91 123-456-7890</p>
              </div>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-indigo-400 text-xl" />
                <p className="text-gray-300">Bhubaneswar, Odisha, India</p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-neutral-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="5"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 py-3 px-8 rounded-lg text-white font-bold transition-transform transform hover:scale-105"
              >
                Send Message
              </button>
              {status && <p className="mt-4 text-gray-400">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
