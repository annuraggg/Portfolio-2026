export default function CaseSurface({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl ${className}`}
    >
      {children}
    </div>
  );
}
