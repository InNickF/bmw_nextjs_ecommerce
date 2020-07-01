import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const Container = styled.div`
  background: white;
`

export const Card = styled.div`
  border: thin solid ${prop('theme.colors.darkgray')};
  padding: ${prop('theme.spacing.bigger')} ${prop('theme.spacing.small')};
  display: flex;
  position: relative;
  margin-bottom: ${prop('theme.spacing.big')};
  ${media.greaterThan('tablet')`
    padding: ${prop('theme.spacing.bigger')} ${prop('theme.spacing.big')};
  `};
`

export const VehicleImage = styled.div`
  margin-right: ${prop('theme.spacing.big')};
  width: 25%;
`

export const CardContent = styled.div`
  h3 {
    font-size: ${prop('theme.font.sizes.small')};
    font-weight: bold;
    margin-bottom: ${prop('theme.spacing.small')};
  }
  h4 {
    font-size: ${prop('theme.font.sizes.smaller')};
    margin-bottom: ${prop('theme.spacing.small')};
    ${prop('theme.font.family.condensed')};
  }
  ${media.greaterThan('tablet')`
    h3 {
      font-size: ${prop('theme.font.sizes.big')};
    }
    h4 {
      font-size: ${prop('theme.font.sizes.normal')};
    }
  `};
`

export const DeleteButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: ${props => props.theme.spacing.bigger};
  right: ${props => props.theme.spacing.bigger};
  img {
    width: 16px;
  }
`

export const AddButton = styled.button`
  color: ${props => props.theme.colors.textColor};
  cursor: pointer;
  margin-top: ${props => props.theme.spacing.small};
  margin-bottom: ${props => props.theme.spacing.bigger};
  ${props => props.theme.font.family.condensed};
  img {
    vertical-align: middle;
    margin-right: 0.4rem;
    width: 21px;
  }
  &:hover {
    opacity: 0.8;
  }
`
