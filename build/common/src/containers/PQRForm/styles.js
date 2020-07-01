import styled from 'styled-components'
import { prop } from 'styled-tools'

import { textInputs } from 'polished'

import media from '../../themes/media'

export const Container = styled.div`
max-width: 800px;
  box-sizing: border-box;
  color: ${props => props.theme.colors.textColor};
  margin: 20px 0;
  .txtName {
    display: block;    
    margin-bottom: 10px;
  }
  span {
    text-transform: uppercase;
    ${prop('theme.font.family.normal')}
  }
  h3 {
    font-size: ${props => props.theme.font.sizes.bigger};
    margin-bottom: ${props => props.theme.font.sizes.bigger};
    text-align: center;    
  }
  ${textInputs()} {
    box-shadow: 0 1px 3px 0 rgba(104, 104, 104, 0.5);
    box-sizing: border-box;
    border-radius: 2.8px;
    padding: ${props => props.theme.spacing.small};
  }
  label {
    > span,
    > input {
      display: block;      
    }
    > input {
      width: 100%;
    }
    > span {
      margin-bottom: 0.3rem;
    }
  }
  .error {
    font-size: 0.8em;
    font-weight: 300;
    color: #ed3269;
    text-align: left;
    margin: 5px 0px 10px 0px;
    word-break: break-word;
    margin-top: 11px;    
  }
  .changeType {
    margin-bottom: 1rem;
    span {
      display: block;
      margin-bottom: 0.3rem;      
    }
    select {
      box-shadow: none;
      background: white;
      border: 1px solid hsl(0, 0%, 80%);
      height: 35px;
      width: 100%;
    }
  }
  .input-container {
    margin-bottom: ${props => props.theme.font.sizes.bigger};
    &.doc {
      display: flex;
      > div {
        &:first-child {
          width: 30%;
          margin: 0px 10px 0px 0px;
          > input {
            width: 100px;
          }
        }
        &:last-child {
          width: 70%;
        }
      }
    }
    &.vehicle {
      > span {
        display: block;
        margin-bottom: ${props => props.theme.spacing.small};
      }
      label {
        display: block;
        margin-bottom: ${props => props.theme.spacing.smaller};
        span,
        input {
          display: inline;
          margin-right: ${props => props.theme.spacing.small};
          width: auto;
        }
      }
    }
  }
  .terms {
    text-align: center;
    input {
      margin-right: ${props => props.theme.spacing.small};
    }
    a {
      color: ${props => props.theme.colors.textColor};
      text-decoration: none;      
    }
  }
  .button-container {
    margin-top: ${props => props.theme.spacing.small};
    text-align: center;
  }
`

export const FormContainer = styled.div`
p:first-of-type{
  font-weight: bold;
}
p{
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;
  color: #000000;
  ${parseInt(process.env.BRAND_ID) === 2 && `font-weight: 600`};
  margin-bottom: 18px;
}
form{
  span{
    display: inline-block;
    font-size: 14px;
    text-transform: lowercase;
    &::first-letter{
      text-transform: uppercase;
    }
  }
  input, textarea, select{
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 0!important;
    box-shadow: none!important;
  }
  .button-container{
    text-align: right;
    margin-bottom: 100px;
    button{
      text-transform: lowercase;
      &::first-letter{
        text-transform: uppercase;
      }
    }
  }
}

${media.lessThan('tablet')`
p{
  font-size: 18px;
  line-height: 20px;
}
`};

`

export const OptionButton = styled.div`  
  padding: 20px;
  width: 250px;
  text-align: center;
  ${props => props.border && 'border: 2px solid #979797;'}
  background-color: ${props => props.bcolor || 'white'};
  color: ${props => props.color || '#979797'};
  margin: 15px auto;
  cursor: pointer;

  ${media.lessThan('mobile')`
    font-size: 0.8em;
    width: 200px;
  `};
`

export const OptionBack = styled.div`  
  color: ${props => props.theme.colors.main};
  cursor: pointer;
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`

export const RowLine = styled.div`
width: 100%;
label{
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  display: block;
  margin-bottom: 10px;
}
>div>div{
  border-radius: 0;
  border-color: #000000;
  :hover{
    border-color: #000000;
    cursor: pointer;
  }
  svg{
    color: #000000;
  }
  span{
    background-color: #000000;
  }
}


`

export const FieldContainer = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  label {
    ${props => props.theme.font.family.normal}
  }
  input {
    width: 100%;
    ::placeholder{
      ${props => props.theme.font.family.normal}
    }
  }
  ${media.greaterThan('tablet')`
    width: 45%;
  `};
