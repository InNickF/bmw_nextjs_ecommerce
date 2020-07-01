import styled from 'styled-components'
import { prop } from 'styled-tools'
import { media } from '../../../index'

export default styled.div`
  input {
    ::placeholder {
      color: ${props => props.theme.colors.lightgray};
      opacity: 1;
    }
    vertical-align: bottom;
    width: 50%;
    border-radius: 2.48px;
    padding: ${props => props.theme.spacing.small};
    ${props => props.theme.font.family.miniRegular};
  }
  button {
    background: ${props => props.theme.colors.main};
    border-radius: 0 2.48px 2.48px 0;
    color: white;
    cursor: pointer;
    padding-right: 24px !important;
    padding-left: 1rem;
    &:hover {
      background: ${props => props.theme.colors.gray};
    }
  }
  ${media.lessThan('medium')`
    input {
      box-sizing: border-box;
      border-radius: 2.48px;
      padding: 0.2rem;
      width: 80%;
    }
    button {
      border-radius: 0 2.48px 2.48px 0;
      box-sizing: border-box;
      font-size: ${prop('theme.font.sizes.smaller')};
      padding: 0.2rem;
      display: block;
      margin: 0;
      width: 35%;
    }
  `};
`
