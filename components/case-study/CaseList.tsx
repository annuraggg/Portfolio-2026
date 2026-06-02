import ShowcaseCard from "@/components/shared/ShowcaseCard";
import cases from "@/data/cases";

export default function CaseList() {
  return (
    <div className="flex flex-col md:gap-5 w-full">
      {cases.map((study) => (
        <ShowcaseCard
          key={study.id}
          href={`/cloud/cases/${study.id}`}
          item={{
            id: study.id,
            title: study.title,
            summary: study.overview,
            cover: study.cover,
          }}
        />
      ))}
    </div>
  );
}
