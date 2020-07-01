import styled from 'styled-components'
import { prop } from 'styled-tools'

import media from '../../themes/media'

export const Card = styled.div`
  border-radius: 7px;
  margin-bottom: ${props => props.theme.spacing.huge};
  position: relative;
  height: 165px;
  width: 100%;
  ${props => props.theme.shadow.card};
  &:active {
    transform: scale(0.9);
  }
`

export const Detail = styled.div`
  width: 100%;
  position: relative;
  padding: ${props => props.theme.spacing.bigger};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  > h3 {
    font-size: ${props => props.theme.font.sizes.big};
    margin-bottom: ${props => props.theme.spacing.small};
    ${props => props.theme.font.family.title};
  }
  > .content {
    ${props => props.theme.font.family.condensed};
    font-weight: lighter;
    font-size: ${props => props.theme.font.sizes.smaller};
    ${media.lessThan('tablet')`
        display: none;
    `}
    &.mobile {
      display: none;
      ${media.lessThan('tablet')`
        display: block;
      `}
    }
  }
  > span {
    color: ${prop('theme.colors.highlight')};
    font-size: ${props => props.theme.font.sizes.smaller};
    display: block;
    margin-top: ${props => props.theme.spacing.big};
  }
  ${media.greaterThan('tablet')`
    margin-left: 4%;
    margin-top: 0;
    width: 100%;
  `}
`

export const Content = styled.a`
  color: ${prop('theme.colors.textColor')};
  text-decoration: none;
  display: flex;
`

export const Number = styled.div`
  background: ${prop('theme.colors.main')};
  border-radius: 7px 0 0 7px;
  color: ${prop('theme.colors.mainAccentText')};
  display: flex;
  font-size: 2.5rem;
  padding: ${props => props.theme.spacing.bigger};
  align-items: center;
  justify-content: center;
  width: 40%;
  max-width: 169px;
  height: 165px;
  box-sizing: border-box;
`
