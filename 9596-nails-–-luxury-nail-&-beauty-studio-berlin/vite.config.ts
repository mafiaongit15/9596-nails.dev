import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // This site is deployed as a GitHub Pages project site at
  // https://mafiaongit15.github.io/9596-nails.dev/
  // Vite applies this prefix to imported assets, including JPG files.
  base: '/9596-nails.dev/',

  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      '@': projectRoot,
    },
  },

  server: {
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
