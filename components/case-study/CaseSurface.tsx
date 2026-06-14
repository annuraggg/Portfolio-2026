export default function CaseSurface({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] shadow-[0_24px_90px_rgba(0,0,0,0.28)] ${className}`}
    >
      {children}
    </div>
  );
}
