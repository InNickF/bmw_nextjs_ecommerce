import styled, { css } from 'styled-components'
import { prop, ifProp, ifNotProp } from 'styled-tools'
import media from '../../themes/media'

export const WhiteHeader = styled.div`

`

export const HeaderWrapper = styled.div`
background-color: white;
background-color: ${prop('theme.header.headerBGMobile')};
transition: all 0.3s linear;
${ifProp('theme.header.shadow', css`
box-shadow: ${prop('theme.header.shadow')};
`)}
height: 70px;
display: flex;
align-items: center;
position: relative;
z-index: 5;
margin-bottom: ${prop('theme.header.marginBottomDesktop', 0)};
${media.greaterThan('medium')`
background-color: ${prop('theme.header.headerBGDesktop')};
`};
${media.lessThan('tablet')`
margin-bottom: 0;
height: 55px;
`}
.wrapper-header-mini{    
  width: 100%;
  margin-left: calc(50% - (1340px/2));
  max-width: 1500px;
  >nav>{
    
  }
  ${media.lessThan('desktop')`
  margin-left: calc(50% - (100vw - 100px)/2);  
  `}
  ${media.lessThan('tablet')`
  margin-left: 0;  
  `}
}
.cart-resume-mini{
  left: auto;
  right: -5px;
  .icon-top{
    left: 100px;
  }
}
`

