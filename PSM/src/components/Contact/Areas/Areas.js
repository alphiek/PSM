import React from "react"
import styled from "styled-components"
import { SocialIconsFooter } from "../../SocialIcons/SocialIconsFooter"
import { colors } from "../../Utils/colors"

export const Areas = () => {
  return (
    <AreaContainer>
      <div>
        <hr style={{ marginBottom: "0.8rem" }} />
        <h5>Areas Served</h5>
        <AreaP>Kato Paphos</AreaP>
        <AreaP>Peyia</AreaP>
        <AreaP>Tala</AreaP>
        <AreaP>Stroumpi</AreaP>
        <AreaP>Yeroskipou</AreaP>
        <hr style={{ marginTop: "0.8rem" }} />
      </div>
      <EmailContainer>
        <EmailLink
          href={`mailto:info@paphosstonemasons.com`}
          aria-label="Email Link"
          target="blank"
          rel="noopener noreferrer"
        >
          info@paphosstonemasons.com
        </EmailLink>
        <hr style={{ marginTop: "0.5rem" }}/>
        <SocialIconsFooter name="insta" />
        <SocialIconsFooter name="fb" />
      </EmailContainer>
    </AreaContainer>
  )
}

const AreaContainer = styled.div`
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

const AreaP = styled.p`
  color: white;
  padding: 0.1rem 0;
`

const EmailContainer = styled.div`
  padding: 3rem 0 0 0;
`

const EmailLink = styled.a`
  font-size: 0.95rem;
  color: ${colors.white};
`
