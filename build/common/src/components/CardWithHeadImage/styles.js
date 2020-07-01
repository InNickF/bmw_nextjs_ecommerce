import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Card = styled.a`
  margin-bottom: ${prop('theme.spacing.huge')};
  position: relative;
  color: ${prop('theme.colors.textColor')};
  text-decoration: none;
  ${prop('theme.shadow.card')};
  &:active {
    transform: scale(0.9);
  }
`

export const Content = styled.div`
  
`

export const Image = styled.div`
  background: url(${prop('image')}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 263.6px;

`

export const Detail = styled.div`
  position: relative;
  padding: ${prop('theme.spacing.bigger')};
  h3 {
    ${prop('theme.font.family.title')};
    font-size: ${prop('theme.font.sizes.big')};
    margin-top: ${prop('theme.spacing.small')};
    margin-bottom: ${prop('theme.spacing.small')};
    font-weight: bold;
  }

  .content {
    display: block;
    font-size: ${prop('theme.font.sizes.small')};
    
  }
`
