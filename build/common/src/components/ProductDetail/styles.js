import styled, { css } from 'styled-components'
import { prop, ifProp, ifNotProp } from 'styled-tools'
import media from '../../themes/media'
import Icon from '../Icon'

export const Container = styled.div`
background:  white;`

export const Content = styled.div`
display: flex;
${media.lessThan('mobile')`
`};
`

export const Menu = styled.div`
  background: ${parseInt(process.env.BRAND_ID) === 1 ? '#16171A' : 'white'};
  border-radius: 0 4px 4px 0;
  box-shadow: 0 2px 34px 0 #e9e4e4;
  padding-bottom: ${props => props.theme.spacing.bigger};
  padding-top: ${props => props.theme.spacing.bigger};
  width: 25%;
  ${media.lessThan('mobile')`
    display: none;
  `};
`
export const SizeGuide = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -30px;
  .guideSize {
    height: 80vh;
    width: 70vw;
  }
  .guideSizeResponsive{
    height: 400px;
    width: 100%;
  }
${media.lessThan('tablet')`
  .guideSize {
    display: none;
  }
`}
${media.greaterThan('tablet')`
  .guideSizeResponsive {
    display: none;
  }
`}
`

export const BreadcrumbsContainer = styled.div`
  ${media.greaterThan('mobile')`
    margin: 0 auto;
    width: 70%;
  `};
  ${media.lessThan('tablet')`
    display: none;
  `};
`

export const Reference = styled.div`
  margin-bottom: ${props => props.theme.spacing.big};
  > span {
    display: block;
    ${props => props.theme.font.family.condensed};
    font-size: ${props => props.theme.font.sizes.small};
  }
`

export const ShortDescription = styled.p`
  font-size: ${props => props.theme.font.sizes.small};
  margin-bottom: ${props => props.theme.spacing.huge};
`

export const Sheet = styled.div`
margin-bottom: 20px;
>h1{
  font-size: 36px;
}
> h6 {
  font-size: 10px;
  line-height: 12px;
  font-family: ${props => props.theme.font.family.text}
  margin: 0px 0px 10px 0px;
  font-weight: bold;
  color: #929292;
  a.anchor {
    color: ${prop('theme.colors.main')};
    cursor: pointer;
  }
}
> svg {
  cursor: pointer;
}
> p {
  ${props => props.theme.font.family.normal};    
  font-size: 10px;
  line-height: 12px;
    text-align: justify;
    max-width: 370px;
    &.center {
      display: flex;
      align-items: center;
      a {
        color: ${prop('theme.colors.main')};
        cursor: pointer;
        border-bottom: thin solid ${prop('theme.colors.main')};
        margin-left: 4px;
      }
    }
  }

${media.lessThan('tablet')`
>h1{
  font-size: 26px;
  line-height: 30px;
} 
  margin-left: 12px;
  margin-right: 8px;

`};

`

export const ItemDataProduct = styled.div`
margin-bottom: 20px;
h6{
  margin-bottom: 10px;
  font-size: 10px;
  line-height: 12px;
  color: #929292;
}
p{
  font-size: 10px;
  line-height: 12px;
  color: #000000;
}

${media.lessThan('tablet')`
display: none;
`};
`

export const Attr = styled.div`
  font-size: ${props => props.theme.font.sizes.big};
  margin-bottom: ${props => props.theme.spacing.big};
  > h6 {
    margin: 0px 0px 10px 0px;
    font-weight: bold;
    ${process.env.BRAND_ID == 1 ? 'color: #929292;!important' : ''}
    a.anchor {
      color: ${prop('theme.colors.colorSize')};
      cursor: pointer;
    }
  }
  > span {
    font-size: ${props => props.theme.font.sizes.small};
  }
  ${media.lessThan('tablet')`
  margin: 0 10px;
  >h6, >p{
    font-size: 10px;
  }
  `};
`

export const ColorsList = styled.div`
  margin: 10px 0px;
`

export const ColorItem = styled.div`
  background-color: white;
  position: relative;
  border-radius: 50%;
  display: inline-block;
  margin: 0px 5px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  ${ifProp(
  'image',
  css`
      background-image: url(https://autogermana.s3.amazonaws.com/static/images/${prop('color')});
      background-size: 100% 100%;
      background-repeat: no-repeat;
      background-position: 0px 1px;
    `
)}
  ${ifNotProp(
  'image',
  css`
      > div {
        position: absolute;
        background-color: ${props => props.color};
        height: 25px;
        width: 25px;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `
)}
  ${props =>
    props.active
      ? 'border: 1px solid gray'
      : '-webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);' +
      '-moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);' +
      'box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);'};
