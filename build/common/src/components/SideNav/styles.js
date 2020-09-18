import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

export const Content = styled.div.attrs(props => ({
  style: {
    left: `${props.left}%`
  }
}))`
  background: white;
  overflow: auto;
  height: 100%;
  position: fixed;
  top: 55px;
  left: 0;
  max-width: 530px;
  max-width: 321px;
  max-height: 515px;
  width: 85%;
  z-index: 9;
`

export const Overlay = styled.div.attrs(props => ({
  style: {
    opacity: props.opacity
  }
}))`
  background: rgba(0, 0, 0, 0.6);
  height: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;
  display: none;
  ${ifProp('isShowing', css`
    display: block;
  `)}
`
