import Image from "next/image";

const Badge = () => {
  return (
    <Image
      src="/badge.png"
      width={300}
      height={300}
      className={`md:w-80 w-24 cursor-pointer animate__animated transition-all duration-300`}
      alt="Badge"
    />
  );
};

export default Badge;
