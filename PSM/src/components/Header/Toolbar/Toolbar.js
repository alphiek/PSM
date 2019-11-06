import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Logo from "../Logo"
import NavLinks from "../NavLinks/NavLinks"
import SideDrawerToggle from "../SideDrawer/SideDrawerToggle"
import elevation from '../../Utils/elevation'

const Toolbar = ({ toggleHandler }) => {
  return (
    <Header>
      <nav>
        <Logo />
        <Spacer />
        <ToolbarNavItems>
          <NavLinks color="#3D3F43" />
        </ToolbarNavItems>
        <SideDrawerToggle click={toggleHandler} />
      </nav>
    </Header>
  )
}

Toolbar.propTypes = {
  toggleHandler: PropTypes.func.isRequired,
}

export default Toolbar

const Spacer = styled.div`
  flex: 1;
`

const ToolbarNavItems = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`

const Header = styled.header`
   ${elevation[3]};
`
