import styled from 'styled-components'
import { prop, ifProp } from 'styled-tools'

import media from '../../themes/media'

export const Slide = styled.div`
  background: url(${prop('image')}) no-repeat;
  background-size: cover;
  position: relative;
  height: 414px;
  margin-top: 0px;
  width: 100%;
  background-position: center;
  ${media.between('medium', 'desktop')`
  height: 470px;
  `}
  ${media.greaterThan('desktop')`
  height: 500px;
  `}
`

export const Info = styled.div`
color: ${prop('theme.header.blackText')};  
position: absolute;
left: calc(50% - (1340px/2));

${media.lessThan('desktop')`
  left: calc(50% - (100vw - 100px)/2);  
`}

button {
  width: fit-content;
  height: 38px;
  height: fit-content;
  ${parseInt(process.env.BRAND_ID) === 1 && `
    margin-top: 40px;
  `}
}  
  ${media.greaterThan('tablet')`
  color: ${prop('theme.header.sliderTextColor')};  
  bottom: 65px;
  `}
  ${media.lessThan('tablet')`
  width: calc(100% - 40px);
  transform: translateY(100%);  
  bottom: -19px;
  left: 24px;
  h3,h4{
    /* height: 35px; */
  }
  button {    
    margin-top: 21px;    
    a{      
      font-size: 14px!important;
      font-weight: bold;
      width: 140px;
      height: 50px;
    }
  }
  h3,h4{
    font-family: 'BMWGroup-Normal',sans-serif;
    font-weight: 900;
    font-size: 26px;
  }
  `}
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 38px;
    width: 135px;
    font-size: 16px !important;    
    padding: 0 0 !important;    
    ${ifProp(
  {
    'theme.name': 'bmw'
  },

)};
    ${media.greaterThan('tablet')`
      width: 200px;
      height: 48px;
      font-size: 16px !important;
    `}
  }
`

export const Title = styled.h3`
  ${ifProp(
  {
    'theme.name': 'bmw'
  },
  prop('theme.font.family.title')
)};  
  font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-Bold', sans-serif !important`};
  ${parseInt(process.env.BRAND_ID) === 1 && `font-weight: bolder!important`};
  font-size: 24px;
  margin-bottom: 0.3rem;
  margin-top: 11px;
  ${media.between('mobile', 'tablet')`
  margin-bottom: 0.5rem;
  `}
  ${media.greaterThan('tablet')`
  font-size: 2.5rem;
  text-shadow: 1px 1px 20px #253144;
  ${parseInt(process.env.BRAND_ID) === 1 && `
  font-size: 43px;
  line-height: 1.2em;
  `}
  ${parseInt(process.env.BRAND_ID) !== 1 && `
    margin-bottom: ${prop('theme.font.sizes.small')};
  `};
  `}
`

export const Description = styled.h4`
  font-size: 18px;

  ${ifProp(
  {
    'theme.name': 'bmw'
  },
  prop('theme.font.family.condensed')
)};
  ${media.greaterThan('tablet')`
    margin-bottom: ${prop('theme.font.sizes.small')};
    font-size: ${prop('theme.font.sizes.bigger')};
  `}

  font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-Normal', sans-serif !important`};
  font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Regular', serif !important`}; 
  font-family: ${parseInt(process.env.BRAND_ID) === 3 && `'BMWGroup-Normal', sans-serif !important`}; 
`
