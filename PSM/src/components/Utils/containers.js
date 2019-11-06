import styled from "styled-components"

export const SectionMargin = styled.section`
  margin: 0 5%;
  @media (max-width: 991px) {
    margin: 0 30px;
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`

export const Flex = styled.div`
  display: flex;
  position: relative;
`

export const SectionFullWidth = styled(Flex)`
  text-align: center;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  flex-direction: column;
  width: 100%;
  background: ${props => props.background};
  padding: 6rem 0;
  @media (max-width: 991px) {
    align-items: center;
  }
`