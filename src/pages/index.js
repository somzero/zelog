import React from "react"
import { Link, graphql } from "gatsby"
// import BlogTitle from "../component/blogTitle/blogTitle"
import Layout from "../component/layout/layout"
import Img from "gatsby-image"
import "../assets/css/reset.css"
import "../assets/css/pageIndex.css"

export default ({ data }) => {
  return (
    <Layout>
      {/* <BlogTitle /> */}
      <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link className="post__box" key={node.id} to={node.fields.slug}>
            <div className="post__image__box">
              <Img
                className="post__image"
                fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                style={{
                  width: `${154 *
                    (node.frontmatter.featuredImage.childImageSharp.fluid
                      .presentationWidth /
                      node.frontmatter.featuredImage.childImageSharp.fluid
                        .presentationHeight)}px`,
                }}
              />
            </div>
            <div className="post__sub__title">catalouge-type</div>

            <div className="post__text__box">
              <div className="post__title">{node.frontmatter.title}</div>
              <div className="post__box__description">{node.excerpt}</div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___publishedAt], order: DESC }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
