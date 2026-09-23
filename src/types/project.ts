export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  screenshots?: string[];
  clientView: {
    problem: string;
    solution: string;
    businessValue: string;
  };
  techView: {
    stack: string[];
    architecture: string;
    highlights: string[];
    screenshots?: string[];
    githubUrl?: string;
    demoUrl?: string;
    webUrl?: string;
    appStoreUrl?: string;
    playStoreUrl?: string;
  };
}

export type Channel = 'whatsapp' | 'instagram' | 'facebook';

export interface AIProject {
  id: string;
  title: string;
  sector: string;
  n8nTools: string[];
  problem: string;
  solution: string;
  roleHighlights: string[];
}

export interface OtherProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  screenshots?: string[];
  githubUrl?: string;
  demoUrl?: string;
  category?: string;
}

export type Palette = 'indigo' | 'teal' | 'amber';
