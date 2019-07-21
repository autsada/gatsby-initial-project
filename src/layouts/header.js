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

  @media ${props => props.theme.sm} {
    height: 60px;
  }
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
  width: 50%;

  .logo {
    width: 10%;
    transition: all ${props => props.theme.transitionDuration} ease-out;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`

const Nav = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    li {
      list-style: none;
    }
  }
`

const LinkStyles = styled(Link)`
  text-decoration: none;
  color: white;

  transition: all ${props => props.theme.transitionDuration} ease-out;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.lightTeal};
    font-size: 1.8rem;
    font-weight: bold;
  }
`

const Header = () => (
  <HeaderStyles>
    <Div>
      <Logo to="/">Logo</Logo>
      <Nav>
        <ul>
          <li>
            <LinkStyles to="/">HOME</LinkStyles>
          </li>
          <li>
            <LinkStyles to="/blogs">BLOG</LinkStyles>
          </li>
        </ul>
      </Nav>
    </Div>
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
