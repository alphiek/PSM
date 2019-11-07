import styled from "styled-components"

export const SectionMargin = styled.section`
  position: relative;
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
  position: relative;
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

export const ContactWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    width: 80%;
  }
  @media (max-width: 660px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`

export const ScrollStop = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100px;
`
