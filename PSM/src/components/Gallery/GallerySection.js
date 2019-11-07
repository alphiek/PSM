import React from "react"
import styled from "styled-components"
import { SectionFullWidth, ScrollStop } from "../Utils/containers"
import { colors } from "../Utils/colors"
import { Carousel } from "./Carousel"

export const GallerySection = () => {
  return (
    <SectionFullWidth background={colors.slate} align='center'>
      <H2Light>Swipe to view our recent projects</H2Light>
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
      <ScrollStop id="contact" />
    </SectionFullWidth>
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
`
const CarouselContainer = styled.div`
  margin-top: 3rem;
  width: 80vw;
`