import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const Container = styled.div`
  background: #f9f9f9;
  margin-top: 62px;
  margin-bottom: 3em;
  max-width: 100%;
  height: auto;
  white-space: nowrap;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 220px 420px;
  &::before{
    content: '';
    background: #f9f9f9;
    position: absolute;
    right: 100%;
    width: 100%;
    height: 100%;
  }
  &::after{
    content: '';
    background: #f9f9f9;
    position: absolute;
    left: calc(100% - 1px);
    top: 0;
    width: 100%;
    height: 100%;
  }
  .banner-product-filter{
    display: flex;
    flex-direction: column;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
    p{
      position: absolute;
      top: 20px;
      left: 20px;      
      color: #ffffff;
      font-weight: 900;
      font-size: 32px;
      line-height: 38px;
    }
    .color-black{
      color: #000000;
      @media (max-width: 600px) {
         top: 0;
      }
    }
  }
  .select-product-filter{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background:  #f9f9f9;
    .test{
      h1{
        color: green;
      }
    }
    .btn-info{
      position: absolute;
      right: 5px;
      top: 20px;
      z-index: 2;
      cursor: pointer;
      transition: all .5s ease-in;
      &-tooltip{
        transition: all .5s ease-in;
        display:none;
        width: 300px;
        height: auto;
        background: #ffffff;
        position: absolute;
        top: 30px;
        right: 30px;
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
          white-space: normal;
          font-size: 14px;
          margin: 5px 0 8px ;
          overflow: hidden;
        }
      }
      &:hover {
        & .btn-info-tooltip{
          display: inline-block;
          z-index: 2;
        }
      }
    }
    .btn-info:hover ~ .select-container{
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
    a{        
      background:  ${prop('theme.colors.secondBg')};
      text-align: center;
      height: 56px;
      box-sizing: border-box;
      color: white;
      width: 270px;
      margin: 0 auto;
      padding: 19px 2rem;
      -webkit-text-decoration: none;
      text-decoration: none;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
  }
  .select-container{
    margin-top: auto;
    margin-bottom: auto;
    p{
      display: block;
      width: 100%;
      margin: 0 auto;
      text-align: center;
      opacity: 0.6;
      position: absolute;
      top: 20px;
    }
    &::after{
      display: none;
      opacity: 0;
      transition: all .5s ease-in;
      content: '';
      position: fixed;
      top: 0;
      z-index: 1;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: black;
      opacity: 0.8; 
    }
    >div{
      margin: 0 auto 45px;
      width: 220px;
      text-align: center;
    }
    .select-prices{
      display: grid;
      grid-template-columns: 140px 20px 140px;
      grid-template-rows: 1fr;      
      width: 300px;
      .separator{
        margin: auto;
        width: 1px;
        height: 100%;
        border-right: 1px solid #E4E4E4;
      }
      div{
        text-align: left;
        font-size: 14px;
      }
    }
  }
  ${media.greaterThan('medium')`
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 430px;
  max-height: 430px;
  height: 100%;
  .banner-product-filter p{
    top: 30px;
    left: 40px;
  }
  .select-product-filter a{
    width: 100%;
  }
  `}
  `

export const CardsContainer = styled.div`
  display: flex;
  `
