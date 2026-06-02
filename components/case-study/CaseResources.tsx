import type { CloudCaseStudyResource } from "@/types/cloud-case-study";

export default function ResourceLinks({
  resources,
}: {
  resources?: CloudCaseStudyResource[];
}) {
  if (!resources?.length) return null;

  return (
    <div className="flex gap-3 flex-wrap">
      {resources.map((resource) => (
        <a
          key={resource.url}
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-500 transition-all duration-300 cursor-pointer"
        >
          {resource.title}
        </a>
      ))}
    </div>
  );
}
