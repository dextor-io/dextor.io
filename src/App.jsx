import React from 'react';
import HeroSection from './components/HeroSection';
import MVPShowcase from './components/MVPShowcase';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <HeroSection />
      <MVPShowcase />
    </div>
  );
}

export default App;