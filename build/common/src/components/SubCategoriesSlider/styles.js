import styled, { withTheme, css } from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const Container = styled.div`
  max-width: 100%;
  overflow: hidden;
  height: 195pt;
  white-space: nowrap;
  position: relative;
  text-align: center;
  .subcategory-card{
    margin-left: 10px;

   a{
    display: flex;
    flex-direction:column;
    align-items: center;
    color:  ${prop('theme.elements.colorText')};
    justify-content: center;

    >div{
      width: 100%;
      overflow: hidden;
      overflow-wrap: break-word;
      text-overflow: ellipsis;
      padding: 0 10px 0 25px;
    }

    img{
      height: 300px;
      object-fit: cover;
      margin-bottom: 2em;
      width: 100%;
    }
    svg{
      height: 14px;
      margin-left: -10px;

      ${parseInt(process.env.BRAND_ID) !== 1 ? `
      fill: #000000;
      path{
        stroke: #000000;
        strokeWidth: 4px;
      }
      ` : `
      fill: #ffffff;
      path{
        stroke: #ffffff;
        strokeWidth: 4px;
      }
      `}      
    }
    span{
      font-size: 18px;
      font-weight: 900;
      margin-left: 5px;
      text-transform: uppercase;
      text-decoration: underline;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
   }
  }
  .slick-arrow, .slick-next{
    background: #ffffff;
    transform: inherit;
    &::before{
      display:none;
    }
    &:hover{
      ${parseInt(process.env.BRAND_ID) === 1 ? `background: #16171A;` : `background: #ffffff;`}
    }
  } 
  .control {
    ${parseInt(process.env.BRAND_ID) === 1 ? `background: #16171A;` : `background: #ffffff;`}
    opacity: 0.75;
    backdrop-filter: blur(24px);    
    position: absolute;
    cursor: pointer;
    height: 300px;
    width: 50px;
    z-index: 1;
    top: 0;
    svg {

    ${parseInt(process.env.BRAND_ID) !== 1 ? `
      fill: #000000;
      path{
        stroke: #000000;
        strokeWidth: 3px;
      }
      ` : `
      fill: #ffffff;
      path{
        stroke: #ffffff;
        strokeWidth: 3px;
      }
      `}
      
    } 
  }
  .prev {
    left: 0;
    svg {
      transform: rotate(180deg);
    }
  }
  .next {
    right: 0;
  }
  .slick-disabled{
    transition: all 1s ease-in;
    display: none;
  }
  ${media.greaterThan('tablet')`
  height: 405px;
  `}
  ${media.greaterThan('desktop')`  
  .next {
    right: 0;
  }
  `}
`

export const CardsContainer = styled.div`
  display: flex;
`
