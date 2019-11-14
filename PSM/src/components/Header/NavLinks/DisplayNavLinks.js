import React from "react"
import PropTypes from "prop-types"
import { useSiteMetaData } from "../../../hooks/useSiteMetaData"
import { FadeInRight } from "../../Animations/Fade"
import { links } from "./data_links"
import { SocialLinks } from "../../Utils/SocialLinks"
import { GatsbyLink } from "../../Utils/GatsbyLink"
import { NavLinkStyle, ListItem, MenuDivider, Spacer, Wrapper } from "../styles"

export const DisplayNavLinks = ({ color }) => {
  const { social } = useSiteMetaData()

  const socialLinks = Object.entries(social).map(e => {
    return <SocialLinks key={e[0]} link={e} fill={color} />
  })

  const navLinks = links.map(e => {
    return (
      <>
        <ListItem key={e.name}>
          <FadeInRight>
            <GatsbyLink link={e} color={color} />
          </FadeInRight>
        </ListItem>
        <MenuDivider key={e.id} />
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
