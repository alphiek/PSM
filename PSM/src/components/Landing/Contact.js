import React from "react"
import styled from "styled-components"
import { ContactCTA } from './ContactCTA'
import { colors } from '../Utils/colors'

const Intro = () => {
  return (
    <ContactWrapper>
      <ContactCTA />
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

