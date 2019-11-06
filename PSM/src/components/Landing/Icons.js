import React from "react"
import styled from "styled-components"
import { colors } from '../Utils/colors'

const Icons = () => {
  return (
    <IconWrapper>
      <Icon />
      <Icon />
      <Icon />
    </IconWrapper>
  )
}

export default Icons

const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12rem;
  margin-top: -1.5rem;
  margin-bottom: 3rem;
  @media (max-width: 991px) {
    margin-top: 3rem;
  }
`

const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${colors.mutedWhite};
`
