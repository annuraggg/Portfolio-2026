import Link from "next/link";
import { footerNavigation } from "@/data/navigation";

const FooterNavigation = () => {
  return (
    <div>
      <p className="text-gray-500 mb-2 text-xs">MAIN</p>
      <div className="text-lg flex flex-col gap-2">
        {footerNavigation.map((item) => (
          <Link
            key={item.name}
            className="hover:text-blue-500 duration-300 transition-all cursor-pointer"
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterNavigation;
