import React from 'react';
import { Github } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div className="px-4 pt-20 pb-16 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl animate-fade-in">
          lab.dextor<span className="text-blue-500">.io</span>
        </h1>
        <p className="max-w-3xl mx-auto mb-8 text-xl text-gray-300">
          A collection of innovative projects and ideas brought to life.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600">
            View Projects
          </button>
          <a 
            href="https://github.com/dextor-io/dextor.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-700"
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