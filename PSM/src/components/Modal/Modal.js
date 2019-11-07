import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { fullfixed, fill } from "../Utils/position"
import { colors } from "../Utils/colors"
import { ContactWrapper } from "../Utils/containers"
import { FormSection } from '../Contact/Form/FormSection'
import { Areas } from '../Contact/Areas/Areas'

export const Modal = ({ click, styles }) => {
  return (
    <ModalContainer style={{ opacity: styles.opacity }}>
      <ModalWrapper>
        <ModalWindow>
          <ContactWrapper>
            <FormSection />
            <Areas />
          </ContactWrapper>
        </ModalWindow>
      </ModalWrapper>
      <BackdropCover
        onClick={e => {
          e.preventDefault()
          click()
        }}
        style={{ opacity: styles.backdrop }}
      ></BackdropCover>
    </ModalContainer>
  )
}

Modal.propTypes = {
  click: PropTypes.func.isRequired,
  styles: PropTypes.object.isRequired,
}

const ModalContainer = styled.div`
  ${fullfixed({})};
  min-height: 100vh;
  right: 0;
  bottom: 0;
  -webkit-overflow-scrolling: touch;
  overflow: scroll;
  display: flex;
  z-index: 99;
  justify-content: center;
  align-items: center;
`

const BackdropCover = styled.div`
  ${fullfixed({})};
  background-color: #222;
  opacity: 0.8;
`

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 101;
  width: 85%;
  height: 85%;
  background-color: ${colors.slate};
`

const ModalWindow = styled.div`
  ${fill({})};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
