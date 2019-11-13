import React from "react"
import { Card } from "../Utils/Card"

import servicesImage from "../../images/services.png"
import { CardContainer, CardFlex } from './styles'
import { servicesCopy } from "./copy"

export const Services = () => {
  const cards = servicesCopy.map((e, i) => <Card key={i} data={e} />)
  return (
    <CardContainer>
      <CardFlex background={servicesImage} alt='background texture'>{cards}</CardFlex>
    </CardContainer>
  )
}



