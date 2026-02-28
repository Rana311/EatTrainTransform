# EatTrainTransform — Nutritionist & Trainer Website

A production-grade Next.js 14 static site with:
- ✅ App Router + TypeScript
- ✅ Tailwind CSS with custom design tokens
- ✅ Dark mode (via `next-themes`)
- ✅ Framer Motion animations
- ✅ Full SEO optimization (metadata, JSON-LD, OG tags, robots.txt, sitemap)
- ✅ Static export ready for Vercel
- ✅ Fully responsive (mobile-first)

## Sections
- Hero
- Services
- About
- Pricing
- Testimonials
- Contact form
- Footer

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deploying to Vercel

### Option 1 — Vercel CLI
```bash
npm i -g vercel
vercel
```

### Option 2 — GitHub Integration
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo — Vercel auto-detects Next.js
4. Click Deploy ✅

---

## Customization Checklist

| Item | Where |
|------|-------|
| Your name & title | `app/layout.tsx`, `components/Navbar.tsx`, `components/Footer.tsx` |
| Hero photo | Replace placeholder in `components/Hero.tsx` with `<Image>` |
| About photo | Replace placeholder in `components/About.tsx` with `<Image>` |
| Pricing amounts | `components/Pricing.tsx` |
| Contact email | `components/Contact.tsx`, `components/Footer.tsx` |
| Social handles | `components/Footer.tsx`, `components/Contact.tsx` |
| Domain URL | `app/layout.tsx` (metadataBase), `public/robots.txt`, `public/sitemap.xml` |
| Contact form backend | `components/Contact.tsx` → replace `handleSubmit` with Formspree/Resend/etc. |

## Adding Your Photos

Replace the placeholder divs in Hero and About with:

```tsx
import Image from 'next/image'

<Image
  src="/your-photo.jpg"   // Place in /public folder
  alt="Aria Velez"
  fill
  className="object-cover"
  priority
/>
```

## Contact Form Options (free tier available)

- **Formspree** — `https://formspree.io` (easiest, no backend needed)
- **Resend** — `https://resend.com` (email API)
- **Web3Forms** — `https://web3forms.com` (free, no backend)

---

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Dark Mode:** next-themes
- **Fonts:** Cormorant Garamond + Plus Jakarta Sans (Google Fonts)
- **Deployment:** Vercel (static export)
