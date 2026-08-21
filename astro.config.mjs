// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project-site URL — https://pr4vndevhubX.github.io/portfolio/.
  // If a custom domain is added later (via public/CNAME), drop `base` back to
  // '/' and update `site` to the domain.
  site: 'https://pr4vndevhubX.github.io',
  base: '/portfolio/',
  devToolbar: { enabled: false },
  integrations: [mdx(), sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkReadingTime, remarkMath],
      rehypePlugins: [
        rehypeKatex,
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'prepend',
            properties: { class: 'heading-anchor', ariaHidden: true, tabIndex: -1 },
            content: { type: 'text', value: '#' },
          },
        ],
      ],
    }),
    // Dual Shiki themes; `defaultColor: false` emits CSS variables
    // (--shiki-light / --shiki-dark) so global.css can switch with the theme.
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
      wrap: true,
    },
  },
});
