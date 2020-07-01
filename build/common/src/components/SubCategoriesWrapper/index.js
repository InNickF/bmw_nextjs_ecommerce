import styled, { withTheme, css } from 'styled-components'
import { prop, ifProp } from 'styled-tools'
import { media } from '../../..'

export default withTheme(styled.div`
  width: calc(100% - 50px);
  margin: 50px 0 33px 50px;
  margin-left: calc(50% - (1340px/2));
  ${media.lessThan('desktop')`
  margin-left: calc(50% - (100vw - 100px)/2);  
  `}
  display: grid;
  grid-template-columns: 250px 1fr;
  max-width: 1390px;
  .subcategory-header-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: self-start;      
    width: 249px;
    h2{
      color: ${prop('theme.elements.colorText')};
      font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-Bold', sans-serif !important`};
      ${parseInt(process.env.BRAND_ID) === 2 && `font-weight: normal!important`};
      font-weight: bold;
      font-size: 40px;
      line-height: 48px;
      text-transform: uppercase;
    }
    span{
      color: #000;
     ${parseInt(process.env.BRAND_ID) === 1 && `
     font-family: 'Motorrad-Outlined', sans-serif !important;
     color: white;
     font-size: 32px;
     `}   
         
      display: block;
    }
    p{
      color: ${prop('theme.elements.colorText')};      
      font-size: 14px;
      margin: 1.5em auto;
      margin-left: 0;
      line-height: 17px;
    }
    a{
      align-self: baseline;
      margin: 0;
      margin-top: 5em;
      min-width: auto;
      width: 187px;
      height: 62px;
      right: 1180px;
      top: 952px;      
      box-sizing: border-box;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-weight: bold;
      font-size 16px;      

      ${parseInt(process.env.BRAND_ID) === 3 ?
    `background: rgb(28, 105, 212);` :
    parseInt(process.env.BRAND_ID) === 2 ?
      `background: #000000;
          color: #ffffff;
        `:
      `background: #ffffff;
          color: #000000;
      `}

    }
  }
  ${media.lessThan('tablet')`
    display: none;
  `}
`)
