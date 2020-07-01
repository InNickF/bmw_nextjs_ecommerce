import styled from 'styled-components'
import { prop } from 'styled-tools'
import { media } from '../../common'
import { Icon } from '../../common/components'

export const Container = styled.footer`
height: 454px;
background: ${prop('theme.colors.footer')};
background-size: cover;
background-position: center;
position: relative;

.Collapsible{
  padding: 0 18px 0 29px;
  border-bottom: 1px solid #ECECEC;
  .Collapsible__trigger{
    font-weight: bold;
    font-size: 16px;
    height: 60px;
    display: flex; 
    align-items: center;
    width: 100%;
    background: transparent;
    position: relative;
    font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Sans-Regular', sans-serif !important`};
    &::after {
      content: url('data:image/svg+xml; utf8,<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L7 7L13 1" stroke="${parseInt(process.env.BRAND_ID) === 1 ? "white" : "black"}" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      ');
      position: absolute;
      right:2px;
      top: 21px;
      transform-origin: center;
      display: inline-block;
      vertical-align: middle;
      transition: transform .2s ease-out;
    }
  }
  .is-open.Collapsible__trigger::after {
    transform: rotate(180deg);
  }
}

.hide-responsive{
  display: it!important;
  ${media.lessThan('tablet')`
  display: none!important;
  `};
}
.flex-responsive{
  display: none!important;
  ${media.lessThan('tablet')`
  display: flex!important;
  justify-content: center;
  form{
    flex-direction: column;
  }
  `};
}
.show-responsive{
  display: none!important;
  ${media.lessThan('tablet')`
  display: inherit!important;
  `};
}
${media.lessThan('tablet')`
height: auto;
background-size: 110% 100%;
background-position: 40%;
margin-top: 0;
background: white;
color: black;
`};
`
export const SeparatorFooter = styled.div`
height: 40px;
width: 100%;
background:  #ffffff ;
  ${media.lessThan('tablet')`
  display: none;
  `};
`

export const Wrapper = styled.div`
position: relative;
height: calc(100% - 83px);

padding-top: 83px;
display: grid;
margin-left: 53px;
margin-right: 115px;
grid-template-columns: 35% 65%;
margin-left: calc(50% - (1340px/2));

margin: 0 auto;
width: ${prop('theme.elements.wrapperWidth')};
max-width: ${prop('theme.elements.wrapperMaxWidth')};

${media.lessThan('tablet')`
padding-top: 0;
grid-template-columns: 100%;
width: 100%;
height: 100%;
margin-right: 0;
`};
  `

export const TopContent = styled.div`
  display: inline-block;
  width: 40%;
  div {
    div {
      h5 {
        font-size: 18px;
        letter-spacing: 0.15px;
        line-height: 22px;
        font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Sans-Regular', sans-serif !important`};
      }
    }
  }
  ${media.lessThan('medium')`
  width: 100%;
  div {
    div {
      h5 {
        font-size: 9.47px;
        margin: 0;
      }
    }
  }
  `};
  ${media.lessThan('tablet')`
  display: flex;
  flex-direction: column-reverse;     
  `};
  `

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  > img {
    height: 60px;
    width: 60px;
  }
  > h2 {
    color: white;
    margin-left: ${props => props.theme.spacing.normal};
    ${props => props.theme.font.family.miniRegular};
  }
  ${media.lessThan('medium')`
  display: none;
  `};
  `

export const Nav = styled.div`
display: grid;
justify-content: space-between;
width: 100%;
> div:last-child {
  text-align: left;
  }
  
  > div:last-child h5 {
    font-size: 18px;
    margin-bottom: 15px;
    display: inline-block;
  }
  h5,
  a {
    color: white;
    text-decoration: none;
    font-size: ${props => props.theme.font.sizes.normal};
    ${props => props.theme.font.family.miniRegular};
  }
  h5{    
    margin-bottom: 15px;
  }
  a {
    img {
      height: 23px;
      margin: 0 0.5rem;
      margin-left: 1rem;
    }
  }
  
  ${media.lessThan('medium')`
  display: flex;
  justify-content: center;
  width: 100%;
  h5,
  a {
    font-size: ${prop('theme.font.sizes.small')};
    text-decoration: none;
  }
  > div {
    width: 50%;
    :first-child {
      width: 70%;
    }
  }
  > div:last-child {
    text-align: center;
    width: 100%;
  }
  `};
  `

export const SocialIcons = styled.div`
  padding: 20px 0;
  width: max-content;
  a {
    margin: 0px 10px;
    &:first-child{
      margin-left: 0;
    }
  }
  img {
    height: 30px;
    width: 30px;
  }
  ${media.lessThan('medium')`
  text-align: center;
  `};
  ${media.lessThan('tablet')`
  margin: auto;
  padding: 0;
  margin-top: 32px;
  margin-bottom: 30px;
  svg{
    height: 36px;
    width: 36px;
    fill: ${parseInt(process.env.BRAND_ID) === 1 ? "white" : "black"}; 
  }
  `};
  `

