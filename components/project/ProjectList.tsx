import ShowcaseCard from "@/components/shared/ShowcaseCard";
import projects from "@/data/projects";

export default function ProjectList() {
  return (
    <div className="flex flex-col md:gap-5 w-full">
      {projects.map((project) => (
        <ShowcaseCard
          key={project.id}
          href={`/fullstack/projects/${project.id}`}
          item={{
            id: project.id,
            title: project.title,
            summary: project.summary,
            cover: project.cover,
            badge: project.development ? "Work In Progress!" : undefined,
          }}
        />
      ))}
    </div>
  );
}
