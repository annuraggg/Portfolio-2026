import ShowcaseCard from "@/components/shared/ShowcaseCard";
import cases from "@/data/cases";

export default function CaseList({
  limit,
  showCategory = false,
}: {
  limit?: number;
  showCategory?: boolean;
}) {
  const visibleCases = limit ? cases.slice(0, limit) : cases;

  return (
    <div className="flex flex-col md:gap-5 w-full">
      {visibleCases.map((study) => (
        <ShowcaseCard
          key={study.id}
          href={`/cloud/cases/${study.id}`}
          category={showCategory ? "Cloud Case Study" : undefined}
          item={{
            id: study.id,
            title: study.title,
            summary: study.overview,
            cover: study.cardCover ?? study.cover,
            coverSizes: "(max-width: 768px) 82vw, 50vw",
          }}
        />
      ))}
    </div>
  );
}
