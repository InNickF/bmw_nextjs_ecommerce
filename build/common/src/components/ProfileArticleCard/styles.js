import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const ButtonContainer = styled.div`
  width: 100%;
  button,
  a {
    width: 100%;
  }
  ${media.greaterThan('tablet')`
    width: 20%;
    button {
      width: 100%;
      a {
        margin: 0 auto;
        width: 80%;
      }
    }

  `};
`
export const Content = styled.div`
  order: 3;
  ${media.greaterThan('tablet')`
    width: 65%;
  `};
`

export const Container = styled.div`
  border: thin solid ${prop('theme.colors.darkgray')};
  display: flex;
  flex-direction: column;
  h3 {
    ${prop('theme.font.family.title')};
    font-size: ${prop('theme.font.sizes.big')};
    margin-bottom: ${prop('theme.spacing.small')};
    margin-top: ${prop('theme.spacing.small')};
  }
  > div {
    font-size: ${prop('theme.font.sizes.small')};
    line-height: 20pt;
  }
  ${media.greaterThan('tablet')`
    flex-direction: row;
    align-items: center;
    margin-bottom: ${prop('theme.spacing.big')};
  `};
`

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${prop('theme.spacing.big')};
  ${media.greaterThan('tablet')`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 75%;
  `};
`

export const Dates = styled.div`
  order: 2;
  h5 {
    font-size: ${prop('theme.font.sizes.small')};
    line-height: 10px;
    margin-top: ${prop('theme.spacing.small')};
  }
  h6 {
    font-size: ${prop('theme.font.sizes.small')};
    &::first-letter {
      text-transform: uppercase;
    }
  }
  ${media.greaterThan('tablet')`
    border-bottom: thin solid ${prop('theme.colors.darkgray')};
    margin-bottom: ${prop('theme.spacing.huge')};
    order: 1;
    width: 100%;
  `};
`
export const ImageContainer = styled.div`
  order: 1;
  ${media.greaterThan('tablet')`
    order: 2;
    width: 30%;
  `};
`
