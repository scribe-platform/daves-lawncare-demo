import { defineConfig } from 'astro/config';

// A bare github.io project page needs base=/<repo-name>; a custom domain
// (public/CNAME present) needs base=/. The deploy workflow computes this
// and passes it as PUBLIC_BASE_PATH rather than baking a value in here.
export default defineConfig({
  output: 'static',
  site: 'https://scribe-platform.github.io',
  base: process.env.PUBLIC_BASE_PATH || '/',
});
