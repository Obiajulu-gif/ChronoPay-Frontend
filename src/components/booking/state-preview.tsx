import type { StateKind } from "./types";

export function StatePreview({ state }: { state: StateKind }) {
  return (
    <article
      className="rounded-[24px] border border-white/10 bg-white/5 p-5"
      aria-live={state === "loading" ? "polite" : undefined}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
        {state} state
      </p>
      <h3 className="mt-3 text-lg font-semibold text-white">
        {state === "loading"
          ? "Checking slot availability"
          : state === "empty"
            ? "No matching slots"
            : "Payment hold failed"}
      </h3>
      <div className="mt-4">
        {state === "loading" ? (
          <div className="space-y-3" aria-hidden="true">
            <div className="h-3 w-2/3 animate-pulse rounded-full bg-white/10" />
            <div className="h-10 w-full animate-pulse rounded-2xl bg-white/10" />
            <div className="h-10 w-full animate-pulse rounded-2xl bg-white/10" />
          </div>
        ) : (
          <p className="text-sm leading-6 text-slate-300">
            {state === "empty"
              ? "Offer alternatives and filters instead of showing a dead end when inventory is gone."
              : "Keep the selected slot visible and provide a clear retry path if escrow or wallet sync fails."}
          </p>
        )}
      </div>
      <button
        type="button"
        className="mt-5 inline-flex rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
      >
        {state === "error" ? "Retry payment hold" : "Review options"}
      </button>
    </article>
  );
}
