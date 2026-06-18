export interface CloudCaseStudyArchitecture {
  diagram?: string;
  description: string;
}

export interface CloudCaseStudyStack {
  infrastructure: string[];
  observability?: string[];
  automation?: string[];
}

export interface CloudCaseStudyDeployment {
  strategy: string;
  cicd?: string;
}

export interface CloudCaseStudyDecision {
  title: string;
  reason: string;
}

export interface CloudCaseStudyChallenge {
  problem: string;
  solution: string;
}

export interface CloudCaseStudyResource {
  title: string;
  url: string;
}

export interface CloudCaseStudyMigrationPhase {
  phase: string;
  description: string;
}

export interface CloudCaseStudy {
  id: string;
  title: string;
  date: string;
  cover?: string;
  cardCover?: string;
  system: string;
  timeline: string;
  overview: string;
  architecture: CloudCaseStudyArchitecture;
  stack: CloudCaseStudyStack;
  deployment: CloudCaseStudyDeployment;
  engineeringDecisions: CloudCaseStudyDecision[];
  scaling?: string[];
  security?: string[];
  monitoring?: string[];
  challenges?: CloudCaseStudyChallenge[];
  repositories?: CloudCaseStudyResource[];
  screenshots?: string[];
  migrationPlan?: CloudCaseStudyMigrationPhase[];
}
