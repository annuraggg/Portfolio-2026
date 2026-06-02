import { CiCoffeeCup } from "react-icons/ci";

export default function CoffeeLink() {
  return (
    <a
      href="https://buymeacoffee.com/annuraggg"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-10 p-3 transition-all duration-300 cursor-pointer rounded-full bg-white/0 hover:bg-white/10"
      aria-label="Buy me a coffee"
    >
      <CiCoffeeCup size={30} />
    </a>
  );
}
