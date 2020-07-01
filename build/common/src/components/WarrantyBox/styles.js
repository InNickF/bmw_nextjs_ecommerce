import styled from 'styled-components'

import { prop } from 'styled-tools'

export const TitleWrapped = styled.div`
  h4{
  font-size: ${prop('theme.font.sizes.normal')};
  } 
`

export const CardContainer = styled.div`
  display: inline-block;
  margin: 30px 20px;
  vertical-align: top;
`

export const CardShadow = styled.div`
  width: 103pt;
  height: 110pt;
  border-radius: 6pt;
  opacity: 1;
  display: flex;
  margin: 0 auto;
  margin-bottom: 23px;
  align-items: center;
  justify-content: center;
  -webkit-box-shadow: 0px 0px 11px 2px rgba(242,237,242,1);
  -moz-box-shadow: 0px 0px 11px 2px rgba(242,237,242,1);
  box-shadow: 0px 0px 11px 2px rgba(242,237,242,1);
`

export const Card = styled.div`
  width: 103pt;
  height: 110pt;
  border-radius: 6pt;
  opacity: 1;
  display: flex;
  margin: 0 auto;
  margin-bottom: 23px;
  align-items: center;
  justify-content: center;
`

export const Number = styled.p`
  width: 50%;
  ${props => props.theme.font.family.title};
  font-weight: bold !important;
  font-size: 2em !important;
`

export const TextWrapped = styled.div`
  p{
    font-size: ${prop('theme.font.sizes.small')};
    margin: 0 auto;
    width: 155pt;
    text-align: center;
  }
`

export const Blank = styled.div`
 width: 50%;
`

export const Middle = styled.div`
 width: 170px;
   p{
    font-size: ${prop('theme.font.sizes.small')};
    margin: 0 auto;
    width: 120pt;
    text-align: center;
  }
`