`

export const Available = styled.div`
  margin-bottom: ${props => props.theme.spacing.big};
  color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'};
  span {
    font-size: 14px;
    display: inline-block;
    margin-right: 0.2rem;
    vertical-align: middle;
    margin-left: 5px;
 /*    &:first-child {
      background-color: ${props => props.color || '#D0021B'};
      border-radius: 50%;
      height: 15px;
      width: 15px;
      vertical-align: bottom;
    }
    &:last-child { */  
    /* } */
  }
`

export const Info = styled.div`
  margin-bottom: ${props => props.theme.spacing.big};
  > div {
    display: inline-block;
  }
  p {
    font-size: ${props => props.theme.font.sizes.small};
    margin-left: ${props => props.theme.spacing.small};
    width: 70%;
    display: inline-block;
    vertical-align: top;
  }
`

export const Detail = styled.div`
width: 100%;
background: white;

font-weight: bold;
h1 {
  ${props => props.theme.font.family.title};
  font-size: 36px;
  text-transform: uppercase;      
  width: 100%;
  font-weight: bold;
  margin-bottom: 15px;  
  color: #000000;
}

h1,p,li{
  color: #000000;
}
${media.greaterThan('tablet')`
h1 {  
  margin-top: 8px;
}
`}
${media.lessThan('tablet')`
  margin: 0 auto;
  h1 {
    font-size: 26px;
    text-align: left;      
    }
  `};
  .frequent-responsive-container{
    display: none;
    ${media.lessThan('tablet')`
    display: block;
    margin-top: 55px;
    margin-right: 12px;
    margin-left: 12px;
    h3{
      font-size: 26px;
      line-height: 30px;
      color: #000000;

    } 
  `}
}
`

export const InfoContainer = styled.div`
  margin: 0 auto;
  width: 35%;
  display: inline-block;

  .Collapsible{  
    .Collapsible__trigger{
      color: #929292;
      font-size: 12px;
      border-bottom: 0.5px solid #DEDEDE;
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
  }
  .collapsible-responsive{
    display: none;
  }

  ${media.lessThan('tablet')`
  width: 100%;
  margin-top: 30px;
  h1:first-of-type {
    margin-top: 10px;
    width: 95%;
  }
  .Collapsible >span{
    margin: 0;
  }

  .Collapsible, Collapsible__contentOuter{    
    margin-left:12px;
    margin-right:12px;
  }

  .collapsible-responsive{
    display: block;
    margin-bottom: 25px;
    p{
      margin-top: 17px;
      font-size: 10px;
      line-height: 12px;          
      color: #000000;
    }
  }
  `};

  `

export const SliderContainer = styled.div`
  width: 100%;
  ${media.lessThan('mobile')`
  margin-bottom: 140px;
  `};
  `

export const Separator = styled.div`
  border-bottom: thin solid ${props => props.theme.colors.lightgray};  
  width: 30px;
  `

export const DetailActions = styled.div`  
  width: auto;
  @media (max-width: 576px) { 
    width: 100%;
   }
  span {
    margin-left: 6px;
  }
  img {
    display: inline-block;
    height: 20px;
    vertical-align: middle;
    ${media.lessThan('mobile')`
    height: 25px;
    `};
  }
  button {
    box-sizing: border-box;    
    margin-top: 0;
    ${prop('theme.font.family.title')};
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 260px;
    height: 50px;
    &:last-child {
      margin-top: 15px;
      height: 45px;
      padding: 5px 8px 5px 12px;
      color: #000000;
      border: 1px solid;
      border-color: 'black'};
      &:hover{
        color: inherit;
        background: inherit;
      }
    }
    .disabled-style{
      filter: grayscale(1);
      opacity: 0.5;
      cursor: not-allowed;
    }
    ${media.lessThan('tablet')`
    height: auto;
    > span {
      font-size: 0.8rem;
    }
    `}
    
    ${media.greaterThan('desktop')`
      width: 300px;    
    `}
  }
  ${media.lessThan('tablet')`
    button{
      width: 100%;
      &:last-child {
        height: 50px;
      }
    }
  `};
