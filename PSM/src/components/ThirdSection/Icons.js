import React from 'react'
import styled from 'styled-components'
import { colors } from '../Utils/colors'


export const Icons = ({ name }) => {
    return (
        <Icon />
    )
}

const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  background: ${colors.slate};
  border-radius: 50%;
  margin: 1rem auto;
`