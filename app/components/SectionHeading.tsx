type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

// Reusable eyebrow + title + description block used by body sections.
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`flex max-w-2xl flex-col gap-4 ${
        isCenter ? "mx-auto items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-stone-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-stone-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
