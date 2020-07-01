import styled from 'styled-components'
import { prop, ifProp, ifNotProp, switchProp } from 'styled-tools'
import { media } from '../common'

export const Navigation = styled.div`
${media.greaterThan('tablet')`
right: 40px;
position: absolute;
top: 0;
width: 100%;
`};
`
export const ProductsPage = styled.div`
background:  white;
.breadcrumbs {  
  margin-left: 25px;
  display: flex;
  align-items: center;    
  }
  .color{
    label{
      display: inline-block;
      border-radius: 0px;
      color: #6D6D6D;
      min-width: 20px;
      height: 25px;
      border: 1px solid #DDDDDD;
      padding: 3px 3px 0px 3px;
      text-align: center;
      cursor: pointer;
    }
    input{
      display:none;
    }  
    input:checked + label{
      border-radius: 0px;
      border-width: 3px;
      border-style: solid;
      border-color: ${process.env.BreadStep != 2 ? '#0066b1' : '#000'} ;
    }
  }
  .bold{
    font-size: 1.1rem;
    color: #000;
    font-weight: bold;
  }
  .scale{
    label{
      display: inline-block;
      background-color: white;
      margin: 5px;
      border-radius: 4px;
      color: #6D6D6D;
      min-width: 20px;
      height: 20px;
      border: 1px solid #DDDDDD;
      padding: 3px 3px 0px 3px;
      text-align: center;
      cursor: pointer;
    }
    input{
      display:none;
    }  
    input:checked + label{
      background-color: rgb(221, 221, 221);
      border-radius: 4px;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(109, 109, 109);
      border-color: rgb(109, 109, 109);
    }
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 53px;
    height: 25px;
    min-width: 43px;
  }
  
  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: ${parseInt(process.env.BRAND_ID) === 3 ? '#1C69D4' : '#000000'};
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
  }
  
  input:checked + .slider:before {
    -webkit-transform: translateX(18px);
    -ms-transform: translateX(18px);
    transform: translateX(18px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
  .runflatFilter {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0 2rem 0;
    .title{
      color: #000000;    
      position: relative;
      font-weight: bold;
      font-size: 1.2rem;
      width: 100%;
      display: block;
      cursor: pointer;
    }
  }
  ${media.lessThan('tablet')`
  .breadcrumbs {
    display: none;
  }
  `};
  `
export const Separator = styled.div`
height: 60px;

  ${media.lessThan('tablet')`${
    parseInt(process.env.BRAND_ID) !== 2 && `display: none`
    }`};

`

export const ListProducts = styled.div`
  height: auto;
  overflow: visible;
  margin-bottom: 35px;
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
  `
