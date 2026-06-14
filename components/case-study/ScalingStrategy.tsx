import { LuArrowDown, LuExpand, LuGitBranch } from "react-icons/lu";
import CaseReveal from "./CaseReveal";
import CaseSectionHeader from "./CaseSectionHeader";

export default function ScalingStrategy({
  scaling,
}: {
  scaling?: string[];
}) {
  if (!scaling?.length) return null;

  return (
    <CaseReveal className="w-full max-w-7xl">
      <section className="py-16 md:py-24">
        <CaseSectionHeader eyebrow="Capacity Model" title="Scaling Strategy" />
        <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
          {scaling.map((item, index) => (
            <div key={item} className="contents">
              <div className="group min-h-32 rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-emerald-300/30 hover:bg-emerald-300/[0.04]">
                <div className="flex items-center justify-between text-emerald-300/70">
                  {index % 2 === 0 ? <LuExpand /> : <LuGitBranch />}
                  <span className="font-mono text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-6 text-sm leading-6 text-zinc-300">{item}</p>
              </div>
              {index < scaling.length - 1 && (
                <LuArrowDown className="mx-auto text-emerald-300/45 lg:rotate-[-90deg]" />
              )}
            </div>
          ))}
        </div>
      </section>
    </CaseReveal>
  );
}
