import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { loadEnv } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import AutoImport from "astro-auto-import";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import sitemap from "@astrojs/sitemap";

const env = loadEnv("", process.cwd(), "STORYBLOK");

let output = env.STORYBLOK_IS_PREVIEW === "yes" ? "server" : "static";
console.log("**** output", output);
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      bridge: env.STORYBLOK_IS_PREVIEW === "yes",
      components: {
        page: "storyblok/Page",
        config: "storyblok/Config",
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        teaser: "storyblok/Teaser",
        hero: "storyblok/Hero",
        banner: "storyblok/Banner",
        "popular-articles": "storyblok/PopularArticles",
        "all-articles": "storyblok/AllArticles",
        article: "storyblok/Article",
        cta: "storyblok/Cta",
        about: "storyblok/About",
        accordion: "storyblok/Accordion",
        plans: "storyblok/Plans",
        context: "storyblok/Context",
      },
    }),
    tailwind(),
    react(),
    sitemap(),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Image",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
      ],
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  output,
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  adapter: vercel(),
});
