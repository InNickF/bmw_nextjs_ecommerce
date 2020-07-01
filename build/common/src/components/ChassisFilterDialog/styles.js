import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Container = styled.div`
  text-align: center;
  h4 {
    margin-top: ${prop('theme.spacing.big')};
    ${prop('theme.font.family.title')};
  }
  > p {
    margin: ${prop('theme.spacing.big')} auto;
  }
  .chassis-filter .chassis-help {
    margin: ${prop('theme.spacing.big')} auto;
    ${prop('theme.font.family.title')};
  }
`
