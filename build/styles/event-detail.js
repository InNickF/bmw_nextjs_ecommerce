import styled, { createGlobalStyle } from 'styled-components'
import { prop } from 'styled-tools'
import calendarStyles from 'react-calendar/dist/Calendar.css'

import { media } from '../common'

createGlobalStyle`
  ${calendarStyles};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    ${prop('theme.font.family.title')};
    font-size: ${prop('theme.font.sizes.bigger')};
    margin: ${prop('theme.spacing.bigger')} 0;
    order: 2;
  }
  > img {
    order: 1;
  }
  > div {
    ${prop('theme.font.family.condensed')};
    font-weight: lighter;
    line-height: 1.6;
    order: 3;
  }
  ${media.greaterThan('tablet')`
    margin: 0 auto;
    width: 95%;
    display: grid;
    grid-template-columns: 45% 50%;
    > img {
      grid-row: 1 / 4;
      margin-right: 2%;
      width: 95%;
    }
  `}
`

export const Share = styled.div`
  margin: ${prop('theme.spacing.huge')} 0;
  a {
    cursor: pointer;
  }
  h5 {
    ${prop('theme.font.family.title')};
  }
  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 110px;
  }
  ${media.greaterThan('tablet')`
    margin-left: ${prop('theme.spacing.huge')};
  `}
`

export const TitleContainer = styled.div`
  ${media.greaterThan('tablet')`
    margin-left: ${prop('theme.spacing.bigger')};
  `}
`
