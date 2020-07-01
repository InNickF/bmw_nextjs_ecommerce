import styled from 'styled-components'
import { prop } from 'styled-tools'

import { media } from '../common'

export const DataHeader = styled.header`  
display: grid;
grid-template-columns: 100%;
grid-template-rows: auto;
margin-bottom: ${prop('theme.spacing.bigger')};
${prop('theme.font.family.condensed')};
.data-header-cart{
  margin-right: 40px;
    display: flex;
    flex-direction: column;
      h2{
    font-weight: bold;
    font-size: 32px;
    margin: 28px 0;
  }
  }
  .table-head {
    display: grid;
    grid-template-columns: 60% 20% 20%;    
    grid-row-gap: ${prop('theme.spacing.big')};
    font-weight: normal;
    font-size: 10px;
    color: #929292;
    border-bottom: 0.5px solid #C4C4C4;
    padding-bottom: 15px;
    margin-bottom: 15px;
  }
  ${media.lessThan('tablet')`
    display: none;
  `};
`
export const AddressContainer = styled.div`
  padding: ${prop('theme.spacing.bigger')};
  margin-bottom: ${prop('theme.spacing.huge')};
  position: relative;
  width: auto;
  ${media.lessThan('tablet')`
    padding: 0.3px;
  `} .shippingValue {
    text-align: right;
    margin-left: ${prop('theme.spacing.small')};
    ${prop('theme.font.family.title')};
  }
  > div:first-child {
    display: flex;
    align-items: center;
    margin-bottom: ${prop('theme.spacing.small')};
    > svg {
      margin-right: 10px;
      width: 30px;
    }
  }
  label {
    display: block;
    margin-left: 40px;
    margin-bottom: ${prop('theme.spacing.smaller')};
    input {
      margin-right: ${prop('theme.spacing.small')};
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
    }
  }
  button {
    margin-left: 40px;
  }
`

export const Items = styled.div`  
  position: relative;
  display: grid;
  margin-top: 53px;
  margin-bottom: 60px;
  grid-template-columns: 70% 30%;
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
   "header resume"
   "cart resume"
   "recommended resume";
   .resume-grid{
     grid-area: resume;     
   }
  ${media.lessThan('tablet')`
    grid-template-columns: 1fr;
    margin-top: 40px
    grid-template-rows: auto; 
      grid-template-areas:
   "cart"
   "resume"; 
   .resume-grid{
      width: 100vw;
   }
   .hide-responsive{
     display: none;
   }
  `};
`
export const YourOrderContainer = styled.div`
margin-top: 40px;
.your-order-header{
  display: flex;
  justify-content: space-between;
  h2{
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
    color: #000000;
  }
  button{    
    background: transparent;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-decoration-line: underline;
    color: #000000;
  }
}
  ${media.lessThan('tablet')`
  margin: 0 10px;
  .your-order-header button{
    font-size: 12px;
  }
  `};
`

export const CartItemsContainer = styled.div`
  grid-area: cart;
  .flex-mobile {
    display: none;
    ${media.lessThan('tablet')`
      ${parseInt(process.env.BRAND_ID) === 2 && 'margin-top: 40px;'}
      display: flex
      width: 90%;
      margin: auto;
    `};
  }
`
export const StepsContainer = styled.div`
  ${media.lessThan('tablet')`
    .separator {
      background: #979797;
      height: 1px;
      width: 100%;
    }
    button {
      font-size: ${prop('theme.font.sizes.bigger')};
      &:first-child {
        display: none;
      }
    }
  `};
`

export const Totals = styled.div`
  padding-bottom: ${prop('theme.spacing.big')};
  .address {
    margin-bottom: ${prop('theme.spacing.bigger')};
  }
  .price {
    ${prop('theme.font.family.title')};
  }

  .totalRow {
    display: block;
    text-align: right;
  }
  .total {
    margin-top: ${prop('theme.spacing.bigger')};
    .price {
      color: ${prop('theme.color.main')};
    }
    span {
      ${prop('theme.font.family.condensed')};
      font-size: 0.7em;
    }
  }
`
export const LoaderContainer = styled.div`
  margin: 3rem auto;
  width: 50%;
`
