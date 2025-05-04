// src/components/header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = (
    <>
      <Link
        to="/"
        className="hover:text-blue-400 transition-colors duration-200"
      >
        Home
      </Link>
      <Link
        to="#about-us"
        className="hover:text-blue-400 transition-colors duration-200"
      >
        About
      </Link>
      <Link
        to="/contact"
        className="hover:text-blue-400 transition-colors duration-200"
      >
        Contact
      </Link>
    </>
  );

  return (
    <header className="bg-white text-blue-600 w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-6 py-4 px-6 md:px-20
">
        {/* Logo */}
        <div className="text-2xl font-bold">My Landing Page</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-lg">
          {navLinks}
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XMarkIcon className="w-7 h-7 text-blue-600" />
            ) : (
              <Bars3Icon className="w-7 h-7 text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white flex flex-col space-y-4 px-6 py-4 text-lg">
          {navLinks}
        </div>
      )}
    </header>
  );
};

export default Header;
