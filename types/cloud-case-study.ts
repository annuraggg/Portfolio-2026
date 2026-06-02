export type CaseArchitecture = {
  diagram?: string;
  description: string;
};

export type CaseStack = {
  infrastructure: string[];
  observability?: string[];
  automation?: string[];
};

export type CaseDeployment = {
  strategy: string;
  cicd?: string;
};

export type CaseDecision = {
  title: string;
  reason: string;
};

export type CaseChallenge = {
  problem: string;
  solution: string;
};

export type CaseRepository = {
  title: string;
  url: string;
};

export type CaseMigrationPhase = {
  phase: string;
  description: string;
};

export type CloudCaseStudy = {
  id: string;
  title: string;
  date: string;
  cover?: string;
  system: string;
  timeline: string;
  overview: string;
  architecture: CaseArchitecture;
  stack: CaseStack;
  deployment: CaseDeployment;
  engineeringDecisions: CaseDecision[];
  scaling?: string[];
  security?: string[];
  monitoring?: string[];
  challenges?: CaseChallenge[];
  repositories?: CaseRepository[];
  screenshots?: string[];
  migrationPlan?: CaseMigrationPhase[];
};

export type CaseHeaderProps = Pick<CloudCaseStudy, "title" | "system" | "date">;

export type CaseCoverProps = {
  cover: string;
  title: string;
};

export type CaseDetailsProps = {
  study: CloudCaseStudy;
};

export type CaseStackProps = {
  stack: CaseStack;
};

export type CaseDecisionsProps = {
  decisions?: CaseDecision[];
};

export type CaseDeploymentProps = {
  deployment?: CaseDeployment;
};

export type CaseMigrationPlanProps = {
  phases?: CaseMigrationPhase[];
};

export type CaseScalingProps = {
  scaling?: string[];
};

export type CaseSecurityProps = {
  security?: string[];
};

export type CaseMonitoringProps = {
  monitoring?: string[];
};

export type CaseChallengesProps = {
  challenges?: CaseChallenge[];
};

export type CaseArtifactsProps = {
  screenshots?: string[];
  title: string;
};

export type CaseResourcesProps = {
  resources?: CaseRepository[];
};