export const Content = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: space-between;
height: 70px;
padding-right: 14px;  
`

export const Nav = styled.nav`
display: flex;
align-items: center;
flex: 1;
${ifProp(
  'theme.header.logoLeft',
  css`
  order: 2;
  justify-content: flex-end;
  `
)};
  ${media.greaterThan('medium')`
  justify-content: space-between;
  `};
  `

export const LogoContainer = styled.figure`
  width: 90px;
  z-index: 1;
  @media(max-width: 600px) {
    top: 20px;
    margin-right: 1px;
    width: 70px;
  }
  ${ifProp(
  'theme.header.logoLeft',
  css`
    order: 1;
    margin-right: 1rem;
    ${prop('theme.header.logoStyles')};
    `
)};
    ${ifNotProp(
  'theme.header.logoLeft',
  css`
      position: relative;
      margin-left: 12px;
      ${prop('theme.header.logoStyles')};
      `
)};
      
      `

export const CartAuthContent = styled.div`
      display: flex;
      .cart-link {
        padding-bottom: 5px;
        position: relative;
        text-decoration: none;
        display: flex;
    height: 50px;
    width: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    svg {      
      fill: ${parseInt(process.env.BRAND_ID) !== 1 ? prop('theme.header.tintColorMobile') : '#333333'} !important;
    }
  }
  .cart-link-active{
    padding-left: 5px;
    background: #1C69D4;
    ${media.lessThan('medium')`    
    margin-right: 5px;
    `}
  }
  .cart-link-mini{
    background: #000000;
    margin-right: 1em;
    svg {
      margin-left: 5px;
      fill: #ffffff !important;
    }   
  }
  ${ifProp(
  'theme.header.logoLeft',
  css`
    order: 2;
    `
)};
    ${ifNotProp(
  'theme.header.logoLeft',
  css`
      display: flex;
      justify-content: flex-end;
      ${media.lessThan('medium')`
      flex: 1;
      `};
      `
)};
      ${media.lessThan('medium')`
      .separator-cart-responsive {
        width:37px;
      }
      `}
      
      ${media.greaterThan('medium')`
      .cart-link {
        height: 66px;
        svg {
          fill: ${prop('theme.header.tintColorDesktop')} !important;
        }
      }
      
      .cart-link-mini {   
        margin-right: -0.5rem;   
        svg {
          fill: #ffffff !important;
        }
      }
      ${ifProp(
  'theme.header.leftInput',
  css`
        order: 3;
        `
)}
        `};
        `

export const SearchBoxContainer = styled.div`
        ${media.greaterThan('medium')`
        width: 30px;
        form {
          background: ${prop('theme.header.bgInputDesktopTransparent')};
          width: 100%;
          margin: 0 auto;
          input {
            border: ${prop('theme.header.desktopSearchBorder')};
            background: transparent;
            width: 100%;
            height: 30px;
            padding-left: 35px;
            box-sizing: border-box;
            &:focus {
              ${prop('theme.header.desktopSearchFocus')};
            }
          }
          button {
            left: 10px;
          }
        }
        .input-search{
          display: none;
        }
        .close-search {
          display: none;
        }
        
        `};
        ${media.lessThan('medium')`
        background: white;
        position: absolute;
        bottom: 0;
        height: 70px;
        width: 104%;
        left: -2%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        display: none;
        ${ifProp(
  'isVisibleInMobile',
  css`
          display: flex;
          `
)}
    ${ifProp(
  'theme.header.searchBottom',
  css`
      height: 50px;
      top: 100%;
      `
)};
      background: ${prop('theme.header.bgInputMobile')};
      form {
        background: ${prop('theme.header.bgInputMobile')};
        width: 80%;
        margin: 0 auto;
        input {
          background: ${prop('theme.header.bgInputMobile')};
          border-bottom: thin solid ${prop(
  'theme.header.inputBorderColorMobile'
)};
            width: 100%;
            height: 40px;
            padding-left: 30px;
          }
        }
        .close-search {
          right: 0;
          position: absolute;
          right: 2%;
          font-size: 1.5rem;
          width: 3000px;
          color: red;
        }
        ${ifProp(
  'theme.header.leftInput',
  css`
          order: 1;
          `
)}
          `};
          `
export const CartCount = styled.div`      
          height: 13pt;
          width: 13pt;
          right: 12px;
          bottom: 15px;
          padding: 2px;
          display: flex;
          font-weight: bold;
          align-items: center;
          color: #fff;
          justify-content: center;
          font-size: 12px;
          ${ifProp('searchActived', css`
          bottom: 30px;
          `)}
          ${media.lessThan('medium')`
          height:100%;
          `}
          `

export const AuthContent = styled.button`
          background: transparent;
          cursor: pointer;  
          padding-right: 48px;
          padding-left: 15px;
          display: none;
          span {
            color: ${prop('theme.header.tintColorDesktop')};
            vertical-align: middle;
            padding-right: 5px; 
            text-transform: capitalize;
            font-size: 14px;             
          }
          svg {
            vertical-align: middle;
            fill: ${prop('theme.header.tintColorMobile')} !important;
          }
          .profile-menu {
            display: none;
          }
          ${media.greaterThan('medium')`
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          svg {
            fill: ${prop('theme.header.tintColorDesktop')} !important;
          }
          &:hover {
            .profile-menu {
              display: block;
              position: absolute;
              width: 150px;
              right: 50px;
              top: 100%;
            }
          }
          `};
          `
export const SearchComponent = styled.div`
          background: #F4F4F4;
          overflow: auto;
          font-family: sans-serif;
          position: absolute;
          left: 0;
          top: 0;
          width: 100vw;
          max-width: 100vw;
          height: 100vh;
          text-align: center;
          svg {
            fill: black !important;
          }
          .search-header{
            display:flex;
            justify-content: center;
            align-items: center;
            margin: 1em auto 0;
            border-bottom: 0.75px solid #7B7B7B;
          }
          .close-search {    
            background:transparent;
            position: absolute;
            font-size: 16px;
            right: 1em;
            top: 1.5em;
            color: #6B6B6B;
            cursor: pointer;
            font-family: cursive;
          }
          .input-search {
            width: calc(100% - 32px);
            padding: .5em;
            background: #F4F4F4;
          };
          ${media.greaterThan('medium')`
background: white;
.search-header{
  width: 40%;
  margin: 1em auto;
}
.input-search {
  width: auto;
  padding: .5em .5em 1em;
  background: white;
};
.close-search{
  font-size: 27px;
  top: 1em;
}
`};
`
export const SearchResults = styled.div`
background: white;
.button-see-more{
  width: 193px;
  display: inline-block;
    background: rgb(28, 105, 212);
    text-decoration: none;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #ffffff !important;
    padding: 1em 2em;
    margin-top: 1em;
    cursor:pointer;
  }
  .search-categories{
    text-align: left;
    a{
      display: block;
      text-decoration: none;
      font-size: 14px;
      margin: 1em 0;  
      line-height: 16px;
    }
  }
  .search-results-content{
    max-width: 1280px;
    margin: auto;
    padding: 0 1em;
    display: grid;
    grid-template-columns: 1fr;
    min-height: 360px;
    margin-bottom: 1em;
    > div:first-child{
      border-right: 0.5px solid #BEBEBE;
    }
    >div:last-child{
      margin-left: 35px;      
    }
  }
  .search-products-content{
    display: grid;
    grid-template-columns: 1fr;    
  }
  h3{
    text-align: left;
    margin: .5em auto;
    font-weight: 300;
    font-size: 30px;
    line-height: 35px;
    color: #939393;
  }
  ${media.greaterThan('medium')`
  margin-top: 2em;
  .search-products-content{    
    grid-template-columns: 1fr 1fr;    
  }
  .search-results-content{
    padding: 0;
    grid-template-columns: 2fr 1fr;
  }
  h3{
    margin: 0 0 1em ;
  }
  `};
  `

export const SearchButton = styled.button`
  background: transparent;  
  padding-right: 23px;
  .close-search {
    background: tr  ansparent;
    display: none;
    font-size: 1.5rem;
    color: ${prop('theme.header.desktopColorText')};
    height: 100%;
  }
  svg {
    //fill: ${parseInt(process.env.BRAND_ID) !== 1 && '#333333 !important'};
  }
  
  .input-search,
  .close-search {
    display: none;
  }
  ${ifProp(
  'searchActive',
  css`
  display: none;
  `
)};
  ${media.greaterThan('medium')`
  
  `};
  `

export const MobileMenuButton = styled.button`
  background: transparent;
  margin: 20px;
  ${ifProp(
  'theme.header.logoLeft',
  css`
    order: 3;
    `
)};
    svg {
      fill: ${parseInt(process.env.BRAND_ID) !== 1 ? prop('theme.header.tintColorMobile') : '#333333'} !important;  
    }
    ${media.greaterThan('medium')`
    display: none;
    `};
    `

export const DesktopLinks = styled.div`
    display: none;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
    .nav-item {
      color: ${prop('theme.header.tintColorDesktop')};
      text-transform: capitalize;
      text-align:center;
      font-weight: bold;
      text-decoration: none;
      ${prop('theme.font.family.bold')};
      ${parseInt(process.env.BRAND_ID) === 2 && `font-weight: 500`};
      ${parseInt(process.env.BRAND_ID) === 2 && `text-transform: uppercase`};
    }
    .nav-item::after {
      border-color: transparent;
      display:none;
    }
    ${media.greaterThan('medium')`
    display: flex;
    ${ifProp(
  'theme.header.leftInput',
  css`
      order: 2;
      `
)}
      `};
      `

export const CategoriesDropdown = styled.div`  
      /* position: relative; */
      height: 70px;
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 167px;
      justify-content: ${parseInt(process.env.BRAND_ID) === 2 || parseInt(process.env.BRAND_ID) === 1 ? 'center' : 'flex-start'};
      font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Sans-Regular', sans-serif !important`};
      > a {
        /* position: relative; */
        &::after {
          position: absolute;
          top: 50%;
          margin-top: -3.5px;
          right: -15px;
          content: '';
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 5px 5px 0 5px;
          border-color: ${prop('theme.header.tintColorDesktop')} transparent
          transparent transparent;
        }
      }
      .dropdown-container {
        display: none;
        position: absolute;
        left: 0;
        top: 100%;
        z-index: 1;
        
      }
      &:hover {
        > .dropdown-container {
          display: block;
          height: 396px;
          width: 100vw;
          max-width: 1440px;
          margin-left: calc((100% - 1440px) / 2);
          margin-left: calc(50% - (1440px/2));
          
          ${media.lessThan('desktop')`
          margin-left: calc(50% - (100vw/2));  
          `}
          
          background: #fff;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15);
          border-top: 0.5px solid #888888;
          
          &::before{
            content: '';
            background: #ffffff;
            position: absolute;
            right: calc(100% - 1px);
            width: 100%;
            height: 396px;
            box-shadow: 0px 4px 6px rgba(0,0,0,0.15);
            border-top: 0.5px solid #888888;
            
            ${media.lessThan('tablet')`
            height: 100%;
            `}
          }
          &::after{
            content: '';
            background: #ffffff;
            position: absolute;
            left: calc(100% - 1px);
            top: 0;
            width: 100%;
            height: 396px;
            box-shadow: 0px 4px 6px rgba(0,0,0,0.15);
            border-top: 0.5px solid #888888;  
                      
            ${media.lessThan('tablet')`
            height: 100%;
            `}
          }
        }
      }
