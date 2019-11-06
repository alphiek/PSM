import React from "react"
import styled from "styled-components"

const Icon = styled.svg`
  fill: ${props => props.color};
  height: 1.2rem;
  margin-left: 1.2rem;
  @media (max-width: 1024px) {
    margin: 0.5rem 0rem 0.5rem 3rem;
    height: 2rem;
  }
`

export const Fb = ({ color }) => (
  <Icon viewBox="0 0 13.9 30" color={color} alt="Facebook Link">
    <path
      d="M13.4,15H9.2v15H2.9V15H0V9.7h2.9V6.3c0-0.9,0.2-1.8,0.5-2.7c0.4-1,1-1.9,1.9-2.5
            C6.5,0.3,7.8-0.1,9.2,0l4.6,0v5.1h-3.4c-0.3,0-0.6,0.1-0.9,0.3C9.3,5.8,9.2,6.2,9.2,6.6v3.1h4.7L13.4,15z"
    />
  </Icon>
)

export const Insta = ({ color }) => (
  <Icon viewBox="0 0 29.9 30" color={color} alt="Instagram Link">
    <path
      d="M3.7,7.4V0.9c0-0.2,0-0.3,0.1-0.5c0.1-0.1,0.3-0.2,0.5-0.2l0.3-0.1v7.2h1.2V0h0.8v7.4h1.2V0H24
             c1,0,2,0.3,2.9,0.8C27.8,1.3,28.5,2,29,2.8c0.5,0.8,0.8,1.8,0.8,2.8c0,0.6,0,1.3,0,2.1c0,1.7,0,2.4,0,2.1h-9.2
             c-0.2,0-0.4-0.1-0.5-0.2c-1-0.9-2.1-1.5-3.4-1.9c-1.2-0.3-2.5-0.3-3.8,0c-1.3,0.3-2.4,1-3.4,1.9C9.5,9.7,9.4,9.8,9.3,9.8H0.2L0,9.8
             V8.5c0,0.3,0-0.3,0-1.6c0-0.5,0-1.1,0.1-1.6c0.1-1.7,1-3.2,2.3-4.1l0.1,0v6.3L3.7,7.4L3.7,7.4z M21.2,10.7h8.7v13.5
             c0,1-0.3,2-0.8,2.9c-0.5,0.9-1.2,1.6-2.1,2.1C26.1,29.7,25.1,30,24,30H5.9c-1,0-2-0.2-2.9-0.8c-0.9-0.5-1.6-1.2-2.1-2.1
             C0.3,26.2,0,25.2,0,24.2V10.8h8.7c-1.4,2-1.8,4.6-1,6.9c1,2.7,3.3,4.6,6.2,5c1.1,0.1,2.2,0.1,3.3-0.3c1.1-0.3,2.1-0.9,2.9-1.6
             c0.8-0.8,1.5-1.7,1.9-2.7c0.5-1.1,0.7-2.3,0.6-3.6C22.4,13.2,21.9,11.9,21.2,10.7L21.2,10.7z M14.9,21c-1,0-2.1-0.3-3-0.8
             c-0.9-0.5-1.6-1.2-2.2-2.1c-1.1-1.8-1.1-4.1,0-5.9c0.5-0.9,1.3-1.6,2.2-2.2c0.9-0.5,1.9-0.8,3-0.8c1,0,2.1,0.3,2.9,0.8
             c0.9,0.5,1.6,1.3,2.1,2.2c1.1,1.8,1.1,4.1,0,5.9c-0.5,0.9-1.3,1.6-2.1,2.1C17,20.8,16,21,14.9,21z M19.3,15.2c0-1.6-0.8-3-2.2-3.8
             c-1.3-0.8-3-0.8-4.4,0c-0.7,0.4-1.2,0.9-1.6,1.6c-0.8,1.3-0.8,3,0,4.4c0.4,0.7,0.9,1.2,1.6,1.6c0.7,0.4,1.4,0.6,2.2,0.6
             c0.8,0,1.5-0.2,2.2-0.6c0.7-0.4,1.2-0.9,1.6-1.6C19.1,16.7,19.3,15.9,19.3,15.2z M27.2,5V3.5c0-0.3-0.1-0.5-0.3-0.7
             c-0.2-0.2-0.4-0.3-0.7-0.3c-1.1,0-2.1,0-3.2,0c-0.3,0-0.5,0.1-0.7,0.3c-0.2,0.2-0.3,0.5-0.2,0.7v3.2c0,0.3,0.1,0.5,0.3,0.7
             c0.2,0.2,0.4,0.3,0.7,0.3h3.2c0.5,0,0.9-0.3,1-0.8c0,0,0-0.1,0-0.1L27.2,5z"
    />
  </Icon>
)

export const Mail = ({ color }) => (
  <Icon viewBox="0 0 37.5 30" color={color} alt="Email Link">
    <path
      d="M33.75,0A3.84,3.84,0,0,1,37.5,3.75v22.5A3.84,3.84,0,0,1,33.75,30h-30A3.84,3.84,0,0,
            1,0,26.25V3.75A3.84,3.84,0,0,1,3.75,0Zm0,7.5V3.75l-15,9.38-15-9.38V7.5l15,9.38Z"
    />
  </Icon>
)
