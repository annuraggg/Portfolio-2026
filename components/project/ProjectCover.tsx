import Image from "next/image";

export default function ProjectCover({
  cover,
  title,
}: {
  cover: string;
  title: string;
}) {
  return (
    <div className="relative w-[80vw] md:w-auto">
      <Image
        src={cover}
        alt={title}
        width={1200}
        height={600}
        className="rounded-2xl mt-20 w-[100vw] md:w-[80vw]"
      />
      <Image
        src={cover}
        alt={`${title} blur bg`}
        width={1200}
        height={600}
        className="rounded-2xl mt-20 w-[100vw] md:w-[80vw] absolute top-[-40px] blur-[500px] -z-50 opacity-30"
      />
      <Image
        src={cover}
        alt={`${title} blur bg`}
        width={1200}
        height={600}
        className="rounded-2xl mt-20 w-[100vw] md:w-[80vw] absolute top-20 blur-[500px] -z-50 opacity-30"
      />
    </div>
  );
}
