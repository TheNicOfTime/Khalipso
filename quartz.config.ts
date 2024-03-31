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
          light: "#1B262C", // deep space blue
          lightgray: "#0F4C75", // galaxy blue
          gray: "#3282B8", // nebula blue
          darkgray: "#BBE1FA", // alien light blue
          dark: "#1B262C", // starlight dark blue
          secondary: "#D7263D", // neon red
          tertiary: "#3F88C5", // cosmic light blue
          highlight: "rgba(187, 225, 250, 0.15)", // translucent alien light blue
        },
        darkMode: {
          light: "#BBE1FA", // deep space light blue
          lightgray: "#1B262C", // galaxy dark blue
          gray: "#0F4C75", // nebula blue
          darkgray: "#3282B8", // alien blue
          dark: "#1B262C", // starlight dark blue
          secondary: "#D7263D", // neon red
          tertiary: "#3F88C5", // cosmic light blue
          highlight: "rgba(187, 225, 250, 0.15)", // translucent alien light blue
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
