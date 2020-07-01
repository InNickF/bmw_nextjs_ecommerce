import styled, { css } from 'styled-components'
import { media } from '../common'
import { prop, ifProp } from 'styled-tools'

export const UsedCarContainer = styled.div`
display:grid;
grid-template-columns: 25% 75%;
grid-gap: 40px;
margin-top: 50px;
  ${media.lessThan('tablet')`
  grid-template-columns: 100vw;
grid-gap: 5px;

  `}
`
export const UsedCarNavBar = styled.div`
margin-left: 40px;
.Collapsible{
  margin-bottom: 30px;
  .Collapsible__trigger{
    font-weight: 600;
    font-size: 16px;    
    color: #000000;
    padding-bottom: 10px;
    display: block;
    position: relative;
    cursor: pointer;
  }
  .is-closed::after{
    content: url('data:image/svg+xml;utf8,<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 7L7 1.00012L1 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>');
    position: absolute;
    right:0;
    transform: rotate(180deg);
    transition: .5s all;
  }
  .is-open::after{
    content: url('data:image/svg+xml;utf8,<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 7L7 1.00012L1 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>');
    position: absolute;
    right:0;
    transition: .5s all;
  }
  .Collapsible__contentOuter{
    margin-top: 15px;
    height: auto;
  }
  .Collapsible__contentInner{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .flex-chair{
    display: flex;
    >div{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      width: 32px;
      font-size: 12px;
      border: 0.5px solid #1C69D4;
      box-sizing: border-box;
      color: #858585;
      margin-right: 5px;      
    }
    .selected{
      background: #1C69D4;
      color: #ffffff;
    }
  }
  .grid-placa{
    display:grid;
    grid-template-columns: repeat(5, 32px);
    grid-auto-rows: 32px;
    grid-gap: 5px;
    button{
      cursor: pointer;
      background: transparent;
      border: 0.5px solid #1C69D4;
      box-sizing: border-box;      
      font-weight: normal;
      font-size: 12px;      
      color: #858585;
    }
    .selected{
      background: #1C69D4;
      color: #ffffff;
    }
  }
}

.header-title{
  font-weight: bold;
  font-size: 36px;
  margin-top: 15px;
  margin-bottom: 35px;
  display: flex;
  align-items: center;
  color: #000000;
}
  ${media.lessThan('tablet')`
  display: none;
  `}
`
export const ColorSquares = styled.div`
display: grid;
grid-template-columns: repeat(6, 20px);
grid-auto-rows: 20px;
grid-gap: 15px;
`
export const ColorSquare = styled.div`  
  background: ${prop('color')};
  box-sizing: border-box;
  ${ifProp(
  'bordered',
  css`
    border: 1px solid #000;    
        `
)}
`

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
`
export const YearTabs = styled.div`
width: 100%;
div{
  box-sizing: border-box;
}
.react-tabs__tab-list{
  display: flex;
  list-style-type: none;
  margin-bottom: 18px;
}
.react-tabs__tab{
  cursor: pointer;
  position: relative;
  padding: 5px 10px;
  margin-right: 5px;
  border: 1px solid #1C69D4;
  font-size: 12px;
  color: #000000;
  &::after{
    content:'';
    display: inline-block;
    
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid currentColor;
    vertical-align: middle;
    margin-left: .7rem;  
    
    transition: transform .2s ease-out;    
    transform: rotate(90deg);
    transition: .5s all;
  }
    &--selected{
    background: #1C69D4;
    color: #ffffff;
  }
}

.react-tabs__tab + .react-tabs__tab--selected::after {
  display: inline-block;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid currentColor;
  vertical-align: middle;
  margin-left: .7rem;  
  
  transition: transform .2s ease-out;    
  transform: rotate(270deg);
  transition: .5s all;
}
.react-tabs__tab-panel {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-auto-rows: 30px;
  transition: all ease 1s;
  >button{
    cursor:pointer;
    background: transparent;
    font-size: 12px;
    color: #000000;
    &:first-child,
    &:hover{
      font-weight: bold;
      color: #1C69D4;
    }
  }    
}
`

export const UsedCarGridItem = styled.button`
background: transparent;
border: 0.5px solid #1C69D4;
box-sizing: border-box;
display: flex;
flex-direction: column;
  justify-content: center;
  align-items: center;
img{
  width: 70px;
  height: 33px;
  object-fit: cover;
  filter: grayscale(1);
}
p{
  font-size: 8px;
  margin-top: 6px;
}
.paired-items{
  display: flex;
  justify-content: center;
  align-items: center;
  span{
    font-size: 8px;
    margin: 0 10px;
  }
}
`
export const UsedCarsContent = styled.div`
.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 17px 40px;
  width: calc(100vw - 37px);
  h2{    
    font-weight: bold;
    font-size: 32px;    
    color: #000000;
  }
  p{
    font-weight: 500;
    font-size: 12px;
    color: #8F8F8F;
  }
}
.data-footer{
  font-weight: 500;
  font-size: 12px;  
  text-align: center;
  color: #8F8F8F;
}

