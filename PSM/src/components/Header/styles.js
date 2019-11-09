import styled from "styled-components"
import { keyframes } from "styled-components"
import { fullfixed } from "../Utils/position"
import { animated as a } from "react-spring/renderprops"
import { colors } from '../Utils/colors'
import elevation from '../Utils/elevation'

const FadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`

export const BackdropCover = styled.div`
  ${fullfixed({})};
  background: rgba(0, 0, 0, 0.5);
  z-index: 100;
  animation: ${FadeIn} 0.2s ease-in-out;
  @media (min-width: 1025px) {
    display: none;
  }
`

export const NavLinkStyle = styled.ul`
  position: relative;
  @media (max-width: 1024px) {
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    text-align: left;
  }
`

export const ListItem = styled.li`
  overflow-x: hidden;
  @media (max-width: 1024px) {
    overflow-x: visible;
    text-align: right;
    margin: 1.5rem 0;
    display: flex;
    align-items: center;
  }
  @media (max-width: 820px) {
    margin: 4.5vh 0;
  }
`

export const Wrapper = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    padding-top: 1rem;
    align-items: end;
  }
`

export const Spacer = styled.div`
  @media (max-width: 1024px) {
    flex-grow: 1;
  }
`

export const MenuDivider = styled.hr`
  @media (max-width: 1024px) {
    display: none;
  }
`

export const SideDrawerContainer = styled(a.nav)`
  height: 100vh;
  max-height: 100vh;
  background: ${colors.slate};
  box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  right: 0;
  width: 70%;
  max-width: 400px;
  display: block;
  z-index: 200;
  @media (min-width: 1025px) {
    display: none;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
`

export const SideDrawerButton = styled.button`
  display: flex;
  @media (min-width: 1025px) {
    display: none;
  }
`

export const BurgerIcon = styled.svg`
  fill: ${colors.slate};
  width: auto;
  width: 1.5rem;
`

export const SpacerToolbar = styled.div`
  flex: 1;
`

export const ToolbarNavItems = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`

export const Header = styled.header`
  ${elevation[3]};
`

export const LogoIcon = styled.svg`
  height: auto;
  width: 6.2rem;
  @media (max-width: 1024px) {
    width: 7rem;
  }
`
