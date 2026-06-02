export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-center text-3xl font-poly mb-10 drop-shadow-glow">
      {children}
    </h2>
  );
}
