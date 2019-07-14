import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"
import SEO from "./seo"

const theme = {
  teal: "#009688",
  darkTeal: "#00796B",
  lightTeal: "#B2DFDB",
  black: "#212121",
  grey: "#757575",
  lightGrey: "#BDBDBD",
  white: "#FFFFFF",
  red: "#FF5252",
  darkRed: "#D32F2F",
  orange: "#FF5722",
  blue: "#466ab5",
  lightBlue: "#1976d2",
  darkBlue: "#3b5998",
  sm: "(max-width: 600px)",
  md: "(max-width: 960px)",
  lg: "(max-width: 1025px)",
  xl: "(min-width: 1026px)",
  width: "1000px",
  fontFamily: "Segoe UI, Verdana, sans-serif",
  transitionDuration: "0.35s",
}

const GlobalStyle = createGlobalStyle`
   html {
      box-sizing: border-box;
      font-size: 10px;
   }
   *, *:before, *:after {
      box-sizing: inherit;
   }
   body {
      padding: 0;
      margin: 0;
      font-size: 1.6rem;
      font-family: ${props => props.theme.fontFamily};
      font-weight: 400;
      color: ${props => props.theme.black};
   }
`

const Page = styled.div`
  margin: 0;
  padding: 0;
`

const Content = styled.main`
  width: 80%;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Page>
        <SEO title={data.site.siteMetadata.title} />
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>{children}</Content>
        <Footer />
      </Page>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
