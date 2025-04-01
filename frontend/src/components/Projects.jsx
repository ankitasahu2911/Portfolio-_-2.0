import React from 'react';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div id='projects' className="border-b border-neutral-900 pb-24">
      {/* Updated Heading with Gradient */}
      <h2 className="my-20 text-center text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
        Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="relative bg-neutral-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="group">
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay Box on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </div>
            </a>
            {/* Project Description */}
            <div className="p-6">
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
