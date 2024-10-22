// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://piracyshit.it',
  integrations: [mdx(), sitemap({
      changefreq: 'weekly',
      priority: 0.7,
  })],
});