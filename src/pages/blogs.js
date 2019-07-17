import React from "react"
import { graphql, Link } from "gatsby"

const SecondPage = ({ data }) => {
  return (
    <>
      <h1>Blog Page</h1>
      <h4>{data.allMarkdownRemark.totalCount}</h4>
      {data.allMarkdownRemark.edges.map(post => (
        <div key={post.node.frontmatter.title}>
          <Link to="/blogs">
            <h2>{post.node.frontmatter.title}</h2>
            <span>{post.node.frontmatter.date}</span>
            <p>{post.node.frontmatter.excerpt}</p>
          </Link>
        </div>
      ))}
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
      totalCount
    }
  }
`

export default SecondPage
