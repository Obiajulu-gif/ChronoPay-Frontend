import type { Step } from "./types";

function stepStyle(status: Step["status"]) {
  if (status === "complete") {
    return "border-emerald-400/30 bg-emerald-400/10 text-emerald-100";
  }

  if (status === "current") {
    return "border-cyan-400/30 bg-cyan-400/10 text-cyan-100";
  }

  return "border-white/10 bg-white/5 text-slate-300";
}

export function Stepper({ steps }: { steps: Step[] }) {
  return (
    <ol className="grid gap-3 md:grid-cols-3" aria-label="Booking progress">
      {steps.map((step, index) => (
        <li
          key={step.label}
          className={`rounded-[24px] border p-4 ${stepStyle(step.status)}`}
          aria-current={step.status === "current" ? "step" : undefined}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.24em]">
            Step {index + 1}
          </p>
          <p className="mt-3 text-lg font-semibold text-white">{step.label}</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">{step.detail}</p>
        </li>
      ))}
    </ol>
  );
}
