import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { FadeIn } from "../../Animations/keyframes"

const Backdrop = ({ click }) => <BackdropCover onClick={click} />

export default Backdrop

Backdrop.propTypes = {
  click: PropTypes.func.isRequired,
}

const BackdropCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
  animation: ${FadeIn} 0.2s ease-in-out;
  @media (min-width: 1025px) {
    display: none;
  }
`
