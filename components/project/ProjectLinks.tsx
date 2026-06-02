import type { ProjectLinks as ProjectLinksData } from "@/types/project";

export default function ProjectLinks({
  links,
}: {
  links?: ProjectLinksData;
}) {
  if (!links) return null;
  return (
    <div className="flex gap-3">
      {links.github?.map((link, index) => (
        <a
          key={link}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-500 duration-300 transition-all cursor-pointer"
        >
          {links.github?.length === 1 ? "Github" : `Github Link ${index + 1}`}
        </a>
      ))}
      {links.demo && (
        <a
          href={links.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-500 duration-300 transition-all cursor-pointer mb-5"
        >
          Demo
        </a>
      )}
    </div>
  );
}
