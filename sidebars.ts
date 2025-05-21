import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "doc",
          id: "documentation/intro",
          label: "Introduction",
        },
        {
          type: "doc",
          id: "documentation/known-bugs",
          label: "Known Bugs",
        },
        {
          type: "doc",
          id: "documentation/tmhm",
          label: "TM & HM Locations",
        },
        {
          type: "doc",
          id: "documentation/megastones",
          label: "Mega Stone Locations",
        },
        {
          type: "doc",
          id: "documentation/pokemart",
          label: "Pokémart",
        },
                {
          type: "doc",
          id: "documentation/useful-npcs",
          label: "Useful NPCs",
        },
      ],
      collapsed: false,
    },
  ],
  hof: [
    {
      type: "category",
      label: "Nuzlocke",
      items: [
        {
          type: "doc",
          id: "hof/rules",
          label: "Rules",
        },
      ],
      collapsed: false,
    },
  ],
};

export default sidebars;
