module.exports = {
  siteMetadata: {
    title: `Tesla Na Autopilocie w Polsce`,
    author: {
      name: `Miłosz Sobczak`,
      summary: `programistę, krytycznego właściciela Tesli Model 3.`,
    },
    description: `Testujemy jak autopilot zachowuje się na polskich drogach w różnych warunkach, w różnych miejscach.`,
    siteUrl: `https://na-autopilocie.pl/`,
    social: {
      facebook: `TeslaNaAutopilocie`,
      instagram: `TeslaNaAutopilocie`,
      youtube: {
        name: `NaAutopilocie`,
        id: `UC4htSg3m57ogKPf0eMe276A`
      }
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'pl'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-180119421-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tesla Na Autopilocie w Polsce`,
        short_name: `NaAutopilocie`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/autopilot_wheel.png`,
      },
    },
    // `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
