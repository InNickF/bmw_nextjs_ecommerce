import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const ImageContainer = styled.figure`  
  text-align: center;
  margin: auto;
  height: 206px;
  width: 206px;
  box-sizing: border-box;
  
  > div {
    height: 100%;
  }
  .placeholder {
    background: #ddd;
  }
  img {
    border: 1px solid #DBDBDB;
    box-sizing: border-box;
    margin: 0 auto;
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media.lessThan('tablet')`    
    width: 100%;  
    height: auto;
    img{
      min-height: 170px;
    }
  `}
`

export const ProductCardData = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  .product-card-text{
    display: flex;
    white-space: normal;
    text-align: left;
    justify-content: space-between;
    h2{
      flex: 1 1;
      padding: 8px 0 3px 0;
      font-weight: 700;
      font-size: 14px;
      text-transform: Uppercase;
      line-height: 16px;
      color: ${parseInt(process.env.BRAND_ID) === 1 ? '#ffffff' : '#000000'};
      font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Sans-Regular', sans-serif !important`};
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    span{
      padding: .5em 0;
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
      color: #929292;
      margin-left: 5px;
    }
  }
  .product-card-prices{
    display: flex;
    white-space: normal;
    text-align: left;
    div{
      flex: 1 1;
      text-align: right;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: ${parseInt(process.env.BRAND_ID) === 1 ? '#ffffff' : '#000000'};
    }
    p{
      flex: 1 1;
      font-weight: normal;
      font-size: 10px;
      line-height: 14px;        
      color: #929292;
      text-transform: uppercase;
      &::first-letter{
        text-transform: uppercase;
      }
    }
  }
`

export const Tag = styled.span`
  background: ${prop('theme.products.discountTag')};
  border-radius: 4px 0 0 4px;
  font-size: ${prop('theme.font.sizes.small')};
  color: white;  
  position: absolute;
  right: 0;
  top: ${prop('theme.spacing.smaller')};
  font-weight: bold;
  transform: rotate(45deg);
  width: 123px;
  top: 14px;
  right: -37px;
  ${prop('theme.font.family.condensed')};  
`
export const ColorSquares = styled.div`
    display: flex;
    div{
      margin-right: 10px;
    }
`

export const Container = styled.div`    
  width: 100%;
  height: 305px;
  margin-right: 40px;
  position: relative;
  display: inline-block;
  .product-card{
    box-sizing: border-box;
    .hover-data{
      display:none;
    }
    ${media.greaterThan('tablet')`
    &:hover{            
      width: 236px;    
      box-sizing: border-box;
      z-index: 1;
      margin: auto;
      margin-left: -20px;
      padding: 10px;
      background: ${parseInt(process.env.BRAND_ID) === 1 ? '#16171a' : 'white'};
      ${parseInt(process.env.BRAND_ID) === 1 ? 'box-shadow: 0 1px 3px rgba(255, 255, 255, 0.12), 0 1px 2px rgba(255, 255, 255, 0.24);' : 'box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);'}
      
      transition: all 0.25s ease-in-out;
      text-align: center;
      .hover-data{
        display: flex;
        align-items: center;
        justify-content: center
      }
      &:nth-child(1n+4){
        margin-left: 0;
      }
    }
    `}
  }

  a {
    border-radius: 4px;
    overflow: hidden;
    box-sizing: border-box;
    color: ${prop('theme.colors.textColor')};
    cursor: pointer;
    display: block;
    ${prop('theme.transition.fast')};
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    height: max-content;
    width: 100%;
    text-decoration: none;
    .discount{
      color: #FF8787;
      font-weight: 100;
      text-decoration: line-through;
      font-size: 15px;
      margin-bottom: 5px;
      text-align: center;
    }
  }
  &:active {
    transform: scale(0.9);
  }
${media.lessThan('tablet')`
  width: calc(50% - 2.5px);
  max-width: 190px;
  height: 280px;
  margin-right: 0;
`}
  ${media.greaterThan('tablet')`
    width: 206px;  
    margin-right: 20px;    
  `}
`

export const Price = styled.div`
  color: ${prop('theme.colors.textColor')};
  font-size: ${prop('theme.font.sizes.small')};
  margin-bottom: ${prop('theme.spacing.bigger')};
  text-align: center;
  font-weight: bold;
  ${media.greaterThan('tablet')`
    margin-bottom: ${prop('theme.spacing.big')};
    font-size: 1.2rem;
    text-align: center;
  `}
  discount{
    color: #FF8787;
    font-weight: 100;
    text-decoration: line-through;
    font-size: 15px;
    margin-bottom: 5px;
    text-align: center;
  }
`
export const PriceDiscount = styled.span`
  color: #FF8787;
  display: block;
  min-height: 10px;
  font-weight: 100;
  text-decoration: line-through;
  font-size: 15px;
  margin-top: 12px;
  padding: 0!important;
` 
