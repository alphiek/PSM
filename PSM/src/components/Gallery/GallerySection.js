import React from "react"
import styled from "styled-components"
import { SectionFullWidth, ScrollStop } from "../Utils/containers"
import { colors } from "../Utils/colors"
import { Carousel } from "./Carousel"

export const GallerySection = () => {
  return (
    <Section background={colors.slate} align="center">
      <H2Light>Swipe to view our recent projects</H2Light>
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
      <ScrollStop id="contact" />
    </Section>
  )
}

const H2Light = styled.h2`
  align-self: flex-end;
  color: ${colors.mutedWhite};
  margin-right: calc(5% + 200px);
  @media (max-width: 991px) {
    margin-right: 0;
    align-self: center;
  }
  @media (max-width: 660px) {
    align-self: flex-start;
    text-align: left;
    padding: 3.5rem 10rem 0 2rem;
  }
  @media (max-width: 479px) {
    padding: 3.5rem 3rem 0 2rem;
  }
`
const CarouselContainer = styled.div`
  margin-top: 3rem;
  width: 80vw;
`

const Section = styled(SectionFullWidth)`
@media (max-width: 660px) {
  padding: 1rem 0 4rem;
}
`
