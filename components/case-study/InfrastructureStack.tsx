import StackSection from "./StackSection";
import SectionTitle from "@/components/shared/SectionTitle";
import type { CloudCaseStudyStack } from "@/types/cloud-case-study";

export default function InfrastructureStack({
  stack,
}: {
  stack: CloudCaseStudyStack;
}) {
  return (
    <div className="mt-20 w-[85vw] md:w-[70vw]">
      <SectionTitle>Infrastructure Stack</SectionTitle>

      <StackSection title="Infrastructure" items={stack.infrastructure} />

      {stack.observability && (
        <StackSection title="Observability" items={stack.observability} />
      )}

      {stack.automation && (
        <StackSection title="Automation" items={stack.automation} />
      )}
    </div>
  );
}
