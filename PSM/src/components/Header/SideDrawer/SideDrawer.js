import React from "react"
import PropTypes from "prop-types"
import { Spring } from "react-spring/renderprops"
import { colors } from "../../Utils/colors"
import { DisplayNavLinks } from "../NavLinks/DisplayNavLinks"
import { SideDrawerContainer } from '../styles'

const SideDrawer = ({ show, toggleHandler }) => {
  return (
    <Spring from={{ right: -1000 }} to={{ right: show ? 0 : -1000 }}>
      {props => (
        <SideDrawerContainer style={props}>
          <DisplayNavLinks close={toggleHandler} color={colors.white} />
        </SideDrawerContainer>
      )}
    </Spring>
  )
}

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
  toggleHandler: PropTypes.func.isRequired,
}

export default SideDrawer
