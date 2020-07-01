import styled, { css } from 'styled-components'
import { media } from '../../..'

export const Grid2Column = styled.div`
display: grid;
grid-template-columns: 100px 100px;
grid-auto-rows: 55px;
grid-gap: 15px;
padding-top: 20px;
  .itemGender{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    border: 0.5px solid;
    border-color:${parseInt(process.env.BRAND_ID) === 1 ? '#ffffff' : '#1C69D4'};
    box-sizing: border-box;
    background: transparent;  
    transition: all .3s ease-in;
    p{
      cursor: pointer;
      font-weight: bold;
      font-size: 12px;
      color:${parseInt(process.env.BRAND_ID) === 1 ? '#ffffff' : '#000000'};
      &:last-child{      
      margin-top: 5px;
      }
    }
    &--selected,
    &:hover{
    border-color:${parseInt(process.env.BRAND_ID) === 1 ? '#ffffff' : '#1C69D4'};
    background: ${parseInt(process.env.BRAND_ID) === 1 ? '#ffffff' : '#1C69D4'};
    p{
      color:${parseInt(process.env.BRAND_ID) === 1 ? '#333333' : '#ffffff'};
    }
    }    
  }

  .content-sizes-tire{
    background:red;
  }
`
export const ContentSelect = styled.div`
margin-top: 0;
margin-bottom: 25px;
  display: flex;
  justify-content: space-between;
select{

	background: url('data:image/svg+xml;utf8,<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6 6L11 1" stroke="black" stroke-linecap="round" stroke-linejoin="round"/></svg>') no-repeat 95% 50%;
  -moz-appearance: none; 
	-webkit-appearance: none; 
	appearance: none;

background-color: #ffffff;
border: 1px solid;
color: #6C6C6C;
padding-left: 8px;
border-color:${parseInt(process.env.BRAND_ID) === 1 ? '#ffffff' : '#E5E5E5'};
width: 80px;
box-sizing: border-box;
height: 25px;
font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-Light', sans-serif !important`};
font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Regular', serif !important`}; 
font-family: ${parseInt(process.env.BRAND_ID) === 3 && `'BMWGroup-Light', sans-serif !important`}; 
}
option{
  cursor: pointer;
  font-size: 12px;
}

${media.lessThan('tablet')`
margin-right: 20px;
flex-direction: column;
select{
  width: 50%;
  margin: auto;
  margin-bottom: 20px;
}
`}  
`

