import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const Container = styled.form`

`

export const ChassisInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${prop('theme.spacing.normal')};
  input {
    background-color: #F9F9F9;
    box-sizing: border-box;
    height: 45px;
    padding: 0 1rem;
    margin-left: ${prop('theme.spacing.small')};
    width: 372px;
    ${media.lessThan('tablet')`
      margin-left: 0;
    `}
  }
  button {
    cursor: pointer;
    background: transparent;
    :last-child {
      background: ${prop('theme.colors.main')};
      display: flex;
      align-items: center;
      justify-content: center;
      height: 45px;
      width: 55px;
      &:hover {
        opacity: 0.8;
      }
    }
    ${media.lessThan('tablet')`
      display: none !important;
    `}
  }
`

export const SaveChassis = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${prop('theme.spacing.small')};
  input {
    margin-right: ${prop('theme.spacing.small')};
  }
`
