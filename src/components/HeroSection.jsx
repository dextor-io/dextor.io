import React from 'react';
import { Github } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          MVP Showcase<span className="text-blue-500">.</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          A collection of innovative projects and ideas brought to life.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            View Projects
          </button>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
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