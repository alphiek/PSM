import React from 'react'
import styled from 'styled-components'

export const Footer = () => (
    <FooterWrapper>
        <p>© {new Date().getFullYear()}, Paphos Stone Masons, all rights reserved</p>
    </FooterWrapper>
)

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`