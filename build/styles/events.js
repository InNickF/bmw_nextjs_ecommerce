import styled, { createGlobalStyle } from 'styled-components'
import { prop } from 'styled-tools'
import calendarStyles from 'react-calendar/dist/Calendar.css'

import { media } from '../common'

createGlobalStyle`
  ${calendarStyles};
`

export const EventsContainer = styled.div`
  > div {
    &:first-child {
      display: flex;
      justify-content: center;
      margin-bottom: ${prop('theme.spacing.bigger')};
    }
    &:last-child {
      flex: 1;
    }
  }


  ${media.greaterThan('tablet')`
    display: flex;
    justify-content: space-between;
    > div {
      &:first-child {
        margin-right: ${prop('theme.spacing.bigger')};
        width: 40%;
      }
    }
  `}


  ${media.lessThan('tablet')`
  .no-events{
    display: flex;
    align-items: center;
    justify-content:center;
    height: 100px;
  }
  `}
`

export const BtnNovedades = styled.div`
display: flex;
align - items: center;
justify - content: center;
`