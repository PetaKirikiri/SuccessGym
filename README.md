# SuccessGym

React 19 + TypeScript + Vite + Tailwind CSS v4 + Supabase, using the same application stack as SuccessBooking: React Router, TanStack Query, ESLint, and Vitest.

## Start

```bash
cp .env.example .env
npm install
npm run dev
```

Add your Supabase project URL and anonymous key to `.env`. Never expose the service-role key in the browser app.

## Scripts

- `npm run dev` starts the local development server.
- `npm run dev:phone` exposes it on the local network for phone testing.
- `npm run build` type-checks and builds the production app.
- `npm run lint` runs ESLint.
- `npm test` runs Vitest.
