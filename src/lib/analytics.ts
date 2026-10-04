// Analytics (ADR 0001). This Site predates `scripts/generate-config.mjs` and
// has no generated `site-config.ts` to read, so the two values are here
// instead of being derived at build time.
//
// **The canonical copy lives in this repo's `.scribe.yml`**, which is what
// Scribe itself reads and writes. If one ever has to change, change both — a
// stale id here means the Site reports into the wrong Umami website, which
// looks exactly like working.
export const UMAMI_WEBSITE_ID = '8274c1c4-a731-4142-bb1b-4ece7cbb263a';
export const UMAMI_SCRIPT_URL = 'https://analytics.weaverdigital.io/script.js';
