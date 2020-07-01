import styled from 'styled-components'
import { media } from '../common'


export const ContentCard = styled.div`
h3{ 
  font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-Light', sans-serif !important`};
  font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Regular', serif !important`};
  ${parseInt(process.env.BRAND_ID) === 2 && `font-weight: bold`};
  font-family: ${parseInt(process.env.BRAND_ID) === 3 && `'BMWGroup-Bold', sans-serif !important`}; 
}
p{
  margin-top: 40px;
}

${media.lessThan('tablet')`
h3, p{
  margin: auto 20px;
}

`}
`
export const ContainerFixed = styled.div`
  position: fixed;
  width: auto;
  height: calc(100% + 120px);
  top: 0;
  bottom: 0;
  background: white;
  left: 0;
  right: 0;
  z-index: 2;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-left: 97px;
  padding-right: 97px;
  justify-content: center;
  

${media.lessThan('tablet')`
position: relative;
height: auto;
margin-top: 60px;
${parseInt(process.env.BRAND_ID) === 2 && 'margin-top: 100px;'}
 padding-left: 0;
 padding-right: 0; 

 >div:last-of-type{   
   margin: 0;
   flex-direction: column;
  button:first-child{
    margin-right: 0;
    margin-bottom: 10px;
  }

  button{      
    height: 50px;
    font-size: 14px;
  }
}
`}
`

export const BlogCardPayment = styled.div`
position: relative;
width: 519px;
height: 260px;
background-color: #e6e6e6;
background: linear-gradient(180deg, rgba(0, 0, 0, 0.28) 0%, rgba(0, 0, 0, 0) 39.06%);
background-position: center;
background-size: cover;
button{
  position: absolute;
  bottom: 24px;
  left: 24px;
  background: #1c69d4;

${parseInt(process.env.BRAND_ID) === 3 ?
    `background: #1c69d4;
    color: #ffffff;
  ` :
    parseInt(process.env.BRAND_ID) === 2 ?
      `background: #000000;
      border: 2px solid #ffffff;
      color: #ffffff;
      path{
        fill: #ffffff;  
      }`:
      `background: #ffffff;
        border: 2px solid #000000;
        color: #000000;
        path{
          fill: #000000;  
      }`}
  
  width: 235px;
  height: 46px;
}

${media.lessThan('tablet')`
  width: 100%;
`}
`

export const ContentButtonsPayment = styled.div`
margin-top: 50px;
button{
  box-sizing: border-box;  
${parseInt(process.env.BRAND_ID) === 3 ?
    `background: #1c69d4;
    color: #ffffff;
  ` :
    parseInt(process.env.BRAND_ID) === 2 ?
      `background: rgb(0, 0, 0);      
      color: #ffffff;
      path{
        fill: #ffffff;  
      }`:
      `background: #ffffff;
        border: 2px solid #000000;
        color: #000000;
        path{
          fill: #000000;  
      }`}

  width: 245px;
  height: 40px;
}
.btn-bordered{
  background: #ffffff;
  border: 1px solid #000000;
  color: #000000;
  margin-left: 30px;
}

${media.lessThan('tablet')`
button{
  width: 100%;
}
.btn-bordered{  
 margin-left: 0;
}
`}

`

export const ContentFixed = styled.div`
font-weight: bold;
h3{
  font-size: 45px;
  line-height: 53px;
  color: #000000;
}
p{
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  max-width: 750px;
  color: #000000;
  margin-top: 51px;
  margin-bottom: 42px;
}
${
  media.lessThan('tablet')`
  h3{
    font-weight: bold;
    font-size: 32px;
    line-height: 37px;
  }
  p{
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;          
    color: #000000;
    margin-top: 40px;
  }
`} `

export const ContentWrapper = styled.div`
margin: 0 auto;
width: 95 %;
`