import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const Span = styled.span`
  color: ${props => props.theme.grey};
  font-style: italic;
`

const blogPost = ({ data }) => {
  const {
    author,
    content: { content },
    createdAt,
    images,
    title,
  } = data.contentfulBlogPost

  return (
    <div style={{ width: "70%", margin: "0 auto" }}>
      <h1>{title}</h1>
      <div>
        <Span>
          {author} | {createdAt}
        </Span>
      </div>
      <Image
        fluid={images[0].fluid}
        alt={images[0].title}
        style={{ margin: "3rem 0" }}
      />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default blogPost

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      author
      content {
        content
      }
      createdAt(formatString: "MMMM DD, YYYY")
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
        title
      }
      title
    }
  }
`

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         author
//       }
//     }
//   }
// `
