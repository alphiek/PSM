import React from "react"
import FormIOS from './FormIOS'
import styled from "styled-components"
import { colors } from '../../Utils/colors'

export const FormSectionIOS = () => {
  return (
    <div>
      <H2Light>Get in touch for<br/>a free quotaion</H2Light>
      <FormIOS/>
    </div>
  )
}

const H2Light = styled.h2`
 color: ${colors.mutedWhite};
`