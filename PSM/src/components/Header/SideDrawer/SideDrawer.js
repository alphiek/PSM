import React from 'react'
import PropTypes from 'prop-types'
import { Spring, animated as a } from 'react-spring/renderprops'
import styled from 'styled-components'
import NavLinks from '../NavLinks/NavLinks'

const SideDrawerContainer = styled(a.nav)`
  height: 100vh;
  max-height: 100vh;
  background: #3D3F43;
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 400px;
  display: block;
  z-index: 200;
  @media(min-width: 1025px) {
     display: none;
  }
  @media(max-width: 480px) {
      width: 80%;
  }
`

const SideDrawer = ({ show, toggleHandler }) => {

    return (
        <Spring
            from={{ right: -1000 }}
            to={{ right: show ? 0 : -1000 }}>
            {props => (
                <SideDrawerContainer style={props}>
                   <NavLinks close={toggleHandler} color='white' />
                </SideDrawerContainer>
            )}
        </Spring>
    )
}

SideDrawer.propTypes = {
    show: PropTypes.bool.isRequired,
}

export default SideDrawer