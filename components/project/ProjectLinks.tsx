"use client";

export default function ProjectLinks({
  links,
}: {
  links?: { github?: string[]; demo?: string };
}) {
  if (!links) return null;
  return (
    <div className="flex gap-3">
      {links.github?.map((link, index) => (
        <p
          key={link}
          className="text-gray-500 hover:text-blue-500 duration-300 transition-all cursor-pointer"
          onClick={() => window.open(link, "_blank")}
        >
          {links.github?.length === 1 ? "Github" : `Github Link ${index + 1}`}
        </p>
      ))}
      {links.demo && (
        <p
          className="text-gray-500 hover:text-blue-500 duration-300 transition-all cursor-pointer mb-5"
          onClick={() => window.open(links.demo, "_blank")}
        >
          Demo
        </p>
      )}
    </div>
  );
}
