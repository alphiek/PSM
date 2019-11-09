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
