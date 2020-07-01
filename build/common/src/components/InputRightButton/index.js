import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

export default styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 6px;
  ${ifProp(
    'rounded',
    css`
      border-radius: 30px;
    `
  )};
  ${ifProp(
    'withShadow',
    css`
      ${props => props.theme.shadow.minimum};
    `
  )};
  position: relative;
  margin-right: ${props => props.theme.spacing.huge};
  &::after {
    background: ${props => props.theme.colors.main})
      no-repeat;
    background-position: center;
    background-size: 50%;
    content: '';
    position: absolute;
    height: 30px;
    width: 30px;
    right: 0;
    top: 0;
    pointer-events: none;
    border-radius: 0 6px 6px 0;
    ${ifProp(
    'rounded',
    css`
        border-radius: 0 50% 50% 0;
      `
  )};
  }
  input {
    display: block;
    height: 29px;
    margin: 0 auto;
    width: 98%;
    box-sizing: border-box;
    padding-left: ${props => props.theme.spacing.small};
  }
`
