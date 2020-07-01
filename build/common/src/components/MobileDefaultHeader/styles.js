import styled from 'styled-components'
import { prop } from 'styled-tools'

export default styled.div`
  ${prop('theme.font.family.title')};
  font-size: ${prop('theme.font.sizes')};
  a {
    color: ${prop('theme.header.headTextColor')};
    text-decoration: none;
    vertical-align: middle;
    font-size: 12px;
  }
  button {
    background: transparent;
    color: ${prop('theme.header.headTextColor')};
    vertical-align: middle;
    font-size: smaller;
  }
  svg {
    margin-right: ${prop('theme.spacing.big')};
    vertical-align: middle;
  }
`
