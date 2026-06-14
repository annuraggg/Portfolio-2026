import ProjectReveal from "./ProjectReveal";
import ProjectSectionHeader from "./ProjectSectionHeader";

export default function ProjectTechnologies({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <ProjectReveal className="w-full max-w-7xl">
      <section className="py-16 md:py-24">
        <ProjectSectionHeader eyebrow="Technical Foundation" title="Technologies" />
        <div className="grid gap-3 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
          {technologies.map((technology, index) => (
            <div
              key={technology}
              className="group flex items-center gap-4 rounded-xl p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300/30 hover:bg-violet-300/[0.04]"
            >
              <div>
                <p className="font-mono text-[9px] text-zinc-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 text-sm text-zinc-200">{technology}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </ProjectReveal>
  );
}
