import React from 'react';
import { Github, Link, Cpu, Globe, Code, LayoutDashboard, Home } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './card';

const IconMap = {
  Cpu: Cpu,
  Globe: Globe,
  Code: Code,
  LayoutDashboard: LayoutDashboard,
  Home: Home
};

const ProjectCard = ({ idea }) => {
  const IconComponent = IconMap[idea.iconName];

  return (
    <Card 
      className="transition-all transform bg-gray-800 border-gray-700 hover:border-blue-500 hover:-translate-y-1 hover:shadow-xl"
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 text-blue-400 rounded-lg bg-blue-500/20">
              {IconComponent && <IconComponent className="w-6 h-6" />}
            </div>
            <div>
              <CardTitle className="text-white">{idea.title}</CardTitle>
              <div className="mt-1 text-sm text-gray-400">{idea.category}</div>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm ${
            idea.status === 'Live' ? 'bg-green-500/20 text-green-400' :
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
            <span key={tech} className="px-2 py-1 text-sm text-gray-300 bg-gray-700 rounded-md">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {idea.github && (
            <a 
              href={idea.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
            >
              <Github size={16} />
              GitHub Repository
            </a>
          )}
          {idea.demo && (
            <a 
              href={idea.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-400 hover:text-green-300"
            >
              <Link size={16} />
              Live Demo
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;