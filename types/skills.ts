export type Skill = {
  title: string;
  progress?: string;
};

export type Credential = {
  title: string;
  date: string;
  link: string;
  organization: string;
};

export type SkillItemProps = Skill & {
  index: number;
};

export type CredentialItemProps = Credential;
