import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import svelte from "@astrojs/svelte";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind({
    configFile: "./tailwind.config.cjs"
  }), mdx(), partytown(), sitemap(), prefetch(), svelte()],
  site: "https://hullcss.org",
  adapter: cloudflare()
});