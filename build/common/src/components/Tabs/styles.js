import styled, { css } from 'styled-components'
import { ifProp, prop } from 'styled-tools'
import media from '../../themes/media'

export const Container = styled.div`  
  background: ${parseInt(process.env.BRAND_ID) === 3 ? '#1C69D4' : '#000000'};
  display: flex;
  background: white;
  margin-bottom: ${prop('theme.spacing.huge')};

  ${media.lessThan('mobile')`
    flex-direction: column;
  `}

`

export const TabButtonsContainer = styled.div`
  height: 100vh;
  width: 256px;
  flex: 0 1;
  background: #F7F7F7;
  position: relative;
::before {
  content: '';
  background: #F7F7F7;
  position: absolute;
  width: 100%;
  height: 10000%;
  top: 100%;
}
::after {
  content: '';
  background: #F7F7F7;
  position: absolute;
  width: 100%;
  height: 1000%;
  left: -100%;
  top: 0;
}
${media.lessThan('mobile')`
  width: 100vw;
  height: 100px;
`}

`

export const Labels = styled.div`
  display: flex;
  align-items: center;  
  font-size: 20px;
  margin-top: 170px;
  flex-direction: column;
  
  ${media.lessThan('mobile')`
    flex-direction: row; 
    font-size: 12px; 
    margin-top: 50px;
    justify-content: center;
    align-items: baseline;
    height: 50px;
  `}
  ${media.between('mobile', 'tablet')`
    font-size: 15px;
  `}  
`

export const Content = styled.div`
  background: white;
  border-radius: 6px;
  position: relative;
  z-index: 1;
  width: 100%;
`

export const Pane = styled.div`
  background: white;
  border-radius: 6px;
`

export const TabButton = styled.div`
  cursor: pointer;
  height: 45px;
  min-width: 225px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 80px;
  opacity: .6;
  transition: all ease .5s;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  svg{
    margin-right: 24px;
  }
  
  ${ifProp(
  'isActived',
  css`
    opacity: 1;
    color: ${prop('theme.colors.main')};
    div{
      font-weight: 900;
    }
    z-index: 2;
    svg path{
      fill: black;
    }
  `
)};
  ${media.lessThan('mobile')`
    min-width: 30%;
    height: 43px;
    justify-content:center;
    >div{
      display: none;
    }
  `}
  ${media.between('mobile', 'tablet')`
    min-width: 31%;
    height: 43px;
    margin-right: 10px;
  `}
`
