import React from "react"

import BackgroundSection from "./LandingImage"
import Intro from "./Intro"
import { SectionMargin, ScrollStop } from "../Utils/containers"
import { ModalControl } from "../Modal/ModalControl"
import { H1Wrapper, IntroContainer} from './styles'

const Landing = () => {
  return (
    <SectionMargin>
      <BackgroundSection>
        <H1Wrapper>
          <h1>
            Looking for quality
            <br />
            Stone Masonry in Paphos?
          </h1>
        </H1Wrapper>
      </BackgroundSection>
      <IntroContainer>
        <Intro />
        <ModalControl />
      </IntroContainer>
      <ScrollStop  id="services"/>
    </SectionMargin>
  )
}

export default Landing

