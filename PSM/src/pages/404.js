import React from "react"
import styled from "styled-components"
import Helmet from "react-helmet"
import { colors } from '../components/Utils/colors'

const NotFoundPage = () => (
  <>
    <Helmet>
      <html lang="en" />
      <title>Error Not Found</title>
      <meta name="description" content="404 Page"></meta>
    </Helmet>
    <FlexWrapper>
      <Number>404</Number>
      <H1>NOT FOUND</H1>
    </FlexWrapper>
  </>
)

export default NotFoundPage

const FlexWrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-height: 424px) and (orientation: landscape) {
    margin: 5em auto;
  }
`

const Number = styled.p`
  font-size: 3.5rem;
  color: ${colors.slate};
  font-weight: 700;
  margin: 0;
`
const H1 = styled.h1`
  color: ${colors.slate};
  margin: 1rem 0;
`