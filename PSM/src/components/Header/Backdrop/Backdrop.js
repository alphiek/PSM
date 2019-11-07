import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { keyframes } from "styled-components"
import { fullfixed } from "../../Utils/position"

export const Backdrop = ({ click }) => <BackdropCover onClick={click} />

Backdrop.propTypes = {
  click: PropTypes.func.isRequired,
}

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const BackdropCover = styled.div`
  ${fullfixed({})};
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  animation: ${FadeIn} 0.2s ease-in-out;
  @media (min-width: 1025px) {
    display: none;
  }
`