export const BottomContent = styled.div`
  div {
    &::first-child {
      a {
        color: white;
      }
    }
    &::last-child {
      text-align: center;
    }
  }
  `

export const BottomLinks = styled.div`  
display: grid;
grid-template-columns: 30% 25% 45%;
.footer-list {
  display: flex;
    flex-direction: column;
    h2{      
      font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-light', sans-serif !important`};
      font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Sans-Regular', sans-serif !important`}; 
      font-family: ${parseInt(process.env.BRAND_ID) === 3 && `'BMWGroup-light', sans-serif !important`};
      font-weight: bold;
      font-size: 16px;      
      color: #FFFFFF;
      margin-bottom: 18px;
    }
    a {
      cursor: pointer;      
      font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-light', sans-serif !important`};
      font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Sans-Regular', sans-serif !important`}; 
      font-family: ${parseInt(process.env.BRAND_ID) === 3 && `'BMWGroup-light', sans-serif !important`};
      font-weight: 500;
      text-decoration: none;
      color: #ffffff;
      font-size: 12px;
      margin-bottom: 8px;
      &:hover{
        font-weight: 800;
      }
    }
    .politic1{
      width: 19%;
      padding-right: 10%;
    }
  }
  .newsletter{
    box-sizing: border-box;
    
    ${media.greaterThan('tablet')`
      max-width: 368px;      
    `};

    h2{      
      font-weight: bold;
      font-size: 16px;      
      color: #FFFFFF;
      margin-bottom: 18px;
      font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Sans-Regular', sans-serif !important`};
    }
    p{
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: #FFFFFF;
      margin-bottom: 20px;
    }
    input[type=email]{
      box-sizing: border-box;
      background: #FFFFFF;
      height: 40px;
      width: 100%;
      padding-left: 15px;
      margin-bottom: 20px;
      &::placeholder {
        font-size: 14px;
        color: #D0D0D0;
      }
    }
    button{
      margin-top: 20px;
    }
  }
  .check-terms{
    display: flex;
    align-items: center;
    .checkbox-button__label{      
      font-size: 11px;
      line-height: 12px;
      color: #ffffff;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .checkbox-button {
      cursor: pointer;
      display:flex;
      align-items: center;      
    }

    input[type=checkbox] {
        box-sizing: border-box;
        padding: 0;
    }
    
    input {
      font-size: 1rem;
        line-height: 1.5;
        padding: 11px 23px;
        border: 1px solid rgba(0,0,0,.15);
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
        width: 12px;
        height: 12px;
        margin-right: 12px;
        vertical-align: middle;
        background-color: inherit;
        color: #ffffff;
        border: 2px solid #ffffff;
      }

    .checkbox-button__input:checked+.checkbox-button__control:after {
      content: "";
        display: block;
        position: absolute;
        top: 2px;
        left: 2px;
        width: 8px;
        height: 8px;
        background-color: #ffffff;
      }

      .checkbox-button__input:checked+.checkbox-button__control {
        border-color: #ffffff;
      }

      .checkbox-button__control {
      transform: scale(0.90);
    }    
  }
  ${media.lessThan('medium')` 
    width: 100%;
    display: inline-block;
    vertical-align: top;
    padding-bottom: 70px;
  ul {
    width: 100%;
    display: grid;
    text-align: center;
    padding-bottom: 0;
    border-bottom: 1px solid;
    padding: 10px 10px;
    font-size: 17px;
    padding: 0;
    li {
      border-bottom: 1px solid #ffffff;
      padding: 10px 20px;
      font-size: 12px;
      text-align: center;
      width: 85%;
      margin: auto;
      a {
      margin: 0;
      text-transform: capitalize;
      }
    }
  }
  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    border-top: none;
    padding: 0;
    a {
      text-align: center;
      border-bottom: thin solid white;
      width: 100%;
      text-decoration: none;
      padding: 10px 20px;
      width: 85%;
    }
  }
  .newsletter{
    text-align: left;
    padding: 36px 18px 40px 28px;
    margin-bottom: -70px;
    width: 100%;
    box-sizing: border-box;
    background: ${parseInt(process.env.BRAND_ID) !== 1 ? "#f8f8f8" : "#333333"};  
    h2, p{
      width: 100%;
      text-align: left;
      color: ${parseInt(process.env.BRAND_ID) === 1 ? "white" : "black"};
    }
    input[type=email]{
      width: 100%;
      border: 0.5px solid ${parseInt(process.env.BRAND_ID) === 1 ? "white" : "#bfbfbf"};
    }
    .check-terms{
      box-sizing: border-box;
      width: 100%;
      flex-direction: row;
      label{
        font-size: 11px;
      }
    }
    .checkbox-button__label{
      font-size: 10px;
      color: ${parseInt(process.env.BRAND_ID) === 1 ? "white" : "black"};
      ${media.lessThan('mobile')`
        font-size: 9px;      
      `}
    }
    .checkbox-button__control {
        color: ${parseInt(process.env.BRAND_ID) === 1 ? "white" : "black"};
        border: 2px solid ${parseInt(process.env.BRAND_ID) === 1 ? "white" : "black"};
      }

    .checkbox-button__input:checked+.checkbox-button__control:after {
        background-color: ${parseInt(process.env.BRAND_ID) === 1 ? "white" : "black"};
      }
      .checkbox-button__input:checked+.checkbox-button__control {
        border-color: ${parseInt(process.env.BRAND_ID) === 1 ? "white" : "black"};
      }    
  }
  .Collapsible__contentInner{
    align-items: self-start;
    width: 100%;
    a{
      text-align:left;
      padding: 10px 0;
    }
  }
  `};
  `

export const Copyright = styled.div`
  color: white;
  color: #FFFFFF;
  font-size: 12px;
  text-align: left;
  position: absolute;
  bottom: 25px;
  
  ${media.lessThan('medium')`
  font-size: 0.7rem;
    text-align: center;
    border-top: 0;
    `};
  ${media.lessThan('tablet')`
  color: #A8A8A8;
    margin: auto;
    text-align: center;
    font-size: 12px;
    bottom: 0;
    display: flex;
    height: 70px;
    width: 100%;
    align-items: center;
    justify-content: center;
    `};  
