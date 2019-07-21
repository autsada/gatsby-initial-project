import React from "react"
import Image from "gatsby-image"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const PostsDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  padding-bottom: 4rem;

  @media ${props => props.theme.sm} {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const PostLink = styled(Link)`
  color: ${props => props.theme.black};
  text-decoration: none;
  background: ${props => props.theme.backgroundGrey};

  border-radius: 4px;
  transition: all ${props => props.theme.transitionDuration} ease-out;
  /* box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.4); */
  -moz-box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  &:hover {
    background: ${props => props.theme.hoverBackground};
    transform: scale(1.05);
  }
`

const Span = styled.span`
  color: ${props => props.theme.grey};
  font-style: italic;
`

const SecondPage = ({ data }) => {
  const { totalCount, edges } = data.allMarkdownRemark
  return (
    <>
      <h1>Blog Page</h1>
      <h4>{totalCount} Posts</h4>
      <PostsDiv>
        {edges.map(post => {
          const {
            fields: { slug },
            frontmatter: { title, date, author, excerpt, image },
          } = post.node
          return (
            <PostLink to={`/${slug}`} key={title}>
              <Image fluid={image.childImageSharp.fluid} />
              <div style={{ marginLeft: "2rem" }}>
                <h2>{title}</h2>
                <Span>
                  {author} | {date}
                </Span>
                <p>{excerpt}</p>
              </div>
            </PostLink>
          )
        })}
      </PostsDiv>
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
            author
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`

export default SecondPage
