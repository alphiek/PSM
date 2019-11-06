import React from "react"
import styled from "styled-components"

export const Areas = () => {
  return (
    <AreaContainer>
      <div>
        <hr style={{ marginBottom:'0.2rem'}}/>
        <h5>Areas Served</h5>
        <AreaP>Paphos</AreaP>
        <AreaP>Paphos</AreaP>
        <AreaP>Paphos</AreaP>
        <AreaP>Paphos</AreaP>
        <AreaP>Paphos</AreaP>
        <hr style={{ marginTop: '0.2rem'}}/>
      </div>
      <div>
        <AreaP>Telephone</AreaP>
        <AreaP>Email</AreaP>
        <hr />
        <p>social icons</p>
      </div>
    </AreaContainer>
  )
}

const AreaContainer = styled.div`
  width: 35%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 991px) {
    width: 60%;
  }
  @media (max-width: 660px) {
    margin-top: 30px;
    width: 100%;
    height: 40vh;
  }
`

const AreaP = styled.p`
  color: white;
  padding: 0.1rem 0;
`
