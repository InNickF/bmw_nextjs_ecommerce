import styled from 'styled-components'
import { prop } from 'styled-tools'
import { media } from '../common'

export const EventsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  > a {
    width: 100%;
  }
  ${media.greaterThan('tablet')`
    > a {
      margin: 0 10px; 
      width: 32%;
    }
  `}
`
export const TopNavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${prop('theme.spacing.bigger')};
`
export const InputWrapper = styled.div`
  width: 100%;
  ${media.greaterThan('tablet')`
    max-width: 350px;
  `}
`

export const PaginationWrapper = styled.div`
  font-weight: lighter;
  ${prop('theme.font.family.condensed')};
  text-align: center;
  a {
    color: ${prop('theme.colors.textColor')};
    text-decoration: none;
    font-weight: lighter;
    padding: 4px;
    ${prop('theme.font.family.condensed')};
  }
  ul {
    display: flex;
    justify-content: center;
    li {
      list-style: none;¡
    }
  }
  ${media.lessThan('tablet')`
    display: none;
    &.in-mobile {
      display: block;
    }
  `}
`
