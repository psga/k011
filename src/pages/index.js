//import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"
//
//import Layout from "../components/layout"
//import Seo from "../components/seo"
//
//const IndexPage = () => (
//  <Layout>
//    <Seo title="Home" />
//    <h1>Hi people</h1>
//    <p>Welcome to your new Gatsby site.</p>
//    <p>Now go build something great.</p>
//    <StaticImage
//      src="../images/gatsby-astronaut.png"
//      width={300}
//      quality={95}
//      formats={["AUTO", "WEBP", "AVIF"]}
//      alt="A Gatsby astronaut"
//      style={{ marginBottom: `1.45rem` }}
//    />
//    <p>
//      <Link to="/page-2/">Go to page 2</Link> <br />
//      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//    </p>
//  </Layout>
//)
//
//export default IndexPage


import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';

const IndexPage = ({ data }) => {
	const { edges } = data.allMarkdownRemark;

	return (
		<Layout>
			<div>
				{edges.map(edge => {
					const { frontmatter } = edge.node;
					return (
						<div key={frontmatter.path}>
							<Link to={frontmatter.path}>{frontmatter.title}</Link>
							&nbsp;
							<small>
								{' '}
								<em>published on</em> {frontmatter.date}
							</small>
							<p>{frontmatter.excerpt}</p>
							<br />
						</div>
					);
				})}
			</div>
		</Layout>
	);
};

export const query = graphql`
	query HomePageQuery {
		allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
						tags
						excerpt
					}
				}
			}
		}
	}
`;

export default IndexPage;
