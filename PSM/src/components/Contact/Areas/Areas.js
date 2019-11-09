import React from "react"

import { SocialIconsFooter } from "../../SocialIcons/SocialIconsFooter"
import { AreaContainer, AreaP, EmailContainer, EmailLink } from "../styles"

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
        <hr style={{ marginTop: "0.5rem" }} />
        <SocialIconsFooter name="insta" />
        <SocialIconsFooter name="fb" />
      </EmailContainer>
    </AreaContainer>
  )
}
