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
  integrations: [
    tailwind(), 
    mdx(), 
    partytown(), 
    sitemap(), 
    prefetch()
  ],
  output: "server",
  adapter: cloudflare(),
  redirects: {
    "/posts": "/blog",
    "/links": "https://linktr.ee/hullcss",
    "/links/test": "https://youtu.be/dQw4w9WgXcQ",
    "/links/discord": "https://discord.gg/AFxbUs5kyA",
    "/links/facebook": "https://facebook.com/hullCSS",
    "/links/github": "https://github.com/hullcss",
    "/links/husu": "https://hulluniunion.com/activities/view/ComputerScience",
    "/links/instagram": "https://instagram.com/hull_css/",
    "/links/linkedin": "https://linkedin.com/company/hullcss",
    "/links/twitter": "https://twitter.com/hull_CSS",
    "/links/email": "mailto:hullcss@hull.ac.uk",
    "/links/website": "https://hullcss.org",
    "/links/address": "https://what3words.com/torch.dips.factor",
    "/links/freeside": "https://freeside.co.uk",
    "/links/gradcracker": "https://www.gradcracker.com/student-societies/4305/hull-computer-science-society-css"
  }
});