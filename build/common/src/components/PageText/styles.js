import styled from 'styled-components'
import { prop } from 'styled-tools'

export default styled.p`
  font-size: ${props => props.theme.font.sizes.small};
  position: relative;
  padding-left: ${props => props.theme.spacing.noSpace};
  margin: ${props => props.theme.spacing.noSpace} auto;
  ${props => props.theme.font.family.normal};
  > a {
  color: ${prop('theme.colors.textColor')};
  font-size: ${props => props.theme.font.sizes.small};
  position: relative;
  margin: ${prop('theme.spacing.noSpace')} auto;
  ${prop('theme.font.family.small')};
  text-decoration: none;
  position: relative;  
  }
  `
