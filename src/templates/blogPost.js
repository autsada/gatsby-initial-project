import React from "react"
import { graphql } from "gatsby"

const blogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <div style={{ width: "70%", margin: "0 auto" }}>
      <h1>{post.frontmatter.title}</h1>
      <div>
        <span>{post.frontmatter.date}</span>
        <span>{post.frontmatter.author}</span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export default blogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        author
      }
    }
  }
`
