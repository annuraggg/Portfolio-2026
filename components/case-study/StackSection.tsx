import AnimatedTagList from "@/components/shared/AnimatedTagList";

export default function StackSection({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (!items?.length) return null;

  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      <AnimatedTagList items={items} />
    </div>
  );
}
