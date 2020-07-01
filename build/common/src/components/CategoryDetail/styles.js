import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const Container = styled.div`
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  text-align: center;
  display: grid;
  grid-template-columns: 45% 55%;
  grid-template-rows: 537px;
  grid-gap: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 3em;
  ${media.lessThan('tablet')`
  display:none;
`}
`

export const CategoryDescription = styled.div`
  animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  position: absolute;
  left: calc(100% + 60px);
  color: #333333;
  bottom: -30px;
  width: fit-content;
  max-width: fit-content;
  font-size: smaller;
`

export const CategoryData = styled.div`
position: absolute;
bottom: 2em;
left: 2em;
display: flex;
align-items: flex-end;
justify-content: space-between;
width: calc(100% - 4em);
a{
  background: ${prop('theme.colors.secondBg')};
    height: 62px;
    width: 210px;
    text-align: center;
    box-sizing: border-box;
    color: white;
    display: flex;
    align-items: center;    
    justify-content: center;    
    -webkit-text-decoration: none;
    text-decoration: none;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);    
    font-weight: bold;
    font-stretch: condensed;
    font-display: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;
    span{
      font-weight: bold;
      text-transform: uppercase;
    }
    ${media.lessThan('laptop')`
      width: 100%;
    `}
  }
`

export const CategoryBanner = styled.div`
  position: relative;
  max-width: 60%;
  margin-right: 30px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    width: 680px;
    height: 550px;
    object-position: top;
  }
  &:before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: linear-gradient(0deg,rgba(0,0,0,0.5) 0%,rgba(0,0,0,0) 39.06%);
  }

  .reverse-data{
    flex-direction: row-reverse;
    div{
      text-align: left;
    }
  }

  `

export const CategoryListProduct = styled.div`
  animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  display: grid;
  grid-template-columns: repeat(2, 216px);
  grid-template-rows: repeat(2, 250px);
  grid-gap: 10px;
  .category-product-card{
    text-decoration: none;
    width: 200px;
    box-sizing: border-box;
    @media (max-width: 1290px) { width: 190px; }
    img{
      height: 200px;
      width: auto;
      object-fit: cover;
      border: 1px solid #DBDBDB;
    }
    .category-content-name{
      width: 190px;
      margin: 0 auto;
      text-align: left;
      text-transform: uppercase;      
      p:first-child{        
        font-weight: 500;
        white-space: nowrap;
        font-size: 14px;
        line-height: 16px;
        color: ${process.env.APP_NAME == 'motorrad' ? '#ffff' : '#000000'};
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: uppercase;      
      }
      p{
        &:first-letter{
          text-transform: uppercase;
        }
        font-weight: normal;
        font-size: 10px;
        white-space: normal;
        line-height: 20px;        
        color: #939393;
      }
    }
    
    .category-content-price{
      text-align: right;
      position: relative;
      p{
        font-weight: 500;
        white-space: normal;
        font-size: 14px;
        line-height: .5em;
        color: ${process.env.APP_NAME == 'motorrad' ? '#ffff' : '#000000'}; 
      }
      &--discount{
        position: absolute;
        right: 0px;
        top: -10px;
        font-weight: normal;
        font-size: 10px!important;
        white-space: normal;
        line-height: .5em;
        text-decoration-line: line-through;
        color: #939393!important;
      }
    }
  }

  ${media.lessThan('medium')`
    >a:nth-child(n+5){
      display:none;
    }
  `}
    
  
  ${media.greaterThan('tablet')`
    grid-template-columns: repeat(2, 202px);
    margin: auto;
    grid-gap: 30px;
  `}
    
  ${media.greaterThan('1220px')`
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(2, 250);
    grid-gap: 10px;
    margin: initial;
  `}

  ${media.greaterThan('laptop')`
    grid-template-columns: repeat(3, 202px);
    grid-template-rows: repeat(2, 250);
  `}
`

