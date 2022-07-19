module.exports = {
  siteMetadata: {
    title: `franz.codes`,
      siteUrl: `https://franz.codes`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },

  `gatsby-plugin-mdx`,
  'gatsby-plugin-mdx-frontmatter',
  'gatsby-remark-reading-time',
  'gatsby-plugin-image',
  'gatsby-plugin-sharp',
  "gatsby-transformer-sharp",
  {
    resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -105
      }
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `franz.codes`,
      short_name: `franz`,
      start_url: `/`,
      icon: 'src/assets/images/gatsby-icon.png',
    },
  },
  `gatsby-plugin-react-helmet`,
  ]
}