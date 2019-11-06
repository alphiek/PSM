import React from "react"
import styled from "styled-components"
import { Flex } from "../Utils/containers"
import { SkillsContainer } from './SkillsContainer'

export const ThirdSection = () => (
  <SectionContainer id="what-we-do">
    <h2>What we do</h2>
    <SkillsContainer />
  </SectionContainer>
)

const SectionContainer = styled(Flex)`
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: white;
  padding: 6rem  0;
`
