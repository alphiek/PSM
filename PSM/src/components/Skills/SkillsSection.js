import React from "react"
import { InfoWrapper } from './styles'
import { SectionFullWidth, ScrollStop } from "../Utils/containers"
import { SkillsContainer } from "./SkillsContainer"
import { skillsInfo } from "./copy"

export const SkillsSection = () => (
  <SectionFullWidth background="white" align="center">
    <h2>What we do</h2>
    <SkillsContainer />
    <InfoWrapper>
      <p>{skillsInfo}</p>
    </InfoWrapper>
    <ScrollStop id="gallery" />
  </SectionFullWidth>
)


