// @ts-check
import { defineConfig } from "astro/config";
import clerk from "@clerk/astro";
// import node from "@astrojs/node";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
// import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  integrations: [clerk(), icon(), react()],
  adapter: vercel(),

  vite: {
    plugins: [tailwindcss()],
  },
});

// Clerk Config
