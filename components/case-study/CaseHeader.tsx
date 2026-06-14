export default function CaseStudyHeader({
  title,
  system,
  timeline,
  overview,
  stats,
}: {
  title: string;
  system: string;
  timeline: string;
  overview: string;
  stats: { label: string; value: number }[];
}) {
  return (
    <section className="relative mx-auto flex min-h-[72vh] w-full max-w-6xl flex-col items-center justify-center overflow-hidden px-2 pb-16 text-center md:px-6 md:pt-32">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-[140px]" />
      <div className="mb-7 flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-[10px] uppercase tracking-[0.34em] text-cyan-200">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.9)]" />
        {system}
      </div>
      <h1 className="max-w-5xl bg-gradient-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-5xl leading-[0.98] tracking-[-0.06em] text-transparent md:text-8xl lg:text-9xl">
        {title}
      </h1>
      <p className="mt-7 text-xs uppercase tracking-[0.28em] text-zinc-500">
        {timeline}
      </p>
      <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
        {overview}
      </p>
      <div className="mt-12 grid w-full max-w-3xl grid-cols-3 overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur-xl">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-r border-white/10 px-3 py-5 last:border-r-0 md:px-6"
          >
            <p className="text-2xl text-white md:text-4xl">{stat.value}</p>
            <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-zinc-500 md:text-xs">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
