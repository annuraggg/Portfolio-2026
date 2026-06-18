import ShowcaseCard from "@/components/shared/ShowcaseCard";
import projects from "@/data/projects";

export default function ProjectList({
  limit,
  showCategory = false,
}: {
  limit?: number;
  showCategory?: boolean;
}) {
  const visibleProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="flex flex-col md:gap-5 w-full">
      {visibleProjects.map((project) => (
        <ShowcaseCard
          key={project.id}
          href={`/fullstack/projects/${project.id}`}
          category={showCategory ? "Fullstack Project" : undefined}
          item={{
            id: project.id,
            title: project.title,
            summary: project.summary,
            cover: project.cover,
            coverSizes: "(max-width: 768px) 82vw, 50vw",
            badge: project.development ? "Work In Progress!" : undefined,
          }}
        />
      ))}
    </div>
  );
}
