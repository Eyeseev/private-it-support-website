# Private IT Support – Site

Marketing site for Private IT Support, offering remote troubleshooting, on-site visits, and managed care plans for small businesses and entrepreneurs. Built with Next.js 14 and Tailwind CSS v4.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS v4 (JIT, CSS-first API)
- npm (lockfile committed)

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Visit `http://localhost:3000`.

## Site Structure
- `app/layout.tsx` – global fonts, metadata, header/footer shell
- `app/page.tsx` – homepage (hero, support gaps solved, process, plans, client stories)
- `app/{services,process,about,portfolio,contact}/page.tsx` – supporting pages for the IT support offering
- `components/` – shared UI primitives (`Section`, buttons, site chrome)
- `content/site.ts` – centralised copy for hero messaging, plans, process steps, FAQs, and contact channels
- `public/icons/`, `public/hero-abstract.svg`, `public/texture-grid.svg` – brand illustrations and background assets
- `docs/brand-style-guide.md` – palette, typography, and component usage reference

## Branding Notes
- Light blueprint aesthetic via CSS grid background
- Accent colour: electric blue (`#2563FF`) for CTAs and highlights
- Typography: Inter (body) + Figtree (headings) via `next/font`
- Buttons/cards styled through utilities in `app/globals.css`

## Forms & Integrations
- Contact form submits to `https://formspree.io/f/your-form-id` (update with production endpoint)
- Contact channels configured in `content/site.ts` (`email`, `Calendly`, `support portal`)

## Deployment
Optimised for platforms like Vercel or Netlify.
```bash
npm run build
npm run start
```
Set the production domain in `app/layout.tsx` (`siteUrl`) before launch.

## Next Steps
- Replace placeholder Formspree ID, support portal email, and any dummy links
- Swap `profile-placeholder.svg` with real photography
- Add anonymised case studies/testimonials when ready
- Update OG imagery as brand photography becomes available
