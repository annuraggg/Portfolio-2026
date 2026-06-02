import { notFound } from "next/navigation";
import projects from "@/data/projects";
import BackLink from "@/components/shared/BackLink";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectLinks from "@/components/project/ProjectLinks";
import ProjectCover from "@/components/project/ProjectCover";
import ProjectDetails from "@/components/project/ProjectDetails";
import ProjectProblemSolution from "@/components/project/ProjectProblemSolution";
import ProjectTechnologies from "@/components/project/ProjectTechnologies";
import ProjectHighlights from "@/components/project/ProjectHighlights";
import ProjectScreenshots from "@/components/project/ProjectScreenshots";
import ProjectFooter from "@/components/project/ProjectFooter";
import type { DynamicRoutePageProps } from "@/types/routes";

export default async function ProjectPage({ params }: DynamicRoutePageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === String(id));

  if (!project) return notFound();

  return (
    <div className="md:p-16 animate__animated animate__fadeIn">
      <BackLink href="/fullstack" />

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
