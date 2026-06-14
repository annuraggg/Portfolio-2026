import { LuActivity, LuChartNoAxesCombined, LuCircleCheck, LuGauge, LuRadio, LuScrollText } from "react-icons/lu";
import CaseReveal from "./CaseReveal";
import CaseSectionHeader from "./CaseSectionHeader";

const monitoringIcons = [LuActivity, LuCircleCheck, LuScrollText, LuGauge, LuChartNoAxesCombined, LuRadio];

export default function MonitoringStrategy({
  monitoring,
}: {
  monitoring?: string[];
}) {
  if (!monitoring?.length) return null;

  return (
    <CaseReveal className="w-full max-w-7xl">
      <section className="py-16 md:py-24">
        <CaseSectionHeader eyebrow="Telemetry Surface" title="Monitoring & Observability" />
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#090c0d] p-3 md:p-5">
          <div className="mb-3 flex items-center justify-between border-b border-white/10 px-2 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.9)]" />
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-emerald-200/80">
                Operational Visibility
              </p>
            </div>
            <LuActivity className="text-emerald-300/60" />
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {monitoring.map((item, index) => {
              const Icon = monitoringIcons[index % monitoringIcons.length];
              return (
                <div
                  key={item}
                  className="group rounded-xl border border-white/[0.08] bg-white/[0.035] p-4 transition-colors duration-300 hover:border-emerald-300/25"
                >
                  <div className="flex items-center justify-between">
                    <Icon className="text-emerald-300/70" size={18} />
                    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-emerald-300/50">
                      Live
                    </span>
                  </div>
                  <p className="mt-6 text-sm leading-6 text-zinc-300">{item}</p>
                  <div className="mt-4 flex h-5 items-end gap-1">
                    {[35, 62, 48, 80, 56, 92, 68, 84].map((height, barIndex) => (
                      <span
                        key={`${item}-${barIndex}`}
                        className="w-full rounded-sm bg-emerald-300/20 transition-colors duration-300 group-hover:bg-emerald-300/35"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </CaseReveal>
  );
}
