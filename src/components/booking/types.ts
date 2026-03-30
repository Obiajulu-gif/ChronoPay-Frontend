export type Tone = "neutral" | "positive" | "warning" | "critical";

export type SlotOption = {
  id: string;
  title: string;
  window: string;
  host: string;
  price: string;
  note: string;
  availability: string;
  tone: Tone;
};

export type Step = {
  label: string;
  detail: string;
  status: "complete" | "current" | "upcoming";
};

export type WalletSummary = {
  balance: string;
  escrow: string;
  networkFee: string;
  status: string;
};

export type ConfirmationItem = {
  label: string;
  value: string;
};

export type StateKind = "loading" | "empty" | "error";
