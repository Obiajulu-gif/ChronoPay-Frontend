import type { ConfirmationItem } from "./types";

export function ConfirmationSummary({
  items,
}: {
  items: ConfirmationItem[];
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5">
      <dl className="space-y-4">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-start justify-between gap-4 border-b border-white/8 pb-4 last:border-b-0 last:pb-0"
          >
            <dt className="text-sm text-slate-300">{item.label}</dt>
            <dd className="text-right text-sm font-medium text-white">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
      <button
        type="button"
        className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        Confirm and hold escrow
      </button>
    </div>
  );
}
