import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { ModalSVG } from "./ModalSVG"
import { colors } from "../Utils/colors"

export const ModalOpen = ({ click }) => {
  return (
    <ContactWrapper
      onClick={e => {
        e.preventDefault()
        click()
      }}
    >
      <ModalSVG />
    </ContactWrapper>
  )
}

ModalOpen.propTypes = {
  click: PropTypes.func.isRequired,
}

const ContactWrapper = styled.div`
  display: flex;
  background-color: ${colors.tan};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  text-align: center;
  @media (max-width: 991px) {
    width: 100%;
    padding: 3rem;
    text-align: left;
    align-items: flex-start;
  }
`
