import styled from 'styled-components'
import { prop } from 'styled-tools'

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

export const ContentIcons = styled.div`
  border: 1px solid #BCBCBC;
  margin: 50px auto;
  padding: 50px 10px;
  
  h2 {
    ${props => props.theme.font.family.title};
    text-align: left;
    font-size: 1.2em;
  }
`
