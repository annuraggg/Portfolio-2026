import type { CloudCaseStudy } from "@/types/cloud-case-study";
import { LuCalendarClock, LuCloudCog, LuNetwork } from "react-icons/lu";
import CaseReveal from "./CaseReveal";
import CaseSurface from "./CaseSurface";

export default function CaseStudyDetails({ study }: { study: CloudCaseStudy }) {
  return (
    <CaseReveal className="w-full max-w-7xl">
      <section className="grid gap-4 py-6 md:grid-cols-[0.8fr_1.2fr]">
        <CaseSurface className="p-6 md:p-8">
          <div className="flex items-center gap-3 text-cyan-200">
            <LuNetwork size={19} />
            <p className="text-xs uppercase tracking-[0.24em]">System</p>
          </div>
          <p className="mt-5 text-2xl text-white">{study.system}</p>
          <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5 text-zinc-400">
            <LuCalendarClock size={18} className="text-cyan-300/70" />
            <p className="text-sm">{study.timeline}</p>
          </div>
        </CaseSurface>
        <CaseSurface className="relative overflow-hidden p-6 md:p-8">
          <div className="absolute -right-14 -top-20 h-44 w-44 rounded-full bg-cyan-300/[0.08] blur-3xl" />
          <div className="flex items-center gap-3 text-cyan-200">
            <LuCloudCog size={19} />
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
