import React from 'react'
import styled from 'styled-components'

import BackgroundSection from './LandingImage'
import Intro from './Intro'
import Contact from './Contact'

const LandingSection = styled.section`
  margin: 0 2em;
`
const H1Wrapper = styled.div`
  min-height: 20rem;
  display: flex;
  align-items: center;
  padding: 3rem;
`
const IntroContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    flex-direction: column-reverse;
}
`

const Landing = () => {
    return (
        <LandingSection>
            <BackgroundSection>
                <H1Wrapper>
                    <h1>Looking for quality<br />Stone Masonry in Paphos?</h1>
                </H1Wrapper>
            </BackgroundSection>
            <IntroContainer>
                <Intro/>
                <Contact />
            </IntroContainer>
        </LandingSection>
    )
}

export default Landing 