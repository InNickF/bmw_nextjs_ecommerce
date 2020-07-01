import styled from 'styled-components'
import { prop } from 'styled-tools'

export const Content = styled.div``
export const Head = styled.div`  
  background: ${parseInt(process.env.BRAND_ID) !== 1 ? prop('bgHead') : '#333333'};
  color: ${parseInt(process.env.BRAND_ID) !== 1 ? prop('colorHead') : '#ffffff'};  
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 60px;
  padding-left: 15pt;
  >div{
    display: flex;
    align-items: center;
    width: 90%;
    height: 90%;
}
  position: absolute;
    bottom: 0;
    left: 0;
    right: -1px;
`

export const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid #CBCBCB;
  a {
    color: ${parseInt(process.env.BRAND_ID) !== 1 ? prop('theme.colors.textColor') : '#333333'};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 14px;    
    min-height: 56px;  
    text-decoration: none;    
  }
  span{
    position: absolute;
    width:100%;
    height:50px;
  }

  /* > svg {
    position: absolute;
    right: 2rem;
  } */
`
export const ItemLink = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  min-height: 56px;  
  margin: 0 25px 0 16px;
  
  font-size: 14px;
  line-height: 16px;
  color: #000000;

  
`
export const BackButton = styled.button`
  background: transparent;
  width: 100%;  
  border-bottom: 0.5px solid #CBCBCB;
  position: relative;
  text-align: left;
  color: #000000;
  display: flex;
  align-items: center;  
  svg {
    margin-right: ${prop('theme.spacing.bigger')};
    transform: rotateY(180deg);
    vertical-align: middle;
    position: absolute;
  }
  span {    
    vertical-align: middle;
    display: block;
    font-weight: 500;    
    padding-left: 40px;
    font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-Normal', sans-serif !important`};
    font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Regular', serif !important`}; 
    font-family: ${parseInt(process.env.BRAND_ID) === 3 && `'BMWGroup-Normal', sans-serif !important`};
  }
`

export const Navigation = styled.div`
.slide-in-left {  
	-webkit-animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
/**
 * ----------------------------------------
 * animation slide-in-left
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
} `

export const IconButton = styled.button`
  height: 100%;
  position: absolute;
  right: 0;
  width: 100%;
  text-align: center;
  display: contents;
  justify-content: center;
  align-items: center;
  `
export const Fragment = styled.div`
  .categories{
    position: absolute !important;
  }
`
