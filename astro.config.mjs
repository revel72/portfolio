// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Production URL and base path come from the environment so nothing is hardcoded
// before a domain is chosen.
//   SITE_URL  e.g. https://louisgimeno.dev  (enables canonical URLs, sitemap, OG image URLs)
//   BASE_PATH e.g. /portfolio               (only for GitHub Pages *project* sites)
const site = process.env.SITE_URL || undefined;
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  integrations: site ? [sitemap()] : [],
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
