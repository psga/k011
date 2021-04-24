import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../layout"
import SEO from "../seo"
export default function BlogPost({ data: { allMdx, mdx, site } }) {
  return (
    <Layout
      title={site.siteMetadata.title}
      noSEO
      latestSlug={allMdx.edges[0].node.fields.slug}
    >
      <SEO
        title={mdx.frontmatter.title}
        description={mdx.frontmatter.description}
      />
      <div className="relative pa4 bg-black">
        <div>
          <header className="white-80 bg-black pa3">
            <h1 className="f2 lh-title mb0">{mdx.frontmatter.title}</h1>
            <h5 className="f4 lh-copy mb0 mt1">{mdx.frontmatter.date}</h5>
          </header>
          <article className="white-70 f7 bg-black pa4">
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </article>
        </div>
         </div>
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,

    mdx: PropTypes.shape({
      id: PropTypes.string.isRequired,
      body: PropTypes.any.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,

    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
            }).isRequired,
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    site {
      siteMetadata {
        title
      }
    }

    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
        description
      }
    }

    allMdx(limit: 5, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
