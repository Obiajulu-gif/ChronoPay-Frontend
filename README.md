# chronopay-frontend

Next.js dashboard and Stellar wallet integration for **ChronoPay** - time tokenization and scheduling on the Stellar network.

## What's in this repo

- **Next.js 16** (App Router) with TypeScript and Tailwind CSS
- ChronoPay landing, dashboard, and booking flow starter pages
- Ready for Stellar wallet connection and time token UI

## Prerequisites

- Node.js 20+
- npm

## Setup

```bash
# Clone the repo (or use your fork)
git clone <repo-url>
cd chronopay-frontend

# Install dependencies
npm install

# Lint
npm run lint

# Build
npm run build

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Lint + build (CI) |

## Project layout

- `src/app/` - App Router pages such as `page.tsx`, `dashboard/page.tsx`, and `booking/page.tsx`
- `src/components/booking/` - Reusable booking flow UI building blocks
- `src/app/layout.tsx` - Root layout and metadata
- `public/` - Static assets

## Booking flow design notes

- The booking flow is split into small components so selection, confirmation, success, and state handling are easy to review independently.
- The route keeps slot, wallet, and confirmation details visible together to reduce uncertainty before escrow is confirmed.
- Loading, empty, and error states are rendered as first-class UI states to keep the layout stable while backend data changes.
- Focus rings, semantic headings, and clear button labels are included to support keyboard and screen-reader use.

## Contributing

1. Fork the repo and create a branch from `main`.
2. Install deps: `npm install`. Run lint and build: `npm run lint && npm run build`.
3. Make changes; keep lint and build green.
4. Open a pull request. CI must pass (lint, build).

## CI/CD

On every push and pull request to `main`, GitHub Actions runs:

- **Install**: `npm ci`
- **Lint**: `npm run lint`
- **Build**: `npm run build`

## License

MIT
