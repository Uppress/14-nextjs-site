type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, centered = false }: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#5b721e]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}
