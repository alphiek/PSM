import React from "react"
import Form from './Form'
import styled from "styled-components"
import { colors } from '../../Utils/colors'

export const FormSection = () => {
  return (
    <div>
      <H2Light>Get in touch for<br/>a free quotaion</H2Light>
      <Form/>
    </div>
  )
}

const H2Light = styled.h2`
 color: ${colors.mutedWhite};
`