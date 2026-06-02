export interface ProjectLinks {
  github?: string[];
  demo?: string;
}

export interface Project {
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
  links?: ProjectLinks;
  development?: boolean;
  group?: string;
}
