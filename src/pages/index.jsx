import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({ data: { allMdx, site } }) => {
  const socialEnums = []
  const socialLinks = []

  Object.entries(site.siteMetadata.socialLinks).forEach(([_, link], i) => {
    if (link !== 0) {
      socialEnums.push(i)
      socialLinks.push(link)
    }
  })

  return (
    <Layout
      title={site.siteMetadata.title}
      latestSlug={allMdx.edges[0].node.fields.slug}
    >
            <hr className="mw5 mv3 bg-black" />
	  <div Class="overflow-scroll min-vh-100 bg-black">
      <section className="db center mw5 mw6-l mv4 ">
        <ul className="ma0 pa0">
          {allMdx.edges.map(({ node }, id) => {
            return (
              <li className="list mb4 dim" key={id}>
                <Link to={node.fields.slug} className="no-underline">
                  <h2 className="f7 fw6 gray mv2 gray">
                    {node.frontmatter.title}
                  </h2>
                <p className="f7 mt0 white-30">{node.frontmatter.description}</p>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
	</div >
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        socialLinks: PropTypes.any.isRequired,
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

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        author

        socialLinks {
          facebook
          gatsby
          github
          imdb
          linkedin
          reddit
          skype
          slack
          spotify
          telegram
          twitter
          whatsapp
        }
      }
    }

    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
