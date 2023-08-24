module.exports = {
  siteMetadata: {
    siteTitle: `Far Galaxy`,
    defaultTitle: `Far Galaxy`,
    siteTitleShort: `far-galaxy`,
    siteDescription: `Far Galaxy RPG website`,
    siteUrl: `https://far-galaxy.vercel.app`,
    siteAuthor: `@tatooka`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        yamlFilesPath: `src/yamlFiles`,
        repositoryUrl: `https://github.com/jpedroschmitz/rocketdocs`,
        baseDir: `examples/gatsby-theme-docs`,
        gatsbyRemarkPlugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Far Galaxy`,
        short_name: `far-galaxy`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://far-galaxy.vercel.app`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
