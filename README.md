# CeraVe Skin Smarts SEO Microsite

This project was created for the **Global Career Accelerator** college program in collaboration with **CeraVe**. The brief: step into the role of a digital marketing associate, expand CeraVe's SEO presence, and build search-optimized content that connects with the persona "Carlos"—a man looking for science-backed skincare guidance.

## Project Goals
- **Develop** an expanded keyword strategy targeting male skincare queries.
- **Write** three SEO-focused articles for the Skin Smarts blog that educate Carlos and reflect CeraVe's trusted, clinical tone.
- **Launch** a cohesive microsite that showcases guides, comparisons, ingredient explainers, tools, and FAQs.

## Tech Stack
- **Framework**: [Astro](https://astro.build/) with MDX support.
- **Runtime**: [Bun](https://bun.sh/) for development scripts.
- **Styling**: Custom CSS built around CeraVe's brand system.

## Local Development
```bash
bun install
bun run dev
```
The site runs at `http://localhost:4321/` by default.

## Build
```bash
bun run build
```
Static output is written to the `dist/` directory.

## GitHub Pages Deployment
This repo ships with `.github/workflows/deploy.yml` to publish the site on GitHub Pages.

1. Push to `main` (or trigger manually from the Actions tab).
2. GitHub Actions installs dependencies, builds with Astro, and deploys the `dist/` folder to Pages.
3. The workflow automatically sets the correct base path using the repository name.

For custom domains or branch changes, update `astro.config.mjs` and the workflow as needed.

## Interview Reflection
As part of the brief, we also prepared answers to AI-era marketing interview prompts, focusing on measurement, content strategy, and collaboration with technical teams.

---
**Prepared as a capstone deliverable for the Global Career Accelerator x CeraVe program.**
