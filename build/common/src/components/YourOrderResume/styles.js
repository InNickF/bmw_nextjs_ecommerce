import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const Card = styled.div`
border-radius: 7px;
position: relative;
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
${media.lessThan('tablet')`
margin-right: 0;      
`};

.hide-mobile {
  ${media.lessThan('tablet')`
  display: none;
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
    `

export const Content = styled.div`
    padding: 1rem 0;
    display: flex;
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
    width: 121px;
    height: 121px;
    img {  
      width: 100%;
      object-fit: cover;
    }
    a{
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-decoration: none;
    }
    ${media.lessThan('tablet')`
    width: 100%;
    height: 100%;
    `};
    `

export const Detail = styled.div`
    width: 100%;  
    box-sizing: border-box;    
    display: flex;
    flex-direction: column;
    width: 100%;
    
    ${media.lessThan('tablet')`
    display: block;
    padding-top: 0;
    `};
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
      grid-gap: 10px;
    }
    .product-price-content{
      display: flex;
      justify-content: space-between;
      margin-top:9px;
    ${media.lessThan('tablet')`
      margin-bottom:9px;
    `}
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
        margin: ${prop('theme.spacing.small')} auto;
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
    p{  
      font-size: 10px;
      line-height: 12px;
      color: #929292;
      &:last-child{
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
  
  ${media.greaterThan('tablet')`
  display: none;
  `}
  `