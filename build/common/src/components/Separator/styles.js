import styled from 'styled-components'
import { prop } from 'styled-tools'

const HR = styled.hr`
  border: 0.5px solid ${prop('color')};
  margin: ${prop('margin')} auto;
  width: ${prop('width')};
  ${prop('customStyle')};
`

export default HR
