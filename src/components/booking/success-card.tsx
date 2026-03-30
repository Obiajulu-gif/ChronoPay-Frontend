export function SuccessCard() {
  return (
    <article className="rounded-[24px] border border-emerald-400/20 bg-emerald-400/10 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-100/80">
        Success state
      </p>
      <h3 className="mt-3 text-2xl font-semibold text-white">
        Booking confirmed.
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-100/85">
        Your slot is reserved, escrow is active, and the receipt is ready to
        share with the host or your team.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-500/10"
        >
          Add to calendar
        </button>
        <button
          type="button"
          className="rounded-full border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-500/10"
        >
          View receipt
        </button>
      </div>
    </article>
  );
}
