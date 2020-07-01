import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const Card = styled.div`    
  position: relative;
  /* ${prop('theme.shadow.card')}; */
  ${media.lessThan('tablet')`
    border: none;
    border-top: thin solid ${prop('theme.colors.darkgray')};
  `};
`
export const ContainerWish = styled.div`  
margin-left: 30px;
margin-right: 30px;
  ${media.lessThan('tablet')`
    margin-left: 10px;
    margin-right: 10px;
  `};
`

export const RemoveButton = styled.button`
  background: transparent;
  cursor: pointer;
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  svg{
    width: 16px;
    fill:#EB5757;
  }
  ${media.lessThan('tablet')`    
    right: 0;
    top: 30px;
    left: auto;
  `};
`

export const Content = styled.div`
  border-top: thin solid ${prop('theme.colors.darkgray')};  
  padding-top: ${prop('theme.spacing.bigger')};
  padding-bottom: ${prop('theme.spacing.bigger')};
  display: flex;
  margin-left: 40px;
  ${media.lessThan('tablet')`    
    margin-left: 0;
    border: none;
  `};
`
export const ImageContainer = styled.div`
  text-align: center;
  width: 100px;
  height: 100px;
  img {
    object-fit: contain;
  }
  ${media.lessThan('tablet')`
  img{
    width: 100%;
    height: 100%;
  }
  `};
`

export const Info = styled.div`
  margin-left: 15px;
  ${prop('theme.font.family.condensed')};
  h4 {
    font-size: ${prop('theme.font.sizes.big')};
    font-weight: bolder;
    ${prop('theme.font.family.title')};
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 17px;    
    color: #000000;
  }
  p {
    margin-top: 5px;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    color: #000000;
  }
  .price{
    margin-top: 15px;
    font-weight: normal;
    font-size: 22px;
    line-height: 26px;      
    color: #000000;
  }
  ${media.lessThan('tablet')`
    padding-right: 20px;
  `};
`

export const Buttons = styled.div`
  align-self: center;
  text-align: center;
  margin-left: auto;
  a{
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  button {
    display: block;
    text-align: left;
    font-size: 14px;
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 2px solid;  
    ${parseInt(process.env.BRAND_ID) === 3 ?
    `border-color: #1C69D4;
      color: #1C69D4;
      a{
        color: #1C69D4;
      }
      svg{
        fill: #1C69D4;
      }
  ` :
    `border-color: #000000;
      color: #000000;
      a{
        color: #000000;
      }
      svg{
        fill: #000000;
      }
  `}
  svg {
      max-height: 20px;
      margin-right: ${prop('theme.spacing.smaller')};
      vertical-align: middle;
    }
  }
  ${media.lessThan('tablet')`
    display: none;
  `};
`

export const InMobileGoToProduct = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  a {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
  ${media.lessThan('tablet')`
    display: block;
  `};
`

export const TitleHeader = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 50px;
  color: #000000;
  margin-bottom: 53px;
  margin-top: 50px;
  cursor: pointer;
`
export const WishListContainer = styled.div`

`
export const WishListListItems = styled.div`
margin: 20px 0;
p{
  text-align: right;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  opacity: 0.4;
}
`