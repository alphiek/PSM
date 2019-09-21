import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Logo from '../Logo'
import NavLinks from '../NavLinks/NavLinks'
import SideDrawerToggle from '../SideDrawer/SideDrawerToggle'

const Spacer = styled.div`
  flex: 1;
`

const ToolbarNavItems = styled.div`
  @media (max-width: 1024px) {
  display: none;
}
`

const Toolbar = ({ toggleHandler }) => {
    return (
            <header>
                <nav>
                    <Logo />
                    <Spacer />
                    <ToolbarNavItems>
                        <NavLinks color='#3D3F43' />
                    </ToolbarNavItems>
                    <SideDrawerToggle click={toggleHandler} />
                </nav>
            </header>
    )
}



Toolbar.propTypes = {
    toggleHandler: PropTypes.func.isRequired,
  }

export default Toolbar
