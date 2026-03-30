import { StatusBadge } from "./status-badge";
import type { SlotOption } from "./types";

export function SlotPicker({
  slots,
  selectedId,
}: {
  slots: SlotOption[];
  selectedId: string;
}) {
  return (
    <div className="space-y-3" role="radiogroup" aria-label="Available booking slots">
      {slots.map((slot) => {
        const checked = slot.id === selectedId;

        return (
          <label
            key={slot.id}
            className={`flex cursor-pointer flex-col gap-4 rounded-[24px] border p-4 transition hover:border-cyan-300/40 hover:bg-white/8 ${
              checked
                ? "border-cyan-300/50 bg-cyan-400/10"
                : "border-white/10 bg-white/5"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="booking-slot"
                    value={slot.id}
                    checked={checked}
                    readOnly
                    className="h-4 w-4 border-white/20 bg-transparent text-cyan-300 focus:ring-cyan-300"
                  />
                  <h3 className="text-lg font-semibold text-white">{slot.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-300">{slot.window}</p>
                <p className="mt-1 text-sm text-slate-400">{slot.host}</p>
              </div>
              <StatusBadge tone={slot.tone}>{slot.availability}</StatusBadge>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-6 text-slate-300">{slot.note}</p>
              <p className="text-base font-semibold text-white">{slot.price}</p>
            </div>
          </label>
        );
      })}
    </div>
  );
}
