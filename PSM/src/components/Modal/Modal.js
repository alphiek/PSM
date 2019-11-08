import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { fullfixed, fill } from "../Utils/position"
import elevation from "../Utils/elevation"
import { colors } from "../Utils/colors"
import { ContactWrapper } from "../Utils/containers"
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

const ModalContainer = styled.div`
  ${fullfixed({})};
  min-height: 100vh;
  right: 0;
  bottom: 0;
  -webkit-overflow-scrolling: touch;
  display: flex;
  z-index: 99;
  justify-content: center;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    -webkit-appearance: none;
  }
  scrollbar-width: none;
`

const BackdropCover = styled.div`
  ${fullfixed({})};
  background-color: ${colors.slate};
`

const ModalWrapper = styled.div`
  display: flex;
  border-radius: 6px;
  ${elevation[2]};
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 101;
  width: 85%;
  height: 85%;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    -webkit-appearance: none;
  }
  scrollbar-width: none;
  background-color: ${colors.slate};
  @media (max-width: 991px) {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
`

const ModalWindow = styled.div`
  ${fill({})};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const ModalContactWrapper = styled(ContactWrapper)`
  @media (max-width: 991px) {
    position: absolute;
    top: 0;
    padding: 65px 0 50px;
  }
`
const CloseButton = styled.button`
  color: ${colors.tan};
  position: absolute;
  text-transform: uppercase;
  font-weight: 900;
  top: 1.5rem;
  right: 2rem;
  letter-spacing: 0.5px;
  opacity: 0.6;
  transition: 0.5s all ease-in-out;
  :hover {
    opacity: 1;
  }
  @media (max-width: 660px) {
    right: 0;
  }
`
