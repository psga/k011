const path = require(`path`)
const remarkMath = require(`remark-math`)

const config = require(`./site.config`)

module.exports = {
  siteMetadata: config,
  pathPrefix: "/k011",

  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `k011`,
        short_name: `k011`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `r`,
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [`gatsby-remark-katex`],
        remarkPlugins: [remarkMath],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        content: [
          path.join(process.cwd(), "src/**/!(*.d).{ts,js,jsx,tsx,md,mdx}"),
          path.join(process.cwd(), "gatsby-browser.js"),
        ],
        printRejected: true, // Print removed selectors and processed file names
        develop: false, // Enable while using `gatsby develop`
        // whitelist: ['whitelist'], // Don't remove this selector
        ignore: ["katex/dist/katex.min.css"],
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'],
      },
    },
  ],
}
