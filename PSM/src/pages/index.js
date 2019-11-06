import React from "react"
import styled from "styled-components"
import Landing from "../components/Landing/Landing"
import { ServicesSection } from "../components/Services/ServicesSection"
import { ThirdSection } from '../components/ThirdSection/ThirdSection'

const Section = styled.div`
  height: 100vh;
`

const IndexPage = () => (
  <div>
    <Landing />
    <ServicesSection />
    <ThirdSection />
    <Section id="gallery">Gallery</Section>
    <Section id="contact">Contact</Section>
  </div>
)

export default IndexPage
