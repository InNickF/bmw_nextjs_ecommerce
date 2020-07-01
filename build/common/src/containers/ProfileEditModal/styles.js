import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Container = styled.div`
  box-sizing: border-box;
  color: ${prop('theme.colors.textColor')};
  margin: 0 auto;
  width: 100%;
  > h3 {
    text-align: center;
    font-size: 1.5rem;
    padding-left: 2rem;
  }
  .user-edit-container {
    width: 100%;
    margin: 0;!important
    display: block;
  }
`
