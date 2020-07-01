import styled, { withTheme, css } from 'styled-components'
import { prop, ifProp } from 'styled-tools'
import media from '../../themes/media'

export default withTheme(styled.div`
display: flex;
flex-direction: column;
${media.lessThan('tablet')`
flex-direction: column-reverse;
  `}
`)
