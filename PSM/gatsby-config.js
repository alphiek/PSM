require("dotenv").config()

module.exports = {
    siteMetadata: {
      title: `Paphos Stone Masons - Decorative Stonework and Landscape Masonry`,
      description: `Specialists for Traditional Decorative Stonework, Landscape Masonry and Stone Paving in Paphos.`,
      siteUrl: `https://www.paphosstonemasons.com`,
      social: {
        fb: 'https://www.facebook.com/paphosstonemasons/',
        insta: 'https://www.instagram.com/paphosstone/',
        email: `info@paphosstonemasons.com`
      },
      handle: `@paphosstonemas1`
    },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-portal`,
      options: {
        key: 'portal',
        id: 'portal',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,    
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paphos Stone Masons`,
        short_name: `PSM`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `src/images/faviconIcon.png`,
    },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
],
}
