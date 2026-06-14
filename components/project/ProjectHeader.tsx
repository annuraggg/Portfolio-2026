export default function ProjectHeader({
  title,
  date,
  summary,
  role,
  timeline,
  development,
}: {
  title: string;
  date: string;
  summary: string;
  role: string;
  timeline: string;
  development?: boolean;
}) {
  return (
    <section className="relative mx-auto flex min-h-[62vh] w-full max-w-6xl flex-col items-center justify-center overflow-hidden px-2 pb-12 pt-24 text-center md:px-6 md:pt-28">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/[0.07] blur-[140px]" />
      <div className="mb-6 flex items-center gap-3 rounded-full border border-violet-300/20 bg-violet-300/[0.06] px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-violet-200">
        <span className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.9)]" />
        {development ? "Work In Progress" : "Fullstack Project"}
      </div>
      <h1 className="max-w-5xl bg-gradient-to-b from-white via-zinc-100 to-zinc-500 bg-clip-text text-5xl leading-[0.98] tracking-[-0.055em] text-transparent md:text-8xl lg:text-9xl">
        {title}
      </h1>
      <p className="mt-8 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">
        {summary}
      </p>
      <p className="mt-6 text-xs uppercase tracking-[0.28em] text-zinc-500">
        {date}
      </p>
      <div className="mt-10 grid w-full max-w-2xl grid-cols-2 overflow-hidden rounded-2xl">
        <div className="px-4 py-5">
          <p className="text-[9px] uppercase tracking-[0.22em] text-zinc-500 md:text-xs">
            Role
          </p>
          <p className="mt-2 text-sm text-zinc-200 md:text-base">{role}</p>
        </div>
        <div className="px-4 py-5">
          <p className="text-[9px] uppercase tracking-[0.22em] text-zinc-500 md:text-xs">
            Timeline
          </p>
          <p className="mt-2 text-sm text-zinc-200 md:text-base">{timeline}</p>
        </div>
      </div>
    </section>
  );
}
