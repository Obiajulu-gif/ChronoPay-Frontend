export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans">
      <main className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight">ChronoPay</h1>
        <p className="mt-2 text-xl text-zinc-400">Time Economy</p>
        <p className="mt-8 leading-relaxed text-zinc-300">
          Tokenize your future time slots as tradable digital assets on the
          Stellar network. Buy, sell, reserve, and redeem time globally.
        </p>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="/dashboard"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-200"
          >
            Dashboard
          </a>
          <a
            href="/booking"
            className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-5 py-2.5 text-sm font-medium text-cyan-100 transition-colors hover:border-cyan-400 hover:bg-cyan-500/20"
          >
            Booking Flow
          </a>
          <a
            href="https://stellar.org"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-600 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:bg-zinc-800/50"
          >
            Stellar
          </a>
        </div>
      </main>
    </div>
  );
}
