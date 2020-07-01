import styled, { withTheme, css } from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import media from '../../themes/media'

export const Container = styled.div`
position: relative;
background: #ffffff;
background: ${prop('theme.colors.pageTheme')};
display: flex;
flex-direction: column;
h2{
  display: block;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: ${prop('theme.colors.subTitle')};
  margin-bottom: 15px;
  ${parseInt(process.env.BRAND_ID) === 1 ?
    `font-family: 'Motorrad-Normal',sans-serif !important;` :
    ``}
}
a{
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-decoration-line: underline;
  color: #565656;
}
${media.lessThan('tablet')`
margin-left: 0;
h2{
display: none;
}
`}
`
export const TabsContainer = styled.div`
margin: 1em 0;
display: flex;
align-items: center;
${media.lessThan('tablet')`
display:none;
`}
`

export const Tab = styled.button`
background: transparent;
cursor: pointer;
text-transform: none;
&::first-letter{
  text-transform: uppercase;    
}
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color:${process.env.APP_NAME != 'motorrad' ? prop('theme.colors.textColor') : prop('theme.colors.textColorBlack')};
  padding: ${prop('theme.spacing.smaller')};
  padding-bottom: ${prop('theme.spacing.small')};
  margin-right: 56px;
  ${ifProp('isSelected', css`
  font-weight: bold;
  border-bottom: 5px solid ${prop('theme.colors.itemSelectBorder')};
  `)}
  `
export const CategoryBannerContainer = styled.div`
  display: none;
  ${media.lessThan('tablet')`  
  display: inline-block;
  `}
  `
export const CategoryBanner = styled.div`
  position: relative;
  h2{
    display: inline-block;
    position: absolute;
    top: 15px;
    left: 20px;
    font-size: 26px;
    color: white;
    text-transform: lowercase;
    ::first-letter{
      text-transform: uppercase;
    }
  }
  ::before{
    content: '';
    background: linear-gradient(180deg,rgba(0,0,0,0.4) 0%,rgba(0,0,0,0) 42.19%);
    left: 0;
    width: 100%;
    position: absolute;
    height: 100%;
    top: 0;
    bottom: 0;
  }
  a{
    position: absolute;
    bottom: 20px;
    left: 20px;
    background: rgb(28, 105, 212);
    height: 43px;
    width: auto;
    text-align: center;
    box-sizing: border-box;
    color: white;
    padding: .7rem 2rem;
    -webkit-text-decoration: none;
    text-decoration: none;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    font-weight: 900;
    font-family: "BMWGroup",sans-serif;
    font-stretch: condensed;
    text-transform: uppercase;
    ::first-letter{
      text-transform: uppercase;
    }
    
    ${parseInt(process.env.BRAND_ID) === 3 ?
    `background: rgb(28, 105, 212);` :
    `background: #000000;      
      color: #ffffff;
      `}
    }  
    
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${media.lessThan('tablet')`  
    margin-bottom: 6px;
    img{
      object-fit: cover;
      object-position: center;
    }
  `}
`