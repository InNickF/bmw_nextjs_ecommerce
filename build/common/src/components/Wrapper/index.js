import styled, { withTheme, css } from 'styled-components'
import { prop, ifProp } from 'styled-tools'
import { media } from '../../../../common'

export default withTheme(styled.div`
  margin: 0 auto;
  width: ${prop('theme.elements.wrapperWidth')};
  max-width: ${prop('theme.elements.wrapperMaxWidth')};
  ${ifProp('relative', css`
    position: relative;
  `)}
  ${ifProp('fullWrapper', css`
    width: 100%;
  `)}
  ${media.lessThan('tablet')`  
  width: 100%;
  .hide-responsive{
    display: none;
  }
  `};
`)
