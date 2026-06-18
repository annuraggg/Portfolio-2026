export interface NavigationItem {
  name: string;
  href: string;
}

export interface Skill {
  title: string;
  progress?: string;
}

export interface SkillItemProps extends Skill {
  index: number;
}

export interface Credential {
  title: string;
  date: string;
  link: string;
  organization: string;
}

export interface Experience {
  title: string;
  date: string;
  description: string;
  role: string;
}

export interface ShowcaseItem {
  id: string;
  title: string;
  summary: string;
  cover?: string;
  coverSizes?: string;
  badge?: string;
}
