import styled from 'styled-components'
import { prop } from 'styled-tools'

export default styled.div`
  font-size: ${props => props.theme.font.sizes.huge};
  position: relative;
  padding-left: ${props => props.theme.spacing.huge};
  margin: ${props => props.theme.spacing.bigger} auto;
  ${props => props.theme.font.family.title};
  font-weight: bold;
  notMarginTop{
   h4{
     margin-top: 0!important;
   } 
  }
  h4{
    display: inline-block;
    ${props => `margin-top:${process.env.BRAND_ID == 2 && !props.noMarginTop ? '2em' : '0'}`};
  }
a{
  cursor: pointer;
}
svg {
  transform: rotate(180deg);
  position: absolute;
  left: -19px;
  top: 3px;
}
  > a {
  color: ${ prop('theme.colors.textColor')};
  font - size: ${ props => props.theme.font.sizes.huge};
  position: relative;
  margin: ${ prop('theme.spacing.bigger')} auto;
  ${ prop('theme.font.family.title')};
  text - decoration: none;
  position: relative;
  svg {
    transform: rotate(180deg);
    position: absolute;
    left: -19px;
    top: 3px;
  }
}
`
