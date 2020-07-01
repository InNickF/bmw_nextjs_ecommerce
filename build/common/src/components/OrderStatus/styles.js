import styled from 'styled-components'
import { prop } from 'styled-tools'
import { rgba } from 'polished'
import media from '../../themes/media'

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-bottom: ${prop('theme.spacing.huge')};
  margin-top: ${prop('theme.spacing.bigger')};
  width: 840px;
  ${media.lessThan('tablet')`
    padding-left: 0;
    width: auto;
    height: 840px;
  `};
`

export const Content = styled.div`
  display: flex;
  text-align: center;
  position: relative;
  ${prop('theme.font.family.condensed')};
  .element {
    margin: 0 60px;
    width: 120px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  .circle {
    background: white;
    border: 1px solid ${props => rgba(props.theme.colors.main, 0.4)};
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: ${prop('theme.spacing.big')};
    height: 120px;
    width: 120px;
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 60%;
      opacity: 0.6;
      &:nth-child(2) {
        width: 50%;
      }
    }
  }
  .is-actived {
    .circle {
      border: 2px solid ${prop('theme.colors.main')};
      img {
        opacity: 1;
      }
    }
  }
  ${media.lessThan('tablet')`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .circle {
      margin-bottom: 0;
      box-sizing: border-box;
      margin-right: 1rem;
      height: 120px;
      width: 120px;
    }
    .element {
      display: flex;
      align-items: center;
      margin: 60px 0;
      width: auto;
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }

    h5 {
      font-size: ${prop('theme.font.sizes.normal')};
    }
  `};
`

export const Line = styled.div`
  background: ${props => rgba(props.theme.colors.main, 0.4)};
  position: absolute;
  height: 2px;
  top: 60px;
  width: 600px;
  left: 120px;
  .progress {
    background: ${prop('theme.colors.main')};
    position: absolute;
    left: 0;
    height: 100%;
    width: ${prop('percent')}px;
  }
  ${media.lessThan('tablet')`
    width: 2px;
    height: 600px;
    top: 120px;
    left: 60px;
    .progress {
      top: 0;
      width: 100%;
      height: ${prop('percent')}px;
    }
  `}
`
