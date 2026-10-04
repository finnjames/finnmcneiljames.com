---
title: A Visual Overhaul for the Site
date: 2026-10-04
snippet: Switching to Astro and changing the vibe
---

It has been four years since I last wrote about this site, so here's a big one: the whole thing has been rebuilt and redesigned.

## Astro

Back in 2021 I wrote that [Astro](https://astro.build/) was next up, and it only took me five years to get there :) I tried moving to Angular SSR, but it proved far too heavy for a site like this.

It's a good fit! Every page is static HTML, and the only JavaScript left is the little bit that runs the color mode switch, the mobile menu, and the email widget. Posts are plain Markdown files in a content collection, and code blocks are highlighted at build time with Prism.

Using Astro has been a pleasure, honestly. I feel like it's the perfect combination of a static site generator like 11ty and a robust templating framework like Svelte.

## The new look

The purple, floating-in-space look is gone :( The site is now off-white and near-black with a single electric blue, and all of the colors are defined in `oklch`. I was inspired by the Aqua design system of the original OSX, as well as avant-garde fashion like Maison Margiela and Peter Do.

The type is all-new, too:

- Body text is [SUSE](https://fonts.google.com/specimen/SUSE).
- Labels, navigation, and code are [SUSE Mono](https://fonts.google.com/specimen/SUSE+Mono). It shares its proportions with SUSE, so inline code and code blocks sit at the same size as the text around them.
- Titles are set in OB-sys12, a chunky variable display face with a lot of character.

SUSE and SUSE Mono are served by Google Fonts, shout out!

## CV

The CV page has sticky headers for ease of navigation. It also showcases a boarding pass on desktop as a nod to my new stage of life here in NYC!

## Light/dark mode toggle

In 2021, I had said I wanted a three-way mode switch with an "auto" option. In short, I changed my mind. Three way switches are confusing. Instead, we've got a two-way switch that follows your system setting until you choose otherwise, and choosing what your system already wants hands control back to it. I also added a sunlight/moonlight visual effect.

I hope y'all enjoy the new look :)