`

export const ContentIcon = styled.div`
  vertical-align: middle !important;
  display: inline-block;
  `

export const ContentSlide = styled.div`
  width: ${props => props.width};
  display: inline-block;
  vertical-align: top;
  ${media.lessThan('mobile')`
`};
  
  ${parseInt(process.env.BRAND_ID) === 1 && `
    .slick-thumb{
      margin-top: 130px !important;
      ${media.lessThan('tablet')`
          margin-top: 0 !important;
      `}
    }
  `};
  .message {
    font-family: 'BMWGroup-Normal',sans-serif;
    font-weight: bold;
    margin-top: 12px;
    width: 400px;
    font-size: 10px;
    line-height: 12px;
    color: #B1B1B1;
  }

  .slide-product-responsive{
    display: none;    
    .slick-slide{
      height: auto;
      img{
        height: auto;
        object-fit: cover;
      }
    }
    .slick-dots li button:before{
      transform: scale(1.5);
      color:rgba(28, 105, 212, 0.25);
    }
    .slick-dots li.slick-active button:before{      
      color:  #1C69D4;      
    }
  }

  ${media.lessThan('tablet')`
  display: inline-block;
  width: 100%;
  .slide-product-no-responsive{
   display: none;
  }
  .slide-product-responsive{
   display: block;
  }  
  .message {
    display:none;
    font-size: 9px;    
    padding-top: 25px;    
  }
  `};
  `

export const ExpandPanel = styled.div`
  margin: 20px 0px;
  max-width: 600px;
  `

export const ExpandLabel = styled.div`
  display: block;
  padding: 10px;
  border: 1px solid #9b9b9b;
  border-radius: 5px;
  cursor: pointer;
  
  ${props =>
    props.show &&
    'border-bottom-right-radius: 0; border-bottom-left-radius: 0; border-bottom: 0px;'} svg {
      float: right;
      transform: rotate(${props => (props.show ? '180deg' : '0deg')});
      transition: 0.5s;
    }
    `

export const ExpandContent = styled.div`
    height: ${props => (props.show ? '70px' : '0px')};
    overflow: auto;
    transition: 1s;
  border: ${props => (props.show ? '1px solid #9b9b9b' : '0px')};
  border-top: 0;
  border-radius: 5px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  padding: ${props => (props.show ? '5px' : '0px')};
  `


export const ActionProductContent = styled.div`
  display: flex; 
  margin-bottom: 2rem; 
  flex-wrap: wrap;   

  ${media.lessThan('mobile')`
    margin-left: 12px;
    margin-right: 12px;
  `}
`

export const CountLabel = styled.h6`
  color: #929292;
  font-size: 10px;
  line-height: 12px;
  font-weight: bold;
  display: block;
  vertical-align: top;
  margin: 0px 0px 15px 0px;
  span{
    color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#16171A'};
    font-style: italic;
  }
${media.lessThan('mobile')`
  margin-left: 12px;
  margin-right: 8px;
`}
  `

export const CountContent = styled.div`
  display: inline-block;
  vertical-align: super;
  min-width: 130px;
  margin: 0px 20px 5px 0px;
  padding: 15px 0px;
  padding-top: 0;
  `

export const VehiclesContent = styled.div`
  display: block;
  margin: 10px 0px;
  `

export const VehicleItem = styled.div`
  margin: 5px 0px;
  
  div {
    display: inline-block;
    margin: 0px 5px;
    vertical-align: middle;
  }
`

export const CompatibilityActions = styled.div`

`
export const InstalationKit = styled.div`

`

export const CompatibleCar = styled.div`
margin-bottom: 25px;

