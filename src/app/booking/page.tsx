import Link from "next/link";

import {
  confirmationItems,
  ConfirmationSummary,
  SectionCard,
  slots,
  SlotPicker,
  StatePreview,
  steps,
  Stepper,
  SuccessCard,
  wallet,
  WalletPanel,
} from "@/components/booking";

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#164e63_0%,#020617_46%,#020617_100%)] text-zinc-100 font-sans">
      <header className="border-b border-white/10 bg-slate-950/60 px-6 py-4 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            ChronoPay
          </Link>
          <div className="flex gap-4 text-sm text-zinc-300">
            <Link href="/dashboard" className="transition hover:text-white">
              Dashboard
            </Link>
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <section className="rounded-[32px] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_100px_-45px_rgba(34,211,238,0.35)] backdrop-blur md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/70">
                Booking flow
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Move from slot selection to confirmation without losing trust.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                The flow keeps price, wallet readiness, and booking status
                visible at every step so buyers can commit quickly.
              </p>
            </div>
            <div className="grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
              <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                <p className="text-slate-400">Selected slot</p>
                <p className="mt-2 font-semibold text-white">
                  Tue, Apr 1 at 10:00
                </p>
              </div>
              <div className="rounded-[22px] border border-emerald-400/20 bg-emerald-400/10 p-4">
                <p className="text-emerald-100/80">Escrow status</p>
                <p className="mt-2 font-semibold text-white">Ready to confirm</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <Stepper steps={steps} />
        </section>

        <div className="mt-8 grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
          <div className="space-y-6">
            <SectionCard
              eyebrow="Select slot"
              title="Choose the best-fit session"
              description="Keep context-rich options together so users compare timing, host, and price in one scan."
            >
              <SlotPicker slots={slots} selectedId="strategy" />
            </SectionCard>

            <SectionCard
              eyebrow="Success"
              title="Receipt and next steps"
              description="Success should close the loop immediately with scheduling and proof of payment."
            >
              <SuccessCard />
            </SectionCard>
          </div>

          <div className="space-y-6">
            <SectionCard
              eyebrow="Wallet"
              title="Wallet impact"
              description="Confirm payment readiness before the user reaches the final action."
            >
              <WalletPanel wallet={wallet} />
            </SectionCard>

            <SectionCard
              eyebrow="Confirm"
              title="Booking summary"
              description="Repeat the important details right before escrow so the confirm step feels safe."
            >
              <ConfirmationSummary items={confirmationItems} />
            </SectionCard>
          </div>
        </div>

        <section className="mt-8">
          <SectionCard
            eyebrow="State coverage"
            title="Loading, empty, and error handling"
            description="Booking UI keeps momentum by showing what the system is doing and what the user can do next."
          >
            <div className="grid gap-4 lg:grid-cols-3">
              <StatePreview state="loading" />
              <StatePreview state="empty" />
              <StatePreview state="error" />
            </div>
          </SectionCard>
        </section>
      </main>
    </div>
  );
}
