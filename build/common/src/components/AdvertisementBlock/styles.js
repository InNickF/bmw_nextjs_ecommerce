import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const LeftBlock = styled.div`
  display: none;
  ${media.greaterThan('medium')`
    display: block;
    max-width: 18%;
  `};
`

export const RightBlock = styled.div`
  display: none;
  ${media.greaterThan('medium')`
    display: block;
    max-width: 18%;
  `};
`

export const CenterBlock = styled.div`
  a {
    text-decoration: none;
    color: ${prop('theme.header.advHeaderColor')};
    ${prop('theme.font.family.condensed')};
  }
  text-align: center;
  margin: 0 auto;
  width: 95%;
  ${prop('theme.font.family.condensed')};
  ${media.greaterThan('medium')`
    width: 60%;
  `};
`

export const Container = styled.aside`
  background: ${prop('theme.header.advHeaderBg')};
  align-items: center;
  display: flex;
  border: none;
  justify-content: space-between;
  margin: ${prop('margin')};
  padding: 5px;
  position: relative;
  z-index: 1;
`
