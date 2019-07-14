import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

// const HeaderStyles = styled.header`
//   height: 80px;
//   background: ${props => props.theme.teal};
//   color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

// const Div = styled.div`
//   width: 80%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `

// const Logo = styled(Link)`
//   text-decoration: none;
//   font-size: 3rem;
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `

// const Nav = styled.div`
//   display: flex;
//   align-items: center;
// `
