import styled from "styled-components"

export const Divider = styled.hr`
  box-sizing: content-box;
  display: block;
  height: 2px;
  overflow: visible;
  background: ${props => props.color};
  margin: 0 0 1rem 0;
  border: none;
  @media (max-width: 991px) {
    height: 100%;
    width: 6px;
    margin: 0 1rem 0 0;
  }
  @media (max-width: 660px) {
    margin: 0 0 1rem 0;
  }
`
