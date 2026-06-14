import StackSection from "./StackSection";
import type { CloudCaseStudyStack } from "@/types/cloud-case-study";
import CaseReveal from "./CaseReveal";
import CaseSectionHeader from "./CaseSectionHeader";

export default function InfrastructureStack({
  stack,
}: {
  stack: CloudCaseStudyStack;
}) {
  return (
    <CaseReveal className="w-full max-w-7xl">
      <section className="py-16">
        <CaseSectionHeader
          eyebrow="Platform Composition"
          title="Infrastructure Stack"
        />

        <div className="grid gap-4 lg:grid-cols-3">
          <StackSection
            title="Infrastructure"
            items={stack.infrastructure}
          />

          {stack.observability && (
            <StackSection
              title="Observability"
              items={stack.observability}
            />
          )}

          {stack.automation && (
            <StackSection
              title="Automation"
              items={stack.automation}
            />
          )}
        </div>
      </section>
    </CaseReveal>
  );
}
