import CaseReveal from "./CaseReveal";
import CaseSectionHeader from "./CaseSectionHeader";

export default function SecurityHighlights({
  security,
}: {
  security?: string[];
}) {
  if (!security?.length) return null;

  return (
    <CaseReveal className="w-full max-w-7xl">
      <section className="py-16">
        <CaseSectionHeader eyebrow="Control Plane" title="Security" />

        <ul className="mt-8 space-y-4">
          {security.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-sm leading-6 text-zinc-300"
            >
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300/70 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </CaseReveal>
  );
}
