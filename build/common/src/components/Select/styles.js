import styled, { css } from 'styled-components'
import { prop, ifProp } from 'styled-tools'

import media from '../../themes/media'

export const Container = styled.div`
background: rgba(255, 255, 255, 0.8);
border: 1px solid ${prop('theme.input.selectBorderColor')};
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;

${media.lessThan('tablet')`
&.select{
  display: flex;
  >div{    
    font-size: 11px;
  }
  .btn-filter {
    padding-top: .5em;
  }
}
`}

${ifProp(
  'rounded',
  css`
  border-radius: 30px;
  `
)};
  ${ifProp(
  'withShadow',
  css`
    ${prop('theme.shadow.minimum')};
    `
)};
    position: relative;
    button {
      background: ${prop('theme.colors.main')};
      position: absolute;
      height: 30px;
      width: 30px;
      right: 0;
      top: 0;
      pointer-events: none;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      ${ifProp(
  'rounded',
  css`
        border-radius: 0 50% 50% 0;
        `
)};
      }
      .btn-filter{        
        background: transparent;        
        ${media.lessThan('tablet')`
        height: 20px;
        margin-right: 0;
        `};
        svg{
          fill:  black;
          path{
            fill: black;        
          }
        }        
      }
      > select {
        opacity: 0;
        height: 29px;
            width: 100%;
          }
          > div {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            padding-left: ${prop('theme.spacing.small')};
          }
          height: 30px;
          ${media.lessThan('tablet')`
          height: 25px;
          &::after {
            height: 25px;
            width: 25px;
          }
          > select {
            height: 25px;
          }
          `};
          `
