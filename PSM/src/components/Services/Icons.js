import React from 'react'
import styled from 'styled-components'
import { colors } from '../Utils/colors'


export const Icons = ({ name }) => {
    return (
        <Icon />
    )
}

const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  background: ${colors.slate};
  border-radius: 50%;
  margin: 0 auto;
`