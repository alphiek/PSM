import React from "react"
import Layout from "./src/components/layout"
import { GlobalStyle } from "./src/global/globalStyle"

require("typeface-roboto")
require("typeface-roboto-slab")

export const wrapPageElement = ({ element }) => {
  if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }
  return (
    <>
      <GlobalStyle />
      <Layout>{element}</Layout>
    </>
  )
}

export const onClientEntry = () => {
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}