${media.greaterThan('tablet')`
  ${parseInt(process.env.BRAND_ID) === 3 && `

  &.active-tab-bmw{
    >a{
      color: #1d55d4!important;
      border-bottom: 4px solid #1d55d4;
    }
  }

  >a{
    padding: 0 15px;  
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border-bottom: 4px solid transparent;
    :hover{
      border-color: #1d55d4;
    }
  }
  `}
`}
`

export const CartModalPreview = styled.div`
  position: absolute;
  width: 250px;
  z-index: 1;
  height: auto;
  top: calc(100% + 45px);
  left: ${process.env.BRAND_ID == 2 ? 'calc(-136% - 132.5px)' : 'calc(50% - 132.5px)'};
 background: #ffffff;
 box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);
 .icon-top {
   position: absolute;
   top: -50px; 
  }
  ${media.lessThan('tablet')`
    left: calc(50% - 160px);
    .icon-top{
      left: 30px;  
    }
  `}

  `
export const CartModalPreviewContainer = styled.div`
  margin: 30px 13px;
  position: relative;
  img{
    width: 80px;
    height: 80px;
    object-fit: cover;
 }
`
export const CartModalPreviewBtns = styled.div`
margin-top: 25px;
display: flex;
flex-direction: column;
button{
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  margin: auto;
  position: relative;
}
.btn-cart{
  border: 1px solid #000000;
  background: #ffffff;
  svg{
    position: absolute;
    left: 30px;
  }
  margin-bottom: 6px;
  
}
.btn-checkout{  
  color: #ffffff;
  ${parseInt(process.env.BRAND_ID) === 3 ?
    `background: #1C69D4;` :
    parseInt(process.env.BRAND_ID) === 2 ?
      `background: #000000;` :
      `background: #ffffff;  
    color: #000000;
    border: 1px solid #000000;
    path{
      fill: #000000;  
    }`
  }
}

