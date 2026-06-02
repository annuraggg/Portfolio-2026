// app/projects/[id]/page.tsx
import { notFound } from "next/navigation";
import projects from "@/data/projects";
import BackButton from "./ProjectBackButton";
import ProjectHeader from "./ProjectHeader";
import ProjectLinks from "./ProjectLinks";
import ProjectCover from "./ProjectCover";
import ProjectDetails from "./ProjectDetails";
import ProjectProblemSolution from "./ProjectProblemSolution";
import ProjectTechnologies from "./ProjectTechnologies";
import ProjectHighlights from "./ProjectHighlights";
import ProjectScreenshots from "./ProjectScreenshots";
import ProjectFooter from "./ProjectFooter";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === String(id));

  if (!project) return notFound();

  return (
    <div className="md:p-16 animate__animated animate__fadeIn">
      <BackButton href="/" />

      <div className="flex mt-5 md:mt-0 items-center justify-center p-10 flex-col">
        <ProjectHeader title={project.title} date={project.date} />
        <ProjectLinks links={project.links} />
        <ProjectCover cover={project.cover as string} title={project.title} />
        <ProjectDetails project={project} />
        <ProjectProblemSolution
          problem={project.problem}
          solution={project.solution}
        />
        <ProjectTechnologies technologies={project.technologies} />
        <ProjectHighlights highlights={project.highlights} />
        <ProjectScreenshots
          screenshots={project.screenshots}
          title={project.title}
        />
        <ProjectFooter />
      </div>
    </div>
  );
}
