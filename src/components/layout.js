/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

// const theme = {
//   teal: "#009688",
//   darkTeal: "#00796B",
//   lightTeal: "#B2DFDB",
//   black: "#212121",
//   grey: "#757575",
//   lightgrey: "#BDBDBD",
//   white: "#FFFFFF",
//   red: "#FF5252",
//   darkRed: "#D32F2F",
//   orange: "#FF5722",
//   blue: "#466ab5",
//   lightBlue: "#1976d2",
//   darkBlue: "#3b5998",
//   sm: "(max-width: 600px)",
//   md: "(max-width: 960px)",
//   lg: "(max-width: 1025px)",
//   xl: "(min-width: 1026px)",
//   width: "1000px",
//   fontFamily: "Segoe UI, Verdana, sans-serif",
//   transitionDuration: "0.35s",
// }

// const GlobalStyle = createGlobalStyle`
//    html {
//       box-sizing: border-box;
//       font-size: 10px;
//    }
//    *, *:before, *:after {
//       box-sizing: inherit;
//    }
//    body {
//       padding: 0;
//       margin: 0;
//       font-size: 1.6rem;
//       font-family: ${props => props.theme.fontFamily};
//       font-weight: 400;
//       color: ${props => props.theme.black};
//    }
// `

// const Page = styled.div`
//   margin: 0;
//   padding: 0;
// `

// const InnerPage = styled.div`
//   margin: 0 auto;
// `

// const Content = styled.main`
//   width: 70%;
//   margin: 0 auto;
// `

// Footer
// const FooterStyles = styled.div`
//   height: 100px;
//   background: ${props => props.theme.lightTeal};
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// const Div = styled.footer`
//   width: 80%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 1.6rem;
// `
