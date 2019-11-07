import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { colors } from "../Utils/colors"

export const ModalOpen = ({ click }) => {
  return (
    <ContactWrapper
      onClick={e => {
        e.preventDefault()
        click()
      }}
    >
      <Contact>Have a project?</Contact>
      <ContactSmall><ContactSpan>contact us</ContactSpan> for an estimate </ContactSmall>
    </ContactWrapper>
  )
}

ModalOpen.propTypes = {
  click: PropTypes.func.isRequired,
}

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
  @media (max-width: 660px) {
    padding: 3rem 3rem 3rem 2rem;
  }
`

const Contact = styled.p`
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1.953rem;
  letter-spacing: -1px;
  line-height: 125%;
  margin-bottom: 10px;
`

const ContactSpan = styled.span`
text-decoration: underline;
`

const ContactSmall = styled.p`
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1.563rem;
  letter-spacing: -1px;
  line-height: 125%;
`

