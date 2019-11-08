import React from "react"
import styled from "styled-components"
import Icons from "./Icons"
import { colors } from '../Utils/colors'

const Intro = () => {
  return (
    <IntroWrapper>
      <Icons />
      <h4>So why choose Paphos Stone Masons</h4>
      <LightParagraph>
        With over 20 years of local experience at our finger tips, Paphos Stone
        Masons are in the best place to deliver high quality stone masonry and
        decorative landscaping. Our knowledge of local materials and working
        methods ensure quality and continuity on every job we undertake.
      </LightParagraph>
      <LightParagraph>
        Our construction professionals evaluate your unique needs before
        designing a plan to integrate with your exteriors. Updating or repairing
        existing stone work or adding a new feature to your garden, we have you
        covered!
      </LightParagraph>
    </IntroWrapper>
  )
}

export default Intro

const IntroWrapper = styled.div`
  background-color: ${colors.slate};
  position: relative;
  width: 60%;
  padding: 0 3rem 3rem 3rem;
  @media (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 660px) {
    padding: 2rem 3rem 2.5rem 2rem;
  }
`

const LightParagraph = styled.p`
  color: ${colors.mutedWhite};
  font-weight: 400;
  width: 85%;
  margin-bottom: 1rem;
  @media (max-width: 991px) {
    width: 100%;
  }
`
