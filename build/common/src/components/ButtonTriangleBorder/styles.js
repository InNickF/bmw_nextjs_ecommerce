import styled, { css } from 'styled-components'
import { prop, ifProp } from 'styled-tools'
import { shade, rem } from 'polished'

const Button = styled.div`
  background: ${props => props.theme.colors.main};
  color: white;
  padding: 0.6rem 2rem;
  border-radius: ${rem('4px')};
  margin: ${props => props.theme.alignment.horizontalCenter};
  margin-top: 0.6rem;
  outline: none;
  cursor: pointer;
  min-width: 140px;
  width: ${prop('width')};
  position: relative;
  ${props => props.theme.transition.fast};
  ${props => props.theme.shadow['zDepth-1']};
  &:hover {
    background: ${props => shade(0.8, props.theme.colors.main)};
    color: ${shade(0.9, 'white')};
    &::before {
      border-color: transparent ${props => shade(0.8, props.theme.colors.main)}
        transparent transparent;
    }
    &::after {
      border-color: transparent transparent transparent
        ${props => shade(0.8, props.theme.colors.main)};
    }
  }
  ${props =>
    props.right &&
    css`
      &::after {
        border-radius: 2px;
        content: '';
        position: absolute;
        right: -18px;
        top: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 18px 0 20px 20px;
        border-color: transparent transparent transparent
          ${props.theme.colors.main};
      }
    `};
  ${props =>
    props.left &&
    css`
      &::before {
        border-radius: 2px;
        content: '';
        position: absolute;
        left: -18px;
        top: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 18px 20px 20px 0;
        border-color: transparent ${props.theme.colors.main} transparent
          transparent;
      }
    `};
  }
  ${prop('customStyle')};
  ${ifProp(
    'condensed',
    css`
      font-size: ${props => props.theme.font.sizes.small};
      ${props => props.theme.font.family.condensed};
    `
  )};
  ${ifProp(
    'gray',
    css`
      background: ${props => props.theme.colors.gray};
      &:hover {
        background: ${props => props.theme.colors.darkgray};
        &::before {
          border-color: transparent ${props => props.theme.colors.darkgray}
            transparent transparent;
        }
        &::after {
          border-color: transparent transparent transparent
            ${props => props.theme.colors.darkgray};
        }
      }
      &::before {
        border-color: transparent ${props => props.theme.colors.gray}
          transparent transparent;
      }
      &::after {
        border-color: transparent transparent transparent
          ${props => props.theme.colors.gray};
      }
    `
  )};
`

export default Button
