import type { Project } from "@/types/project";
import { LuCalendarClock, LuLayers3, LuUserRoundCog } from "react-icons/lu";
import ProjectReveal from "./ProjectReveal";
import ProjectSurface from "./ProjectSurface";

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <ProjectReveal className="w-full max-w-7xl">
      <section className="grid gap-4 py-16 md:grid-cols-[0.7fr_1.3fr] md:py-24">
        <div className="grid">
          <ProjectSurface className="p-5 md:p-6">
            <div className="flex items-center gap-3 ">
              <p className="text-[10px] uppercase tracking-[0.24em]">My Role</p>
            </div>
            <p className="text-xl text-white">{project.role}</p>
          </ProjectSurface>
          <ProjectSurface className="p-5 md:p-6">
            <div className="flex items-center gap-3 ">
              <p className="text-[10px] uppercase tracking-[0.24em]">Timeline</p>
            </div>
            <p className="text-sm leading-6 text-zinc-300">{project.timeline}</p>
          </ProjectSurface>
        </div>
        <ProjectSurface className="relative overflow-hidden p-6 md:p-8">
          <div className="absolute -right-16 -top-20 h-44 w-44 rounded-full bg-violet-300/[0.08] blur-3xl" />
          <div className="flex items-center gap-3 ">
            <p className="text-[10px] uppercase tracking-[0.24em]">Overview</p>
          </div>
          <p className="relative text-sm leading-7 text-zinc-400 md:text-base">
            {project.description}
          </p>
        </ProjectSurface>
      </section>
    </ProjectReveal>
  );
}
