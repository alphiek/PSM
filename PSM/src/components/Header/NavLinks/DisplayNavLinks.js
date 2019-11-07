import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useSiteMetaData } from "../../../hooks/useSiteMetaData"
import { FadeInRight } from "../../Animations/Fade"
import { links } from "./data_links"
import { SocialLinks } from "../../Utils/SocialLinks"
import { GatsbyLink } from "../../Utils/GatsbyLink"

export const DisplayNavLinks = ({ color }) => {
  const { social } = useSiteMetaData()

  const socialLinks = Object.entries(social).map((e, i) => {
    return <SocialLinks key={i} link={e} fill={color} />
  })

  const navLinks = links.map((e, i) => {
    return (
      <>
        <ListItem key={i}>
          <FadeInRight>
            <GatsbyLink link={e} color={color} />
          </FadeInRight>
        </ListItem>
        <MenuDivider />
      </>
    )
  })

  return (
    <NavLinkStyle>
      {navLinks}
      <Spacer />
      <FadeInRight>
        <Wrapper>{socialLinks}</Wrapper>
      </FadeInRight>
    </NavLinkStyle>
  )
}

DisplayNavLinks.propTypes = {
  color: PropTypes.string.isRequired,
}

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

const ListItem = styled.li`
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

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    padding-top: 1rem;
    align-items: end;
  }
`

const Spacer = styled.div`
  @media (max-width: 1024px) {
    flex-grow: 1;
  }
`

const MenuDivider = styled.hr`
  @media (max-width: 1024px) {
    display: none;
  }
`
