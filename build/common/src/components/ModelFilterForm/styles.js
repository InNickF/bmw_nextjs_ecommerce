import styled from 'styled-components'
import { prop } from 'styled-tools'

import media from '../../themes/media'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  ${media.lessThan('tablet')`
  width: 100%;
    display: block;
  `}
  > button {
    margin-top: -15px;
    margin-left: 2rem;
    ${media.lessThan('tablet')`
      margin: 0;
      margin-bottom: 1rem;
      font-size: ${prop('theme.font.sizes.small')};
    `}
  }
  form {
    /* border-right: thin solid #979797; */
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${media.lessThan('tablet')`
      padding: 0;
      display: block;
      height: auto;      
      margin-bottom: 0;
      border: none;      
      text-align: center;
      padding: 0;       
    `}
    .mobileButton {
      display: block
      margin-bottom: 1rem;
      text-align: center;
      button {
        width: 180px;
        max-width: 100%;
      }
      ${media.greaterThan('tablet')`
        display: none;
      `}
    }
    .fields {
      display: flex;
      align-items: center;
      text-align: center;
      text-align-last: center;
      flex: 1;
      ${media.lessThan('tablet')`
      display: block;
      background: transparent;      
      `}
      select {
        font-size: 24px;
        option{
          cursor: pointer;
          font-size: 14px;
        }
        background: transparent;
        height: 45px;
        width: 161px;
        margin: 0 10px;
        font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-Light', sans-serif !important`};
        font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Regular', serif !important`}; 
        font-family: ${parseInt(process.env.BRAND_ID) === 3 && `'BMWGroup-Light', sans-serif !important`}; 
        ${media.lessThan('tablet')`
          margin: ${prop('theme.spacing.small')} 0;
          width: 100%;

        `}
      }
    }
  }
  .font-year {
    form select{
    font-size: 28px;
    }
  }

  ${media.lessThan('tablet')`
  .responsive{
    display:grid!important;
    row-gap: 5px;
    grid-template-columns: ${parseInt(process.env.BRAND_ID) === 2 ? '1fr 1fr' : '1fr 1fr 1fr'}; 
    grid-template-rows: 1fr;
  }
  .flex-btn-container{
    display: flex;
    margin-top: 5px;
  }
  `}
  `

export const SelectContainer = styled.div`
background: #EEEEEE;
text-align: center;
height: 83px;
padding: 10px;
box-sizing: border-box;
label{
  font-size: 14px;
  margin-right: 10px;
  display: block;
}
select option{
  font-size: 14px;
}
`
export const SelectWrapper = styled.div`
>div{
  width: 30%;
  display:inline-block;
}
${media.greaterThan('tablet')`
width:100%;
`}
`

export const SubmitButton = styled.button`
  background: ${parseInt(process.env.BRAND_ID) === 3 ? 'rgb(28, 105, 212)' : '#000000'};    
  height: 83px;
  flex-direction: column;
  text-align: left;
  grid-column: 2 / 4;
  grid-row: 2;
  cursor: pointer;  
  color: white;
  padding: 0 12px;
  align-items: flex-start;
  justify-content: center;  
  font-size: 12px;
  display: flex;
  span{
    display: block;
    margin-top: 5px;
  }
  &:hover {
    opacity: 0.8;
  }
  ${media.greaterThan('tablet')`
  display: flex;
  `}
  ${media.lessThan('tablet')`    
  width: 100%;    
  `}
  `
export const ClearButton = styled.button`
  background: #d7d7d7;
  height: 83px;
  flex-direction: column;
  cursor: pointer;  
  color: #878787;
  font-size: 10px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  display: flex;
  svg{
    fill: #878787;
  }
  span{
    margin-top: 5px;
    text-transform: capitalize;
    display: block;
  }
  &:hover {
    opacity: 0.8;
  }
  
  ${media.lessThan('tablet')`
    width: 83px;
    background: #F0F0F0;
    flex: none;
  `}
  ${media.greaterThan('tablet')`
    display: flex;
  `}
`
export const SaveModel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${prop('theme.spacing.small')};
  margin-bottom: ${prop('theme.spacing.small')};
  input {
    margin-right: ${prop('theme.spacing.small')};
  }
  ${media.greaterThan('tablet')`
    margin: 0;
    margin-top: -16px;
  `};
`
