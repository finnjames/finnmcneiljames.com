// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  // keep the whitespace between inline elements as written, like plain HTML, rather than Astro's JSX-style trimming
  compressHTML: true,
  markdown: {
    // code blocks get Prism's token classes, which are themed with the site's colors in src/styles/global.scss
    syntaxHighlight: 'prism',
    processor: unified({
      // links in posts that leave the site open in a new tab
      rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener'] }]],
    }),
  },
});
