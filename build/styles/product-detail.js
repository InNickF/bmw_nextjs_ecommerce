import styled, { createGlobalStyle } from 'styled-components'
import { prop } from 'styled-tools'
import { media } from '../common'
import slick from 'slick-carousel/slick/slick.css'
import slickTheme from 'slick-carousel/slick/slick-theme.css'

createGlobalStyle`
  ${slick};
  ${slickTheme};
`

export const FeaturedProducts = styled.div`
  padding-bottom: 2rem;
  h4 {    
    font-size: 32px;
    color: #000000;
    margin-left: 2%;
    margin-bottom: ${prop('theme.spacing.bigger')};    
  }
  .control{
    top: 12px;
    height: 240px;
  }
.slick-slide{  
  >div>div{
    width: 236px;
    .product-card{
      &:hover{
        height: auto;
        }
        figure{
          width: 236px;
          height: 236px;
        }
      }
    }
  }

`
export const BreadcrumbsContainer = styled.div`
  a, a:visited{
    ${parseInt(process.env.BRAND_ID) === 1 && 'color: #000000'};
  }
  ${media.greaterThan('tablet')`
  width: 70%;
  `};

  ${media.lessThan('tablet')`
    display: none;
  `};
  `
export const SeparatorTop = styled.div`
  height: 53px;
  ${media.lessThan('tablet')`${
    parseInt(process.env.BRAND_ID) !== 2 && `display: none;`
    }
    height: 33px;`};

`
export const BackBtn = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  cursor: pointer;  

  ${media.lessThan('tablet')`
    margin-top: 43px;
    margin-bottom: 55px;
    margin-left: 16px;
  `};
`
export const Separator = styled.div`   
  height: 47px;
  border-bottom: thin solid ${prop('theme.colors.lightgray')}
  width: 95%;
    
`

export const ContainerError = styled.div`
  margin: 50px auto;
  text-align: center;
  ${prop('theme.font.family.title')};
  font-size: ${prop('theme.font.sizes.bigger')};
  margin-bottom: ${prop('theme.spacing.bigger')};

  > div {
    margin: 30px auto;
  }
  
  a {
    color: ${prop('theme.colors.main')};
    cursor: pointer;
    text-decoration: none;
  }
`
