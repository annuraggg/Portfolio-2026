"use client";

interface Resource {
  title: string;
  url: string;
}

export default function ResourceLinks({
  resources,
}: {
  resources?: Resource[];
}) {
  if (!resources?.length) return null;

  return (
    <div className="flex gap-3 flex-wrap">
      {resources.map((resource) => (
        <p
          key={resource.url}
          className="text-gray-500 hover:text-blue-500 transition-all duration-300 cursor-pointer"
          onClick={() => window.open(resource.url, "_blank")}
        >
          {resource.title}
        </p>
      ))}
    </div>
  );
}
