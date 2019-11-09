import styled from "styled-components"
import { SectionFullWidth } from "../Utils/containers"
import elevation from "../Utils/elevation"
import Img from "gatsby-image"
import { colors } from "../Utils/colors"

export const H2Light = styled.h2`
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
export const CarouselContainer = styled.div`
  margin-top: 3rem;
  width: 80vw;
`

export const Section = styled(SectionFullWidth)`
  @media (max-width: 660px) {
    padding: 1rem 0 4rem;
  }
`

export const Image = styled(Img)`
  width: 100%;
  margin: 0 auto;
  border-radius: 6px;
  background-color: rgba(255, 255, 255, 0.08);
  ${elevation[6]};
`
