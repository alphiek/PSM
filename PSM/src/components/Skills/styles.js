import styled from "styled-components"
import { Flex } from "../Utils/containers"
import { colors } from "../Utils/colors"

export const Container = styled(Flex)`
  flex-wrap: wrap;
  align-items: space-evenly;
  justify-content: center;
  margin: 3rem 0;
`

export const Item = styled.div`
  width: 30%;
  text-align: center;
  margin: 0 0 2rem;
  @media (max-width: 660px) {
    width: 50%;
  }
`

export const InfoWrapper = styled.div`
  width: 50%;
  background-color: ${colors.tan};
  text-align: center;
  padding: 2rem;
  @media (max-width: 991px) {
    width: 80%;
  }
  @media (max-width: 660px) {
    width: 90%;
  }
`
