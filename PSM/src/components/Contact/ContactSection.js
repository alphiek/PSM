import React from "react"
import styled from "styled-components"
import { colors } from "../Utils/colors"
import { Areas } from './Areas/Areas'
import { FormSection } from "./Form/FormSection"
import { ContactWrapper } from '../Utils/containers'

export const ContactSection = () => {
  return (
    <Section>
      <ContactWrapper>
        <FormSection />
        <Areas />
      </ContactWrapper>
    </Section>
  )
}

const Section = styled.footer`
  background-color: ${colors.medGrey};
  color: ${colors.tan};
  padding: 6rem 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    padding: 6rem 0;
  }
`


