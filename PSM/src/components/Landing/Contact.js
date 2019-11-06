import React from "react"
import styled from "styled-components"
import { colors } from '../Utils/colors'

const Intro = () => {
  return (
    <ContactWrapper>
      <ContactInfo>
        Contact us <Break /> for a quotation
      </ContactInfo>
      <Divider />
      <ContactInfo>+357 5464 654</ContactInfo>
    </ContactWrapper>
  )
}

export default Intro

const ContactWrapper = styled.div`
  display: flex;
  background-color: ${colors.tan};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  text-align: center;
  @media (max-width: 991px) {
    width: 100%;
    padding: 3rem;
    text-align: left;
    align-items: flex-start;
  }
`
const Divider = styled.hr`
  height: 0.2rem;
  width: 50%;
  background-color: ${colors.slate};
  overflow: visible;
  margin: 1rem 0;
`
const ContactInfo = styled.p`
  font-weight: 500;
  text-transform: uppercase;
`

const Break = styled.br`
  @media (max-width: 991px) {
    display: none;
  }
`
