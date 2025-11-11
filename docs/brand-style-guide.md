# Private IT Support – Brand Styling Guide

This guide documents the key visual decisions for the PrivateITSupport.com redesign. Use it as a quick reference when creating new pages, assets, or campaign material.

## Palette

| Token | Hex | Notes |
| --- | --- | --- |
| `--surface-base` | `#F9F9F9` | Global background, paired with subtle grid texture. |
| `--surface-muted` | `#F3F4F7` | Section dividers and muted cards. |
| `--surface-card` | `#FFFFFF` | Primary card/section background. |
| `--surface-contrast` | `#E2E6EF` | Borders, lines, grid accents. |
| `--text-primary` | `#1F2933` | Headlines and dense copy. |
| `--text-secondary` | `#3F4C5F` | Body copy. |
| `--text-subtle` | `#64748B` | Captions, labels, helper text. |
| `--accent` | `#2563FF` | Electric-blue CTA, highlights, bullet markers. |
| `--accent-dark` | `#1E48D6` | Hover/active state for accent. |

> Accent usage: Primary CTAs use the gradient (`#2563FF → #1E48D6`). Hover states increase shadow (`--shadow-hover`) and darken slightly.

## Typography

- **Headings:** `Figtree` (500–700). Use uppercase tracking for small labels, bold for hero/section titles.
- **Body:** `Inter`. Set base size 16px with 1.65 leading for clarity.
- **Supporting styles:** `.badge-outline` utility for uppercase labels; use sparingly to highlight process steps or meta copy.

## Layout & Components

- **Grid texture:** Body background uses a CSS linear gradient grid (`--grid-size: 28px`). For isolated sections or imagery, the SVG tile lives at `public/texture-grid.svg`.
- **Cards:** Apply `.card-surface` where elevation is needed. Border color should stay at `--surface-outline` (rgba(24, 39, 68, 0.12)).
- **Buttons:** Primary variant = electric blue gradient, white text, hover lift; secondary = white surface with accent outline; ghost = subtle text emphasis.
- **Sections:** Base component in `components/section.tsx` wraps content with padding, soft shadow, and accent glow on hover.

## Iconography & Imagery

- Icons live in `public/icons/` and follow a minimal line style using charcoal (#1F2933) with accent strokes (#2563FF). Example files:
  - `icon-blueprint.svg` – planning & architecture
  - `icon-speed.svg` – performance and efficiency
  - `icon-support.svg` – partnership and support
  - `icon-automation.svg` – systems + automation
- Hero illustration: `public/hero-abstract.svg` blends blueprint lines with abstract UI elements.
- Profile imagery: `public/profile-placeholder.svg` can be swapped with a professional portrait while retaining rounded card treatment.

## Spacing & Rhythm

- Section max width: `max-w-6xl` (layout container).
- Vertical rhythm: 80–96px between major sections on desktop (`space-y-20` / `space-y-24`).
- Card padding: `p-6` (mobile) → `p-8` or more for feature sections.
- Border radius tokens: `--radius-sm` (8px), `--radius-md` (16px), `--radius-lg` (28px).

## Accessibility & Interaction

- Maintain minimum contrast ratio of 4.5:1 for text on off-white surfaces (current palette adheres to this).
- Focus states: Buttons and inputs use accent outlines (`focus-visible:ring-[var(--accent)]`).
- Decorative icons should use empty `alt=""`; meaningful imagery should have descriptive `alt` text.

## Usage Tips

- Hero & CTA sections benefit from a subtle accent wash: use `bg-[var(--accent-soft)]` plus border `rgba(37,99,255,0.25)`.
- Avoid heavy drop shadows; stick to `--shadow-soft` for cards and `--shadow-hover` on hover.
- Keep whitespace generous—especially on mobile—by maintaining `space-y-12`+ between stacked elements.
- When introducing new CTAs, follow the existing copy tone: directive, confident, and outcome-focused (e.g., “Start Your Build”, “Review My Scope”).

For questions or updates to the system, edit `lib/brand.ts` and this guide in tandem to keep tokens and documentation aligned.
