import React from "react"
import { Subtitle } from "./Subtitle"
import { SectionMargin } from "../Utils/containers"
import { Services } from "./Services"

export const ServicesSection = () => (
  <SectionMargin id="services">
    <Subtitle />
    <Services />
  </SectionMargin>
)