.hide-mobil{
  ${media.greaterThan('tablet')`
  display: none;
  `}
}
`
export const UsedCarsSearch = styled.div`
  ${media.lessThan('tablet')`
  width: 80%;
  margin: auto;
  `}
}
`
export const UsedCarFiltersContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
>div{
  margin-right: 45px;
  &:last-child{
    margin-right: 20px;
  }
  ${media.lessThan('tablet')`
   margin-right: 25px;
  &:last-child{
    margin-right: 0;
  }
  `}
}
  ${media.lessThan('tablet')`
  border-top: 0.75px solid #7B7B7B;
  margin-top: 20px;
  padding-top: 20px;
  `}
`
export const UsedCarFilter = styled.div`
display: flex;
align-items: center;
font-size: 12px;
line-height: 14px;
svg{
  margin-left: 20px;
  fill: #000000;
}
`
export const UsedCarList = styled.div`
display: grid;
width: 90%;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;
margin-top: 45px;
${media.greaterThan('desktop')`
width: 95%;
grid-template-columns: repeat(4, 1fr);
`}
${media.lessThan('tablet')`
grid-template-columns: repeat(2, 1fr);
margin: 20px 5px;
`}
`
export const UsedCarSearchBox = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
input{
  border-bottom: 1px solid #000000;
  background: transparent;
  font-size: 12px;
  line-height: 14px;
  color: #C2C2C2;
  padding: 10px 7px;
  width: 400px;
  margin-left: 15px
}
svg{
  fill: #4B4B4B;
}
  ${media.lessThan('tablet')`
  input{
    border: none;
  }
  border-bottom: 0.75px solid #7B7B7B;  
  `}

`
export const UsedCarTagSearch = styled.div`
display: flex;
margin-top: 25px;
>div:first-child{
  border: 1px solid #000000;
  color: #000000;
  background: transparent;
}
  ${media.lessThan('tablet')`
display: none;
  `}

`
export const UsedCarTags = styled.div`
padding: 10px;
margin-right: 20px;
font-size: 12px;
&:last-child{
  margin-right: 5px;
}
background: #1C69D4;
color: #ffffff;
box-sizing: border-box;
span{
  margin-left: 10px;
}
`
export const UsedCarTotalProducts = styled.div`
font-size: 12px;
line-height: 14px;
text-align: right;
color: #8F8F8F;
  ${media.lessThan('tablet')`
  display: none;
  `}
`

export const UsedCarSelect = styled.div`
display: flex;
font-size: 12px;
justify-content: center;
align-items: center;
color: #000000;
p{
  white-space: nowrap;
}
`

export const UsedCarCard = styled.div`
max-height: 304px;
background: white;
cursor: pointer;
border: 0.5px solid #CBCBCB;
&:hover{
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  position: relative;
  top: -15px;
  border-bottom:  none;
  .hover-data{
    display: block;
  }
  .concecionary-data{
    color: #000000;
  }
}
.hover-data{
  width: calc(100% - 1px);
  box-sizing: border-box;
  margin: auto;
  background: white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  display: none;
  &-colors{
    display: grid;
    position: relative;
    grid-template-columns: 1fr 1fr;    
    text-align: center;
    margin-bottom: 12px;
    &::after{
      content: '';
      width: 95%;
      position: absolute;
      height: 5px;  
      top: -5px;
      left: 2.5%;
      border-top: 0.5px solid #CBCBCB;
    }
    &::before{
      content: '';
      position: absolute;
      width: 95%;
      height: 5px;    
      bottom: -15px;
      left: 2.5%;
      border-top: 0.5px solid #CBCBCB;
    }
  }
  &-color{
    display: flex;
    flex-direction: column;
    p{    
      color: #939393;
      margin: 5px auto;
      font-size: 11px;
    }
    div{
      background: red;
      height: 25px;
      width: calc(100% - 20px);
      margin: 0 10px;
    }
  }
  &-transmision{
    text-align: center;
    margin-top: 20px;
    padding-bottom: 10px;    
    font-size: 11px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      margin-right: 5px;
    }
  }
}
`
export const UsedCarName = styled.div`
display: flex;
justify-content: space-between;
margin: 10px 8px;
p{
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  &:last-child{
    font-weight: normal;
    font-size: 12px;
    text-align: right;
    color: #929292;
  }
}
${media.lessThan('tablet')`
flex-direction: column-reverse;
justify-content: space-between;
p{
  &:last-child{
    font-size: 8px;
    text-align: left;
  }
}
`}
`
export const UsedCarData = styled.div`
display: flex;
margin-top: 20px;
${media.lessThan('tablet')`
margin-bottom: 20px;
`}
`

export const UsedCarItem = styled.div`
flex: 50%;
p{
  font-weight: normal;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #939393;
  &:last-child{
    margin-top: 12px;
    font-weight: bold;
    font-size: 16px;
    
    color: #000000;
  }
}
${media.lessThan('tablet')`
p{
  font-size: 10px;
  &:last-child{
    font-size: 14px;
  }
}
`}
`

export const UsedCarUbication = styled.div`
display: flex;
position: relative;
svg{
  fill: #A8A8A8;
  margin: 0 10px;
}
font-weight: normal;
font-size: 11px;
line-height: 13px;
display: flex;
align-items: center;

color: #A8A8A8;
div{
  margin: 15px 0;
}
&::before{
  content: '';
  position: absolute;
  width: 95%;
  height: 5px;    
  top: 8px;
  left: 2.5%;
  border-top: 0.5px solid #CBCBCB;
}
${media.lessThan('tablet')`
border: 0.5px solid #E3E3E3;
div{
  margin: 5px 0;
}
`}
`