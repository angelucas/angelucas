# lucasmachado.io

Personal portfolio for Lucas Machado — .NET fullstack developer.

Built with [Astro](https://astro.build), TypeScript, and vanilla CSS. Bilingual (pt-BR / English).

## Development

```bash
npm install
npm run dev
```

On Windows PowerShell, if `npm` is blocked by execution policy, use `npm.cmd` instead.

Open [http://localhost:4321](http://localhost:4321) (Portuguese) or [http://localhost:4321/en/](http://localhost:4321/en/) (English).

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  pages/           # routes (/ and /en/)
  layouts/         # BaseLayout, HomeLayout
  components/      # UI primitives (Nav, Section, Button, …)
  components/sections/  # page sections (Hero, Skills, …)
  data/            # site, experience, projects, skills, focus
  i18n/locales/    # UI strings (pt-br, en)
  styles/          # global CSS
public/
  images/          # avatar, OG image, project screenshots
  scripts/         # reveal.js (scroll animations)
```

## Deploy

Configured for [Netlify](https://www.netlify.com). Push to main to deploy at [lucasmachado.io](https://lucasmachado.io).

Build output goes to `dist/` (gitignored).

## Editing content

1. **UI labels** — `src/i18n/locales/pt-br.ts` and `en.ts`
2. **Site links** — `src/data/site.ts`
3. **Experience** — `src/data/experience.ts`
4. **Projects** — `src/data/projects.ts`
5. **Skills** — `src/data/skills.ts`
6. **Current focus (IA/Cursor)** — `src/data/focus.ts`
7. **Static images** — add files under `public/images/`
