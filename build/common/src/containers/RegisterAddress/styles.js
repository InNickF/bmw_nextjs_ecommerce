import styled from 'styled-components'
import { prop } from 'styled-tools'

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
button{
  float: right;
  background: ${parseInt(process.env.BRAND_ID) === 2 ? 'black' : parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#1c69d4'};
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  color: #FFFFFF;
  width: 198px;
  height: 40px;
  width: auto;
  &:after {
    content: "";
    clear: both;
    display: table;
  }
}
${media.lessThan('tablet')`
  button{
    margin: 40px 0 35px 0;
  }
`};

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
`

export const FormRegisterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top:20px;

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
  }
  .cont-btn{
    margin-top: 30px
  }
  
  button{
    margin-bottom: 20px;
  }

${media.lessThan('tablet')`
  width: 100vw;
  padding: 0 12px;
  margin-top: 0;
  box-sizing: border-box;
  form{
    width: 100%;
  }
  button{
    margin-bottom: 35px;
  }
`}; 
`

export const ContentPaySend = styled.div`
  display: flex;
  margin-top: 25px;
  >div:first-child{
    margin-right: 125px;
    margin-bottom: 35px;
  }
  h2{
    font-weight: bold !important;
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
  background: #1C69D4;
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
`

export const Row = styled.div`
  display: flex;  
  margin-bottom: 1rem;
  .width-640{
  width: 640px;
}

  ${media.lessThan('tablet')`
  flex-direction: column;
  margin-bottom: 0;
  .width-640{
  width: 290px;
}
  `};
  ${media.greaterThan('tablet')`
  `};
  `

export const FieldContainer = styled.div`
  > div{
    margin-top: 0.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    label {
      text-align: left;
      font-weight: normal;
      font-size: 14px;
      color: #000000;
      margin-bottom: 10px;
      display: inline-block;
    }
    .highlight{
      position: absolute;
    }
    input {
      width: 290px;
      height: 40px;
      border: 1px solid #000000;
      box-sizing: border-box;
      padding-left: 15px;
    }
  
    input[type=number]::-webkit-inner-spin-button,
    input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  margin-top: 0.5rem;
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

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
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

${media.lessThan('tablet')`
margin-top: 0;   

.highlight{
  font-size: 10px;
}

> div{
  margin-top: 0;
  select, input{
    width: 100%;
  }
  
  input{
    margin-bottom: 0
  }
}
select{
  margin: 0;  
}
span{
  margin-top: 22px;
  font-weight: normal;
  font-size: 14px;
  color: #000000;
}
`}; 
`

export const CartContainer = styled.div`
  margin-right: 75px;
  margin-top: 59px;
  h3{
    font-weight: bold;
    font-size: 32px;
    color: #000000;
    padding: 20px 0;
    margin-bottom: 17px;
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
margin-bottom: 80px;
clear: both;
h3{
  text-align: left;
  font-weight: bold;
  font-size: 32px;
  color: #000000;
  padding: 20px 0;
  border-bottom: 0.5px solid #D5D5D5;
  border-top: 0.5px solid #D5D5D5;
  margin-bottom: 17px;
}
`

export const ShipContainer = styled.div`

`

export const Content = styled.div`

`

export const ShipItem = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
.ship-type{
  font-weight: bold;
  font-size: 18px;
  color: #000000;
}
.ship-date{
  font-style: normal;
font-weight: normal;
font-size: 16px;
color: #000000;

}
.ship-price{
  font-weight: 500;
  font-size: 18px;
  text-align: right;
  color: #000000;
}
`
