import Image from "next/image";
import CoffeeLink from "@/components/shared/CoffeeLink";

export default function ProjectFooter() {
  return (
    <div className="mt-20 flex items-center justify-center flex-col">
      <p className="text-xl mb-5">Thank you</p>
      <Image
        src="/sign.png"
        alt="Signature"
        width={56}
        height={56}
        className="invert w-14"
      />
      <CoffeeLink />
    </div>
  );
}
