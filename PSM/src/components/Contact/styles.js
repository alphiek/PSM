import styled from 'styled-components'
import { colors } from "../Utils/colors"

export const Section = styled.section`
  background-color: ${colors.medGrey};
  color: ${colors.tan};
  padding: 6rem 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    padding: 6rem 0;
  }
`

export const AreaContainer = styled.div`
  width: 35%;
  padding: 1rem 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 991px) {
    width: 60%;
  }
  @media (max-width: 660px) {
    margin-top: 30px;
    width: 100%;
    min-height: 40vh;
  }
`

export const AreaP = styled.p`
  color: white;
  padding: 0.1rem 0;
`

export const EmailContainer = styled.div`
  padding: 3rem 0 0 0;
`

export const EmailLink = styled.a`
  font-size: 0.95rem;
  color: ${colors.white};
`