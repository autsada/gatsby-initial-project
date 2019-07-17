import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderStyles = styled.header`
  height: 80px;
  background: ${props => props.theme.teal};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Div = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Nav = styled.div`
  display: flex;
  align-items: center;

  /* ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      list-style: none;
    }
  } */
`

// const LinkStyles = styled(Link)`
//   text-decoration: none;
//   color: white;
// `

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <Div>
      <Logo to="/">Logo</Logo>
    </Div>
    <Nav>Navigation</Nav>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
