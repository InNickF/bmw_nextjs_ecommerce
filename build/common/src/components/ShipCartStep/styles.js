import styled, { css } from 'styled-components'
import { prop, ifProp } from 'styled-tools'


import { textInputs } from 'polished'

import media from '../../themes/media'

export const Container = styled.div`
transition: all .5s ease-in;
div{
  box-sizing: border-box;
}
button{
  cursor: pointer;
}
`
export const Form = styled.form`

`

export const AddresItemContainer = styled.form`
cursor: pointer;
margin-left: 30px;
position: relative;
border-bottom: 1px dashed black;
padding-bottom: 5px;
margin-bottom: 15px;
:hover{
  border-color: ${parseInt(process.env.BRAND_ID) !== 3 ? 'black' : '#1c69d4'};
}
p{
  max-width: 300px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
    color: #9E9E9E;
  }
.square-checked{
  width: 20px;
  height: 20px;
  padding: 3px;
  border: 1px solid;
  border-color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : 'black'};
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  .square-check{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background: transparent;
    margin: auto;
  }
}

${ifProp(
  'selected',
  css`
  border-width: 3px;
  border-color: ${parseInt(process.env.BRAND_ID) !== 3 ? 'black' : '#1c69d4'};
  p:first-of-type{
    color: ${parseInt(process.env.BRAND_ID) !== 3 ? 'black' : '#1c69d4'};        
  }
  .square-checked{
    border-color: ${parseInt(process.env.BRAND_ID) !== 3 ? 'black' : '#1c69d4'};
    .square-check{
      background: ${parseInt(process.env.BRAND_ID) !== 3 ? 'black' : '#1c69d4'};
    }
  }
  `
)};
`

export const ContentPay = styled.div`
${media.greaterThan('tablet')`
  margin-right: 75px;
`};
`

export const TitleHeader = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 0.5px solid #D5D5D5;
border-top: 0.5px solid #D5D5D5;
align-items: center;
h3{
  font-weight: bold;
  font-size: 32px;
  color: #000000;
  padding: 20px 0;  
}
svg{
  margin-left: 18px;
}
button{  
  height: min-content;
  background: transparent;
  font-weight: 500;
  font-size: 14px;
  text-decoration-line: underline;
  color: #000000;
  margin-top: 19px;
  margin-right: 21px;
}
${media.lessThan('tablet')`
padding: 0px 12px;
width: 100vw;
button{  
  font-size: 10px;
}
`};

`

export const ContentPaySend = styled.div`
  display: flex;
  margin-top: 0px !important;
  @media (max-width: 576px) { 
    flex-direction: column;
    padding: 20px 24px;
    .metodo{
      margin: 0px;      
    }
  }
  >div:first-child{
    margin-right: 125px;
  }
  >div{
    margin-bottom: 35px;
    margin-top: 25px;
    &:last-child{
      p{
        font-weight: bold;
      }
    }
  }
  h2{
    font-weight: bold;
    font-size: 16px;    
    color: #000000;
    margin-bottom: 15px;
  }
  p{
    margin-bottom: 5px;
    font-weight: normal;
    font-size: 16px;      
    color: #000000;
    text-transform: lowercase;
    &::first-letter{
      text-transform: uppercase;
    }
  }
  .difuminated{
    color: #9E9E9E;
    text-transform: lowercase;
    &::first-letter{
      text-transform: uppercase;
    }
  }

  ${media.lessThan('tablet')`
    >div:first-child{    
      margin-bottom: 0;
      p{
        margin-top: 10px;
      } 
    }
  `};

