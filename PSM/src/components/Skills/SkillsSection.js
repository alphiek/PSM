import React from "react"
import styled from "styled-components"
import { SectionFullWidth } from "../Utils/containers"
import { SkillsContainer } from "./SkillsContainer"
import { skillsInfo } from "./copy"
import { colors } from "../Utils/colors"

export const SkillsSection = () => (
  <SectionFullWidth background="white" id="what-we-do" align="center">
    <h2>What we do</h2>
    <SkillsContainer />
    <InfoWrapper>
      <p>{skillsInfo}</p>
    </InfoWrapper>
  </SectionFullWidth>
)

const InfoWrapper = styled.div`
  width: 50%;
  background-color: ${colors.tan};
  text-align: center;
  padding: 2rem;
  @media (max-width: 991px) {
    width: 80%;
  }
  @media (max-width: 660px) {
    width: 90%;
  }
`
