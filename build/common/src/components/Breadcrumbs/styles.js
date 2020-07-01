import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const Container = styled.div`
  background: transparent;
  width: 100%;
  margin-bottom: 10px;
  span{
    margin: 0 10px;
  }
  a:last-of-type {
    font-weight: 900;
  }
  a {
    :first-letter{
      text-transform: uppercase;
    }
    
    color: ${prop('theme.colors.textColor')};
    
    cursor: pointer;
    display: inline-block;
    text-decoration: none;
    padding: 0.5rem 6px;
    ${prop('theme.font.family.condensed')};
    font-size: 10px;
    &:visited {
      color:  ${prop('theme.colors.textColor')};
    }
    &:last-child {
      background: transparent;
      font-weight: bolder;
    }
    &:hover {
      opacity: 0.7;
    }
    ${media.greaterThan('tablet')`
      padding: 0;
      font-size: 15px;
    `};
  }
  svg {
    vertical-align: middle;
    &:last-child {
      display: none;
    }
    ${media.greaterThan('tablet')`
      margin: 5px 10px;
    `};
  }
  ${media.greaterThan('tablet')`
      width: 100%;
  `};
`
