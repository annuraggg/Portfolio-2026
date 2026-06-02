export type SocialIconKey =
  | "coffee"
  | "discord"
  | "linkedin"
  | "github"
  | "instagram";

export type SocialLink = {
  name: string;
  url: string;
  icon?: SocialIconKey;
};
