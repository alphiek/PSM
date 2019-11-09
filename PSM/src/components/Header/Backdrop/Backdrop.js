import React from "react"
import PropTypes from "prop-types"
import { BackdropCover } from '../styles'

export const Backdrop = ({ click }) => <BackdropCover onClick={click} />

Backdrop.propTypes = {
  click: PropTypes.func.isRequired,
}
