<div align="center">

# giri-dev-folio

Modern, animated, accessible developer portfolio built with Vite, React 18, TypeScript, Tailwind CSS, shadcn/ui (Radix primitives), and Framer Motion.

</div>

## ✨ Overview
This project is a personal developer portfolio showcasing projects, skills, education, and interactive UI experiments. It emphasizes performance, smooth motion, dark/light theming, keyboard accessibility, and a component-driven architecture for easy future expansion (blog, CMS, etc.).

## 🔍 Key Features
- Hero section with animated introduction & theme switching
- Bento-style responsive projects layout
- Skills carousel & animated sections on scroll
- Education & experience timeline components
- Motion & micro-interactions powered by Framer Motion / custom hooks
- Accessible Radix UI primitives wrapped in shadcn/ui design system
- Toasts, dialogs, command palette (cmdk) foundation ready
- Tailwind-based design tokens + utility variants
- Type-safe with modern TypeScript configuration
- Fast local DX via Vite + SWC React plugin

## 🧱 Tech Stack
| Layer | Stack |
|-------|-------|
| Language | TypeScript (ESNext modules) |
| Framework | React 18 + React Router DOM |
| Build / Dev | Vite 5 + SWC |
| Styling | Tailwind CSS 3, tailwind-merge, tailwindcss-animate |
| UI / Components | Radix UI primitives, shadcn/ui patterns, cmdk, lucide-react icons |
| Animation | Framer Motion / Motion (latest) + custom hooks |
| Forms | react-hook-form |
| Notifications | sonner (toasts) |
| Carousel | embla-carousel-react + auto-scroll plugin |

## 📂 Project Structure (high-level)
```
src/
	assets/                # Static assets (add as needed)
	components/            # Feature-level composite sections
		AnimatedSection.tsx
		EducationTimelineSection.tsx
		NewHeroSection.tsx
		ProjectsBentoSection.tsx
		SkillsCarousel.tsx
		ThemeProvider.tsx
		...
		ui/                  # Reusable, lower-level UI primitives (shadcn style)
			button.tsx
			dialog.tsx
			sheet.tsx
			timeline.tsx
			toast.tsx
			...
	hooks/                 # Custom React hooks (e.g. scroll animation, mobile detection)
	lib/                   # Utility libraries (e.g. `utils.ts`)
	pages/                 # Routed pages (Index, NotFound)
	main.tsx               # App bootstrap & Router mounting
	App.tsx                # Root layout / providers
public/                  # Static public assets (images, favicons)
```

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18 (LTS recommended)
- pnpm / npm / bun / yarn (project lockfile indicates Bun support via `bun.lockb`, but any will work)

### Install Dependencies
Choose ONE package manager (examples use npm):
```cmd
npm install
```
Optional (if using Bun):
```cmd
bun install
```

### Run in Development
```cmd
npm run dev
```
Then open the printed local URL (typically http://localhost:5173).

### Build for Production
```cmd
npm run build
```
Artifacts output to `dist/` (static, deployable to any SPA host / CDN / Vercel / Netlify / GitHub Pages with SPA fallback).

### Preview Production Build
```cmd
npm run preview
```

### Lint / Quality
```cmd
npm run lint
```

## 🧪 Suggested Enhancements (Future Roadmap)
- Add unit tests (Vitest / Testing Library) for critical components
- SEO metadata & social cards (React Helmet or manual `<head>` tags in `index.html`)
- Project data externalization (JSON/YAML or headless CMS)
- Dark/light theme persistence via localStorage (if not already)
- Accessibility audit (axe / Lighthouse CI) integration
- Add blog or writing section with MDX
- Automated deploy workflow (GitHub Actions)

## 🛠 Component Patterns
- `components/ui/*` follow shadcn style: composition over configuration, Tailwind classes + `cn()` utility
- Use `class-variance-authority` for variant-heavy components (buttons, badges)
- Motion wrappers (e.g. `AnimatedSection`) encapsulate viewport + stagger logic
- Hooks like `useScrollAnimation` decouple intersection observers from presentation

## 🧩 Data & Configuration
Currently most content (projects, timelines, skills) is embedded directly in section components. For scalability, consider moving static arrays into `src/lib/data/` and centralizing types.

## ♿ Accessibility Notes
- Radix primitives supply ARIA roles & focus management
- Ensure interactive elements have discernible text (icons need `aria-label`)
- Maintain color contrast when adjusting Tailwind theme colors

## 🌗 Theming
`ThemeProvider.tsx` likely handles dark/light classes on `html` or `body`. Prefer storing user preference `localStorage.theme` and sync with `prefers-color-scheme`.

## 📦 Available Scripts (from `package.json`)
| Script | Purpose |
|--------|---------|
| dev | Start Vite dev server |
| build | Production build |
| build:dev | Development-mode build (useful for faster analysis) |
| preview | Preview built assets locally |
| lint | Run ESLint over the codebase |

## 📸 Media / Assets
Images placed under `public/lovable-uploads/` are referenced directly. For optimal performance:
- Compress large PNG/JPEG with lossless tools
- Consider WebP / AVIF formats
- Use descriptive filenames for SEO

## 🏗 Deployment
Because this is a static SPA:
- Vercel: Point project to repo; framework preset: Vite; build command `npm run build`; output `dist`.
- Netlify: Build `npm run build`; publish `dist`; enable redirect `_redirects` with `/* /index.html 200` for SPA routing.
- GitHub Pages: Build then push `dist` to `gh-pages` branch (use `vite-plugin-gh-pages` or manual script if desired).

## 🔒 Environment Variables
Currently no environment variables specified. If later adding analytics or APIs, create a `.env` and prefix variables with `VITE_` to expose them (e.g. `VITE_API_BASE_URL`). Do NOT commit secrets.

## 🧹 Code Style & Conventions
- Follow existing Tailwind class ordering style; group layout -> spacing -> typography -> effects -> state
- Prefer functional components with explicit prop typing (`interface Props {}`)
- Centralize utility functions in `lib/` to avoid duplication
- Keep components focused; extract sub-pieces when JSX exceeds ~120 lines

## 🤝 Contributing (Personal Project)
While this is a personal portfolio, external suggestions are welcome via Issues / PRs:
1. Fork repository
2. Create feature branch (`feat/xyz-improvement`)
3. Commit with conventional style (`feat: add X section`)
4. Open PR with description & screenshots (if UI)

## 🪲 Troubleshooting
| Issue | Tip |
|-------|-----|
| Styles not updating | Restart dev server; ensure Tailwind config paths include all component folders |
| Icons missing | Check `lucide-react` import casing |
| Animation jitter | Ensure unique keys & `motion.div` not re-mounting unnecessarily |
| Build size large | Inspect bundle (`vite --analyze` or add `rollup-plugin-visualizer`) |

## 📈 Performance Tips
- Lazy-load heavy sections below the fold
- Use `motion` reduced motion preferences (`useReducedMotion`) for accessibility
- Memoize large data arrays or derived lists when prop drilling

## 📜 License
Choose a license (MIT recommended). Example MIT header can be added in a future commit.

## 🙌 Acknowledgements
- [shadcn/ui](https://ui.shadcn.com/) patterns
- [Radix UI](https://www.radix-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Embla Carousel](https://www.embla-carousel.com/)

---
Crafted to be fast, elegant, and extensible. Feel free to adapt this structure for your own portfolio.

