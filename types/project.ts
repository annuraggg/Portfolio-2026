export type ProjectLinkSet = {
  github?: string[];
  demo?: string;
};

export type Project = {
  id: string;
  title: string;
  date: string;
  cover?: string;
  role: string;
  timeline: string;
  summary: string;
  description: string;
  problem?: string;
  solution?: string;
  highlights: string[];
  technologies: string[];
  screenshots?: string[];
  links?: ProjectLinkSet;
  development?: boolean;
};

export type ProjectHeaderProps = Pick<Project, "title" | "date">;

export type ProjectCoverProps = {
  cover: string;
  title: string;
};

export type ProjectDetailsProps = {
  project: Project;
};

export type ProjectProblemSolutionProps = Pick<Project, "problem" | "solution">;

export type ProjectTechnologiesProps = Pick<Project, "technologies">;

export type ProjectHighlightsProps = Pick<Project, "highlights">;

export type ProjectScreenshotsProps = {
  screenshots?: string[];
  title: string;
};

export type ProjectLinksProps = {
  links?: ProjectLinkSet;
};

export type ProjectListProps = {
  projects: Project[];
  basePath: string;
};
