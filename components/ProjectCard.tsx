import React, { useRef, useState } from "react";
import type { Project } from "../types";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const rotateX = -((y - height / 2) / (height / 2)) * 10;
    const rotateY = ((x - width / 2) / (width / 2)) * 10;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "transform 0.1s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)",
      transition: "transform 0.5s ease-in-out",
    });
  };

  return (
    <div
      ref={cardRef}
      className="group flex flex-col items-center gap-4 transition-transform duration-500 ease-in-out"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full aspect-[4/3] rounded-2xl p-2 border-2 border-primary/50 dark:border-primary shadow-xl overflow-hidden bg-white/50 dark:bg-dark-surface/50 backdrop-blur-sm">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="text-center relative w-full flex justify-between items-center px-2">
        <div>
          <h3 className="font-bold text-xl text-text-primary dark:text-dark-text-primary">
            {project.title}
          </h3>
          <a
            href="#"
            className="text-sm text-text-secondary dark:text-dark-text-secondary hover:text-primary transition-colors"
          >
            {project.WebUrl}
          </a>
        </div>
        <div className="text-primary text-3xl">{project.techIcon}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
