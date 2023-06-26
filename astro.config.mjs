import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import solidJs from "@astrojs/solid-js";
import { ssr } from 'solid-js/web';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs()],
  site: 'kazph',
  base: '/nutn',
  vite: {
    ssr: {
      noExternal: ["@kobalte/core"]
    }
  }
});