import type { ProjectLinks as ProjectLinksData } from "@/types/project";
import { LuArrowUpRight, LuGithub, LuMonitorPlay } from "react-icons/lu";
import ProjectReveal from "./ProjectReveal";
import ProjectSectionHeader from "./ProjectSectionHeader";

export default function ProjectLinks({
  links,
}: {
  links?: ProjectLinksData;
}) {
  if (!links) return null;
  return (
    <ProjectReveal className="w-full max-w-7xl">
      <section className="py-16 md:py-20">
        <ProjectSectionHeader eyebrow="Project Links" title="Explore the Build" />
        <div className="grid gap-4 md:grid-cols-2">
          {links.github?.map((link, index) => (
            <a
              key={link}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:bg-violet-300/[0.04]"
            >
              <div className="flex items-center gap-4">
                <span className="rounded-xl border border-white/10 bg-black/30 p-3 text-violet-200">
                  <LuGithub size={20} />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                    Source Code
                  </p>
                  <p className="mt-1 text-lg text-zinc-100">
                    {links.github?.length === 1 ? "Github" : `Github Link ${index + 1}`}
                  </p>
                </div>
              </div>
              <LuArrowUpRight className="text-zinc-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-200" />
            </a>
          ))}
          {links.demo && (
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:bg-violet-300/[0.04]"
            >
              <div className="flex items-center gap-4">
                <span className="rounded-xl border border-white/10 bg-black/30 p-3 text-violet-200">
                  <LuMonitorPlay size={20} />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                    Live Product
                  </p>
                  <p className="mt-1 text-lg text-zinc-100">Demo</p>
                </div>
              </div>
              <LuArrowUpRight className="text-zinc-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-200" />
            </a>
          )}
        </div>
      </section>
    </ProjectReveal>
  );
}