.actual-car-check{ 
  background: #F8F8F8;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .squaredThree {
    position: relative;
    margin: 0 8px 0 12px;
    &--not{
      input[type=checkbox].css-checkbox { 
        /* position: absolute;  overflow: hidden;  clip: rect(0 0 0 0);  height:1px;  width:1px;  margin:-1px;  padding:0; border:0;  */
      } 
      input[type=checkbox].css-checkbox + label.css-label { 
        /* padding-left:20px; height:15px;  display:inline-block; line-height:15px; background-repeat:no-repeat; background-position: 0 0; font-size:15px; vertical-align:middle; cursor:pointer;  */
      } 
      input[type=checkbox].css-checkbox:checked + label.css-label:after { 
        content: 'x';
        border-color: 'transparent';
        border: none;
        transform: rotate(0deg);
        color: #fff;
        top: 0px;
        left: 6px;
      }
    }
  }
  .squaredThree label {
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    background: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : 'black'};
    border-radius: 2px;
    box-shadow: inset 0px 1px 1px rgba(0, 0, 0, 0.5), 0px 1px 0px rgba(255, 255, 255, 0.4);
  }
  .squaredThree label:after {
    content: '';
    width: 9px;
  height: 5px;
  position: absolute;
  top: 4px;
  left: 4px;
  border: 3px solid #fcfff4;
  border-color: ${parseInt(process.env.BRAND_ID) !== 1 ? 'white' : 'black'};
  border-top: none;
  border-right: none;
  background: transparent;
  opacity: 0;
  transform: rotate(-45deg);
}
.squaredThree label:hover::after {
  opacity: 0.3;
}
.squaredThree input[type=checkbox] {
  visibility: hidden;
}
.squaredThree input[type=checkbox]:checked + label:after {
  opacity: 1;
}

.data-car{
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  margin-left: 8px;
  p:first-child{
    font-size: 14px;
    line-height: 16px;
    color: #898989;
  }
} 
}
.btn-see-list{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  button{
    background: transparent;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    text-decoration-line: underline;      
    color: #000000;
  }
}


`



export const VechicleInfo = styled.div`
${props => props.theme.font.family.title};
`

export const VehicleImg = styled.div`
background-image: url(${props => (props.url ? props.url : '')});
width: 40px;
height: 40px;
background-size: contain;
background-position: center;
background-repeat: no-repeat;
`

export const ContentButtonBuy = styled.div`
float: right;
`

export const ContentCount = styled.div`
display: flex;
vertical-align: middle;
text-align: left;

div {
  display: inline-block;
  font-size: 1.7em;
  ${props => props.theme.font.family.title};
  vertical-align: middle;
  margin: 0px 7px;
  cursor: pointer;
  height: 40px;
  display: flex;
  align-items: center;
  ${process.env.BRAND_ID == 1 ? 'color: #4a4a4a;!important' : 'color: #4a4a4a;!important'}
}


`

export const IconStyle = styled(Icon).attrs(props => ({
  name: props.name,
  width: props.width || 50,
  height: props.height || 50,
  fill: props.fill || 'black'
}))``

export const ModalTitle = styled.h3`
${props => props.theme.font.family.title};
font-size: 1.8rem;
font-weight: bold;
padding-left: ${props => props.theme.spacing.big};
text-align: center;
margin-bottom: 2rem;
${media.lessThan('mobile')`
font-size: 92%;
margin-bottom: 1rem;
margin-top: 1rem;
`}
${media.between('mobile', 'tablet')`
font-size: 130%;
margin-bottom: 1rem;
margin-top: 1rem;
`}
`

export const ModelTable = styled.div`
color: #b1b1b1;
text-align: center;
margin: 0 auto;
width: 100%;
.divTable {
  display: table;
  width: 100%;
}
.divTableHeader {
  display: table-row;
  background: ${prop('theme.colors.main')};
  color: ${prop('theme.colors.mainAccentText')};
}
.divTableRow {
  color: #666666;
  display: table-row;
  ${prop('theme.font.family.condensed')};
  &:nth-child(odd) {
    background: #f7f7f7;
  }
}
.divTableHeading {
  background-color: #eee;
  display: table-header-group;
}
.divTableCell,
.divTableHead {
  display: table-cell;
  padding: 7px 10px;
  font-size: 100%;
}
.divTableBody {
  display: table-row-group;
}
${media.lessThan('mobile')`
.divTableCell, .divTableHead {
  font-size: 60%;
}
`}
${media.between('mobile', 'tablet')`
.divTableCell, .divTableHead {
  font-size: 70%;
}
`}
`
export const ModalSeriesContainer = styled.div`
width: 90vw;
height: 80vh;
max-width: 1350px;

${media.lessThan('tablet')`
width: 80vw;
`}

