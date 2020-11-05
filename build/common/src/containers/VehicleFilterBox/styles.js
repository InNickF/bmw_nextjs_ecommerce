import styled from 'styled-components'
import { prop, ifProp } from 'styled-tools'
import media from '../../themes/media'

export const Container = styled.div`
  box-sizing: border-box;  
  position: relative;
  width: 100%;
  > h3 {
    ${ifProp(
  {
    'theme.name': 'bmw'
  },
  prop('theme.font.family.title')
)};
    margin-bottom: ${prop('theme.spacing.tiny')};
    text-align: center;
    margin: 0 auto;
    margin-top: 60px;
    line-height: 28px;
    font-size: 24px;
    font-weight: bold;
    color: #000000;    
  }
  ${media.greaterThan('tablet')`
    padding: 20px;
    padding-top: 0;
  `}
  ${media.lessThan('tablet')`
  >h3{
    margin-top: 50px;    
    margin-bottom: 24px;    
  }
  &.hide-responsive{
    display: none;
  }
  `}
}
`

export const AllCompatibilitiesContainer = styled.div`
  box-sizing: border-box;  
  position: relative;
  width: 100%;
  margin-bottom:.4em;
  h4 {
    text-decoration:underline;
    text-align:center;
    cursor: pointer;
    };
`

export const AllCompatibilitiesModalContent = styled.div`
  box-sizing: border-box;
  color: ${prop('theme.colors.textColor')};
  margin: 0 auto;
  width: 100%;
  h3 {
    font-size: 1.5rem;
    margin:.5em 0;
    padding-right:1.5em;
  }
  h4 {
    font-size: 1.1rem;
  }
  .compatibility-module {
    box-sizing: border-box;
    width:100%;
    margin-bottom: .7em;
    padding: .7em;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.31)
  }
  .compatibilities-list-container {
    max-height:600px;
    overflow-y: scroll;
    padding:.5em;
    ${media.lessThan('tablet')`
    max-height:400px;
  `}
  }
`


export const FilterFormModal = styled.button`
  .overlay-actual-car{
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(255,255,255, 0.7);
    z-index: 3;
    top: 0;    
  }
  .conten-form{
    position: absolute;
    z-index: 3;
    right: 0;
    top: 0;
    transition: all ease 1s;
  } 
${
  media.lessThan('tablet')`
  .overlay-actual-car:active {
    &.content-form{
      animation: top-out .5s ease-in both;
    }
  }
  .conten-form{
    position: fixed;
    margin-top: 55px;
    background: white;
 }
`}
`

export const CloseButton = styled.button`
  background: transparent;
  cursor: pointer;
  position: absolute;
  right: ${prop('theme.spacing.normal')};
  top: ${prop('theme.spacing.normal')};
`

export const FilterButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    font-size: ${prop('theme.font.sizes.small')};
    padding: 0.6rem 1.4rem;
    ${ifProp(
  {
    'theme.name': 'bmw'
  },
  prop('theme.font.family.bold')
)};
  }
  .o {
    display: none;
  }
  ${media.greaterThan('tablet')`
    .o {
      display: block;
    }
    button {
      font-size: ${prop('theme.font.sizes.normal')};
      ${prop('theme.font.family.miniRegular')}
      padding: 0.6rem 2rem;
      ${ifProp(
  {
    'theme.name': 'bmw'
  },
  prop('theme.font.family.bold')
)};
    }
  `}
`

export const DesktopContainers = styled.div``
