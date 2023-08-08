import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Contacts = styled.section`

`

const Form = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  
  textarea {
    resize: none;
    min-height: 155px;
  }
`

const Field = styled.input`
  width: 100%;
  border: 1px solid ${theme.colors.borderColor} ;
  background-color: ${theme.colors.secondaryBg};
  padding: 7px 15px;

  color: ${theme.colors.font};
  font-family: Poppins sans-serif;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.6px;
  
  &::placeholder  {
   color: ${theme.colors.accent};
    text-transform: capitalize;
  }
  
  &:focus-visible {
    outline: 2px solid ${theme.colors.accent};
  }
`

export const Styles = {
    Contacts,
    Form,
    Field
}