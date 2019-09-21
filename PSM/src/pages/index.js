import React from "react"
import styled from 'styled-components'

const Section = styled.div`
 height: 100vh;
`

const IndexPage = () => (
  <div>
    <Section id='services'>Services</Section>
    <Section id='what-we-do'>What we do</Section>
    <Section id='gallery'>Gallery</Section>
    <Section id='contact'>Contact</Section>
  </div>
)

export default IndexPage
