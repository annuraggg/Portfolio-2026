export default function StackSection({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: React.ReactNode;
}) {
  if (!items?.length) return null;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4 text-cyan-200">
        {icon}
        <h3 className="text-xs uppercase tracking-[0.24em]">{title}</h3>
      </div>
      <div className="mt-4 grid gap-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-lg border border-white/[0.07] bg-black/20 px-4 py-3 text-sm text-zinc-300 transition-colors duration-300 hover:border-cyan-300/25 hover:bg-cyan-300/[0.04]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
