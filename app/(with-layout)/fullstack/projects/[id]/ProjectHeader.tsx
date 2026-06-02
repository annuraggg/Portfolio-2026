export default function ProjectHeader({
  title,
  date,
}: {
  title: string;
  date: string;
}) {
  return (
    <>
      <h1 className="text-xl md:text-5xl font-poly drop-shadow-glow">
        {title}
      </h1>
      <p className="text-gray-500 mt-5">{date}</p>
    </>
  );
}
