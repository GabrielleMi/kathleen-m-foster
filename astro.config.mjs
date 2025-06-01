import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gabriellemi.github.io/',
  base: '/kathleen-m-foster/',
  vite: {
    plugins: [tailwindcss()]
  }
});