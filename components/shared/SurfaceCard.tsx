import type { SurfaceCardProps } from "@/types/ui";

export default function SurfaceCard({ children, className }: SurfaceCardProps) {
  return (
    <div
      className={`rounded-lg border border-white/10 bg-white/5 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
