import type { SectionTitleProps } from "@/types/ui";

export default function SectionTitle({ title, className }: SectionTitleProps) {
  return (
    <h1
      className={`text-center text-3xl font-poly mb-10 drop-shadow-glow ${className ?? ""}`}
    >
      {title}
    </h1>
  );
}
