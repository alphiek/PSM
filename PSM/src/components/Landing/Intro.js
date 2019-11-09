import React from "react"
import Icons from "./Icons"
import { IntroWrapper, LightParagraph} from './styles'

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


