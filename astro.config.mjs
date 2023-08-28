import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import { ssr } from 'solid-js/web';

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs(), partytown({
    config: {
      forward: ["dataLayer.push"]
    }
  })],
  site: 'https://kazph.github.io',
  base: '/nutn',
  vite: {
    ssr: {
      noExternal: ["@kobalte/core"]
    }
  }
});