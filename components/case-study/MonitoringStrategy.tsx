import CaseReveal from "./CaseReveal";
import CaseSectionHeader from "./CaseSectionHeader";

function getBars(seed: string) {
  let hash = 0;

  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }

  return Array.from({ length: 8 }, (_, i) => {
    const value = Math.abs((hash * (i + 1)) % 100);

    // Keep heights visually balanced
    return 35 + (value % 55); // 35–90%
  });
}

export default function MonitoringStrategy({
  monitoring,
}: {
  monitoring?: string[];
}) {
  if (!monitoring?.length) return null;

  return (
    <CaseReveal className="w-full max-w-7xl">
      <section className="py-16">
        <CaseSectionHeader
          eyebrow="Telemetry Surface"
          title="Monitoring & Observability"
        />

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {monitoring.map((item) => {
            const bars = getBars(item);

            return (
              <div
                key={item}
                className="group rounded-xl border border-white/[0.08] bg-white/[0.035] p-4 transition-colors duration-300 hover:border-emerald-300/25"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-emerald-300/50">
                    Live
                  </span>
                </div>

                <p className="mt-6 text-sm leading-6 text-zinc-300">{item}</p>

                <div className="mt-4 flex h-5 items-end gap-1">
                  {bars.map((height, index) => (
                    <span
                      key={index}
                      className="w-full rounded-sm bg-emerald-300/10 transition-colors duration-300 group-hover:bg-emerald-300/35"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </CaseReveal>
  );
}