`

export const SectionTitle = styled.h4`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  ${props => props.theme.font.family.normal}
`

export const OrderItem = styled.div`
  border-bottom: 3px solid #515151;
  cursor: pointer;
  position: relative;
  margin: 20px 10px;
  &:after {
    content: ' ';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px 0 8px 8px;
    border-color: transparent transparent transparent
      ${prop('theme.colors.main')};
    position: absolute;
    left: 0;
    top: 50%;
    display: none;
  }
  strong{
    font-weight:bold;
  }
  p, p:first-of-type{
    font-weight: normal;
  }
  .head {    
    color: #000000;    
    display: flex;
    justify-content: space-between;
    p{
      font-size: 16px;
      :first-of-type {
        font-weight:bold;
        font-size: 24px;      
      }
    }
  }
  .details {
    font-size: 9px;    
    background: white;
    padding-bottom: 10px;    
    li {
      display: flex;    
      align-items: center;
      p{
        font-size: 18px;
      }
      
      p:first-of-type {
        text-align: left;
        font-size: 14px;
        text-transform: uppercase;
        max-width: 50%;
        margin-left: 20px;
        margin-right: auto;
        line-height: 1.5em;
      }
      img {
        height: 80px;
        width: 80px;
      }
    }
  }
  &:hover {
    opacity: 0.8;
    &:after {
      display: block;
    }
  }
  ${media.lessThan('tablet')`
  .head {    
    p{
      font-size: 12px;
      :first-of-type {
        font-weight:bold;
        font-size: 18px;      
      }
    }
  }
  .details {        
    li {
      align-items: center;
      p{
        font-size: 12px;
      }
      
      p:first-of-type {
        max-width: 100%;
        margin-left: 10px;
        padding-right: 10px;
        line-height: 1.2em;
    }
      p:last-of-type {
        flex: none;
      }
      img {
        height: 60px;
        width: 60px;
      }
    }
  }

`};
`

export const Detail = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  .item {
    display: flex;
    align-items: flex-start;
    margin: 0.5rem auto;
    padding: 0.5rem 0;
    border-bottom: thin solid #ddd;
    textarea,
    select {
      background: white;
      border: 1px solid hsl(0, 0%, 80%);
      width: 100%;
    }
    select {
      height: 35px;
    }
    > p {
      width: 40%;
    }
    > div {
      > p {
        padding-bottom: 0.2rem;
      }
      &:nth-child(2) {
        margin: 0 4%;
        width: 25%;
      }
      &:last-child {
        width: 40%;
      }
    }
  }
`
export const HeaderForm = styled.div`
h2{
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 49px;
  text-align: left;
  text-transform: lowercase;
  :first-letter{
    text-transform: uppercase;
  }
  color: #000000;
  font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-Bold', sans-serif !important`};
  font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Regular', serif!important`};
  ${parseInt(process.env.BRAND_ID) === 2 && `font-weight: bold!important`};
  font-family: ${parseInt(process.env.BRAND_ID) === 3 && `'BMWGroup-Bold', sans-serif !important`};
}

${media.lessThan('tablet')`
h2{
  line-height: 44px;
  font-size: 42px;
}
`};

`
export const FormText = styled.div`
margin-top: 50px;
margin-bottom: 110px;
>p{
  font-style: normal;
  font-weight: 500;
  ${parseInt(process.env.BRAND_ID) === 2 && `font-weight: 600`};
  font-size: 28px;
  line-height: 37px;
  text-align: left;
  color: #000000;
}

${media.lessThan('tablet')`
margin-top: 20px;
margin-bottom: 40px;
>p{
  margin-top: 0;
  line-height: 24px;
  font-size: 18px;
}
`};
`
export const BtnWhatsapp = styled.div`
margin-top: 45px;
  a{
    background: #25D366;
    width:180px;
    margin: auto;
    border-radius: 36px;
    display:flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 5px;
    div{
      margin-left: 10px;
    }
    p{
      color: #ffffff;
      font-weight: bold;
      font-size: 12px;      
    }
    span{
      color: #ffffff;
      font-weight: 400;
      font-size: 11px;
      text-transform: inherit;      
      ${parseInt(process.env.BRAND_ID) === 2 && `font-weight: bold`};
    }
    ${media.lessThan('tablet')`
      span{
        color: #ffffff;
    }
    svg, path{
      fill: #ffffff;
    }
  `};
  }

${media.lessThan('tablet')`
margin-top: 20px;
`};  

`