`

export const ContentPayPaid = styled.div`
text-align: center;
img{
  width: 172px;
  height: 45px;
  margin-bottom: 45px;
  margin-top: 20px;
}
button{
  width: 100%;
  height: 50px;
  background: ${parseInt(process.env.BRAND_ID) === 3 ? '#1C69D4' : '#000000'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  svg{
    margin-right: 25px;
  }
}
p{
  text-align: left!important;
  margin-top: 18px;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
  color: #A3A3A3;
}
  ${media.lessThan('tablet')`
  img{
    margin-bottom: -20px;
  }
  button,
  p{
   padding: 0 12px;
    display: none;
  }

`};
`

export const Row = styled.div`
  display: flex;  
  margin-bottom: 1rem;
  ${media.lessThan('tablet')`
  flex-direction: column;
  `};
  ${media.greaterThan('tablet')`
  >div:first-child{
    margin-right: 60px;
  }
  `};
  `

export const FieldContainer = styled.div`
  margin-top: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  label {
    text-align: left;
    font-weight: normal;
    font-size: 14px;
    color: #000000;
    margin-bottom: 10px;
    display: inline-block;
  }
  input {
    width: 290px;
    height: 40px;
    border: 1px solid #000000;
    box-sizing: border-box;
    padding-left: 15px;
  }
  select{
    width: 290px;
    height: 40px;
    border: 1px solid #000000;
    box-sizing: border-box;
    padding-left: 15px;
  }
  .number-field-content{
    display: flex;
    justify-content: space-between;
    width: 290px;
    input {
      width: 214px;
    }
    &::after{
      content: '';
      position: absolute;
      left: 60px;
      bottom: 20px;
      width: 16px;
      height: 1px;      
      border-bottom: 1px solid #000000;
    }
  }
  .checkbox-button {
    cursor: pointer;
    display: flex;    
    margin-top: 20px;
  }

input[type=checkbox] {
    box-sizing: border-box;
    padding: 0;
}

input {
    font-size: 1rem;
    line-height: 1.5;
    padding: 11px 23px;
    border: 1px solid #000;
    border-radius: 0;
    outline: 0;
    background-color: transparent;
}

.checkbox-button__input {
    opacity: 0;
    position: absolute;
    
  }
  
  .checkbox-button__control {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;    
    margin-right: 15px;
    vertical-align: middle;
    background-color: inherit;
    color: #000000;
    border: 2px solid #666;
}

.checkbox-button__input:checked+.checkbox-button__control:after {
    content: "";
    display: block;
    position: absolute;
    top: 5px;
    left: 4px;
    width: 10px;
    height: 10px;
    background-color: #000000;
}

.checkbox-button__input:checked+.checkbox-button__control {
    border-color: #000000;
}

.checkbox-button__control {
  transform: scale(0.75);
}
.checkbox-button__label{
  display: flex;
  max-width: 290px;
  justify-content: center;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
  img{
    width: 120px;
    height: 120px;
    object-fit: cover;
  }
}
.error-span{
  font-size: small;
  color: #f93d5c;
  margin-top: 5px;
}

${media.lessThan('tablet')`
  width: 100%;
  margin-top: 0;
  select,
  input{
    width: 100%;
  }
`};

`
export const CartContainer = styled.div`
  margin-right: 75px;
  margin-top: 59px;
  margin-bottom: 60px;
  h3{
    font-weight: bold;
    font-size: 32px;
    color: #000000;
    padding: 20px 0;
    margin-bottom: 17px;
    @media (max-width: 576px) { 
      margin-left: 20px;
    }
  }
`
export const FormRegisterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  input, select {
    margin-right: 65px;
  }
  label {
    font-weight: normal;
    font-size: 14px;
    color: #000000;
    margin-bottom: 10px;
    display: inline-block;
    font-family: "BMWGroup-Light",sans-serif;
    margin-top: 20px;
  }
  .cont-btn{
    margin-top: 30px
  }
  @media (max-width: 576px) { 
    justify-content: center;
    input, select {
      margin-right: 0px;
    }
    .cont-btn{
      display: flex;
    }
  }
  ${media.lessThan('tablet')`
    label{
      margin-top: 20px;
    }
  `};
`
export const ContBtn = styled.div`  
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  margin-top: 10px;
  button{
    height: 40px;
    box-sizing: border-box;
  }
  .cont{
    @media (max-width: 576px) { 
        display: flex;     
    }
  }
`

export const BtnContainer = styled.div`
margin-top: 53px;
display: flex;
justify-content: flex-end;
margin-right: 74px;
margin-bottom: 28px;
button{
  background: #1C69D4;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  color: #FFFFFF;
  width: 198px;
  height: 40px;
}
`

export const FormContainer = styled.div`
margin-right: 75px;
margin-top: 70px;

.mb-40{
  min-height: 340px;
}
.mh-450{
  min-height: 450px;  
}

h3{
  font-weight: bold;
  font-size: 32px;
  color: #000000;
  padding: 20px 0;
  border-top: 0.5px solid #D5D5D5;
  }
@media (max-width: 576px) { 
  padding: 0px 12px;
}

${media.lessThan('tablet')`
  width: 100vw;
  margin-top: 15px;
  h3{
    border-bottom: 0.5px solid #D5D5D5;
    padding: 12px 0;
  }
`};
      
`
export const BackBtn = styled.div`
  display: flex;
  margin-left: 12px;
  align-items: center;
  margin-bottom: 30px;
  ${parseInt(process.env.BRAND_ID) === 2 ? 'margin-top: 10px' : ''};
  span{
    line-height: 16px;
  }

  ${media.greaterThan('tablet')`
  display: none;
`};

`

export const ShipContainer = styled.div`

`

export const Content = styled.div`
`

export const ShipItem = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
.details{
  display: flex;
}

input{
  color: red;
  height: 20px;
  width: 20px;
  background: #ffffff;

  @media (max-width: 576px) { 
    margin: 0 25px;
  }
}
.ship-type{
  font-weight: bold;
  font-size: 18px;
  color: #000000;
  margin: 0 25px;
}
.ship-date{
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #000000;
  margin: 0 25px;
}
.ship-price{
  font-weight: 500;
  font-size: 18px;
  text-align: right;
  color: #000000;
  margin: 0 40px;
}
.standars{
  display: flex;
  @media (max-width: 576px) { 
    flex-direction: column;
    width: 300px;
    line-height: 28px;
    .ship-price{
      text-align: start;
      margin: 0;
    }
    .ship-date , .ship-type{
      margin: 0;
    }
  }
}
@media (max-width: 576) { 
  flex-direction: column;
  align-items: start;
  line-height: 24px;
}
`
