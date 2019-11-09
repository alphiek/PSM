import React from "react"
import PropTypes from "prop-types"
import {
  ModalContainer,
  ModalWrapper,
  ModalWindow,
  ModalContactWrapper,
  CloseButton,
  BackdropCover
} from "./styles"
import { FormSectionIOS } from "../Contact/Form/FormSectionIOS"
import { Areas } from "../Contact/Areas/Areas"

export const Modal = ({ click, styles }) => {
  return (
    <ModalContainer style={{ opacity: styles.opacity }}>
      <ModalWrapper>
        <ModalWindow>
          <ModalContactWrapper>
            <CloseButton
              onClick={e => {
                e.preventDefault()
                click()
              }}
            >
              Close
            </CloseButton>
            <FormSectionIOS />
            <Areas />
          </ModalContactWrapper>
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
