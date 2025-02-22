// @ts-check
import { defineConfig } from 'astro/config';
import clerk from "@clerk/astro";
// import node from "@astrojs/node";
import vercel from "@astrojs/vercel";
// import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
    integrations: [clerk()],
    adapter: vercel()
});



// Clerk Config