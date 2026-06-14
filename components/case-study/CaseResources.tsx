import type { CloudCaseStudyResource } from "@/types/cloud-case-study";
import { LuArrowUpRight, LuGithub } from "react-icons/lu";
import CaseReveal from "./CaseReveal";
import CaseSectionHeader from "./CaseSectionHeader";

export default function ResourceLinks({
  resources,
}: {
  resources?: CloudCaseStudyResource[];
}) {
  if (!resources?.length) return null;

  return (
    <CaseReveal className="w-full max-w-7xl">
      <section className="py-16">
        <CaseSectionHeader eyebrow="Engineering Artifacts" title="Resources" />
        <div className="grid gap-4 md:grid-cols-2">
          {resources.map((resource) => (
            <a
              key={resource.url}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06]"
            >
              <div className="flex items-center gap-4">
                <span className="rounded-xl border border-white/10 bg-black/30 p-3 text-cyan-200">
                  <LuGithub size={20} />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                    Repository
                  </p>
                  <p className="mt-1 text-lg text-zinc-100">{resource.title}</p>
                </div>
              </div>
              <LuArrowUpRight className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-200" />
            </a>
          ))}
        </div>
      </section>
    </CaseReveal>
  );
}
