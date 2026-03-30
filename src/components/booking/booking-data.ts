import type {
  ConfirmationItem,
  SlotOption,
  Step,
  WalletSummary,
} from "./types";

export const steps: Step[] = [
  {
    label: "Select slot",
    detail: "Review availability and demand before reserving time.",
    status: "complete",
  },
  {
    label: "Confirm",
    detail: "Verify the host, payout terms, and wallet impact.",
    status: "current",
  },
  {
    label: "Success",
    detail: "Share the receipt and add the session to your calendar.",
    status: "upcoming",
  },
];

export const slots: SlotOption[] = [
  {
    id: "strategy",
    title: "Product strategy session",
    window: "Tue, Apr 1 • 10:00-11:00",
    host: "with Amina K.",
    price: "120 XLM",
    note: "Includes pre-read review and next-step memo.",
    availability: "2 seats left",
    tone: "positive",
  },
  {
    id: "design",
    title: "UX teardown",
    window: "Wed, Apr 2 • 14:00-15:00",
    host: "with David O.",
    price: "95 XLM",
    note: "Best for checkout flow and onboarding feedback.",
    availability: "Filling fast",
    tone: "warning",
  },
  {
    id: "office-hours",
    title: "Founder office hours",
    window: "Thu, Apr 3 • 09:00-09:45",
    host: "with ChronoPay core team",
    price: "140 XLM",
    note: "Priority support and roadmap Q&A included.",
    availability: "Waitlist opens after confirmation",
    tone: "neutral",
  },
];

export const wallet: WalletSummary = {
  balance: "1,240 XLM",
  escrow: "120 XLM",
  networkFee: "0.15 XLM",
  status: "Wallet connected and ready for escrow",
};

export const confirmationItems: ConfirmationItem[] = [
  { label: "Selected slot", value: "Product strategy session" },
  { label: "Session time", value: "Tue, Apr 1 • 10:00-11:00" },
  { label: "Host", value: "Amina K." },
  { label: "Escrow hold", value: "120 XLM" },
  { label: "Network fee", value: "0.15 XLM" },
  { label: "Cancellation window", value: "Up to 24 hours before start" },
];
