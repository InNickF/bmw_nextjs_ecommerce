import { createGlobalStyle } from 'styled-components'

import { media } from '../common'
import slick from 'slick-carousel/slick/slick.css'
import slickTheme from 'slick-carousel/slick/slick-theme.css'
import editorcss from 'react-quill/dist/quill.snow.css'

export const GlobalStyle = createGlobalStyle`

${slick};
${slickTheme};
${editorcss};

  * {
    margin: 0;
    padding: 0;
    backgroud:red;
    border: 0;
    font-weight: normal;
    outline: none;
  }
  html {
    position: static !important;
    overflow: visible !important;
  }

  a {
    color: ${props => props.theme.colors.textColor};
    &:visited,
    &:actived {
      color: ${props => props.theme.colors.textColor};
    }
  }
  a,button{
    cursor: pointer;
  }

  img {
    max-width: 100%;
    @media (max-width: 576px) { 
      width: 100%;
    }
  }

  .body-transition {
    .document-overlay {
      visibility: visible;
      opacity: .4;
    }
  }

  .document-overlay {
    background: white;
    position: fixed;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    visibility: hidden;
    transition: all ease .5s;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .home .sticky-outer-wrapper {
    width: 100%;
    position:absolute!important;
    top: 0;
  }
  .sticky-outer-wrapper {
    position: relative;
    z-index: 3;
  }
  #__next{
    overflow: hidden;
  }

body{
  font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-Normal', sans-serif !important`};
  // font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Sans-Regular', sans-serif !important`};
  font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Regular', serif !important`};
  ${parseInt(process.env.BRAND_ID) === 2 && `font-weight: 600`};
  font-family: ${parseInt(process.env.BRAND_ID) === 3 && `'BMWGroup-Normal', sans-serif !important`}; 
}

  h1, h2, h3, h4, h5, .font-italic {
  font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-Light', sans-serif !important`};
  font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Regular', serif !important`};
  font-family: ${parseInt(process.env.BRAND_ID) === 3 && `'BMWGroup-Light', sans-serif !important`}; 
}
  
h1, h2{
    font-weight: normal !important;
    ${parseInt(process.env.BRAND_ID) === 2 && `font-weight: bold!important`};
    text-transform: uppercase;
  }

button, button a , button span, .cta-bold, .cta-bold span {
  font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-Bold', sans-serif !important`};
  ${parseInt(process.env.BRAND_ID) === 1 && `font-weight: bolder!important`};
  font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Sans-Regular', sans-serif !important`};
  ${parseInt(process.env.BRAND_ID) === 2 && `font-weight: bolder!important`};
  font-family: ${parseInt(process.env.BRAND_ID) === 3 && `'BMWGroup-Bold', sans-serif !important`}; 
  text-transform: capitalize; 
}

.cta-bold{
  ${media.lessThan('tablet')`    
    height: 50px!important;
  `};
} 
.cta-resp-height{
  ${media.lessThan('tablet')`
    height: 50px!important;
    display: flex;
    align-items: center;
  `};
}
  .white-header, .sticky-outer-wrapper.active,  .sticky-outer-wrapper:hover {
    .sticky-inner-wrapper {
      nav {
        div:last-child {
          button {
            span {
              color: #4a4a4a;              
            }
          }
        }
        ${process.env.APP_NAME !== 'mini' ? `
        svg {
          fill: #4a4a4a !important;
        }
        .cart-link-active{
          svg {
            fill: #ffffff !important;
          }
        }     
        `: ''}
      }
      > div:first-child {
        background: white;
        color: #4a4a4a;
        ${process.env.APP_NAME == 'bmw' ? `          
        `: 'box-shadow: none'}
        figure {
          ${process.env.APP_NAME == 'bmw' ? `          
          background-image: url('/images/BMW_Grey_Logo.svg');

          `: 'box-shadow: none;'}
        }
        a {
          color: #4a4a4a;         
        }
        .dropdown-list {
          border-color: white;
          a {
            color: #4a4a4a;
            display: flex;
            align-items: center;
          }
          > div {
            background-color: white;
            min-width: 190px;
            a {
              position: relative;
              display: inline-block;
              color: #000000;                 
              font-size: 12px;
              min-height: 17px;
              font-weight: 500;
              text-transform: none;
              &:first-letter {
                text-transform: uppercase;
              }
            }
            &:hover {
              > div:first-child > a {                                          
                font-weight: bold!important;
              }
            }
          }
        }
      }
    }
  }
  .editProfileModal{
    max-width: 1000px!important;
  }
  .modal-container{
    position: fixed;
    max-width:100vw;
    width: calc(100vw - 1.2rem);
    height: calc(100vh - 1.2rem);
    max-height: 100vh;
    margin: -1.2rem;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    >div{
      max-width:100vw;
      max-height: 100vh;      
      ${media.lessThan('tablet')`
        max-width:90vw;
        height: 100%;    
        max-height: 100%;    
      `};
    }
  }
.disabled-style{
  opacity: .5;
  cursor: not-allowed!important;
}


.close-button{
  top: 0;
  right: 20px;  
}
  ${media.lessThan('tablet')`
    overflow: auto;        
  `};
  }
  
  .force-white svg{    
    fill: white!important;    
  }
.fade-in {	
  animation: fade-in .8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}
.right-in {	
  animation: right-in .5s ease-in both;
  ${media.lessThan('tablet')`
  animation: top-in .5s ease-in both;
  `};
}

/**
 * ----------------------------------------
  * animation fade-in
  * ----------------------------------------
  */

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes right-in {
  0% {
    transform: translateX(120%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);            
    opacity: 1;
  }
}


@keyframes top-in {
  0% {
    top: -250px;
    opacity: 0;
  }
  100% {
    top: 0;          
    opacity: 1;
  }
}

@keyframes right-out {
  0% {
    transform: translateX(0);            
    opacity: 1;
  }
  100% {
    transform: translateX(120%);
    opacity: 0;
  }

}

@keyframes top-out {
  0% {
    top: 0;          
    opacity: 1;
  }
  100% {
    top: -250px;
    opacity: 0;
  }
}
.btn-info--filter{
  position: absolute;
  right: 30px;
  top: 6px;
  z-index: 1;
  cursor: pointer;
  transition: all .5s ease-in;
  &-tooltip{
    transition: all .5s ease-in;
    display:none;
    width: 200px;
    background: #ffffff;
    position: absolute;
    top: 30px;
    right: -20px;
    z-index: 1;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    padding: 30px 26px;
    strong{
      margin-right: 5px;
      font-family: "BMWGroup-Bold",sans-serif;
    }
    img{
      object-fit: fill;
      filter: grayscale(1);
    }
    p{
      font-size: 14px;
      margin: 5px 0 8px ;
      overflow: hidden;
    }
  }
  &:hover {
    & .btn-info--filter-tooltip{
      display: inline-block;
      z-index: 2;
    }
  }
}
.btn-info--filter:hover ~ .select-container{
  &::after{
    content: '';
    opacity: 1;        
    position: fixed;
    display: block;        
    top: 0;
    z-index: 1;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    opacity: 0.8; 
  }
}

.notScroll{
  overflow: hidden;
}

input[type='text'],
input[type='number'],
input[type='email'],
input[type='password'],
input[type='date'],
select,
textarea {
  font-size: 16px;
}

input[type='date']{
  -webkit-appearance: none;
}

select{
  -webkit-appearance: none;
}

`