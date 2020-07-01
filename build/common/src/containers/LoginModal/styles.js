import styled from 'styled-components'
import { prop } from 'styled-tools'
import { textInputs } from 'polished'

import media from '../../themes/media'

export const Container = styled.div`
display: flex;
max-width: 1070px;
${media.lessThan('tablet')`
margin-bottom: 80px;
`};

${textInputs()} {
  border: ${prop('theme.input.border')};
  box-sizing: border-box;
  padding: ${props => props.theme.spacing.small};
}
h2{
  font-weight: bold;
  font-size: 32px;
  color: #000000;
  margin-bottom: 20px;
  ${parseInt(process.env.BRAND_ID) === 1 ?
    `line-height: 1;` :
    ``}
  ${media.lessThan('tablet')`
  margin-top: 20px;
  `};
}
span{
  font-size: 14px;
  color: #000000;
}
input{
  margin-top:5px;
  width: 290px;
}

label {
  > span,
  > input {
    display: block;
    ${props => props.theme.font.family.condensed};
  }
  > input {
    width: 100%;
  }
  > span {
    margin-bottom: 0.3rem;
  }
}
.input-container {
  margin-bottom: ${props => props.theme.font.sizes.bigger};
}

.links {
  button {
    background: transparent;
    color: ${props => props.theme.colors.textColor};
    cursor: pointer;
    display: block;
    margin: 0 auto;
    margin-bottom: ${props => props.theme.spacing.small};
    &:hover {
      color: ${props => props.theme.colors.darkgray};
    }
  }
}
`
export const OptionButton = styled.div`
${props => props.theme.font.family.title};
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
export const Content = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 30px;
box-sizing: border-box;
width: 90vw;  
div:last-child{
  height: fit-content;
}
${media.lessThan('mobile')`
display: flex;
flex-direction: column-reverse;    
`};
`
export const MemberContent = styled.div`
:first-child{
  border-right: 0.5px solid #000000;
}
${media.lessThan('tablet')`
:first-child{
  border: none;
}
margin-top: 45px;
.btn-email,
.btn-google,
.btn-facebook,
button{
  height: 50px!important;
}
`};
`

export const OptionBack = styled.div`
${props => props.theme.font.family.title};
color: ${props => props.theme.colors.main};
cursor: pointer;
`
export const MemberSide = styled.div`
width: 380px;
${media.lessThan('tablet')`
width 80vw;
position: relative;
padding-bottom: 35px;
//border-bottom: 1px solid #CFCFCF;
::before{
  content: '';
  position: absolute;
  width: 100vw;
  height: 0;
  left: 0;
  background: #CFCFCF
  bottom: 0;
}

`};
>span{
  font-size: 14px;
  color: #000000;
}

.forgot-password{
  font-weight: bold;
  font-size: 14px;
  button{
    background: transparent;
    text-decoration-line: underline;
  }
}
.button-container{
  margin-top: 10px;
  button{
    width: 290px;
    cursor: pointer;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 16px;      
    text-align: center;
    height: 40px;
    margin-top: 0;
  }
  .btn-register{
    border: 1px solid #000000;
    color: #000000;
    background: transparent;
    margin-bottom: 40px;
  }
  .btn-primary{   
    color: #ffffff;
 ${parseInt(process.env.BRAND_ID) === 3 ?
    `background: rgb(28, 105, 212);
    color: #ffffff;  
  ` :
    `background: #000000;      
    color: #ffffff;
  `}
  }
}
.btn-back-form {
  width: 290px;
  cursor: pointer;
  text-align: center;    
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 44px;
}
.content-social-btn{
  margin-top: 20px;
  margin-bottom: 40px;
  >div{
    text-align: center;
    color: #ffffff;
    margin-top: 5px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: start;
    cursor: pointer;
    >svg{
      margin: 0 16px 0 32px;
    }
  }
  .btn-email{    
    width: 290px;
    box-sizing: border-box;
    ${parseInt(process.env.BRAND_ID) === 3 ?
    `background: rgb(28, 105, 212);` :
    parseInt(process.env.BRAND_ID) === 2 ?
      `background: transparent;
  border: 2px solid #000000;
  color: #000000;
  path{
    fill: #000000;  
  }`:
      `background: #ffffff;
  border: 2px solid #FFFFFF;
  color: #000000;
  path{
    fill: #000000;  
  }`}
  }
  .btn-facebook {
    width: 290px;
    background: #4267B2;
  }
  .btn-google{
    width: 290px;
    box-sizing: border-box;
    border: 1px solid #C9C9C9;
    color: rgba(0, 0, 0, 0.75);
  }
}
.register-side{
  >p{
    margin: 10px 0 30px;
    font-size: 14px;
    color: #000000;
  }
}
.visitor-side{
  margin-left: 100px;
  ${media.lessThan('tablet')`
  margin-left: 0;
  `};
}
.register-side:last-child{
  ${media.lessThan('tablet')`
  margin-top: 50px;
  `};
}`