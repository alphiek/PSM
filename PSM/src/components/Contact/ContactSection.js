import React from "react"
import styled from "styled-components"
import { colors } from "../Utils/colors"
import { Areas } from './Areas/Areas'
import { FormSection } from "./Form/FormSection"

export const ContactSection = () => {
  return (
    <Section id="contact">
      <ContentWrapper>
        <FormSection />
        <Areas />
      </ContentWrapper>
    </Section>
  )
}

const Section = styled.section`
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

const ContentWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    width: 80%;
  }
  @media (max-width: 660px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`
