import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Logo from "../Logo"
import { DisplayNavLinks } from "../NavLinks/DisplayNavLinks"
import SideDrawerToggle from "../SideDrawer/SideDrawerToggle"
import elevation from "../../Utils/elevation"
import { colors } from "../../Utils/colors"

const Toolbar = ({ toggleHandler }) => {
  return (
    <Header>
      <nav>
        <Logo />
        <Spacer />
        <ToolbarNavItems>
          <DisplayNavLinks color={colors.slate} />
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
