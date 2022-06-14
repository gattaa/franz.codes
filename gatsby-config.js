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
  'gatsby-plugin-image',
  'gatsby-plugin-sharp'
  ]
}