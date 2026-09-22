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
export type AITool = 'ChatGPT' | 'Claude' | 'Gemini' | 'Claude Haiku' | 'GPT-4o' | 'Claude 3.5';

export interface AIProject {
  id: string;
  title: string;
  sector: string;
  channels: Channel[];
  aiTools: AITool[];
  n8nTools: string[];
  problem: string;
  solution: string;
  roleHighlights: string[];
}

export type Palette = 'indigo' | 'teal' | 'amber';
