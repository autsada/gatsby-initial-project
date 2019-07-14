import React from "react"
import styled from "styled-components"

const FooterStyles = styled.div`
  height: 100px;
  background: ${props => props.theme.lightTeal};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Div = styled.footer`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
`

const Footer = () => {
  return (
    <FooterStyles>
      <Div>Footer</Div>
    </FooterStyles>
  )
}

export default Footer
