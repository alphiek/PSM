import styled from "styled-components"
import { colors } from "../Utils/colors"

export const ContactWrapper = styled.div`
  display: flex;
  background-color: ${colors.tan};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  text-align: center;
  @media (max-width: 991px) {
    width: 100%;
    padding: 3rem;
    text-align: left;
    align-items: flex-start;
  }
`
export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12rem;
  margin-top: -1.5rem;
  margin-bottom: 3rem;
  @media (max-width: 991px) {
    margin-top: 3rem;
  }
`

export const Icon = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0.2rem;
  border-radius: 50%;
  background: ${colors.mutedWhite};
`

export const IntroWrapper = styled.div`
  background-color: ${colors.slate};
  position: relative;
  width: 60%;
  padding: 0 3rem 3rem 3rem;
  @media (max-width: 991px) {
    width: 100%;
  }
  @media (max-width: 660px) {
    padding: 2rem 3rem 2.5rem 2rem;
  }
`

export const LightParagraph = styled.p`
  color: ${colors.mutedWhite};
  font-weight: 400;
  width: 85%;
  margin-bottom: 1rem;
  @media (max-width: 991px) {
    width: 100%;
  }
`


export const H1Wrapper = styled.div`
  min-height: 20rem;
  display: flex;
  align-items: center;
  padding: 3rem;
  @media (max-width: 660px) {
    padding: 2rem 1rem 2.5rem 2rem;
  }
`
export const IntroContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    flex-direction: column-reverse;
  }
`