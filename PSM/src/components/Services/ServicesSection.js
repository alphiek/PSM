import React from "react"
import { Subtitle } from "./Subtitle"
import { SectionMargin, ScrollStop } from "../Utils/containers"
import { Services } from "./Services"

export const ServicesSection = () => (
  <SectionMargin>
    <Subtitle />
    <Services />
    <ScrollStop id="what-we-do" />
  </SectionMargin>
)
