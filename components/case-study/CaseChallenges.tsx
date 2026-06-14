import type { CloudCaseStudyChallenge } from "@/types/cloud-case-study";
import { LuArrowDown, LuCircleAlert, LuCircleCheck } from "react-icons/lu";
import CaseReveal from "./CaseReveal";
import CaseSectionHeader from "./CaseSectionHeader";

export default function Challenges({
  challenges,
}: {
  challenges?: CloudCaseStudyChallenge[];
}) {
  if (!challenges?.length) return null;

  return (
    <CaseReveal className="w-full max-w-7xl">
      <section className="py-16 md:py-24">
        <CaseSectionHeader eyebrow="Engineering Tradeoffs" title="Challenges" />
        <div className="grid gap-4 md:grid-cols-2">
        {challenges.map((challenge, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]"
          >
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-3 text-rose-200">
                <LuCircleAlert />
                <p className="text-[10px] uppercase tracking-[0.24em]">Challenge</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{challenge.problem}</p>
            </div>
            <div className="flex justify-center border-y border-white/10 bg-black/20 py-2">
              <LuArrowDown className="text-cyan-300/60" />
            </div>
            <div className="bg-cyan-300/[0.025] p-5 md:p-6">
              <div className="flex items-center gap-3 text-cyan-200">
                <LuCircleCheck />
                <p className="text-[10px] uppercase tracking-[0.24em]">Solution</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{challenge.solution}</p>
            </div>
          </div>
        ))}
        </div>
      </section>
    </CaseReveal>
  );
}
