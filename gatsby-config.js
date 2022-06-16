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
  /*'gatsby-plugin-image',
  'gatsby-plugin-sharp',*/
  {
    resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -105
      }
  },
  `gatsby-plugin-react-helmet`
  ]
}