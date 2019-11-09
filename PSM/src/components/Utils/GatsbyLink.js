import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors } from "./colors"

export const GatsbyLink = ({ link, close, color }) => (
    <NavLink
      to={link.id}
      color={color}
      activeStyle={{ textDecoration: "underline" }}
      partiallyActive={true}
      onClick={close}
    >
      {link.name}
    </NavLink>
)

GatsbyLink.propTypes = {
  link: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  close: PropTypes.func,
}

const NavLink = styled(Link)`
  padding: 0 1.2rem;
  color: ${props => props.color};
  transition: 0.4s all ease-in-out;
  :hover {
    color: ${colors.tan};
  }
  @media (max-width: 1024px) {
    padding: 0 0 0.5rem 0;
    border-bottom: 1px solid ${colors.white};
  }
`
