import Image from "next/image";

export default function ProjectScreenshots({
  screenshots,
  title,
}: {
  screenshots?: string[];
  title: string;
}) {
  if (!screenshots) return null;

  return (
    <div className="mt-20">
      <h1 className="text-center text-3xl font-poly mb-10 drop-shadow-glow">
        Screenshots
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 w-[70vw]">
        {screenshots.map((s, index) => (
          <Image
            key={index}
            src={s}
            alt={`${title} Screenshot ${index + 1}`}
            width={800}
            height={600}
            className="rounded-lg border-gray-600 border mt-5"
          />
        ))}
      </div>
    </div>
  );
}
