export default function CaseSectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 md:mb-12 max-w-3xl">
      <p className="text-[10px] md:text-xs uppercase tracking-[0.32em] text-cyan-300/70">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl md:text-5xl font-poly tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm md:text-base leading-7 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
