import styled from "styled-components"
import { fullfixed, fill } from "../Utils/position"
import elevation from "../Utils/elevation"
import { colors } from "../Utils/colors"
import { ContactWrapper } from "../Utils/containers"

export const ModalContainer = styled.div`
  ${fullfixed({})};
  min-height: 100vh;
  right: 0;
  bottom: 0;
  -webkit-overflow-scrolling: touch;
  display: flex;
  z-index: 99;
  justify-content: center;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    -webkit-appearance: none;
  }
  scrollbar-width: none;
`

export const BackdropCover = styled.div`
  ${fullfixed({})};
  background-color: ${colors.slate};
`

export const ModalWrapper = styled.div`
  display: flex;
  border-radius: 6px;
  ${elevation[2]};
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 101;
  width: 85%;
  height: 85%;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
    -webkit-appearance: none;
  }
  scrollbar-width: none;
  background-color: ${colors.slate};
  @media (max-width: 991px) {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
`

export const ModalWindow = styled.div`
  ${fill({})};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const ModalContactWrapper = styled(ContactWrapper)`
  @media (max-width: 991px) {
    position: absolute;
    top: 0;
    padding: 65px 0 50px;
  }
`
export const CloseButton = styled.button`
  color: ${colors.tan};
  position: absolute;
  text-transform: uppercase;
  font-weight: 900;
  top: 1.5rem;
  right: 2rem;
  letter-spacing: 0.5px;
  opacity: 0.6;
  transition: 0.5s all ease-in-out;
  :hover {
    opacity: 1;
  }
  @media (max-width: 660px) {
    right: 0;
  }
`
export const ContactWrap = styled.div`
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
  @media (max-width: 660px) {
    padding: 3rem 3rem 3rem 2rem;
  }
`

export const Contact = styled.p`
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1.953rem;
  letter-spacing: -1px;
  line-height: 125%;
  margin-bottom: 10px;
`

export const ContactSpan = styled.span`
  text-decoration: underline;
`

export const ContactSmall = styled.p`
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-weight: 600;
  font-size: 1.563rem;
  letter-spacing: -1px;
  line-height: 125%;
`
