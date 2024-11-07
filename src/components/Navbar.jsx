import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/dextor-white.svg';

function Navbar() {
  return (
    <nav className="p-4">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Dextor Logo" className="w-auto h-8 mr-2" />
          <span className="text-xl font-semibold text-black">Dextor</span>
        </Link>
        <div className="space-x-4">
          <Link to="/explore" className="flex items-center text-black hover:text-primary-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            Explore
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;