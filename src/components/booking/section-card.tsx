export function SectionCard({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.95)] backdrop-blur xl:p-6">
      <div className="border-b border-white/10 pb-4">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200/70">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="mt-2 text-xl font-semibold text-white">{title}</h2>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            {description}
          </p>
        ) : null}
      </div>
      <div className="pt-5">{children}</div>
    </section>
  );
}
