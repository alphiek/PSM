import React from "react"
import PropTypes from "prop-types"
import { ContactWrap, Contact, ContactSmall, ContactSpan } from "./styles"

export const ModalOpen = ({ click }) => {
  return (
    <ContactWrap
      onClick={e => {
        e.preventDefault()
        click()
      }}
    >
      <Contact>Have a project?</Contact>
      <ContactSmall>
        <ContactSpan>contact us</ContactSpan> for an estimate{" "}
      </ContactSmall>
    </ContactWrap>
  )
}

ModalOpen.propTypes = {
  click: PropTypes.func.isRequired,
}
