import styled, { css, createGlobalStyle } from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import media from '../../themes/media'

createGlobalStyle`
  .modal-overlay {
    background: rgba(255, 255, 255, 0.75);
  }
  .editProfileModal{
    max-width: 1000px!important;
  }
  .modal-container {
    border-radius: 0 !important;
    border: thin solid #979797;
    background-color: white;
    padding: 3rem 2rem;
    width: 100%;
    position: relative;
    ${props => props.theme.shadow.dialog};
    ${ifProp(
  'borderLess',
  css`
        padding: 0;
      `
)};
    ${media.lessThan('mobile')`
      width: 90%;
      padding: 1rem;
    `};
    ${media.between('mobile', 'tablet')`
      width: 95%;
    `};
    ${media.between('tablet', 'medium')`
      width: 95%;
    `};
  }
`

export const Container = styled.div`
  position: fixed;
  display: flex;
  visibility: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  & > div {
    width: 100%;
  }
  ${ifProp(
  'isVisible',
  css`
      visibility: visible;
    `
)};
`

export const ModalOverlay = styled.div`
  background: rgba(255, 255, 255, 0.75);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const ModalContent = styled.div`
  position: relative;
  overflow: auto;
  justify-content: center;
  display: flex;
  ${prop('customStyle')};
`
export const CloseButton = styled.button`
  background: transparent;
  cursor: pointer;
  display: flex;
  outline: none;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  height: 30px;
  width: 30px;
  position: absolute;
  right: -15px;
  top: -15px;
  user-select: none;
  z-index: 9;
  ${media.lessThan('tablet')`
    color: white;
    font-size: 1.2rem;
    padding: 0.2rem;
    font-weight: bold;
    right: 0;
    top: -10px;
  `};
  ${ifProp(
  'borderLess',
  css`
      right: -1rem;
      top: -1rem;
      z-index: 2;
    `
)};
`

export const Content = styled.div`
  background: url('${prop('bgImg.img')}');
  height: auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  ${media.lessThan('tablet')`
  background: url('${prop('bgImg.responsive')}');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`};
`
