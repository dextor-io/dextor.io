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
          ? "p-4 bg-black/30 text-white backdrop-blur-sm scale-75 transform -translate-y--20 rounded-2xl"
          : "p-4 bg-white text-black"
      }`}
    >
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Dextor Logo"
            className={`transition-all duration-300 w-auto ${
              scrolled ? "h-10" : "h-8"
            } mr-2`}
          />
          <span
            className={`font-semibold transition-all duration-300 ${
              scrolled ? "text-2xl" : "text-xl"
            }`}
          >
            Dextor
          </span>
        </Link>
        <div className="space-x-4 flex justify-center items-center">
          <Link to="/explore" className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`flex transition-all duration-300 mr-1 ${
                scrolled ? "w-6 h-6" : "w-5 h-5"
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
              className={`transition-all duration-300 flex items-center ${
                scrolled ? "text-xl" : "text-base"
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
