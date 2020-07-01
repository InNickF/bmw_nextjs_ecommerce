import styled, { css } from 'styled-components'
import { prop, ifProp } from 'styled-tools'
import { media } from '../../..'

export const Item = styled.li`
  position: relative;
  ${ifProp(
  'rootCollapsible',
  css`      
    margin-bottom: 30px;
    `
)}  
  a{
    margin: 0;
    margin-top: 15px;
    margin-left: 10px;
    &:first-letter{
      text-transform: uppercase;
    }
    ${ifProp(
  'opened',
  css`
      color:red;
      font-weight: 900;
      margin-left: 20px;
      `
)}
    }
    > a {
      display: block;    
      color: #000;
      font-size: ${prop('theme.font.sizes.small')};
      text-decoration: none;
      line-height: 19px;
      ${ifProp(
  'rootCollapsible',
  css`      
        font-size: 16px;
        font-weight: bold;      
        font-size: 1.2rem;
        margin-left: 0;
        `
)}
      }
      ${ifProp(
  'rootCollapsible',
  css`
        > a {
          padding-bottom: 0;
          margin-top: 0;
          display: inline-block;
      }
    `
)}
  > button {
    background: transparent;
    cursor: pointer;
    position: absolute;
    right: 2px;    
    top: 10px;
    transform: translateY(-50%);
    > svg {
      transition: all ease 0.4s;
      transform: rotate(180deg);              
      stroke: black;
      path{
        stroke: black;        
      }        
      ${ifProp(
  'openned',
  css`
          transform: rotate(0deg);
        `
)}
    }
  }

  ${media.lessThan('tablet')`  
  .btn-top-category{
    margin-top: 12px;
    width: 31px;
    height: 48px;
  }
  margin-bottom: 0;
  a{
    margin-bottom: 0;
    margin-top: 0;
    margin-left: 0;
    height: 50px;
    width: 100%;
    padding:0;
    display:flex;
    align-items: center;
    box-sizing: border-box;    
    position: relative;
    &::before{
      content: '';
      width: 120vw;
      height: 1px;
      background: #F8F8F8;
      position: absolute;
      bottom: 0px;
      left: -50px;
    }
  }
  .category-responsive-title{
    height: 50px;
    background: #F8F8F8;
    width: 100%;
    padding:0;
    display:flex;
    align-items: center;
    box-sizing: border-box;
    &:before{
      content: '';
      width: 300px;
      height: 50px;
      position: absolute;
      z-index: -1;
      left: -30px;
      top: 0;
      background: #F8F8F8;
    }
  }
`};
`

export const List = styled.ul`  
  list-style: none;
  li{
    ul{
      li{
        ul{
          padding-left: 14px;
          li{
            a{
              color: #
            }
          }
        }
      }
    }
  }
  a:first-letter{
    text-transform: uppercase;
  }
.hide-lifestyle-list{
  display: none;
  }
}

`
export const ContainerCategories = styled.div`
  h2{
    font-weight: 900;
  }
`

