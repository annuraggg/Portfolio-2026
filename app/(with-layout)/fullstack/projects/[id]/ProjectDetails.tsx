import { Project } from "@/data/projects";

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="flex md:flex-row flex-col text-center md:text-start mt-20 w-[85vw] md:w-[70vw]">
      <div className="md:w-[50%]">
        <div>
          <b>My Role</b>
          <p className="text-gray-500">{project.role}</p>
        </div>

        <div className="mt-5">
          <b>Timeline</b>
          <p className="text-gray-500">{project.timeline}</p>
        </div>

        {project.links?.github && (
          <div className="mt-5">
            <b>Github</b>
            {project.links.github.map((link) => (
              <p
                key={link}
                className="text-gray-500 hover:text-blue-500 duration-200 transition-all cursor-pointer"
              >
                {link}
              </p>
            ))}
          </div>
        )}

        {project.links?.demo && (
          <div className="mt-5">
            <b>Demo</b>
            <p className="text-gray-500">{project.links.demo}</p>
          </div>
        )}
      </div>

      <div className="md:w-[52%] mt-10 md:mt-0">
        <b>Overview</b>
        <p className="mt-5 text-gray-500">{project.description}</p>
      </div>
    </div>
  );
}
