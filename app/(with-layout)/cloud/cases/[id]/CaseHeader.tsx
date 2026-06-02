export default function CaseStudyHeader({
  title,
  system,
  date,
}: {
  title: string;
  system: string;
  date: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">
        {system}
      </p>

      <h1 className="text-3xl md:text-5xl font-poly drop-shadow-glow max-w-4xl">
        {title}
      </h1>

      <p className="text-gray-500 mt-5">{date}</p>
    </div>
  );
}
