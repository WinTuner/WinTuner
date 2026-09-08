# WinTuner — Thanatphong Tarin

> Backend & Infrastructure enthusiast · CMU CAMT Digital Industry Integration · Chiang Mai, TH (GMT+7)

Portfolio & CV site — **Next.js 16 · React 19 · TypeScript · Tailwind v4** · Bilingual EN/TH · Print-ready CV.

**Live:** `https://wintuner.dev` (set `NEXT_PUBLIC_SITE_URL`) · **GitHub:** [@WinTuner](https://github.com/WinTuner) · **Contact:** Thanatphong2719@gmail.com

---

### About

I turn messy ops into fast systems. Current highlights:

- **Municipality Web App** (Phlu Ta Luang) — spreadsheet → real-time SQL, Next.js + Prisma + PostgreSQL
- **DotDoctor** — Go CLI for Hyprland dotfiles, AUR packaged
- **Appointment Booking API** — Kotlin/Ktor, 49 tests, double-booking prevention
- **P'CAT HOUSE ops** — 40+ tenants, zero missed billing cycles, Excel/Sheets automation

Student at **Chiang Mai University, CAMT — B.Sc. Digital Industry Integration** (GPA 3.31). Prev. Chiang Rai Provincial Administrative Organization School, SE Program (GPA 3.97). HYLIFE Hackathon 2025 — 3rd Place (Smart Agriculture).

### Stack

`Go` · `Kotlin / Ktor` · `Java / Spring Boot` · `TypeScript / Next.js` · `PostgreSQL / Prisma` · `Docker / K8s` · `Linux (Arch)` · `Python` · `Git`

Full stack matrix on [/introduction](/introduction) (resume).

### CV Highlights

- **Print / PDF:** open [/introduction](/introduction) → `Print / Save PDF` (ATS-friendly, A4, `@media print`)
- **Bilingual:** EN / TH toggle (persists via cookie/localStorage)
- **SEO:** JSON-LD Person + WebSite, sitemap, robots, OG images, canonical URLs
- **Performance:** image optimization enabled, `optimizePackageImports`, no `ignoreBuildErrors`

---

### Getting Started

```bash
# Node 18+ recommended
npm install          # or pnpm install / bun install

npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # serve build
npm run lint         # eslint
```

Env:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000  # prod: https://wintuner.dev
```

---

### Project Structure

```
app/
  layout.tsx              # fonts (Geist, Space Grotesk), metadata, ThemeProvider
  page.tsx                # home: Hero + ProjectsGrid + Workbench + Footer
  globals.css             # Tailwind v4 tokens + print styles
  sitemap.ts / robots.ts
  (public)/
    introduction/page.tsx # ← upgraded CV (timeline, skills, print-ready)
    projects/ , workbench/ , blog/ , blog/[postSlug]/
components/
  header.tsx              # grid-rows mobile animation, ESC to close, a11y
  hero-section.tsx        # backend-focused roles + intro
  projects-grid.tsx       # 8 real projects (DotDoctor, Ktor API, AutoOS…)
  workbench.tsx           # 4 active WIPs with progress
  footer.tsx, theme-*, language-*
lib/
  structured-data.ts      # Person/WebSite/BlogPosting JSON-LD (Thanatphong)
  blog-data.tsx           # static posts source of truth
public/
  developer-portrait.png, og-image.png, site.webmanifest
```

---

### What Was Upgraded (vs template)

- **Brand:** Ehsan Ghaffar → Thanatphong Tarin / WinTuner; all metadata, JSON-LD, webmanifest, sitemap
- **Performance:** removed `unoptimized: true` & `ignoreBuildErrors`, added `remotePatterns`, `optimizePackageImports`, deleted duplicate `styles/globals.css`
- **CV page:** complete rewrite — skills matrix with levels, education timeline (CMU first), quantified experience, 4 featured projects, stats card, bilingual polish, print CSS, ATS keywords
- **Projects:** 3 dummy → 8 real repos (DotDoctor, AutoOS, Ktor API, ProjectPruta, CV, dashboard, OOP-Lab, latency bench)
- **Workbench:** 3 → 4 WIPs, realistic progress
- **Header:** grid-rows animation (fix `max-h-96` jump), ESC handler, `aria-expanded`/`aria-controls`, focus
- **Hero:** backend/infra positioning, CMU CAMT intro
- **SEO/a11y:** headings hierarchy, focus-visible, language bars, print A4

See [docs/improvement-checklist.md](docs/improvement-checklist.md) for remaining P1-P3 items (search, MDX, RSS, tests).

---

### Deployment

```bash
npm run build
# Deploy to Vercel — set NEXT_PUBLIC_SITE_URL in project env
```

---

### Profile README

The prior profile README (stats, tech icons) was this repo's original content. The site now *is* the profile. Stats still live at the GitHub profile: [github.com/WinTuner](https://github.com/WinTuner).

---

© 2026 Thanatphong Tarin — WinTuner. Built with Next.js & Tailwind.
