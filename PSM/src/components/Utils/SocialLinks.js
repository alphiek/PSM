import React from "react"
import styled from "styled-components"
import { SocialIcons } from "../SocialIcons/SocialIcons"

export const SocialLinks = ({ fill, link }) => {
  let socialLink

  if ((link[0] === "email")) {
    socialLink = (
      <MailWrapper>
        <a
          href={`mailto:${link[1]}`}
          aria-label="Email Link"
          target="blank"
          rel="noopener noreferrer"
        >
          <SocialIcons name="email" fill={fill} />
        </a>
      </MailWrapper>
    )
  } else if ((link[0] === "fb")) {
    socialLink = (
      <a
        href={link[1]}
        aria-label="Facebook Link"
        target="blank"
        rel="noopener noreferrer"
      >
        <SocialIcons name="fb" fill={fill} />
      </a>
    )
  } else {
    socialLink = (
      <a
        href={link[1]}
        aria-label="Instagram Link"
        target="blank"
        rel="noopener noreferrer"
      >
        <SocialIcons name="insta" fill={fill} />
      </a>
    )
  }
  return <>{socialLink}</>
}

const MailWrapper = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`
