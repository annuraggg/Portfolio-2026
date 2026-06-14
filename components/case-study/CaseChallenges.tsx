import type { CloudCaseStudyChallenge } from "@/types/cloud-case-study";
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
      <section className="py-16">
        <CaseSectionHeader eyebrow="Engineering Tradeoffs" title="Challenges" />

        <div className="mt-10">
          {challenges.map((challenge, index) => (
            <div key={index} className="py-7 first:pt-0 last:pb-0">
              <div className="mb-6 font-mono text-xs text-zinc-500">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-zinc-100">
                    Challenge
                  </h3>

                  <p className="text-sm leading-7 text-zinc-400">
                    {challenge.problem}
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wide text-cyan-200">
                    Resolution
                  </h3>

                  <p className="text-sm leading-7 text-zinc-400">
                    {challenge.solution}
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
