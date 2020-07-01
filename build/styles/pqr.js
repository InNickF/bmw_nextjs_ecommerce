import styled, { css } from 'styled-components'
import { prop, ifProp } from 'styled-tools'
import media from '../common/src/themes/media'


export const TitleWrapped = styled.div`
h4{
  font-size: ${prop('theme.font.sizes.big')};
} 
`

export const Card = styled.div`
width: 46.33%;
height: 110pt;
border-radius: 6pt;
opacity: 1;
display: flex;
align-items: center;
justify-content: center;
`

export const InputNormal = styled.div`
margin: 0px 22px 12px 22px;
input{
  width: 100%;
  padding: 15px 20px;
  margin: 17px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
`

export const InputLarge = styled.div`
margin: 0px 22px 0 22px;
textarea{
  width: 100%;
  padding: 15px 20px 120px;
  margin: 17px 0 0 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
`

export const ButtonContainer = styled.div`
margin: 10px 0 50px 0;
`
export const FormStyles = styled.div`
label{
  font-size: 14px;
  position: relative;
  padding-left: ${props => props.theme.spacing.noSpace};
  margin: ${props => props.theme.spacing.noSpace} auto;
  ${props => props.theme.font.family.title};
  > a {
    color: ${prop('theme.colors.textColor')};
    font-size: ${props => props.theme.font.sizes.small};
    position: relative;
    margin: ${prop('theme.spacing.noSpace')} auto;
    ${prop('theme.font.family.small')};
    text-decoration: none;
    position: relative;  
  } 
  `

export const ContentBox = styled.div`
  text-align: center;
  width: 100%;
  margin: 40px 0px;
  
  p {
    text-align: justify;
    ${props => props.theme.font.family.condensed};
    font-size: ${props => props.theme.font.sizes.small};
  }
  
  h3 {
    ${props => props.theme.font.family.condensed};
    font-size: ${props => props.theme.font.sizes.small};
    text-align: left;
    font-weight: bold;
    margin: 20px 0px;
  }
  `

export const ContentGarantia = styled.div`
  display: flex;
  p {
    margin: auto auto;
  }
  `

export const ContentPqr = styled.div`
  margin: auto;
  max-width: 1680px;
  display:grid;
  grid-template-columns: 315px 1fr;
  grid-template-rows: calc(100vh - 70.5px);   
  grid-template-rows: auto;
  div{  
    box-sizing: border-box;
  }
  ${media.lessThan('tablet')`
  display:grid;
  grid-template-columns: 100vw;
  grid-template-rows: auto 1fr;  

  ${parseInt(process.env.BRAND_ID) === 2 && 'margin-top: 40px;'}

  `};
  `

export const SideTabs = styled.div`
  background: #F7F7F7;
  display: flex;
  height: 100vh;
  align-items: center;
  position: relative;
  &::before{
    content: '';
    background: #F7F7F7;
    position: absolute;
    width: 100%;
    height: 10000%;
    top: 100%;
  }
  &::after{
    content: '';
    background: #F7F7F7;
    position: absolute;
    width: 100%;
    height: 1000%;
    left: -100%;
  }
  ${media.lessThan('tablet')`
  height: 80px;

  >div{
    display: flex;
    margin: auto;
  }
  &::before{
    content: '';    
    display: none;
  }
  &::after{
    content: '';
    display: none;    
  }  
  `};
  `
export const PqrOption = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  font-size: 22px;
  margin: 90px 15px;
  
  span{
    font-weight: bold;
    font-size: 32px;
    text-align: center;  
    color: #000000;
  }
  span, svg{
    margin: 0 15px;
  }
${ifProp(
  'activate',
  css`
  p{
    font-weight: bold;
    font-size: 24px;
  }
    color: #000000;
    `
)}
${media.lessThan('tablet')`
margin: 15px;
p{
  display: none;
}

opacity: .5;

${ifProp(
  'activate',
  css`  
  opacity: 1;  
  `
)}
`};
`

export const ContainerPqr = styled.div`
margin: 45px 30px 0;
overflow: auto;
span{
  color: #000000;
  font-weight: 300;
}

${media.lessThan('tablet')`
  margin: 0 20px;
  margin-top: 15px;
`};

`
