// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const siteUrl = process.env.SITE_URL ?? 'https://still-wild-nature.netlify.app';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  vite: {
    plugins: [tailwindcss()]
  }
});
