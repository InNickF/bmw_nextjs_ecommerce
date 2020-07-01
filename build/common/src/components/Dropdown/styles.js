import styled, { css } from 'styled-components'
import { prop, switchProp, ifProp } from 'styled-tools'

export const DropdownMain = styled.div.attrs(prop => ({
  className: 'dropdown'
}))`
  width: auto;
  position: relative;
  max-width: 100%;
  z-index: 99;
  display: flex;
  img{
    width: 386px;
    height: 396px;
    object-fit: cover;
  }
  &:before {
    content: ' ';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 6px 6px 6px;
    border-color: transparent transparent #ffffff transparent;
    position: absolute;
    top: -6px;
    left: 0;
    display: none;
  }
  .select-hover{    

  >div:first-child > div:first-child > a{
    color: black;
    font-weight: bolder;
    &:first-letter: uppercase;
  }

  >div:first-child{
    font-weight: bolder;
    color: ${prop('theme.header.navigationTextHover')};
    > .dropdown-list {
      display: block;
      background: transparent;
    }
    > div:first-child > a {
      color: ${prop('theme.header.navigationTextHover')};
      position: relative;
    }
  } 
 }
`

export const Item = styled.div`
  cursor: pointer;  
  ${ifProp(
  'flatItem',
  css`
      font-size: ${prop('theme.font.sizes.small')};
      height: auto !important;
      &:first-child {
        margin-top: ${prop('theme.spacing.big')};
      }
      &:hover {
        background: transparent !important;
      }
      a {
        color: ${prop('theme.colors.textColor')} !important;
        text-decoration: none;
      }
    `
)};
  > div {
    height: 100%;
    width: 100%;
  }
  > div > a {
    color: ${prop('theme.colors.textColor')};
    text-decoration: none;
    font-size: ${prop('theme.font.sizes.small')};
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    left: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a{
    line-height: 1.5em;
  } 
  
  min-height: 17px;
  display: flex;
  align-items: center;
  justify-content:center;
  position: relative;
   ${ifProp(
  'showArrow',
  css`
      ::after {
        content: url('data:image/svg+xml; utf8,<svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.4" d="M1 9L5 5L1 1" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        ');
        position: absolute;
        right:2px;
        top: 0;
        transform-origin: center;
        display: inline-block;
        vertical-align: middle;
        transition: transform .2s ease-out;
      }
    `
)};
`

export const DropdownBlock = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 130px;
  margin: 3px;
  a {
    text-decoration: none;
    color: ${prop('theme.colors.textColor')};
  }
  > .head {
    font-size: ${prop('theme.font.sizes.smaller')};
    margin-top: ${prop('theme.spacing.small')};
    margin-bottom: ${prop('theme.spacing.smaller')};
    text-align: center;
  }
`

export const DropdownList = styled.div.attrs(props => ({
  className: 'dropdown-list'
}))`
  /* border: 1px solid ${prop('theme.colors.textColor')}; */
  color: ${prop('theme.colors.textColor')};
  background-color: ${prop('theme.header.dropdownBG')};
  ${switchProp('type', {
  main: css`
      position: relative;
      min-width: 175px;
      height: 335px;
      border-right: 1px solid #F0F0F0!important;
      margin: 57px 0 30px 60px;
      padding-right: 8px;
      
      &::-webkit-scrollbar {
        width: 6px;
      }   
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }   
      &::-webkit-scrollbar-thumb {
        background-color: #C4C4C4;
        outline: 1px solid slategrey;
        border-radius: 13px;
      }

      > ${Item} {
        /* background: ${prop('theme.header.navigationBG')}; */
        color: ${prop('theme.header.navigationText')};
        height: 30px;
        display: flex;
        box-sizing: border-box;
        align-items: center;   
        /*    border-left: thin solid ${prop('theme.colors.textColor')};
        border-right: thin solid ${prop('theme.colors.textColor')}; */
        &:first-child {          
          /* border-top: 1px solid ${prop('theme.colors.textColor')}; */
        }
        &:last-child {          
          /* border-bottom: 1px solid ${prop('theme.colors.textColor')}; */          
        }
        > div:first-child {
          /* padding: 0 25px; */
          display: flex;          
          align-items: center;
          align-items: baseline;
          position: relative;
          height: 100%;
          width: 100%;
          > a {
            color: ${prop('theme.header.navigationText')};
            position: relative;
            align-items: center;
            width: 100%;
            height: 100%;
            display: flex;
          }
        }
        &:hover {
          color: ${prop('theme.header.navigationTextHover')};
          > .dropdown-list {
            display: block;
            background: transparent;
            min-height: 100%;
          }
          > div:first-child > a {
            color: ${prop('theme.header.navigationTextHover')};
            position: relative;
          }
        }
      }
    `,
  blocklist: css`
      display: none;
      position: absolute;
      /* min-height: 100%; */
      left: 100%;
      top: 0;
      width: 410px;
      padding: ${prop('theme.spacing.big')};
      padding-top: ${prop('theme.spacing.small')};
    `,
  sublist: css`
      display: none;
      position: absolute;
      /* min-height: 100%; */
      left: 101%;
      top: 0;
      padding-left: 40px;
      width: 220px;
      font-size: ${prop('theme.font.sizes.small')};
      > ${Item} {
        /* background: ${prop('theme.header.navigationBG')}; */
        color: ${prop('theme.header.navigationText')};        
        padding: 5px 0;
        display: flex;
        box-sizing: border-box;
        padding-left: 0;
        padding-right: 15px;
        align-items: center;
        /* border-left: 1px solid ${prop('theme.colors.textColor')}; */
        /* border-right: 1px solid ${prop('theme.colors.textColor')}; */
        position: relative;
        &:first-child {
          /* border-top: 1px solid ${prop('theme.colors.textColor')}; */
          &:hover {
            > .dropdown-list {
              top: -1px;
            }
          }
        }
        &:last-child {
        /*   border-bottom: 1px solid ${prop('theme.colors.textColor')}; */
        }
        > div:first-child > a {
          color: ${prop('theme.header.navigationText')};
        }
        &:hover {
          color: ${prop('theme.header.navigationTextHover')};
          font-weight: bold;
          > .dropdown-list {
            display: block;
            background: transparent;
            max-height: 396px;
            overflow: auto;
          }
          > div:first-child > a {
            color: ${prop('theme.header.navigationTextHover')};
            font-weight: bold;
          }
        }
      }
    `
})}
  `

export const CollectionContent = styled.div`
padding-left: 25px;
border-left: 1px solid #F0F0F0;
margin: 57px 0 30px auto;
min-width: 220px;
width: 387px;

h1{  
  font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-Light', sans-serif !important`};
  font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Light', serif !important`};
  font-family: ${parseInt(process.env.BRAND_ID) === 3 && `'BMWGroup-Light', sans-serif !important`};
  font-size: 30px;
  line-height: 35px;
  align-items: center;
  color: #000000;
  font-weight: lighter;
  margin-top: 0;
  margin-bottom: 30px;
  text-transform: none;
}
a{
  color: #000000!important;
}
`

export const CollectionList = styled.div`
margin-top: 13px;
display: flex;
margin-bottom: 13px;
flex-direction: column;
a{
  margin-bottom: 13px;
  font-weight: bold;
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  ${parseInt(process.env.BRAND_ID) === 2 && `font-weight: 600`};
  &:first-letter{
    text-transform: uppercase;
  }
  &:hover{    
    font-size: 15px;
  }
}

`

