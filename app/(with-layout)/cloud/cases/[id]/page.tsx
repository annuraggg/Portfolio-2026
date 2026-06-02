// app/Cases/[id]/page.tsx

import { notFound } from "next/navigation";

import Cases from "@/data/case";

import BackButton from "./BackButton";
import Header from "./Header";
import Links from "./Links";
import Cover from "./Cover";
import Details from "./Details";
import Technologies from "./Technologies";
import EngineeringDecisions from "./EngineeringDecisions";
import DeploymentStrategy from "./DeploymentStrategy";
import MigrationPlan from "./MigrationPlan";
import ScalingStrategy from "./ScalingStrategy";
import SecurityHighlights from "./SecurityHighlights";
import MonitoringStrategy from "./MonitoringStrategy";
import Challenges from "./Challenges";
import StudyArtifacts from "./Artifacts";
import Footer from "./Footer";

interface CasePageProps {
  params: Promise<{ id: string }>;
}

export default async function CasePage({ params }: CasePageProps) {
  const { id } = await params;

  const Case = Cases.find((p) => p.id === String(id));

  if (!Case) return notFound();

  return (
    <div className="animate__animated animate__fadeIn">
      <BackButton href="/cloud" />

      <div className="flex mt-5 md:mt-0 items-center justify-center p-10 flex-col">
        <Header title={Case.title} system={Case.system} date={Case.date} />

        <Links resources={Case.repositories} />

        <Cover cover={Case.cover as string} title={Case.title} />

        <Details study={Case} />

        <Technologies stack={Case.stack} />

        <EngineeringDecisions decisions={Case.engineeringDecisions} />

        <DeploymentStrategy deployment={Case.deployment} />

        <MigrationPlan phases={Case.migrationPlan} />

        <ScalingStrategy scaling={Case.scaling} />

        <SecurityHighlights security={Case.security} />

        <MonitoringStrategy monitoring={Case.monitoring} />

        <Challenges challenges={Case.challenges} />

        <StudyArtifacts screenshots={Case.screenshots} title={Case.title} />

        <Footer />
      </div>
    </div>
  );
}
