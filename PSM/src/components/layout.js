import React from "react"
import PropTypes from "prop-types"
import Header from '../components/header/Header'

const Layout = ({ children }) => {  
  return (
      <div style={{ height: '100%' }}>
        <Header/>
        <main>{children}</main>
        <footer>This is the Footer</footer>
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
