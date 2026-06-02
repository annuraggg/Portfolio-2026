// app/Cases/[id]/page.tsx
import { notFound } from "next/navigation";
import Cases from "@/data/case";
import BackButton from "./CaseBackButton";
import CaseHeader from "./CaseHeader";
import CaseLinks from "./CaseLinks";
import CaseCover from "./CaseCover";
import CaseDetails from "./CaseDetails";
import CaseTechnologies from "./CaseTechnologies";
import CaseFooter from "./CaseFooter";
import CaseStudyArtifacts from "./CaseArtifacts";

interface CasePageProps {
  params: Promise<{ id: string }>;
}

export default async function CasePage({ params }: CasePageProps) {
  const { id } = await params;
  const Case = Cases.find((p) => p.id === String(id));

  if (!Case) return notFound();

  return (
    <div className="md:p-16 animate__animated animate__fadeIn">
      <BackButton href="/" />

      <div className="flex mt-5 md:mt-0 items-center justify-center p-10 flex-col">
        <CaseHeader title={Case.title} system={Case.system} date={Case.date} />
        <CaseLinks resources={Case.repositories} />
        <CaseCover cover={Case.cover as string} title={Case.title} />
        <CaseDetails study={Case} />
        <CaseTechnologies stack={Case.stack} />
        <CaseStudyArtifacts screenshots={Case.screenshots} title={Case.title} />
        <CaseFooter />
      </div>
    </div>
  );
}
