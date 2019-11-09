import React from "react"

import { Areas } from './Areas/Areas'
import { FormSection } from "./Form/FormSection"
import { ContactWrapper } from '../Utils/containers'
import { Section } from './styles'

export const ContactSection = () => {
  return (
    <Section>
      <ContactWrapper>
        <FormSection />
        <Areas />
      </ContactWrapper>
    </Section>
  )
}




