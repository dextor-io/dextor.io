import React from "react";
import { Github } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="px-4 pt-36 pb-16 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-7xl animate-fade-in font-helveticaBold">
          labs.dextor<span className="text-blue-600">.io</span>
        </h1>
        <p className="max-w-3xl mx-auto mb-8 text-xl text-gray-600">
          A collection of innovative projects and ideas brought to life.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700 shadow-sm">
            View Projects
          </button>
          <a
            href="https://github.com/dextor-io/dextor.io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 text-gray-700 transition-colors bg-white border border-gray-200 rounded-md hover:bg-gray-50 shadow-sm"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
