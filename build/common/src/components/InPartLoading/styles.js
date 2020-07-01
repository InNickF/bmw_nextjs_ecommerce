import styled, { css } from 'styled-components'
import { ifNotProp, ifProp } from 'styled-tools'

const Container = styled.div`
  ${ifNotProp(
    'canAbsolute',
    css`
      position: relative;
    `
  )}
  ${ifProp(
    'canAbsolute',
    css`
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
    `
  )}
  height: 100%;
  width: 100%;
  .loading {
    background: rgba(255, 255, 255, 0.58);
    ${ifProp(
    'hideContent',
    css`
        background: transparent;
      `
  )}
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    border: 0;
    z-index: 9;
    width: 100%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
  ${ifProp(
    'preload',
    css`
      ${ifProp(
    'isLoading',
    css`
          display: block;
        `
  )}
      ${ifNotProp(
    'isLoading',
    css`
          display: none;
        `
  )}
    `
  )}
`

export default Container
