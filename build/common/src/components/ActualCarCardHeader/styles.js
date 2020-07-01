import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const ActualCarContainer = styled.div`
width: 100%;
max-width: 800px;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
margin: 0 auto;
margin-bottom: 60px;
${parseInt(process.env.BRAND_ID) === 2 && 'margin-top: 40px;'};
>div{
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
${media.lessThan('tablet')`
  display: none
`};
`

export const ActualCarImg = styled.div`
background: ${parseInt(process.env.BRAND_ID) === 3 ? '#1C69D4' : '#000000'};
width: 80px;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
`
export const ActualCarResponsive = styled.div`

${media.greaterThan('tablet')`
display: none
`};

  position: fixed;
  z-index: 3;
  height: 60px;
  left: 50px;
  top: 0;
  ${parseInt(process.env.BRAND_ID) === 2 && 'left: 70px;'};


display: flex;
align-items: center;
justify-content: center;
svg path{
  stroke: black;
}
div{
  margin-left: 10px;
  p{
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 55px;
  }
  button{
    font-size: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 15px;
    background: ${parseInt(process.env.BRAND_ID) === 3 ? '#1C69D4' : '#000000'};
    color: white; 
    border-radius: 28px;
  }
}
`

export const ActualCarActions = styled.div`
background: #F9F9F9;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
button{
  height: 50px;
  margin: auto;
  background: transparent;
  width: 140px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  text-decoration-line: underline;
  color: ${parseInt(process.env.BRAND_ID) === 3 ? '#1C69D4' : '#000000'};
  &:first-child{
    border-right: 1px solid #DBDBDB;
  }
}
`

export const ActualCarData = styled.div`
position: relative;
display: flex;
`
export const ActualCarInfo = styled.div`
display: flex;
justify-content: space-evenly;
min-width: 400px;
flex: 1 1;

.car-name,
.car-serie,
.car-model{  
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.car-name{
  font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-Bold', sans-serif !important`};
  font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'MINI-Bold', serif !important`}; 
  font-family: ${parseInt(process.env.BRAND_ID) === 3 && `'BMWGroup-Bold', sans-serif !important`}; 
}

`