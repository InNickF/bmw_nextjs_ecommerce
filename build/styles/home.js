import styled, { createGlobalStyle, withTheme, css } from 'styled-components'
import { prop } from 'styled-tools'
import { media } from '../common'

export const HomeContainer = styled.div`
  margin: auto;
  max-width: 1680px;  
  ${media.lessThan('tablet')`
    .slick-list{
      overflow: visible;
    }
    margin-top: 0;
    margin-bottom: 239px;
  `}
`
export const Slides = styled.div`
  .slider {
    height: 300px;
  }
  .previousButton,
  .nextButton {
    display: none !important;
  }
  ${media.greaterThan('tablet')`
    .slider {
      height: 600px;
    }
  `}
`

export const WhiteHomeSeparator = styled.div`
${parseInt(process.env.BRAND_ID) !== 1 ?
    `height: 60px;` :
    `height: 12px;`}
`

export const VisualTabsContainer = styled.div`
  margin: ${prop('theme.spacing.bigger')} auto;
  ${media.greaterThan('tablet')`
    width: 70%;
  `}
`

export const HeaderContainer = styled.div`
  position: relative;
  ${media.lessThan('tablet')`
    margin-top: -3rem;
  `}
`
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  ${media.greaterThan('tablet')`
    justify-content: space-between;
  `}
  > .big {
    height: 258pt;
    margin: 0 auto;
    margin-bottom: 1rem;
    width: 97%;
    > div{
      height: 100%;
    }
    &.sentence {
      margin-top: 1rem;
    }
    ${media.greaterThan('tablet')`
      margin: 0;
      height: 451px;
      width: 50%;
      &.sentence {
        margin-top: 0;
      }
    `}
  }
  > .card {
    height: 240pt;
    width: 49%;
    > div{
      height: 100%;
    }
    ${media.greaterThan('tablet')`
      height: 451px;
      width: 23%;
    `}
  }
`

export const FeaturedProducts = styled.div`
  margin-top: 3rem;
  margin-bottom: 2rem;
  h4 {
    margin-left: 2%;
    margin-bottom: ${prop('theme.spacing.bigger')};
    font-size: ${prop('theme.font.sizes.bigger')};
    ${prop('theme.font.family.title')};
  }
`

export const BlogCard = styled.div`
  height: 260px;
  margin-bottom: 2rem;
  >div{
    height: 100%;
  }
  ${media.between('mobile', 'tablet')`
    height: 260px;
  `}
  ${media.between('tablet', 'medium')`
    height: 400px;
  `}
  ${media.between('medium', 'desktop')`
    height: 400px;
  `}
  ${media.greaterThan('desktop')`
    height: 460px;
  `}
`

export const VehicleFilterContainer = styled.div`
  background: white;
  ${media.greaterThan('tablet')`
    box-shadow: 0 2px 34px 0 rgba(230,230,230,0.5);
    margin: 0 auto;
    margin-top: -70px;
    margin-bottom: 3.3rem;
    width: 1040px;
    z-index: 2;
    position: relative;
  `}
`
export const HomePage = styled.div`
  background:  ${prop('theme.colors.pageTheme')};
  .category-product-card {
    .category-content-name p{ 
      &:first-child{
        color: ${prop('theme.elements.colorText')};
      }
    }
    .category-content-price p{
      color: ${prop('theme.elements.colorText')};
    }
  }
  &:before{
    content: '';
    background: #000;
  }
`
