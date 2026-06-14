import type { CloudCaseStudyDeployment } from "@/types/cloud-case-study";
import CaseReveal from "./CaseReveal";
import CaseSectionHeader from "./CaseSectionHeader";
import CaseSurface from "./CaseSurface";
import { LuArrowRight } from "react-icons/lu";

export default function DeploymentStrategy({
  deployment,
}: {
  deployment?: CloudCaseStudyDeployment;
}) {
  if (!deployment) return null;
  const pipeline = deployment.cicd?.split(/\s+(?:→|â†’)\s+/);

  return (
    <CaseReveal className="w-full max-w-7xl">
      <section className="py-16">
        <CaseSectionHeader
          eyebrow="Release Architecture"
          title="Deployment Strategy"
        />
        <CaseSurface className="relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full" />
          <p className="relative max-w-5xl text-sm leading-7 text-zinc-400 md:text-base">
            {deployment.strategy}
          </p>
          {pipeline && (
            <div className="relative mt-8 pt-4">
              <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                CI/CD Pipeline
              </p>
              <div className="mt-5 flex flex-col gap-3 md:flex-row md:items-center">
                {pipeline.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="rounded-xl px-4 py-3 font-mono text-xs text-violet-100">
                      {step}
                    </div>
                    {index < pipeline.length - 1 && (
                      <LuArrowRight className="rotate-90 text-violet-300/60 md:rotate-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CaseSurface>
      </section>
    </CaseReveal>
  );
}
