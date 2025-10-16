// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = repo ? `/${repo}/` : '/';

// https://astro.build/config
export default defineConfig({
  base,
  integrations: [mdx()],
});