export const ProductsPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  .text-header{
    margin-left: 25px;
  h3{
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;   
  color: #000000;    
  width: auto;
  margin: 20px 0;
  text-transform: uppercase;
}
}
.filter-header{
  display: flex;
  align-items: flex-end;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: flex-end;
}
&.tiresHeader{
  justify-content: flex-start;
 .text-header{
  width: 295px;
 } 
}
${media.lessThan('tablet')`
flex-direction: column;
margin-top: 30px;
.text-header{
  margin-top: 20px;
  margin-left: 5px;
  padding-left: 12px;
  padding-right: 10px;
  h3{
    font-size: 24px;  
    margin: 5px 0;
    margin-bottom: 20px;
    padding-right: 5px;
    line-height: 1em;
  }
}
`}
.show-responsive{
  display: flex;
  align-items: center;
}
.hide-responsive{
  display: none;
}
.div-flex{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
${media.greaterThan('tablet')`
.show-responsive{
  display: none;
}
.hide-responsive{
  display: inline-block;
}
`};
`

export const HeaderContainer = styled.div`
position: relative;
margin-top: 48px;
${media.greaterThan('tablet')`
margin-top: 0;
`}
`

export const CoverCategory = styled.header`
background: url(${prop('image')}) no-repeat;
background-size: 100% 100%;
height: 218px;
display: flex;
justify-content: flex-end;
align-items: center;
h2 {
  color: ${prop('theme.colors.white')};
  font-size: 1rem;
  font-weight: bold;
  margin: 0 0 0 30px;
  ${prop('theme.font.family.condensed')};
}
${media.lessThan('mobile')`
height: 90px;
margin-top: -49px;
justify-content: flex-start;
h2 {
  margin: 75px 0 0 15px;
  font-size: 17px;
}
`};
${media.between('mobile', 'tablet')`
height: 160px;
margin-top: -49px;
justify-content: flex-start;
h2 {
  margin: 102px 0 0 25px;
  font-size: 150%;
}
`};
${media.between('tablet', 'medium')`
height: 215px;
justify-content: flex-start;
h2 {
  margin: 130px 0 0 35px;
  font-size: 250%;
}
`};
${media.between('medium', 'desktop')`
height: 275px;
justify-content: flex-start;
h2 {
  margin: 150px 0 0 35px;
  font-size: 300%;
}
`};

${media.greaterThan('desktop')`
height: 320px;
justify-content: flex-start;
h2{
  margin: 170px 0 0 40px;
  font-size: 340%;
}
`};
`

export const SectionContainer = styled.div`
.Collapsible{
  p{
    margin: 10px 0;
    font-size: 0.9rem;
    -webkit-text-decoration: none;
    text-decoration: none;
    margin-bottom: .5rem;
    line-height: 19px;
  }
}
.Collapsible__trigger{
  color: black;
  position: relative;
  font-weight: bold;
  font-size: 1.2rem;
  width: 100%;
  display: block;
  cursor: pointer;
  padding: 0 0 1rem;
}

.Collapsible{
  margin: 1rem 0;
  .is-closed::after{
    content: url('data:image/svg+xml;utf8,<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 7L7 1.00012L1 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>');
    position: absolute;
    right:5px;
    transform: rotate(180deg);
    transition: .5s all;
  }
  .is-open::after{
    content: url('data:image/svg+xml;utf8,<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 7L7 1.00012L1 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>');
    position: absolute;
    right: 5px;
    transition: .5s all;
  }
}


}
${media.greaterThan('tablet')`  
display: flex;
justify-content: space-between;
`};
${media.lessThan('tablet')`  
.filter-responsive-categories{  
  top: 0;
  position: fixed;
  z-index: 3;
  width: 100vw!important;
  height: 100vh;
  padding-right: 0!important;
  overflow-x: hidden;
  padding-bottom: 60px!important;
  padding-top: 60px!important;
}
`};
`
export const BreadStep = styled.div`
font-family: "BMWGroup-Light",sans-serif;
color:  ${prop('theme.colors.main')};
font-weight: lighter;
font-stretch: condensed;
padding: 0;
font-size: 15px;
a{
  display:inline-block;
  text-decoration: none;
  text-transform: lowercase;
  &:first-letter{
    text-transform: uppercase;
  }
}
a:last-of-type {
  font-weight: 900;
}
span{
  font-weight: bold;
  margin: 0 5px
}
`

export const BtnCloseModalFilter = styled.div`
display: none;

${media.lessThan('tablet')`
display: block;
bottom: 0;
left: 0;
position: fixed;
button{
  height: 50px;
  width: 100vw;
|
}
`}
`

export const CategoriesContainer = styled.div`
display: none;
transition: all 1s ease;
/* max-height: calc(100vh - 70px - 20px - 131.2px); */
overflow: auto;
padding-bottom: 1em;  

font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Sans-Regular', sans-serif !important`};

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

>h2{    
  font-size: 36px;
  margin: 20px 0;
  font-weight: bold;
}
h2{
  text-transform: lowercase;
  &::first-letter{
    text-transform: uppercase;
  }
}
${props => props.hiddenContainer ? `
opacity: 0;
width:0px!important;
transition: all .5s ease;
padding: 0!important;
overflow: hidden;
`: ``}
${props => props.isTires ? `
`: ``}

${media.lessThan('tablet')`
box-shadow:0px 0px 10px 5px rgba(0,0,0,0.05);
overflow: visible;

${props => props.hiddenContainer ? ` 
display: flex;
opacity: 1;
flex-direction: column;
width: 300px!important;
box-sizing: border-box;
position: absolute;
z-index: 1;
background: white;
padding: 15px 30px!important;
`: ``}
`};

