import React from "react"
import PropTypes from "prop-types"
import Header from "../components/header/Header"
import { Footer } from '../components/Footer/Footer'

const Layout = ({ children }) => {
  return (
    <div style={{ height: "100%" }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
