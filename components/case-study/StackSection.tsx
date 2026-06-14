export default function StackSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (!items?.length) return null;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 md:p-6">
      <div className="flex items-center gap-3 pb-4 text-cyan-200">
        <h3 className="text-xs uppercase tracking-[0.24em]">{title}</h3>
      </div>
      <div className="mt-4 grid gap-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-lg border border-white/[0.07] bg-black/20 px-4 py-3 text-sm text-zinc-300 transition-colors duration-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
