import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const Card = styled.div`
  border-radius: 7px;
  position: relative;
  margin-right: 40px;
  margin-top: 20px;
  button {
    background: transparent;
  }
  .mt-7{
    margin-top: 7px;
  }
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
  }
  &:first-child{
    margin-top: 0;
  }
  .tireNotify{
    color: white;
    ${parseInt(process.env.BRAND_ID) === 3 ?
    `background: rgb(28, 105, 212);` :
    `background: #000000;      
        color: #ffffff;
        `}
    display: flex;
    justify-content: center;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    margin: 0 10;
    padding: 5px 30px;
  }
  ${media.lessThan('tablet')`
  margin-right: 0;      
  `};
  
  .hide-mobile {
    ${media.lessThan('tablet')`
      display: none;
    `};
  }

  .flex-mobile {
    display: none;
    ${media.lessThan('tablet')`
      display: flex
      width: 90%;
      margin: auto;
    `};
  }

  .in-mobile {
    display: none;
    ${media.lessThan('tablet')`
      display: block;
      .qty-container {
        margin-top: ${prop('theme.spacing.small')};
        margin-bottom: ${prop('theme.spacing.small')};
        > span, button {
          vertical-align: middle;
        }
        p{
          font-style: italic;
          font-weight: normal;
          font-size: 10px;
          line-height: 12px;
        }
        span {
          font-weight: 300;
font-size: 24px;
line-height: 28px;
          margin-right: ${prop('theme.spacing.small')};
          margin-left: ${prop('theme.spacing.small')};
        }
      }
    `};
  }

${media.lessThan('tablet')`
  border-radius: 0;
  border-bottom: 2px solid #C4C4C4;
`};
`

export const RemoveButton = styled.button`
  cursor: pointer;
  position: absolute;
  left: ${prop('theme.spacing.bigger')};
  top: 0.3rem;
  width: 20px;
  ${media.lessThan('tablet')`
    display: none;
  `}
`
export const RemoveButtonMobile = styled.button`
  cursor: pointer;  
  left: ${prop('theme.spacing.bigger')};  
`

export const Content = styled.div`
  padding: ${prop('theme.spacing.small')};
  display: flex;
  padding-bottom: 20px;
  border-bottom: 0.5px solid #C4C4C4;
  
  ${media.lessThan('tablet')`
    display: grid;
    grid-template-columns: 1fr;
    padding-bottom: 0;
  `};
`
export const ImageContainer = styled.div`
margin: 0 auto;
display: flex;
flex-direction: column;
background: #fff;
width: 121px;
height: 121px;
overflow: hidden;
a{
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
}
${media.lessThan('tablet')`
width: 100%;
img {  
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-sizing: border-box;
}
`};
`

export const Detail = styled.div`
  width: 100%;
  > div {
    box-sizing: border-box;
    padding: ${prop('theme.spacing.small')};
    display: grid;
    grid-template-columns: 60% 20% 20%;
    grid-auto-rows: max-content;
    grid-row-gap: ${prop('theme.spacing.big')};
    width: 100%;
    ${media.lessThan('cartItem')`
      grid-template-columns: 53% 26% 20%;
    `};
    
    ${media.lessThan('tablet')`
      display: block;
      padding-top: 0;
      `};
    }
  .price-content{
  .price-total{
    font-weight: 900;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 8px;
  }
  .price-unitary{
    font-style: italic;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
  }
}
.qty-container {
  button {
    background: transparent;
    cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
    img {
      width: 13px;
    }
    p{
      font-style: italic;
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;
    }
    span {
      font-weight: 300;
      font-size: 24px;
      align-self: center;
      line-height: 28px;
      padding: 0 ${prop('theme.spacing.big')};
        }
        svg{
          fill: #fff;
        }
  }
  .separator {
    background: #979797;
    height: 1px;
    grid-column-start: 1;
    grid-column-end: 5;
    &.lightgray {
      background: ${prop('theme.colors.lightgray')};
    }
  }
  .product-detail{
  display: grid;
    grid-template-columns: 40% 60%;
    ${media.lessThan('tablet')`    
    grid-template-columns: 40% 60%;
    grid-gap: 15px;  
      `};
  }
  .info {
    h2{
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      padding-right: 10px;
      text-transform: uppercase;
    }
    p {
      margin: 5px auto;
    }
    .info-label{
      p{
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;
      }
      label{
        font-size: 10px;
        line-height: 12px;       
        color: #929292;
      }

    }
  }
  .bold {
    ${prop('theme.font.family.title')};
  }
  .total {
    color: ${prop('theme.colors.main')};
    p {
      grid-column-start: 4;
      grid-column-end: 5;
    }
    ${media.greaterThan('tablet')`
      display: none;
    `}
  }
  .priceTotal {
    color: ${prop('theme.colors.main')};
  }
`

export const DataMobile = styled.div`
display: grid;
grid-template-columns:  30% 40% 30%;
div{
  padding: 0;
  min-height: inherit;  
}
.data-info{
  margin: 10px;
  border-right: 0.5px solid #EEEEEE;
  margin-left: 0;
  padding-left: 10px;
  border-left: 0.5px solid #EEEEEE;
  select{
    font-size: 16px!important;
  }
  &:last-child{
    border: none;
  }
  p{  
    font-size: 10px;
    line-height: 12px;
    color: #929292;
    &:last-child{
      border-left: none;
      font-weight: normal;
      font-size: 10px;
      margin-top: 5px;
      line-height: 12px;        
      color: #000000;
    }
  }
}
${media.greaterThan('tablet')`
  display: none;
`}
`
export const TotalMobile = styled.div`
font-weight: bold;
font-size: 26px;
line-height: 30px;
text-align: center;
padding: 15px 0 10px 0;
margin: 15px 0;
border-top: 0.5px solid #CFCFCF;
border-bottom: 0.5px solid #CFCFCF;
width: 100vw;
${media.greaterThan('tablet')`
  display: none;
`}
`