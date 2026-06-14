import type { CloudCaseStudyMigrationPhase } from "@/types/cloud-case-study";
import CaseReveal from "./CaseReveal";
import CaseSectionHeader from "./CaseSectionHeader";

export default function MigrationPlan({
  phases,
}: {
  phases?: CloudCaseStudyMigrationPhase[];
}) {
  if (!phases?.length) return null;

  return (
    <CaseReveal className="w-full max-w-7xl">
      <section className="py-16 md:py-24">
        <CaseSectionHeader eyebrow="Execution Sequence" title="Migration Plan" />
        <div className="relative ml-3 border-l border-cyan-300/20 pl-8 md:ml-5 md:pl-12">
          {phases.map((phase, index) => (
            <div key={phase.phase} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[43px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-cyan-300/40 bg-[#101010] md:-left-[59px]">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
              </span>
              <p className="font-mono text-xs text-cyan-300/70">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 text-xl text-white">{phase.phase}</h3>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">
                {phase.description}
              </p>
            </div>
          ))}
          </div>
      </section>
    </CaseReveal>
  );
}
