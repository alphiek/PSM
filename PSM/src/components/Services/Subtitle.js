import React from "react"
import styled from "styled-components"

export const Subtitle = () => (
  <SubtitleWrapper>
    <H2withline>Find the Service thats right for you</H2withline>
  </SubtitleWrapper>
)

const SubtitleWrapper = styled.div`
  padding: 6rem 0rem 6rem 0rem;
  position: relative;
  @media (max-width: 660px ) {
    padding: 3.5rem 10rem 3.5rem 2rem;
  }
  @media( max-width: 479px) {
    padding: 3.5rem 3rem 3.5rem 2rem;

  }
`

const H2withline = styled.h2`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  &:after {
    content: "";
    border-top: 2px solid;
    flex: 1 0 100px;
    margin: 0 0 0 20px;
    @media (max-width: 991px) {
    flex: 1 0 20px;
    }
    @media (max-width: 768px) {
    display: none;
    }
  }
  &:before {
    content: "";
    border-top: 2px solid;
    width: 200px;
    margin: 0 20px 0 0;
    @media (max-width: 991px) {
    flex: 1 0 20px;
    }
    @media (max-width: 768px) {
    display: none;
    }
  }
  @media (max-width: 768px) {
    text-align: left;
  }
`
