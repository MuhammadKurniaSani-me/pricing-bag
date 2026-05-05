// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    // Your main GitHub Pages domain
    site: "https://MuhammadKurniaSani-me.github.io",

    // Your exact repository name starting with a forward slash
    base: "/pricing-bag",
});
