# Rohit Arodi — Personal Website V2

A modern, dark-themed personal portfolio website built with React and TypeScript.

**Live:** [arodirohit.vercel.app](https://arodirohit.vercel.app)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [React 19](https://react.dev) |
| Language | [TypeScript](https://www.typescriptlang.org) |
| Build Tool | [Vite 6](https://vitejs.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Animations | [Motion](https://motion.dev) (Framer Motion) |
| Icons | [Lucide React](https://lucide.dev) |
| Contact Form | [EmailJS](https://www.emailjs.com) |
| Deployment | [Vercel](https://vercel.com) |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Fixed bottom nav pill with icons and tooltips
│   ├── Hero.tsx            # Landing section
│   ├── BentoGrid.tsx       # About section — bio card, stats, skill cards
│   ├── Education.tsx       # Education timeline
│   ├── Experience.tsx      # Work experience timeline
│   ├── Projects.tsx        # Project grid (featured projects span 2 cols)
│   ├── Contact.tsx         # Contact CTA section
│   ├── ContactModal.tsx    # Email form modal (EmailJS)
│   ├── Footer.tsx          # Footer with email popup and social links
│   └── Animations.tsx      # Shared animation components
├── data/
│   └── resume.ts           # Single source of truth for all content
├── main.tsx
└── index.css
```

---

## Running Locally

**Prerequisites:** Node.js 18+

1. Clone the repo:
   ```bash
   git clone https://github.com/rohitarodi/Personal_Website.git
   cd Personal_Website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables — copy `.env.example` to `.env` and fill in your [EmailJS](https://www.emailjs.com) credentials:
   ```bash
   cp .env.example .env
   ```
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the dev server:
   ```bash
   npm run dev
   ```

---

## Updating Content

All site content lives in **`src/data/resume.ts`** — edit that file to update your name, experience, projects, skills, and social links. No changes needed anywhere else.

---

## Deployment

The site deploys automatically to Vercel on every push to `main`.

To deploy manually:
```bash
npm run build   # outputs to dist/
```

---

## Archived

Previous versions of this site are kept in `archived/` for reference:
- `archived/static-portfolio/` — original vanilla HTML/CSS/JS site
