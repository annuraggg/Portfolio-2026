import Image from "next/image";

const Signature = () => (
  <div className="flex justify-start mt-10">
    <Image
      src="/sign.png"
      width={56}
      height={56}
      alt="Signature"
      className="invert-[0.8]"
    />
  </div>
);

export default Signature;
