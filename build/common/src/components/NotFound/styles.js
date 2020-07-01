import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Container = styled.div`
  margin: 2rem auto;
  width: 60%;
  text-align: center;
  ${prop('theme.font.family.title')};
  h2 {
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
  }

  svg {
    fill: ${prop('theme.colors.main')} !important;
  }

  a {
    color: ${prop('theme.colors.secondAccentText')};
    text-decoration: none;
  }
  button {
    margin-top: 2rem;
  }

`
