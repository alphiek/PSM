import React from 'react'
import styled from 'styled-components'
import { FadeOutOverlay } from '../components/Animations/keyframes'

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -100;
  height: 100vh;
  animation: ${FadeOutOverlay} 0.3s ease-out;
  background-color: #fff;
`

const Overlay = () => (
    <OverlayContainer />
)

export default Overlay


