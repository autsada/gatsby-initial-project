import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const Span = styled.span`
  color: ${props => props.theme.grey};
  font-style: italic;
`

const blogPost = ({ data }) => {
  const {
    frontmatter: { title, author, date },
    html,
  } = data.markdownRemark

  return (
    <div style={{ width: "70%", margin: "0 auto" }}>
      <h1>{title}</h1>
      <div>
        <Span>
          {author} | {date}
        </Span>
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
