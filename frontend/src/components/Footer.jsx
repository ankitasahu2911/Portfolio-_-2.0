import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-gray-400 py-6 mt-20 text-center">
      <div className="container mx-auto px-6">
        <p className="mb-2">&copy; {new Date().getFullYear()} Ankita Sahu. All rights reserved.</p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="https://github.com/ankitasahu2911" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            GitHub
          </a>
          <a href="www.linkedin.com/in/ankita-sahu-63868b255" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
