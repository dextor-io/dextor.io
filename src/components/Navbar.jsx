import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/dextor-white.svg";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full transition-all duration-300 z-50 ${
        scrolled
          ? "p-4 bg-gray-800/75 backdrop-blur-sm scale-75 transform -translate-y--10 rounded-2xl"
          : "p-4 bg-black"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Dextor Logo"
            className={`transition-all duration-300 w-auto ${
              scrolled ? "h-6" : "h-8"
            } mr-2`}
          />
          <span
            className={`font-semibold text-white transition-all duration-300 ${
              scrolled ? "text-lg" : "text-xl"
            }`}
          >
            Dextor
          </span>
        </Link>
        <div className="space-x-4">
          <Link
            to="/explore"
            className="flex items-center text-gray-300 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-all duration-300 mr-1 ${
                scrolled ? "w-4 h-4" : "w-5 h-5"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            <span
              className={`transition-all duration-300 ${
                scrolled ? "text-sm" : "text-base"
              }`}
            >
              Explore
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
