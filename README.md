# Louis Gimeno: Portfolio Website

A fast, static, recruiter-focused portfolio for a Cloud Platform & DevOps engineer. Built with [Astro](https://astro.build), TypeScript, Markdown content collections, and plain modern CSS. There is no backend, database, or analytics.

**Before you publish, work through [`LAUNCH_CHECKLIST.md`](./LAUNCH_CHECKLIST.md).** It lists every date, credential, link, and file that still needs your confirmation.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # type-check + production build into dist/
npm run preview    # serve the built site locally
```

Requires Node 20+ (tested on Node 22).

## Where to edit things

| What | File |
| --- | --- |
| Name, headline, intro, email, LinkedIn / GitHub / resume links | `src/data/profile.ts` |
| Jobs and responsibilities | `src/data/experience.ts` |
| Skills (grouped by domain) | `src/data/skills.ts` |
| Certifications and education | `src/data/credentials.ts` |
| Public projects and their status | `src/data/projects.ts` |
| Case studies | `src/content/case-studies/*.md` |
| Colors, type, spacing | `src/styles/global.css` (tokens at the top) |
| Resume PDF | put it in `public/`, then set `links.resume` in `profile.ts` |

Links left as `null` in `profile.ts` are hidden everywhere. No placeholder links are ever shown on the live site. The **Download Resume** button appears automatically once `links.resume` is set.

### Adding a case study

Copy an existing file in `src/content/case-studies/`, change the frontmatter, and keep the same structure: Context, Technical problem, My role, Approach, Tools, Outcome, Verification and evidence, Limitations. The `contribution` list in the frontmatter forces an explicit "claimed / not claimed" statement for each kind of work. It is rendered at the top of the page.

### Updating a project from Planned to done

In `src/data/projects.ts`, change `status` to `In Progress` or `Complete` **only** when the work exists and has been tested, then add `repoUrl`. Until then, the site shows "No public repository yet".

## Deployment with GitHub

The repository includes `.github/workflows/deploy.yml`, which builds and publishes to **GitHub Pages** on every push to `main`.

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push (or run the workflow manually from the **Actions** tab). The workflow runs `npm ci`, then `npm run build`, then deploys `dist/`.
4. Open the URL shown in the deploy job. Check the home page, every nav link, the case studies, and the 404 page.

The workflow picks the site URL and base path automatically:

- A user site (`<user>.github.io` repository) is served at the root.
- A project site (`<user>.github.io/<repo>/`) is served under `/<repo>/`. The workflow sets `BASE_PATH` for you, and every internal link already respects it.

### Custom domain (when you choose one)

1. In **Settings → Pages**, enter the domain and follow GitHub's DNS instructions.
2. Add a repository variable named `SITE_URL` (**Settings → Secrets and variables → Actions → Variables**) with the full URL, e.g. `https://your-domain.example`.
3. Re-run the workflow. Canonical URLs, the sitemap, `robots.txt`, and Open Graph image URLs will use the new domain.

### Alternative: Cloudflare Pages connected to the same GitHub repo

Create a Pages project from the repository with build command `npm run build`, output directory `dist`, and (optionally) environment variable `SITE_URL` set to your domain. Leave `BASE_PATH` unset.

## What is intentionally not in this site

No fake terminals, charts, skill percentage bars, or invented metrics. No analytics or cookies. No contact form (email link only, so no spam handling or data collection is needed). The theme preference is the only thing stored in the browser, in `localStorage`.

## Project structure

```
src/
  components/     Header, Footer, ExperienceItem, CaseStudyCard, ProjectCard
  content/        Markdown case studies (content collection)
  data/           Profile, experience, skills, credentials, projects
  layouts/        Base layout (SEO, Open Graph, theme bootstrap)
  lib/            URL helper that respects the base path
  pages/          Routes, robots.txt, 404
  styles/         Design tokens and global CSS
public/           favicon, og.png (replace with a custom image if you like)
```

## Quality notes

- Semantic HTML, one `h1` per page, skip link, visible focus states, keyboard-operable theme toggle.
- Light and dark themes (follows the system setting, with a manual override). Reduced-motion preferences are respected.
- JavaScript is limited to the theme toggle.
- Verified in this build: the production build succeeds with no type errors, all 143 internal links resolve in both a root build and a GitHub Pages project-path build, and each page has exactly one `h1`.
- Not yet tested: rendering in real browsers on desktop and mobile, a Lighthouse/axe audit, and the live GitHub deployment. Do these after your first deploy.
