import styled, { css } from 'styled-components'
import { prop, ifProp } from 'styled-tools'

export const Item = styled.li`
 font-size: 14px;
line-height: 16px;
margin-top: 15px;
cursor: pointer;
  text-transform: lowercase;
  &:first-letter{
    text-transform: uppercase;
  }
`
export const List = styled.ul`
li{
  ${parseInt(process.env.BRAND_ID) === 1 ? "color: white;" : ""}
  cursor:pointer;
}
div{
  cursor:pointer;
}
li:first-child{
  margin-top: 5px;
}

`
export const CollapsiblesContainer = styled.div`
margin-top:20px;
`
export const WrapCollapsible = styled.div`
input[type='checkbox'] {
  display: none;
}

.lbl-toggle {
  position: relative;
  color #000;
  display: block;  
  font-weight: bold;
  font-size: 1.2rem;  
  width: 100%;
  padding: 1rem 0;  
  cursor: pointer;
  border-radius: 7px;
  transition: all 0.25s ease-out;  
  &:first-letter{
    text-transform: uppercase;
  }
}

.lbl-toggle:hover {    
  font-weight: 900;  
}

.lbl-toggle::after {
  content: url('data:image/svg+xml; utf8,<svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L7 7L13 1" stroke="${parseInt(process.env.BRAND_ID) === 1 ? "white" : "black"}" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
');
  position: absolute;
  right:2px;
  transform: rotate(180deg);
  transform-origin: center;
  display: inline-block;
  vertical-align: middle;
  transition: transform .2s ease-out;
}

.toggle:checked + .lbl-toggle::after {
  transform: rotate(0);
}

.collapsible-content {
  max-height: 0px;
  overflow: hidden;
  transition: max-height .25s ease-in-out;
}

.toggle:checked + .lbl-toggle + .collapsible-content {
  max-height: 100%;
/*   max-height: 200px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #C4C4C4;
    outline: 1px solid slategrey;
    border-radius: 13px;
  } */
}

.toggle:checked + .lbl-toggle {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.collapsible-content .content-inner {

}
`
export const ColorSquare = styled.label`
  display: inline-block;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin: 0 20px 15px 0; 
  background: ${prop('color')};
  box-sizing: border-box;
  vertical-align: middle;
  ${ifProp(
  'bordered',
  css`
    border: 1px solid #000;    
        `
)}
   
`