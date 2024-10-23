import React, { useState } from 'react';
import { ExternalLink, Code, Globe, Cpu } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';

const MVPShowcase = () => {
  const [ideas] = useState([
    {
      id: 1,
      title: "AI Chat Assistant",
      description: "Natural language processing bot that helps with customer queries",
      icon: <Cpu className="w-6 h-6" />,
      tech: ["React", "OpenAI", "Node.js"],
      status: "Live",
      link: "#"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Modern marketplace with real-time inventory management",
      icon: <Globe className="w-6 h-6" />,
      tech: ["React", "MongoDB", "Express"],
      status: "Beta",
      link: "#"
    },
    {
      id: 3,
      title: "Code Generator",
      description: "Transform designs into production-ready code",
      icon: <Code className="w-6 h-6" />,
      tech: ["React", "TypeScript", "AI"],
      status: "Development",
      link: "#"
    }
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ideas.map(idea => (
          <Card key={idea.id} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all transform hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400">
                    {idea.icon}
                  </div>
                  <CardTitle className="text-white">{idea.title}</CardTitle>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  idea.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                  idea.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {idea.status}
                </span>
              </div>
              <CardDescription className="text-gray-400">{idea.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {idea.tech.map(tech => (
                  <span key={tech} className="px-2 py-1 bg-gray-700 rounded-md text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={idea.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
              >
                View Project <ExternalLink size={16} />
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MVPShowcase;