span{
  margin-top:24px;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  color: #000000;
  svg{
    margin-right: 7px;
  }
}
${media.lessThan('tablet')`
button{
  display: flex;  
  justify-content: center;
}
`}

`

export const CloseXBtn = styled.div`
cursor: pointer;
color: #D5D5D5;
position: absolute;
right: 0;
top: -15px;
`
export const CartModalPreviewText = styled.div`
label{
  font-size: 10px;
  margin-top: 15px;
  color: #929292;
  display: inline-block;
}
p{
  margin-top: 8px;
  font-size: 10px;
  color: #000000;
}
h3{
  font-weight: bold;
  font-size: 16px;
  color: #000000;
  margin-top: 14px;
}
`
export const SearchComponentMini = styled.div`
background: rgba(216, 216, 216, 0.35);
backdrop-filter: blur(34px);
overflow: auto;
font-family: sans-serif;
position: absolute;
left: 0;
top: 55px;
width: 100vw;
max-width: 100vw;
height: auto;
text-align: center;
svg {
  fill: white !important;
}
.search-header-mini{
  cursor: pointer;
  button {
    background: transparent;
    position: absolute;
    left: 0;
    height: 100%;
  }
  display:flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: auto;
  width: 260px;
  form{
    background: transparent;
    input{
      padding: 0!important;
      line-height: 40px;
      margin-left: 45px;
      font-size: 16px;
      color: #fff;
      background: transparent;
      &::placeholder{     
        padding-top: 50px;   
        color: #fff;
        ${media.lessThan('tablet')`
          padding-top: 0px;
        `}
      }
      &::-webkit-input-placeholder {
        color: #fff;
      }
      &::-moz-placeholder { /* Firefox 19+ */
        color:  #fff;
      }
      &:-ms-input-placeholder {
        color:  #fff;
      }
      &:-moz-placeholder { /* Firefox 18- */
        color:  #fff;
      }
    }
  }
  &-black{
    svg {
      fill: black !important;
    }
    form input{
      color: #000000;
      &::placeholder{        
        color: #000000;        
      }
    }
  }
}
.close-search {    
  background:transparent;
  position: absolute;
  font-size: 16px;
  right: 1em;
  top: 10px;
  color: #6B6B6B;
  cursor: pointer;
  font-family: cursive;
}
.input-search {
  width: calc(100% - 32px);
  padding: .5em;
};
${media.greaterThan('medium')`
background: rgba(216, 216, 216, 0.35);
backdrop-filter: blur(34px);
top: 69px;
.search-header{
  width: 40%;
  margin: 1em auto;

}
.input-search {
  width: auto;
  padding: .5em .5em 1em;
  background: white;
};
.close-search{
  font-size: 27px;
  top: 10px;
}
`};
`