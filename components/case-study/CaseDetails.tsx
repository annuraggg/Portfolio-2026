import type { CloudCaseStudy } from "@/types/cloud-case-study";
import CaseReveal from "./CaseReveal";
import CaseSurface from "./CaseSurface";

export default function CaseStudyDetails({ study }: { study: CloudCaseStudy }) {
  return (
    <CaseReveal className="w-full max-w-7xl">
      <section className="grid gap-4 py-6 md:grid-cols-[0.8fr_1.2fr]">
        <CaseSurface className="p-6 md:p-8">
          <div className="flex items-center gap-3 text-cyan-200">
            <p className="text-xs uppercase tracking-[0.24em]">System</p>
          </div>
          <p className="mt-5 text-2xl text-white">{study.system}</p>
          <div className="mt-8 flex items-center gap-3 text-zinc-400">
            <p className="text-sm">{study.timeline}</p>
          </div>
        </CaseSurface>
        <CaseSurface className="relative overflow-hidden p-6 md:p-8">
          <div className="absolute -right-14 -top-20 h-44 w-44 rounded-full blur-3xl" />
          <div className="flex items-center gap-3 text-cyan-200">
            <p className="text-xs uppercase tracking-[0.24em]">Architecture</p>
          </div>
          <p className="relative mt-5 text-sm leading-7 text-zinc-400 md:text-base">
            {study.architecture.description}
          </p>
        </CaseSurface>
      </section>
    </CaseReveal>
  );
}
