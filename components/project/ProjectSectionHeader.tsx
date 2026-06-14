export default function ProjectSectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-8 md:mb-10">
      <p className="text-[10px] uppercase tracking-[0.3em] text-violet-300/70 md:text-xs">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-poly tracking-tight text-white md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
