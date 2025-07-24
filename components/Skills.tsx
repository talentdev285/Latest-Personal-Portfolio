import React, { useState } from "react";
import { SKILLS_DATA } from "../constants";

// (Optional but good practice) Define the type here if not in a separate file
type Skill = {
  name: string;
  icon: React.ReactNode;
  color: string;
};

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      key={skill.name}
      className="flex flex-col items-center gap-4 group"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: -100, y: -100 })}
    >
      <div className="relative w-40 h-40 rounded-full flex items-center justify-center bg-white dark:bg-dark-surface shadow-lg transition-all duration-300 group-hover:scale-110">
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            // This now uses the unique color for the glow effect
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${skill.color}40, transparent 80%)`,
          }}
        />
        <div className="absolute inset-2 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-full" />

        <div
          className="relative w-36 h-36 bg-white dark:bg-dark-surface rounded-full flex items-center justify-center text-5xl"
          // This now uses the unique color for the icon
          style={{ color: skill.color }}
        >
          {skill.icon}
        </div>
      </div>
      <p className="font-bold text-lg text-text-primary dark:text-dark-text-primary">
        {skill.name}
      </p>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-12 md:gap-16">
      {SKILLS_DATA.map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;
