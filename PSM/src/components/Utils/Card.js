import React from "react"
import styled from "styled-components"
import { Icons } from "../Services/Icons"
import elevation from "../Utils/elevation"
import { Divider } from "../Utils/divider"

export const Card = ({ data }) => {
  return (
    <CardWrapper>
      <GridArea1>
        <Icons />
        <h3>{data.title}</h3>
        <h4>{data.cta}</h4>
      </GridArea1>
      <GridArea2>
        <Divider color={data.hr} />
        <p>{data.p}</p>
      </GridArea2>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  flex: 0 1 350px;
  display: grid;
  background-color: white;
  grid-template-columns: 100%;
  grid-template-rows: 100px auto;
  padding: 2rem;
  ${elevation[3]};
  text-align: center;
  &:nth-child(2) {
    margin: 0 2rem;
  }
  grid-template-areas:
    "one"
    "two";
  @media (max-width: 991px) {
    flex: 0 1 auto;
    margin: 2rem 2rem;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: auto;
    grid-template-areas: "one two";
  }
  @media (max-width: 660px) {
    grid-template-columns: 100%;
    grid-template-rows: 100px auto;
    grid-template-areas:
      "one"
      "two";
  }
`

const GridArea1 = styled.div`
  grid-area: one;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`

const GridArea2 = styled.div`
  grid-area: two;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: row;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  @media (max-width: 660px) {
    flex-direction: column;
    text-align: center;
  }
`
