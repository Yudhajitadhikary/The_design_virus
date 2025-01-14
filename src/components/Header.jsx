'use client';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-yellow-400 w-full py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div className="h-12 w-12 bg-red-500 transform rotate-45 flex items-center justify-center">
            <div className="-rotate-45 text-white text-xs font-bold">
              THE DESIGN VIRUS
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-800 hover:text-gray-600 font-medium">
            Services
          </a>
          <a href="#workfolio" className="text-gray-800 hover:text-gray-600 font-medium">
            Workfolio
          </a>
          <a href="#contact" className="text-gray-800 hover:text-gray-600 font-medium">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
          <div className="w-6 h-0.5 bg-gray-800"></div>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-yellow-400 md:hidden">
            <nav className="flex flex-col p-4">
              <a 
                href="#services" 
                className="py-2 text-gray-800 hover:text-gray-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#workfolio" 
                className="py-2 text-gray-800 hover:text-gray-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Workfolio
              </a>
              <a 
                href="#contact" 
                className="py-2 text-gray-800 hover:text-gray-600 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;