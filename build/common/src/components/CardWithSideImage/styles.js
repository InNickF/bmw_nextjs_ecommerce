import styled, { css } from 'styled-components'
import { ifProp } from 'styled-tools'

import media from '../../themes/media'

export const Card = styled.div`
  
  margin-bottom: ${props => props.theme.spacing.huge};
  position: relative;
  min-height: 400px;
  ${props => props.theme.shadow.card};
`

export const ImageContainer = styled.div`
  width: 100%;
  img {
  }
  ${media.greaterThan('tablet')`
    width: 50%;
  `}
`

export const ButtonContainer = styled.div`
  margin-top: ${props => props.theme.spacing.big};
  margin-bottom: ${props => props.theme.spacing.big};
  text-align: center;
  ${media.greaterThan('tablet')`
    margin-top: 0;
    position: absolute;
    text-align: right;
    bottom: 15px;
    right: 15px;
    button{

    }
  `}
`

export const Detail = styled.div`
  margin-top: ${props => props.theme.spacing.bigger};
  width: 100%;
  position: relative;
  h3 {
    ${props => props.theme.font.family.title};
    font-size: 32px;
    margin-bottom: ${props => props.theme.spacing.bigger};
    font-weight: bold;
  }

  .content {
    display: block;
    
    font-size: 18px;  
    line-height: 1.6;
  }

  ${media.greaterThan('tablet')`
    margin-left: 4%;
    margin-top: 30px;
    width: 42%;
    min-height: 350px;
  `}

  ${media.lessThan('tablet')`
  margin-left: 10px;
  margin-right: 10px;
  width: calc(100vw - 20px);
  `}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  ${ifProp('rightImage', css`
    ${Detail} {
      order: 1;
      margin-left: 0;
    }
    ${ImageContainer} {
      order: 2;
      text-align: right;
      margin-left: ${props => props.theme.spacing.huge};
    }
    ${ButtonContainer} {
      text-align: left;
      left: 15px;
    }
  `)}
  ${media.greaterThan('tablet')`
    flex-direction: row;
  `}
`

export const DateInfo = styled.div`
  display: block;
  ${props => props.theme.font.family.normal};
  font-weight: bold;
  line-height: 1.6;
  margin: 10px 0px;
  color: ${props => props.theme.colors.main};
`
