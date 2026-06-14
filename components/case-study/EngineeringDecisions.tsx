import type { CloudCaseStudyDecision } from "@/types/cloud-case-study";
import CaseReveal from "./CaseReveal";
import CaseSectionHeader from "./CaseSectionHeader";

export default function EngineeringDecisions({
  decisions,
}: {
  decisions?: CloudCaseStudyDecision[];
}) {
  if (!decisions?.length) return null;

  return (
    <CaseReveal className="w-full max-w-7xl">
      <section className="py-16">
        <CaseSectionHeader
          eyebrow="Architecture Decision Records"
          title="Engineering Decisions"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {decisions.map((decision, index) => (
          <div
            key={decision.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/[0.06] blur-3xl transition-colors duration-300" />
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-cyan-300/70"> 
                ADR-{String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="relative text-xl text-white">{decision.title}</h3>
            <div className="relative flex gap-3 pt-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                  Impact
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {decision.reason}
                </p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </section>
    </CaseReveal>
  );
}
