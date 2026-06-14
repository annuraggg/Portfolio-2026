import ProjectReveal from "./ProjectReveal";
import ProjectSectionHeader from "./ProjectSectionHeader";

export default function ProjectHighlights({
  highlights,
}: {
  highlights: string[];
}) {
  return (
    <ProjectReveal className="w-full max-w-7xl">
      <section className="py-16 md:py-24">
        <ProjectSectionHeader eyebrow="Product Capabilities" title="Highlights" />
        <div className="grid gap-4 md:grid-cols-2">
          {highlights.map((highlight, index) => (
            <div
              key={highlight}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-violet-300/30"
            >
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-violet-300/[0.05] blur-3xl transition-colors group-hover:bg-violet-300/[0.12]" />
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-violet-300/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="relative mt-6 text-sm leading-7 text-zinc-300">{highlight}</p>
            </div>
          ))}
        </div>
      </section>
    </ProjectReveal>
  );
}