`

export const SecureText = styled.div`
color: white;
  color: #FFFFFF;
  font-size: 12px;
  text-align: right;
  line-height: 14px;
  position: absolute;
  bottom: 25px;
  right: -40px;

  ${media.lessThan('medium')`
    display: none;
    font-size: 0.7rem;
    text-align: center;
    padding-top: 40px;
    border-top: 0;
    `};
    ${media.lessThan('tablet')`
    display: none;
  `};  
`

export const ContactContent = styled.div`
margin-bottom: 15px;
  ${media.lessThan('tablet')`
  margin-bottom: 0;  
  `};
  .ContactContent__contact {
    ${prop('theme.font.family.title')};
    letter-spacing: 0.15px;
    margin: 0;
    margin-bottom: 15px;
    font-family: 'BMWGroup-Normal',sans-serif;
    font-weight: bold;
    font-size: 16px;      
    color: #FFFFFF;
    margin-bottom: 18px;
    ${media.lessThan('tablet')`
    color: #000000; 
    `};
  }
  a {
    display: block;
    margin-bottom: 0.5rem;
  }
  .infoWithIcon {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    img {
      width: 15px;
      height: 15px;
      margin: 0;
    }
    span {
      margin-left: 18px;
    }
    ${media.lessThan('tablet')`
    margin-bottom: 29px;  
    span{
      font-size: 12px;
      color: ${parseInt(process.env.BRAND_ID) === 1 ? "white" : "black"};      
    }
    svg, path{
      fill: ${parseInt(process.env.BRAND_ID) === 1 ? "white" : "black"};  
    }
    `};
  }
  .btn-whatsapp{
    box-sizing: border-box;
    background: #25D366;
    width:180px;
    border-radius: 36px;
    display:flex; 
    margin-left: -18px;
    margin-bottom: 15px;
    justify-content: center;
    align-items: center;
    padding: 7px 18px 5px 18px;
    div{
      margin-left: 10px;
    } 
    p{
      font-weight: bold;
      font-size: 12px;
    }
    span{
      font-weight: 400;
      font-size: 11px;
      margin-left: 0;
    }
    ${media.lessThan('tablet')`
    margin-left: 0;
    margin-bottom: 26px;
    span{
      color: #ffffff; 
    }
    svg, path{
      fill: #ffffff;
    }
  `};
}
`
export const BtnNotification = styled.button`
margin-top: 38px;
cursor: pointer;
display: flex;
align-items: center;
font-weight: bold;
justify-content: center;
width: 100%;
box-sizing: border-box;
font-size: 14px;   
padding: 12px 28px;
color: #ffffff;
svg{
  fill: #ffffff;
  margin-right: 15px;
}
${parseInt(process.env.BRAND_ID) === 3 ?
    `background: rgb(28, 105, 212);` :
    parseInt(process.env.BRAND_ID) === 2 ?
      `background: transparent;
  border: 2px solid #ffffff;
  color: #ffffff;
  path{
    fill: #ffffff;  
  }`:
      `background: #ffffff;
  border: 2px solid #FFFFFF;
  color: #000000;
  path{
    fill: #000000;  
  }`}
  ${media.lessThan('tablet')`
  ${parseInt(process.env.BRAND_ID) !== 3 &&
    `background: transparent;
    border: 2px solid #000000;
    color: #000000;
    path{
      fill: #000000;
    } `}
    `};
`