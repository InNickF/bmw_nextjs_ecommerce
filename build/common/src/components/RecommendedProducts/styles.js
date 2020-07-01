import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const RecommendedProductsContainer = styled.div`
display: flex;
flex-direction: column;
margin-top: 120px;
margin-right: 80px;
grid-area: recommended;
h2{
  font-weight: bold;
  font-size: 28px;
  line-height: 37px;
  margin-bottom: 30px;
}
${media.lessThan('tablet')`
  display: none;
`};
`

export const ListProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 20px;
`
export const ProductData = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
button{
    background: rgb(28, 105, 212);
    color: #ffffff;
    padding: 12px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      fill: #fff;
      margin-right: 5px;
    }
}
`
export const ProductInfo = styled.div`  
  p{
    padding: .5em 0;
    font-weight: 500;
    white-space: nowrap;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p:last-child{
    padding: 0;
    font-weight: normal;
    font-size: 10px;
    white-space: normal;
    line-height: 12px;        
    color: #939393;      
  }
`
export const ProductPrices = styled.div`
.price-total{
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
}
.discount{  
  color: #C4C4C4;  
  font-size: 10px;
  line-height: 12px;      
  font-weight: 100;
  text-decoration: line-through;
  margin-bottom: 5px;
}
`
export const RecommendedProductCard = styled.div`
text-decoration: none;
img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
`