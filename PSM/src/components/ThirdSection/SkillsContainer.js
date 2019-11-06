import React from "react"
import styled from "styled-components"
import { skillsCopy } from "./copy"
import { Icons } from "./Icons"
import { Flex } from "../Utils/containers"

export const SkillsContainer = () => {
  const skills = skillsCopy.map((e, i) => (
    <Item key={i}>
      <Icons />
      <p>{e.name}</p>
    </Item>
  ))

  return <Container>{skills}</Container>
}

const Container = styled(Flex)`
  flex-wrap: wrap;
  align-items: space-evenly;
  justify-content: center;
  margin: 3rem 0;
`

const Item = styled.div`
  width: 30%;
  text-align: center;
  margin: 3rem 0;
  @media (max-width: 660px) {
    width: 40%;
  }
`
