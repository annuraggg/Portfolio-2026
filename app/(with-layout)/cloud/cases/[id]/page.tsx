import { notFound } from "next/navigation";
import cases from "@/data/cases";
import BackLink from "@/components/shared/BackLink";
import CaseHeader from "@/components/case-study/CaseHeader";
import CaseResources from "@/components/case-study/CaseResources";
import CaseCover from "@/components/case-study/CaseCover";
import CaseDetails from "@/components/case-study/CaseDetails";
import InfrastructureStack from "@/components/case-study/InfrastructureStack";
import EngineeringDecisions from "@/components/case-study/EngineeringDecisions";
import DeploymentStrategy from "@/components/case-study/DeploymentStrategy";
import MigrationPlan from "@/components/case-study/MigrationPlan";
import ScalingStrategy from "@/components/case-study/ScalingStrategy";
import SecurityHighlights from "@/components/case-study/SecurityHighlights";
import MonitoringStrategy from "@/components/case-study/MonitoringStrategy";
import CaseChallenges from "@/components/case-study/CaseChallenges";
import CaseArtifacts from "@/components/case-study/CaseArtifacts";
import CaseFooter from "@/components/case-study/CaseFooter";
import type { DynamicRoutePageProps } from "@/types/routes";

export default async function CasePage({ params }: DynamicRoutePageProps) {
  const { id } = await params;

  const study = cases.find((item) => item.id === String(id));

  if (!study) return notFound();

  const stats = [
    { label: "Infrastructure", value: study.stack.infrastructure.length },
    { label: "Decisions", value: study.engineeringDecisions.length },
    { label: "Controls", value: study.security?.length ?? 0 },
  ];

  return (
    <div className="relative w-[92vw] max-w-[1440px] animate__animated animate__fadeIn">
      <BackLink href="/cloud" />

      <div className="flex flex-col items-center px-1 md:px-6">
        <CaseHeader
          title={study.title}
          system={study.system}
          timeline={study.timeline}
          overview={study.overview}
          stats={stats}
        />

        <CaseCover
          cover={study.cover as string}
          title={study.title}
          description={study.architecture.description}
        />

        <CaseDetails study={study} />

        <InfrastructureStack stack={study.stack} />

        <EngineeringDecisions decisions={study.engineeringDecisions} />

        <DeploymentStrategy deployment={study.deployment} />

        <MigrationPlan phases={study.migrationPlan} />

        <ScalingStrategy scaling={study.scaling} />

        <SecurityHighlights security={study.security} />

        <MonitoringStrategy monitoring={study.monitoring} />

        <CaseChallenges challenges={study.challenges} />

        <CaseArtifacts screenshots={study.screenshots} title={study.title} />

        <CaseResources resources={study.repositories} />

        <CaseFooter />
      </div>
    </div>
  );
}
