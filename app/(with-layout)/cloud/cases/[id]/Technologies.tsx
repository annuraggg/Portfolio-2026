import StackSection from "./StackSection";

export default function InfrastructureStack({
  stack,
}: {
  stack: {
    infrastructure: string[];
    observability?: string[];
    automation?: string[];
  };
}) {
  return (
    <div className="mt-20 w-[85vw] md:w-[70vw]">
      <h1 className="text-center text-3xl font-poly mb-10 drop-shadow-glow">
        Infrastructure Stack
      </h1>

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
