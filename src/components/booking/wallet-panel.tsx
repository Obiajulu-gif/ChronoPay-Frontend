import type { WalletSummary } from "./types";

export function WalletPanel({ wallet }: { wallet: WalletSummary }) {
  return (
    <article className="rounded-[24px] border border-cyan-400/20 bg-[linear-gradient(160deg,rgba(14,116,144,0.18),rgba(15,23,42,0.92))] p-5">
      <p className="text-sm text-cyan-100/80">Wallet ready</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-white">
        {wallet.balance}
      </p>
      <dl className="mt-6 space-y-4 text-sm">
        <div className="flex items-center justify-between gap-4">
          <dt className="text-slate-300">Escrow on confirm</dt>
          <dd className="font-medium text-white">{wallet.escrow}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="text-slate-300">Estimated network fee</dt>
          <dd className="font-medium text-white">{wallet.networkFee}</dd>
        </div>
      </dl>
      <p className="mt-6 text-sm text-cyan-100/75">{wallet.status}</p>
    </article>
  );
}
