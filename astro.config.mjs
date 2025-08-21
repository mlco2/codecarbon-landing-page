import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
// https://astro.build/config
export default defineConfig({
  site: "https://mlco2.github.io",
  base: "/codecarbon-landing-page/",
  vite: {
    plugins: [tailwindcss()],
  },
});
