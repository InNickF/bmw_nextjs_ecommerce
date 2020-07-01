import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const ImageContainer = styled.figure`  
  text-align: center;
  margin: auto;
  height: 170px;
  width: 100%;
  border-bottom: 1px solid #DBDBDB;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  > div {
    height: 100%;
  }
  .placeholder {
    background: #ddd;
  }
  img {
    margin: 0 auto;
    box-sizing: border-box;
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  
  ${media.lessThan('tablet')`    
  width: 100%;  
  height: auto;
  img{
    min-height: 170px;
  }
  `}
`

export const ProductCardDataResponsive = styled.div`
  display: none;
  height: inherit;
  flex-direction: column;
  .product-card-text{
    display: flex;
    white-space: normal;
    flex-direction: column;
    text-align: left;    
    width: 100%;
    h2{
      font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Sans-Regular', sans-serif !important`};
      padding: 8px 0 3px 0;
      font-weight: 700;
      font-size: 14px;
      text-transform:none;
      text-transform: uppercase;
      &:first-letter{
        text-transform: uppercase;
      }      
      line-height: 16px;
      color: ${parseInt(process.env.BRAND_ID) === 1 ? '#ffffff' : '#000000'};
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    p{      
      font-weight: normal;
      margin-top: 5px;
      font-size: 9px;
      line-height: 14px;        
      color: #929292;
      text-transform: uppercase;
      &::first-letter{
        text-transform: uppercase;
      }
    }
    
  }
  .product-card-prices{
    display: flex;
    white-space: normal;
    flex-direction: column;
    text-align: left;
    width: 100%;
    div{      
      text-align: right;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: ${parseInt(process.env.BRAND_ID) === 1 ? '#ffffff' : '#000000'};
    }
    p{
      text-transform: uppercase;
    }
    span{
      text-align: right;
      padding: .5em 0;
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;
      color: #929292;
      margin-top: 0;
    }
  }
  ${media.lessThan('tablet')`
    display: flex;
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
      font-size: 9px;
      line-height: 14px;        
      color: #929292;
      text-transform: uppercase;
      &::first-letter{
        text-transform: uppercase;
      }
    }
  }
  ${media.lessThan('tablet')`
  display: none;
  `}
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
  width: 206px;
  height: auto;
  height: 360px;
  margin-right: 20px;
  position: relative;
  display: inline-block;
  margin-bottom: 20px;
  
${media.lessThan('tablet')`
  width: calc(50% - 2.5px);
  max-width: 190px;
  height: auto;
  margin-right: 0;
`}

${media.greaterThan('desktop')`
  width: 225px;  
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
  font-size: 11px;
  padding: 0!important;
  margin-top: -1em;
`

export const TireCard = styled.div`
border: 1px solid #CBCBCB;
overflow: hidden;
cursor: pointer;
background: #fff;
${media.greaterThan('tablet')`
  :hover{
    background: white;    
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);
    .hover{
      &-card{        
        box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);
      }
      &-brand{
      }
      &-data{
        max-height: 130px;
        //display: block;
        transition: all 0.25s ease-in;
      }
    }
  }
`}

`
export const TireDataContent = styled.div``
export const TireDataText = styled.div`
height: 40px;
display: flex;
justify-content: center;
align-items: center;
padding: 0 10px;
p{
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;  
  text-align: center;
//font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Sans-Regular', sans-serif !important`};
  color: #000000;
}

`
export const TireData = styled.div`
display: flex;
margin-top: 5px;
${media.lessThan('tablet')`
flex-direction: column;
>div:last-child{
  margin-top: 10px;
  >p{
    margin-bottom: 5px;
  }
}
`}
`

export const TireDataPrice = styled.div`
flex: 0 50%;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;
p{
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  text-align: center;  
  color: #939393;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;  
  :first-child{
    margin-bottom: 15px;
  }

  :last-child{
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #000000;
  }
}
`
export const TireBrand = styled.div`  
  margin: 10px 9px 0 9px;
  border-top: 1px solid #E3E3E3;
  border-bottom: 1px solid #E3E3E3;
  justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  img{
    margin 7px 0 0 0;
    width: 130px;
    height: 50px;
    object-fit: contain;
  }

  p{
    font-size: 11px;
    line-height: 13px;
    text-align: center;      
    color: #A8A8A8;
    margin: 0 0 10px 0;
  }
`
export const TireBuyActionContent = styled.div`
max-height: 0;
position: absolute;
overflow: hidden;
z-index: 1;
width: 100%;
box-sizing: border-box;
background: white;
border: 1px solid #CBCBCB;
border-top: 0;
box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.15);
left: 0;
transition: all 0.15s ease-out;
`


export const TireBuyActions = styled.div`
display:flex;
width: 100%;
margin-top: 15px;

`
export const ButtonBuyCar = styled.div`
width: 50px;
height: 40px;
margin-right: 10px;
background: ${parseInt(process.env.BRAND_ID) === 3 ? '#1C69D4' : '#16171a'};
display: flex;
align-items: center;
justify-content: center;

`
export const TireTotal = styled.div`
height: 50px;
border-top: 1px solid #E3E3E3;
margin: 0 10px;
display: flex;
align-items: center;
justify-content: center;
p{
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #000000;
}


`