import React from 'react';
import {Code, Cpu, Github, Globe, Home, LayoutDashboard, Link} from 'lucide-react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from './card';
import Tags from "./tags.jsx";

const IconMap = {
    Cpu: Cpu,
    Globe: Globe,
    Code: Code,
    LayoutDashboard: LayoutDashboard,
    Home: Home
};

const ProjectCard = ({idea}) => {
    const IconComponent = IconMap[idea.iconName];

    return (
        <Card
            className="transition-all transform border border-gray-700 hover:border-primary-500 hover:-translate-y-2 hover:shadow-2xl rounded-lg flex flex-col">
            <CardHeader>
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                        <div className="p-3 text-primary-400 rounded-lg bg-primary-500/20">
                            {IconComponent && <IconComponent className="w-7 h-7"/>}
                        </div>
                        <div>
                            <CardTitle className="text-black font-semibold text-lg">{idea.title}</CardTitle>
                            <div className="mt-1 text-sm text-gray-500">{idea.category}</div>
                        </div>
                    </div>
                    <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                            idea.status === 'Live'
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-gray-500/20 text-gray-400'
                        }`}
                    >
                        {idea.status}
                    </span>
                </div>
                <CardDescription className="text-gray-500 mt-2">{idea.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-3">
                <div className="flex flex-wrap gap-2 mb-4">
                    <Tags techList={idea.tech}></Tags>
                </div>

                <div className="mt-auto">
                    {idea.github && (
                        <a
                            href={idea.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-green-400 hover:text-green-300"
                        >
                            <Link size={16}/>
                            <span>Live Demo</span>
                        </a>
                    )}
                    {idea.demo && (
                        <a
                            href={idea.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 underline"
                        >
                            <Github size={16}/>
                            <span>GitHub Repository</span>
                        </a>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default ProjectCard;
