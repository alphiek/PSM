import React from "react"
import { Item, Container } from "./styles"
import { skillsCopy } from "./copy"
import { Icons } from "./Icons"

export const SkillsContainer = () => {
  const skills = skillsCopy.map((e, i) => (
    <Item key={i}>
      <Icons name={e.icon} />
      <p>{e.name}</p>
    </Item>
  ))

  return <Container>{skills}</Container>
}
