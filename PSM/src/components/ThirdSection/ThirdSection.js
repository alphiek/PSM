import React from "react"
import styled from "styled-components"
import { Flex } from "../Utils/containers"

export const ThirdSection = () => (
  <SectionContainer id="what-we-do">
    <h2>What we do</h2>
  </SectionContainer>
)

const SectionContainer = styled(Flex)`
  justify-content: center;
  width: 100%;
`
