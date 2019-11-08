import styled from "styled-components"

export const Divider = styled.hr`
  box-sizing: content-box;
  display: block;
  height: 3px;
  width: 80%;
  overflow: visible;
  background: ${props => props.color};
  margin: 0 auto 1.5rem;
  border: none;
  @media (max-width: 991px) {
    height: 100%;
    width: 10px;
    margin: 0 1rem 0 0;
    padding: 0 1px;
  }
  @media (max-width: 660px) {
    margin: 0 0 1rem 0;
    height: 2px;
    width: 80%;
    margin: 1.5rem auto 1.5rem;
  }
`
