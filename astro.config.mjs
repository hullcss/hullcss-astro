import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://hullcss.org",
  integrations: [tailwind(), mdx(), partytown(), sitemap(), prefetch()],
  output: "server",
  adapter: cloudflare(),
  redirects: {
    "/links/discord": "https://discord.gg/sYeBPrjA",
    "/links/facebook": "https://facebook.com/hullCSS",
    "/links/github": "https://github.com/hullcss",
    "/links/husu": "https://hulluniunion.com/activities/view/ComputerScience",
    "/links/instagram": "https://instagram.com/hull_css/",
    "/links/linkedin": "https://linkedin.com/company/hullcss",
    "/links/twitter": "https://twitter.com/hull_CSS",
  }
});