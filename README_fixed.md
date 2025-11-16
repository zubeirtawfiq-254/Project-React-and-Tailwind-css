# IbraTech Hub

This repository contains a small React + Tailwind CSS site for the IbraTech Hub project.

## Recent work (summary)

The project was recently updated to match Figma-like measurements and to improve layout flow and content. Key changes made:

- Layout & spacing
  - Removed manual `top` offsets and inline `height` values from section components so pages flow naturally and each section starts after the previous one.
  - Standardized vertical spacing by using `py-16` on the shared `Section` wrapper and relevant sections.
  - Converted sections to be content-driven (removed hardcoded heights) to avoid large gaps between sections.

- Hero
  - Updated heading to: "Space for Every Dream — Work, Study, Eat & Play"
  - Updated tagline to: "Where Work, Study & Play Meet — Right in Your Neighborhood."
  - Kept a visual overlay for readability and preserved `min-h-screen` for large-viewport presentation.

- Stats
  - Added a continuous stats frame inside the hero with four stats, orange separators, and a teal background.

- Products
  - Simplified product cards to show product name and price, restored images for each product.

- Gallery (Section 4)
  - Renamed and copied images into `src/assets/Images` and updated `src/components/sections/section 4.jsx` to reference them.
  - Gallery now uses the images: `tech.jpg`, `latest.jpg`, `new.jpg`, `workspace.jpg` (or the numbered variants previously created).

- Testimonials
  - Testimonial content updated and avatar removed; now shows quote and name only.

- Footer
  - Added a fifth column **Careers** with: Careers, Internships, Volunteer, Collaborate with Us.

- Misc
  - Header set to overlay the hero for proper visual stacking.
  - Dev server runs with Vite; hot module reload updates components during edits.

## Files changed (high level)

- `src/components/sections/Hero.jsx` — heading, tagline, hero layout and stats frame
- `src/components/sections/Features.jsx` — removed hardcoded height
- `src/components/sections/section 4.jsx` — gallery image list and layout
- `src/components/sections/About.jsx` — removed hardcoded height
- `src/components/sections/Products.jsx` — simplified cards (name + price + image)
- `src/components/sections/CTA.jsx` — removed hardcoded height
- `src/components/Testimonials.jsx` — updated text, removed avatar
- `src/components/layout/Footer.jsx` — added Careers column, removed hardcoded height
- `src/components/layout/Header.jsx` — made header overlay the hero
- `src/components/common/Section.jsx` — shared section wrapper used for consistent spacing

## How to run

Install dependencies and start the dev server (Windows PowerShell):

```powershell
npm install
npm run dev
```

Open the app at the local URL printed by Vite (e.g., `http://localhost:5173` or `http://localhost:5174` if 5173 is in use).

## Notes

- I created backups of several images while renaming/copying files; backup files (`*.bak`) are in `src/assets/Images` in case you want to restore originals.
- I committed and pushed the changes to the GitHub repository: `https://github.com/zubeirtawfiq-254/Project-React-and-Tailwind-css`.

If you want a different README format or additional developer notes (changelog, deploy steps, testing instructions), tell me what to include and I'll update this file.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
