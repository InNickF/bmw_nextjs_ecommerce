import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const Card = styled.div`
  margin-top: 40px;
  border-radius: 7px;
  position: relative;
  .discount{
    color: #FF8787;
    font-weight: 100;
    text-decoration: line-through;
    font-size: 12px;
    margin-bottom: 5px;
  }
  
  .separator {
    background: #979797;
    height: 1px;
    width: 100%;
    margin: 10px 0px;
  }
    ${media.lessThan('tablet')`
    width: 90%;
    margin: 0 auto;
    margin-top: 50px;
    `};
  .hide-mobile {
    ${media.lessThan('tablet')`
      display: none;
    `};
  }
  p{
  text-align: left!important;
  margin-top: 18px;
  font-weight: normal;
  font-size: 12px;
  text-align: center;
  color: #A3A3A3;
  ${media.lessThan('tablet')`
  padding: 0 12px;
  }
`};

`
export const ProductInfo = styled.div`
h2{
  font-weight: bold;
  font-size: 30px;
  line-height: 37px;
  margin-bottom: 28px;
}
>div{
  display: flex;
  justify-content: space-between;
 p:last-child{
   font-weight: bold;
 } 
  p{
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    margin: 16px 0;
    color: #000000;
  } 
}
${media.greaterThan('tablet')`
  br{
    display: none;
  }
`};

${media.lessThan('tablet')`{
  h2{
    font-size: 26px;
    font-weight: bold;
  }
  p{
    color: ${parseInt(process.env.BRAND_ID) === 1 ? `#ffffff` : `#000000`}
   &:last-child{
   font-weight: normal;
 } 
  }
`};
`
export const ProductPromo = styled.div`
margin-top:39px;
h2{
  font-weight: bold;
  font-size: 28px;
  line-height: 37px;
  margin-bottom: 20px;
}
input{
  border: 1px solid #000000;
  padding: 0 1em;
  background: #ffffff;
  margin-right: 12px;
  width: calc(100% - 100px);
}
.product-info-form{
  display: flex;
  justify-content: space-between;
}
button{
  width: 100px;    
  ${parseInt(process.env.BRAND_ID) === 3 ?
    `background: rgb(28, 105, 212);
    color: #ffffff;  
  ` :
    `background: #000000;      
    color: #ffffff;
  `}

  height: 40px;
  width: 114px;
  text-align: center;
   font-weight: bold;
}
${media.lessThan('tablet')`
  button{
    height: 50px;
  }
`};

`
export const ProductBtnBuy = styled.button`
margin-top: 38px;
width: 100%;
cursor: pointer;
display: flex;
align-items: center;
font-weight: bold;
justify-content: center;
${parseInt(process.env.BRAND_ID) !== 2 ?
    `background: rgb(28, 105, 212)` :
    `background: #000000`};
color: #ffffff;
padding: 12px 28px;
svg{
  fill: #ffffff;
  margin-right: 15px;
}

${media.greaterThan('tablet')`
  &.show-responsive{
    display: none;
  }
`};

`