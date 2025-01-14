import React from 'react';

const PortfolioHeader = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section with Yellow Background */}
      <div className="relative bg-yellow-400 w-full h-96 flex flex-col items-center justify-center p-4">
        {/* Navigation */}
        <nav className="absolute top-0 right-0 p-6">
          <ul className="flex space-x-6 text-gray-700">
            <li><a href="#services" className="hover:text-gray-900">Services</a></li>
            <li><a href="#workfolio" className="hover:text-gray-900">Workfolio</a></li>
            <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>

        {/* Logo Container */}
        <div className="relative w-24 h-24 mb-6">
          <div className="absolute inset-0 bg-red-600 transform rotate-45 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold leading-tight text-center">
            THE<br />DESIGN<br />VIRUS
          </div>
        </div>

        {/* Tagline */}
        <h2 className="text-gray-800 text-2xl md:text-3xl font-medium">
          Good design matters
        </h2>
      </div>

      {/* Workfolio Title */}
      {/* <div className="p-8 bg-white" id='workflow'>
        <h1 className="text-yellow-400 text-5xl md:text-7xl font-bold tracking-wider">
          WORKFOLIO
        </h1>
      </div> */}
    </div>
  );
};

export default PortfolioHeader;