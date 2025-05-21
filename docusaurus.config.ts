import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Emerald Imperium",
  tagline: "Difficutly hack by Iriv24",
  favicon: "img/empoleonlogo.png",

  // Set the production url of your site here
  url: "https://izrofid.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/eiweb",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "izrofid", // Usually your GitHub org/user name.
  projectName: "eiweb", // Usually your repo name.

  onBrokenLinks: "throw",
  trailingSlash: false,
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/empoleon.png",
    navbar: {
      title: "Emerald Imperium",
      logo: {
        alt: "EI Logo",
        src: "img/empoleon.png",
      },
      items: [
        { to: "/play", label: "Play", position: "left" },
        { to: "/walkthrough", label: "Walkthrough", position: "left" },
        { to: "/trainers", label: "Trainers", position: "left" },
        {
          type: "doc",
          docId: "documentation/intro",
          position: "left",
          label: "Docs",
        },
        {
          type: "doc",
          docId: "hof/rules",
          position: "left",
          label: "Nuzlocke",
        },
        {
          href: "https://github.com/iriv24/pokeemerald-expansion",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Reddit",
              href: "https://reddit.com/emeraldimperium",
            },
            {
              label: "Discord",
              href: "https://discord.gg/emeraldimperium",
            },
          ],
        },
        {
          title: "Github",
          items: [
            {
              label: "Website",
              href: "https://github.com/izroid/eiweb",
            },
            {
              label: "Game",
              href: "https://github.com/iriv24/pokeemerald-expansion",
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
