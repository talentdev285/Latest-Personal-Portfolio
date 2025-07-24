import React from "react";
import { PROJECTS_DATA } from "../constants";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-center max-w-2xl mx-auto mb-12 text-text-secondary">
        I'm a full-stack web developer and I work remotely from Bangladesh for
        clients in the World.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 w-full">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
      <a
        href="#contact"
        className="mt-16 inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-primary-focus transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
      >
        Let's Connect
      </a>
    </div>
  );
};

export default Projects;
