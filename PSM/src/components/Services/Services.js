import React from "react"
import styled from "styled-components"
import { Card } from "../Utils/Card"
import { Flex } from "../Utils/containers"
import servicesImage from "../../images/services.png"

import { servicesCopy } from "./copy"

export const Services = () => {
  const cards = servicesCopy.map((e, i) => <Card key={i} data={e} />)
  return (
    <CardContainer>
        <CardFlex background={servicesImage}>{cards}</CardFlex>
    </CardContainer>
  )
}

export const CardFlex = styled(Flex)`
  flex-wrap: nowrap;
  justify-content: center;
  width: 100%;
  background-image: ${props => `url(${props.background})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 1396px) {
    width: 100%;
  }
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`

export const CardContainer = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 6rem;
  @media (max-width: 991px) {
    margin-bottom: 3rem;
  }
`