`

export const SearchContent = styled.div`
margin-top: 20px;
>div{
 position: relative;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  width: fit-content;
}
svg{
  position:absolute;
  left: 10px;
  fill: black;
}

input{
  width: 410px;
  height: 40px;
  border: 1px solid #000000;
  box-sizing: border-box;
  font-size: 12px;
  padding-left: 40px; 
  padding-right: 20px; 
  border-radius: 3px;
  ::placeholder {
    color: #D0D0D0;
  }
}

${media.lessThan('tablet')`
  input{
    width: 80vw;
    margin: auto;
  }
`}


`
export const Title = styled.div`
font-weight: bold;
font-size: 32px;
line-height: 37px;
color: #000000;
margin-top: 70px;
${media.lessThan('tablet')`
  font-size: 28px;
  margin-top: 30px;
`}
`

export const YearList = styled.div`
display: flex;
margin-left: calc(-4em + 22px);
margin-top: 35px;
margin-bottom: 30px;

.difuminated-title{
  margin-right: 15px;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #8A8A8A;
}
${media.lessThan('tablet')`
  overflow: auto;
  margin-top: 20px;
`}
`

export const YearTabItem = styled.div`   
border-box: box-sizing;
  width: fit-content;
  margin-right: 15px;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #000000;
  cursor: pointer;
  padding: 0 5px 2px;

${ifProp(
  'selected',
  css`
    border-bottom: 2px solid #1C69D4;
  `
)}
`
export const SerieCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  ${media.lessThan('tablet')`
  width: 100%;
  justify-content: space-between;
`}
`

export const SerieCard = styled.div`
flex: 0 0 33.333333%;
margin-bottom: 30px;
h3{
  font-weight: bold;
  font-size: 26px;
  line-height: 30px;
  color: #000000;
  margin-bottom: 15px;
}

p{
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  margin-bottom: 10px;
}

${media.lessThan('tablet')`
  flex: 0 0 30%;
  h3{
font-size: 20px;
  }
  p{
    font-size: 12px;
  }
`}
`

export const ContentModels = styled.div`
margin-left: 70px;
${media.lessThan('tablet')`
  margin-left: 0;
`}
`


export const PriceContent = styled.div`
display: flex;
justify-content: space-between;
margin-right: 8px;

${media.lessThan('tablet')`
  margin-left: 0;
`}

color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'};
.price {
  ${prop('theme.font.family.title')};
  font-size: 18px;
  display: flex;
  align-items: center;
  font-weight: 600 !important;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 10px; 
}
.price-discount{
  color: #FF8787;
  font-weight: 100;
  -webkit-text-decoration: line-through;
  text-decoration: line-through;
  font-size: 15px;
  margin-bottom: 5px;
}
.discount-percentage{
  color: #1C69D3;
  font-size: 17px;
  margin-left: 8px;
}
button {
  margin: 0;
  width: 50%;
  height: 50px;
  border-radius: 6px;
  text-transform: lowercase;
  :first-letter{
    text-transform: uppercase;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  ${prop('theme.font.family.title')};
  > span {
    margin-left: 5px;
  }
  ${media.lessThan('tablet')`
  > span {
    display: none;
    font-size: 0.8rem;
  }
  width: 35%;
  min-width: 30px;
    `}
    ${media.between('mobile', 'medium')`
    > span {
      font-size: 13px;
    }
  `}    
`

export const TallasContent = styled.div`
    margin: 10px 0px;
    ${props => props.theme.font.family.condensed};
    font-size: ${props => props.theme.font.sizes.small};
    user-select: none;     
    ${media.lessThan('tablet')`
    font-size: 10px;
    margin: 0 10px;
    display: flex;
  `};
    `

export const TallaItem = styled.div`
    display: inline-block;
    box-sizing: border-box;
    background-color: ${props => (props.selected && props.available ? '#DDDDDD' : 'white')};
    margin: 5px;
    border-radius: 4px;
    color: ${props => (props.available ? '#6D6D6D' : '#DDDDDD')};
    min-width: 20px;
    height: 20px;
    border: 1px solid ${props => (props.selected && props.available ? '#6D6D6D' : '#DDDDDD')};
    padding: 3px 3px 0px 3px;
    text-align: center;
    cursor: ${props => (props.available ? 'pointer' : 'not-allowed')};
    height: 25px;
    align-items: center;
    width: fit-content;
    justify-content: center;
    padding-left: 5px;
    padding-right: 5px;
    ${media.lessThan('tablet')`
    display: flex;
  `};
    `

