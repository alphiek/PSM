import React from "react"
import PropTypes from "prop-types"

import Logo from "../Logo"
import { DisplayNavLinks } from "../NavLinks/DisplayNavLinks"
import SideDrawerToggle from "../SideDrawer/SideDrawerToggle"
import { colors } from "../../Utils/colors"
import { SpacerToolbar, Header, ToolbarNavItems } from "../styles"

const Toolbar = ({ toggleHandler }) => {
  return (
    <Header>
      <nav>
        <Logo />
        <SpacerToolbar />
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
