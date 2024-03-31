import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "MercNet",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Orbitron",
        body: "Roboto Mono",
        code: "Space Mono",
      },
      colors: {
        lightMode: {
          light: "#0D7377", // deep space teal
          lightgray: "#14A098", // galaxy teal
          gray: "#21E6C1", // nebula cyan
          darkgray: "#32E0C4", // alien cyan
          dark: "#393E46", // starlight dark gray
          secondary: "#FF206E", // neon pink
          tertiary: "#6639a6", // cosmic purple
          highlight: "rgba(33, 230, 193, 0.15)", // translucent alien green
        },
        darkMode: {
          light: "#32E0C4", // deep space cyan
          lightgray: "#393E46", // galaxy dark gray
          gray: "#0D7377", // nebula teal
          darkgray: "#14A098", // alien teal
          dark: "#222831", // starlight black
          secondary: "#FF206E", // neon pink
          tertiary: "#6639a6", // cosmic purple
          highlight: "rgba(33, 230, 193, 0.15)", // translucent alien green
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
