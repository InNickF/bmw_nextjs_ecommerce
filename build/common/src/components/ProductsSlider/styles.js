import styled, { css } from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const Container = styled.div`
  background: #f5f5f5;
  max-width: 1390px;
  height: auto;
  white-space: nowrap;
  position: relative;
  text-align: center;
  &::before{
    content: '';
    background: ${props => props.bkg ? props.bkg : '#f5f5f5'};
    position: absolute;
    right: calc(100% - 1px);        
    width: 100%;
    height: 480px;
    ${media.lessThan('tablet')`
      height: 100%;
      `}
    }
    &::after{
      content: '';
      background: ${props => props.bkg ? props.bkg : '#f5f5f5'};
      position: absolute;
      left: calc(100% - 1px);
      top: 0;
      width: 100%;
      height: 480px;
      ${media.lessThan('tablet')`
      height: 100%;      
    `}
  }
  h1{
    padding-top: 40px;
    text-align:left;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
    white-space: normal;
    ${parseInt(process.env.BRAND_ID) === 1 ?
    `font-family: 'Motorrad-Normal',sans-serif !important;` :
    ``}
    ${media.lessThan('tablet')`
    padding-top: 1em;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 28px;    
    `}
  }  
  .product-card {       
    margin: auto;    
    ${media.lessThan('tablet')`
    width: 90%;
    `}
  }
  .btn-see-more{
    margin-top: 25px;
    button{
      height: 53px;
    }
     a{
      background: ${prop('theme.colors.secondBg')};
      height: 43px;
      width: 290px;
      text-align: center;
      box-sizing: border-box;
      color: white;
      padding: 19px 3rem;
      -webkit-text-decoration: none;
      text-decoration: none;      
      font-weight: bold;
      font-stretch: condensed;
      font-display: auto;      
    }

    ${media.lessThan('tablet')`
      height: 40px;
      width: 100%;
      margin-top: 45px;
      a{
        padding: 19px 120px;
      }
    `}
  }
  .slick-list{
    width: 100%;
    margin: auto;
  }

  .slider-no-responsive{
    display: none;
    ${media.greaterThan('tablet')`
    display: block;
    `}
  }

  .slider-responsive{    
    display: flex;
    height: auto;
    align-items: center;    
    flex-direction: column;
    >div{
      margin: auto;
    }
    ${media.greaterThan('tablet')`
    display: none;
    `}
  }
  .control {
    background: rgba(249, 249, 249, .4);

    position: absolute;
    cursor: pointer;    
    top: 112px;
    width: 62px;  
    height: 235px;
    transform: traslateX(-50%);
    padding: 8px 1px;
    border-radius: 3px;
    svg {
      fill:#C8C8C8;

      path{
        stroke: #C8C8C8;
        strokeWidth: 3px;
      }
    }
  }
  .prev {
    left: -10px;
    svg {
      transform: rotate(180deg);
    }
  }
  .next {
    right: 0;
    svg {
    }
  }

  .content-home{
    .control {
      background: rgba(249, 249, 249, .4);
      svg{
        fill: #C8C8C8;
        path{
          stroke: #C8C8C8;
        }
      }
    }
    &-header,
    .product-card-prices div,
    .product-card-text h2, p{
      color: #000000;         
    }
    .product-card:hover{
      width: auto;
      margin-top: 5px;
      .product-card-text h2, p{
        color: ${parseInt(process.env.BRAND_ID) === 1 ? '#ffffff' : '#000000'}; 
      }
      .product-card-prices div{
        color: ${parseInt(process.env.BRAND_ID) === 1 ? '#ffffff' : '#000000'};      
      }
    }
  }
${props =>
    props.dark &&
    css`
    background: #16171a;
    &::before{
      background: #16171a;
      top: -150px;
      height: 10000px;
    }
    &::after{
      background: #16171a;
      top: -150px;
      height: 10000px;
    }
    `};

  ${media.greaterThan('tablet')`
  width: calc(100% + 100px);
  .btn-see-more{
    display:none;
  }
  .content-home{
    width: 110%;
    margin-left: calc(50% - (1340px/2));
    .slick-slide>div>div{
      width: 270px;
      height: 350px;
      .product-card figure{
        width: 270px;
        height: 270px;
      }
      .product-card:hover{
        figure{
          height: 230px;
        }
      }
    }

    .control{
      margin: 0;
      box-sizing: border-box;
      padding: 0;
      height: 268px;    
    }
    .prev{
      left: -50px;    
      background: #F9F9F9;
    }    
  }
  height: 480px;
    `}
        
    ${media.lessThan('desktop')`    
    .content-home{    
      .next{
        right: 50px;
      }
    }
    `}
    ${media.lessThan('medium')`        
    .content-home{    
      .prev{
        background: transparent;
      }
    } 
    `}
    
    ${media.lessThan('tablet')` 
    background: white;   
    .content-home{
      .product-card{
        position: relative;
      }

      &-header{
        text-align: center;  
        margin-bottom: 40px;
      }

      >div{
        width: calc(100% - 60px);
        max-width: 100%
        height: auto;
        .product-card{
          width: 100%;
          height: auto;
        }  
     }     
  }  
  `}

  .responsive-inline{
    .control{
      top: 5px;
      height: 240px;    
    }
    ${media.lessThan('tablet')`
      display: block;
      .control{
        display: none;
      }
      .slick-track{
        width: 25000px!important;
        margin-left: -40px;
      }
      .slick-slide{
        margin-right: 20px;
        >div>div{
          width: 190px;
          .product-card{            
            figure{
              width: 190px;
              height: 190px;
              img{
                box-sizing: border-box;
              }
            }
          }
        }
      }
    `}
  }
  .responsive-inline-hide{
  ${media.lessThan('tablet')`
    display: none;
  `}
  }

`

export const CardNoProducts = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 300px;
text-align: center;
color: #A8A8A8;
`

export const CardsContainer = styled.div`
  display: flex;
`