export const SpecificationsModal = styled.div`
    strong{
      font-family: "BMWGroup-Bold",sans-serif;
    }
    h4 {
      font-size: 10px;
      ${prop('theme.font.family.title')}
      border-bottom: 2px solid #ddd;
      padding-bottom: 0.5rem;
      margin-bottom: 2rem;
    }
    p {      
      font-size: 10px;
      margin-top: 15px;
    }
    `
export const ComplementStyle = styled.div`
  margin-bottom: 20px;
  padding: 0 10px;
  >label{
  margin-top: 18px;
    display: flex;
    justify-content: center;
  }

   .checkbox-button {
    cursor: pointer;
    display: flex;
    width: 100%;
  }

  input[type=checkbox] {
    box-sizing: border-box;
    padding: 0;
  }

  input {
    font-size: 10px;
    line-height: 1.5;
    padding: 11px 23px;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 0;
    outline: 0;
    background-color: transparent;
  }
  .checkbox-button__input {
    opacity: 0;
    position: absolute;
  }
  
  .checkbox-button__control {
    position: relative;
    display: inline-block;
    padding: 0;
    width: 20px;
    height: 20px;    
    vertical-align: middle;
    background-color: inherit;    
    color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'};
    border: 2px solid #666;
    ${parseInt(process.env.BRAND_ID) === 1 && 'border-color: #ffffff'};
  }
  
  .checkbox-button__input:checked+.checkbox-button__control:after {
    content: "";
    display: block;
    position: absolute;
    top: 3px;
    left: 3px;
    width: 14px;
    height: 14px;
    background-color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'};
  }
  
  .checkbox-button__input:checked+.checkbox-button__control {
    border-color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'};

  }
  .checkbox-button__control {
    transform: scale(0.75);
    margin-right: 10px;
  }
  .checkbox-button__label{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'};
    label{
      cursor: pointer;
    }
  }
  `
export const ListClotheTheme = styled.div`
  ${media.lessThan('tablet')`
  text-align: left;
  margin-bottom: 18px;
  `}
`

export const Kit = styled.div`
  background: #F8F8F8;  
  color: #898989;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  font-weight: 900;  
  height: 40px;
  margin-bottom: 10px;
  span{
    font-weight: bold;
  }
  `

export const TotalWithThis = styled.div`
  border-top: 1px solid #DADADA;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 60px;
  p{
    margin-top: 16px;
    font-size: 14px;
    line-height: 16px;
    color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'};
  }
  ${media.lessThan('tablet')`
  padding: 0 10px;
  margin-bottom 20px;
  `}
`

export const TireDataContent = styled.div`
>div:first-of-type{
  margin-top: 30px;
}

`
export const TireDataList = styled.div`
display:flex;
margin: 50px 0;
${ifProp(
  'bordered',
  css`
  border-top: 0.5px solid #DEDEDE;
  border-bottom: 0.5px solid #DEDEDE;
  margin: 40px 0;
  padding: 15px 0;
    `
)};
`
export const TireDataListItem = styled.div`
flex: 0 40%;
display: flex;
align-items: start;
flex-direction: column;
justify-content: space-between;
p{
  font-weight: normal;
  font-size: 11px;
  line-height: 13px;
  color: ${parseInt(process.env.BRAND_ID) === 1 ? '#939393' : '#939393'};
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;  
  :first-child{
    margin-bottom: 15px;
  }

  :last-child{
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'};
  }
}
`
export const TireGuide = styled.div`
max-width: 660px;
>p{
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  padding-bottom: 12px;
  border-bottom: 1px solid #DEDEDE;
  margin-bottom: 35px;
}
${media.lessThan('tablet')`
  display: none;
`}
`
export const TireGuideImg = styled.div`
height: 193px;
width: 100%;
background: #ffff;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 35px;
img{
  max-width: 357px;
  max-height: 189px;
}
`
export const TireGuideData = styled.div`
p{
  margin-top: 20px;
  font-size: 10px;
  line-height: 122.04%;
  letter-spacing: 0.06em;
  color: ${parseInt(process.env.BRAND_ID) === 1 ? 'white' : '#000000'};
}
strong{
  font-weight: bold;
}
`