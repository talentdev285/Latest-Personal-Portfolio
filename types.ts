import type { ReactNode } from "react";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  WebUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  techIcon?: ReactNode;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon: ReactNode;
  color: string;
}

export interface Stat {
  value: string;
  label: string;
  color: string;
}

export interface PersonalInfo {
  label: string;
  value: string;
  color?: string;
  comment?: string;
}

export interface GeneratedProjectIdea {
  projectName: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
}
