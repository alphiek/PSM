import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        landing: file(relativePath: { eq: "landingImage.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.landing.childImageSharp.fluid
      return (
        <BackgroundImage
          fluid={imageData}
          backgroundColor={`#fff`}
        >
         {children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: center;
  background-repeat: norepeat;
  background-size: cover;
`

export default StyledBackgroundSection