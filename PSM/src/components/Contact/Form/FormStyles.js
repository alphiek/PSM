import styled from 'styled-components'
import { colors } from '../../Utils/colors'

export const FormWrapper = styled.form`
  margin-top: 2rem;
  width: 60%;
  @media (max-width: 991px) {
    width: 70%;
  }
  @media (max-width: 660px) {
    width: 100%;
    height: 40vh;
  }
`
export const InputWrapper = styled.input`
  border: none;
  border-radius: 6px;
  width: 100%;
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
  padding: 1rem;
  background: ${colors.tan};
`

export const Message = styled.textarea`
  border: none;
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
  border-radius: 6px;
  padding: 1rem;
  width: 100%;
  background-color: ${colors.tan};

`
export const ErrorMessage = styled.p`
  margin-bottom: 0.5rem;
  width: 65%;
`

export const Submit = styled.button`
  margin-top: 1rem;
  border-radius: 6px;
  padding: 0.75rem;
  width: 42%;
  background: transparent;
  border: 0.25rem solid ${colors.tan};
  color: ${colors.tan};
  text-transform: uppercase;
`