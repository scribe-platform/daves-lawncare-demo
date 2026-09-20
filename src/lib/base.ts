// This site is served from a GitHub Pages project URL
// (https://scribe-platform.github.io/daves-lawncare-demo/), a subpath
// rather than "/" — every internal link/asset path is written
// root-relative in the page markup below and routed through here so it
// resolves correctly under that base (astro.config.mjs sets `base` from
// the PUBLIC_BASE_PATH env var the deploy workflow computes).
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
