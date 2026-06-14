export default function ProjectProblemSolution({
  problem,
  solution,
}: {
  problem?: string;
  solution?: string;
}) {
  if (!problem || !solution) return null;

  return (
    <ProjectReveal className="w-full max-w-7xl">
      <section className="py-16 md:py-24">
        <ProjectSectionHeader eyebrow="Product Thinking" title="Problem & Solution" />
        <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
          <div className="rounded-2xl p-6">
            <div className="flex items-center gap-3 text-rose-200">
              <p className="text-[14px] uppercase tracking-[0.24em]">The Problem</p>
            </div>
            <p className="text-sm leading-7 text-zinc-400 mt-3">{problem}</p>
          </div>
          <LuArrowRight className="mx-auto rotate-90 self-center text-violet-300/50 md:rotate-0" />
          <div className="rounded-2xl p-6">
            <div className="flex items-center gap-3 text-emerald-200">
              <p className="text-[14px] uppercase tracking-[0.24em]">The Solution</p>
            </div>
            <p className="text-sm leading-7 text-zinc-400 mt-3">{solution}</p>
          </div>
        </div>
      </section>
    </ProjectReveal>
  );
}
import { LuArrowRight, LuCircleAlert, LuCircleCheck } from "react-icons/lu";
import ProjectReveal from "./ProjectReveal";
import ProjectSectionHeader from "./ProjectSectionHeader";
