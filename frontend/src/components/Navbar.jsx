import React, { useState } from 'react';
import logo from '../assets/kevinRushLogo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-900 text-white z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-3xl focus:outline-none"
        >
          <GiHamburgerMenu />
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 right-4 flex flex-col bg-neutral-800 p-6 gap-4 text-white rounded-lg shadow-lg lg:hidden">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer">
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} className="cursor-pointer">
              About
            </Link>
            <Link to="skills" smooth={true} duration={500} className="cursor-pointer">
              Skills
            </Link>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer">
              Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer">
              Contact
            </Link>
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 text-lg">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-500">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-500">
            About
          </Link>
          <Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-500">
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-500">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-indigo-500">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
