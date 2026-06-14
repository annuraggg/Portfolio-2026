import Image from "next/image";
import CoffeeLink from "@/components/shared/CoffeeLink";

export default function CaseStudyFooter() {
  return (
    <div className="mt-16 flex w-full max-w-7xl flex-col items-center justify-center border-t border-white/10 py-20">
      <p className="text-xl font-poly mb-5 text-center">
        Built with curiosity and coffee.
      </p>

      <Image
        src="/sign.png"
        alt="Signature"
        width={56}
        height={56}
        className="invert w-14 opacity-80"
      />

      <CoffeeLink />
    </div>
  );
}
