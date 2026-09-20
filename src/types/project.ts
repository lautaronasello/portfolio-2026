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

export type Palette = 'indigo' | 'teal' | 'amber';
