export interface TradeoffItem {
  dimension: string;
  choice: string;
  detail: string;
  reversibility: 'Alta' | 'Media' | 'Baja';
}

export interface ADR {
  title: string;
  context: string;
  decision: string;
  revisitTrigger: string;
}

export interface SPOFAudit {
  infraSPOF: string;
  humanSPOF: string;
  preMortem: string;
}

export interface CaseStudy {
  problem: string;
  role: string;
  method: string[];
  result: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  metricBadge?: string;
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
  caseStudy?: CaseStudy;
  adr?: ADR;
  tradeoffs?: TradeoffItem[];
  spof?: SPOFAudit;
}

export type Palette = 'indigo' | 'teal' | 'amber';
