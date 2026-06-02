import type { ReactNode } from "react";

export type SectionTitleProps = {
  title: string;
  className?: string;
};

export type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
};

export type BackLinkProps = {
  href: string;
  label?: string;
};

export type CoverImageProps = {
  cover: string;
  title: string;
};

export type AnimatedTagListProps = {
  items: string[];
  className?: string;
  itemClassName?: string;
  initialY?: number;
};

export type GlowEffectProps = {
  projectLoading?: boolean;
};
