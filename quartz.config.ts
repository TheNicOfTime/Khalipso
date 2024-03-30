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
          light: "#0d1137", // deep space blue
          lightgray: "#39FF14", // galaxy blue
          gray: "#278ea5", // nebula teal
          darkgray: "#21e6c1", // alien green
          dark: "#1f3c88", // starlight blue
          secondary: "#f7217b", // neon pink
          tertiary: "#6639a6", // cosmic purple
          highlight: "rgba(33, 230, 193, 0.15)", // translucent alien green
        },
        darkMode: {
          light: "#0d1137", // deep space blue
          lightgray: "#39FF14", // galaxy blue
          gray: "#278ea5", // nebula teal
          darkgray: "#21e6c1", // alien green
          dark: "#1f3c88", // starlight blue
          secondary: "#f7217b", // neon pink
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
