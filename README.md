# Personal Portfolio Website

This is a code bundle for Personal Portfolio Website. The original project is available at https://www.figma.com/design/qIe5Q5N8a9JC9T9o0E4tlv/Personal-Portfolio-Website.

## Running the code

Install dependencies (pnpm is recommended, since `package.json` pins versions via `pnpm.overrides`; `npm i` also works):

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

The WakaTime/GitHub dashboard backend (`/api/*`) only runs after deploying to Vercel — see [`docs/DEPLOY.md`](./docs/DEPLOY.md). Locally, the dashboard falls back to demo data.

## Project structure

```
.
├── api/                  # Vercel serverless functions (WakaTime & GitHub proxies)
├── docs/                 # All project documentation
│   └── images-guide/     # Setup guide & syntax reference for src/assets/images
├── public/               # Static files served as-is (favicon, etc.)
├── src/
│   ├── app/
│   │   ├── App.tsx           # Root component
│   │   └── components/       # Page sections + shadcn/ui components (ui/)
│   ├── assets/images/        # Local images, grouped by purpose (profile, logos, icons, ...)
│   ├── styles/                # Tailwind/theme CSS
│   └── main.tsx               # App entry point
├── index.html
├── vite.config.ts
└── package.json
```

## Documentation

- [`docs/DEPLOY.md`](./docs/DEPLOY.md) — Deploying the WakaTime/GitHub backend to Vercel
- [`docs/WAKATIME.md`](./docs/WAKATIME.md) — WakaTime dashboard integration overview
- [`docs/ATTRIBUTIONS.md`](./docs/ATTRIBUTIONS.md) — Third-party licenses/credits
- [`docs/GUIDELINES.md`](./docs/GUIDELINES.md) — Figma Make AI generation guidelines
- [`docs/images-guide/`](./docs/images-guide) — How to add/replace local images
- [`api/README.md`](./api/README.md) — Backend API reference
