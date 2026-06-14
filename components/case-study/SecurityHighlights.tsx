import { LuFingerprint, LuKeyRound, LuLockKeyhole, LuShieldCheck, LuUserRoundCheck } from "react-icons/lu";
import CaseReveal from "./CaseReveal";
import CaseSectionHeader from "./CaseSectionHeader";

const securityIcons = [LuFingerprint, LuShieldCheck, LuKeyRound, LuLockKeyhole, LuUserRoundCheck];

export default function SecurityHighlights({
  security,
}: {
  security?: string[];
}) {
  if (!security?.length) return null;

  return (
    <CaseReveal className="w-full max-w-7xl">
      <section className="py-16 md:py-24">
        <CaseSectionHeader eyebrow="Control Plane" title="Security" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {security.map((item, index) => {
            const Icon = securityIcons[index % securityIcons.length];
            return (
          <div
            key={item}
            className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:border-amber-300/30 hover:bg-amber-300/[0.035]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300/15 bg-amber-300/[0.06] text-amber-200">
              <Icon size={18} />
            </span>
            <p className="mt-6 text-sm leading-6 text-zinc-300">{item}</p>
          </div>
            );
          })}
        </div>
      </section>
    </CaseReveal>
  );
}
