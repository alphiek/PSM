import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { useSiteMetaData } from "../../../hooks/useSiteMetaData"
import { FadeInRight } from "../../Animations/Fade"
import { Link } from "gatsby"
import { links } from "./links"
import { Fb, Insta, Mail } from "../../SocialIcons/SocialIcons"

const NavLinks = ({ color, close }) => {
  const { social } = useSiteMetaData()

  const pageLinks = links.map((link, index) => {
    return (
      <>
        <ListItem key={index}>
          <FadeInRight>
            <NavLink
              color={color}
              to={link.id}
              activeStyle={{ textDecoration: "underline" }}
              partiallyActive={true}
              onClick={close}
            >
              {link.name}
            </NavLink>
          </FadeInRight>
        </ListItem>
        <MenuDivider />
      </>
    )
  })

  return (
    <NavLinkStyle>
      {pageLinks}
      <Spacer />
      <FadeInRight>
        <Wrapper>
          <a
            href={social.fb}
            aria-label="Facebook Link"
            target="blank"
            rel="noopener noreferrer"
          >
            <Fb color={color} />
          </a>
          <a
            href={social.insta}
            aria-label="Instagram Link"
            target="blank"
            rel="noopener noreferrer"
          >
            <Insta color={color} />
          </a>
          <MailWrapper>
            <a
              href={`mailto:${social.email}`}
              aria-label="Email Link"
              target="blank"
              rel="noopener noreferrer"
            >
              <Mail color={color} />
            </a>
          </MailWrapper>
        </Wrapper>
      </FadeInRight>
    </NavLinkStyle>
  )
}

export default NavLinks

NavLinks.propTypes = {
  color: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
}

const NavLink = styled(Link)`
  padding: 0 1.2rem;
  color: ${props => props.color};
  transition: 0.4s;
  :hover {
    color: #bab8ab;
  }
  @media (max-width: 1024px) {
    padding: 0 0 0.5rem 0;
    border-bottom: 1px solid white;
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

const MailWrapper = styled.div`
  @media (max-width: 1024px) {
    display: none;
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