${media.greaterThan('tablet')`    
box-sizing: border-box;
padding-left: 25px;
display: block;    
width: 295px;
`};

.Collapsible__contentOuter{
  >div>a,
  >div>p{
    &:first-letter{
      text-transform: uppercase;
    }      
  }
}
.filter-header-responsive{
  display: none;
}

${media.lessThan('tablet')`
.filter-responsive-overlay{
  content: '';
  position: absolute;
  top: -100%;
  left: 0;
  background: rgba(255,255,255, 0);
  right: -101%;
  bottom: 0;
  width: 0;
  height: 1000%;
  z-index: -1;
}

.filter-header-responsive{
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  padding-bottom: 10px; 
  color: #000000;
  margin-right: 10px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
  background: #fff;
  left: 0;
  padding: 0 30px;
  box-sizing: border-box;
button{
  background: transparent;
}

  &:before{
    content: '';
    position: absolute;      
    left: -50px;
    background: #F8F8F8;
    right: 0;
    bottom: 0;
    height: 1px;
  }
}
`}
${media.lessThan('tablet')`
.lbl-toggle{
  margin-bottom: 1em;    
}  

.lbl-toggle,
.Collapsible__trigger{
  height: 50px;
  background: #F8F8F8;
  width: 100%;
  padding:0;
  display:flex;
  align-items: center;
  box-sizing: border-box;
  &:before{
    content: '';
    width: 300px;
    height: 50px;
    position: absolute;
      z-index: -1;
      left: -30px;
      top: 0;
      background: #F8F8F8;
    }
  }  
  `};
  `
export const FiltersContainerList = styled.div`
  
  ${media.lessThan('tablet')`
  .Collapsible{
    margin-top: 0;
  }
  .Collapsible__trigger{
    height: 50px;
    background: #F8F8F8;
    width: 100%;
    padding:0;
    margin-bottom: 1rem;
    display:flex;
    align-items: center;
    box-sizing: border-box;
  }  
  `};
  `


export const Showing = styled.div`
  font-size: 12px; 
  color: #8F8F8F;
  grid-area: product;
  ${media.lessThan('tablet')`
  margin-right: 15px;
  `};
  `

export const ProductsContainer = styled.div`
  margin-top: 1em;
  text-align: left;
  .product-card {
    &:first-child,
    &:nth-child(2),
    &:nth-child(3) {
      margin-top: 0;
    }
  }
  ${media.greaterThan('tablet')`
  margin-left: 2rem;
  flex: 1;
  `};
  ${media.lessThan('tablet')`
  margin-left: 0rem;
  flex: 1;
  width: calc(100% - 10px);
  margin: auto;
  > div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .product-card{
    width: 100%;
    height: 260px;
    margin-right: 12px;
    img{
      width: 100%;
      height: auto;
    }
    &:last-child{
      margin-right: 0;
    }
    ${media.lessThan('tablet')`
    height: 270px;
  `};
  }
  `};
  `

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  grid-area: order;
  > span {
    font-size: ${prop('theme.font.sizes.small')};
    vertical-align: middle;    
    width: auto;
  }
  .select {
    width: 150px;
    font-weight: bolder;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    margin: ${prop('theme.spacing.huge')} auto;
    margin-left: ${prop('theme.spacing.smaller')};
    border: none;
    background: transparent;
    >div{
      font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-Bold', sans-serif !important`};
      font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Bold', serif !important`};
      font-family: ${parseInt(process.env.BRAND_ID) === 3 && `'BMWGroup-Bold', sans-serif !important`};
      justify-content: center;
      span{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  select{  
    &::placeholder{
      font-size: 11px;
      font-weight: bolder;
      color: red;
    }
    font-weight: bolder;
    font-size: 14px;
    cursor: pointer;
    option:checked { display:none; }
  }
  ${media.lessThan('tablet')`
  select{
    font-size: 16px!important;
  }
  .select{
    >div span{
      max-width: 120px;
    }
  }
  > span {
    font-size: 12px;
  }  
  `}
  
  ${media.greaterThan('tablet')`
  .select {
    margin: 0;
    width: auto;
    padding-right: 2em;
  }
  &.gender-filter {
    display: none;
    .select{
      min-width: 100px;
    }
  }
  `};
  `
export const FilterContainer = styled.div`
  display: flex;  
  align-items: center;
  justify-content: flex-end;
  >div{
    margin-left: 36px;
  }
  >button{
    margin-left: 36px;
  }
  h2{    
    display:none;
    font-size: 36px;
    margin: 20px 0;
    font-weight: bold;
    grid-area: category;
  }
  h2{
    text-transform: lowercase;
    &::first-letter{
      text-transform: uppercase;
    }
  }
  
  ${media.lessThan('tablet')`
  display: flex;
  border-top: 0.5px solid #DCDCDC;    
  margin-bottom: -20px;
  margin-left: 0;
  .gender-filter{
    display: none;
  }
  `};
  `

export const FilterButton = styled.button`
  background: transparent;
  display: flex;
  cursor: pointer;
  align-items: center;
  grid-area: filter;
  span{
    margin-right: 10px;
    color: #000000;
    font-size: 12px;
    text-transform: capitalize;
  }
  `
export const TopNavigation = styled.div`
  display: flex;
  align - items: center;
  justify - content: flex - end;
  
  ${media.greaterThan('tablet')`
  justify-content: space-beetween;
  `};
  `

export const PaginationWrapper = styled.div`
  font-weight: lighter;
  ${ prop('theme.font.family.condensed')};
  text-align: center;
  a {
    color: ${ prop('theme.colors.textColor')};
    text-decoration: none;
    font-weight: lighter;
    padding: 4px;
    ${ prop('theme.font.family.condensed')};
  }
  ul {
    display: flex;
    justify-content: center;
    list-style-type:none;
    li {
      list-style: none;
    }
  }
  .active-page {
    a {
      pointer-events: none;
      ${ prop('theme.font.family.title')};
    }
  }
  `

export const NoProducts = styled.div`
  flex: 1;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;  
  font-size: ${ prop('theme.font.sizes.bigger')};
  ${ prop('theme.font.family.title')};
  `

export const FilterHaderTires = styled.div`
overflow: hidden;
margin-bottom: 30px;
margin-top: 20px;
${media.lessThan('laptop')`
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 0;
`};
`


export const ListTireBrands = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img{    
    transition: all ease .5s;
    cursor: pointer;
    opacity: .5;
    height: 30px;
    width: 137px;
    object-fit: contain;
  }
>div:last-of-type{
  display: none;
}
  .selected-brand{
    opacity: 1;
  }
  ${media.lessThan('laptop')`    
  overflow-x: auto;
    img{
      width: 110px;
    }
`};
`
export const SeparatorBrand = styled.div`
opacity: 0.1;
background: #000000;
width: 1px;
height: 20px;
margin-right: 5px;
margin-left: 5px;
flex: 1 1;
padding-right: 1px;
`

export const TireFilterTag = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 12px;
  justify-content: flex-start;
  color: #ffffff;
  margin-right:17px;
  padding: 0 11px;
  padding-right: 30px;
  overflow: auto;
  max-width: 137px;
  height: 30px;

::after {
  content: url('data:image/svg+xml; utf8,<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 0.805714L7.19429 0L4 3.19429L0.805714 0L0 0.805714L3.19429 4L0 7.19429L0.805714 8L4 4.80571L7.19429 8L8 7.19429L4.80571 4L8 0.805714Z" fill="white" />
  </svg>');
  position: absolute;
  right: 5px;
  transform: rotate(180deg);
  transform-origin: center;
  display: inline-block;
  vertical-align: middle;
  transition: transform .2s ease-out;
}

  ${parseInt(process.env.BRAND_ID) === 3 ?
    `background: rgb(28, 105, 212);` :
    parseInt(process.env.BRAND_ID) === 2 ?
      `background: #000000;` :
      `background: #ffffff;  
    color: #000000;
    path{
      fill: #000000;  
    }`
  }
  
  ${media.lessThan('laptop')`    
  padding-right: 20px;
`};
  `

export const ListTireFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  margin-bottom: 35px;
  .clear-filter-tires{
    width: 30px;
    justify-content: center;
    padding: 0;
    background: #ffffff;
    height: 30px;
    border: 1px solid #000000;
    margin-right: 20px;
    ::after {
      content: '');
    }
  }
`