import React from "react"
import styled from "styled-components"
import Helmet from "react-helmet"

const NotFoundPage = () => (
  <>
    <Helmet>
      <html lang="en" />
      <title>Error Not Found</title>
      <meta name="description" content="404 Page"></meta>
    </Helmet>
    <FlexWrapper>
      <p style={{ marginTop: "0em", paddingTop: "0em" }}>404</p>
      <h1 style={{ marginBottom: "1em" }}>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </FlexWrapper>
  </>
)

export default NotFoundPage

const FlexWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-height: 424px) and (orientation: landscape) {
    margin: 5em auto;
  }
`
