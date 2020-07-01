import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Form = styled.form`
  position: relative;
  input {
    background: white;
    box-sizing: border-box;
    color: ${prop('theme.colors.textColor')};
    border: thin solid ${prop('theme.colors.textColor')};
    ${prop('theme.font.family.condensed')};
    font-weight: lighter;
    padding-left: 1.3rem;
    height: 44px;
    width: 100%;
    border-radius: 6px;
  }
  button {
    background: transparent;
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
  }
`
