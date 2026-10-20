import { defineConfig } from 'astro/config';

// GitHub Actions supplies the actual Pages address, including any repository path.
const deployment = new URL(process.env.SITE_URL || 'http://localhost:4321/');
export default defineConfig({
  site: deployment.origin,
  base: deployment.pathname,
  output: 'static',
  devToolbar: { enabled: false },
  trailingSlash: 'always',
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' }, defaultColor: false },
  },
});
