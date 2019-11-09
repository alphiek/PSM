import React from "react"
import { ScrollStop } from "../Utils/containers"
import { colors } from "../Utils/colors"
import { Carousel } from "./Carousel"
import { Section, H2Light, CarouselContainer } from "./styles"

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
