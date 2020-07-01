import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const ContainerMobile = styled.div`
  ${media.greaterThan('tablet')`
    display: none;
  `}
  
  margin-bottom: 60px;
  margin-right: 10px;
  .topContent {
    display: flex;
    padding-top: ${prop('theme.spacing.huge')};
    .leftContent {
      padding: ${prop('theme.spacing.small')};
      margin-right: 5%;
      text-align: center;
      width: 35%;
      .price {
        h4 {
          ${prop('theme.font.family.title')};
        }
      }
    }
    .rightContent {
      width: 60%;
      h2,
      .orderDate span:first-child,
      .user span:first-child {
        font-size: ${prop('theme.font.sizes.normal')};
        font-weight: bold;
        display: block;
      }

      .ref,
      .orderDate span:last-child,
      .user span:last-child {
        font-size: ${prop('theme.font.sizes.normal')};
        margin-bottom: ${prop('theme.spacing.small')};
        display: block;
        ${prop('theme.font.family.condensed')};
      }

      .orderDate span:last-child::first-letter {
        text-transform: uppercase;
      }

      .orderId {
        color: ${prop('theme.colors.gray')};
        ${prop('theme.font.family.condensed')};
      }
    }
  }

  .bottomContent {
    .trackingBox {
      margin: ${prop('theme.spacing.small')} auto;
      width: 90%;
      h4 {
        margin-bottom: ${prop('theme.spacing.smaller')};
      }
    }
    .orderStatusBox {
      padding-left: ${prop('theme.spacing.big')};
    }
  }

  .buttonContainer {
    button {
      width: 100%;
    }
  }
`

export const TCKContainer = styled.div`
  /* display: flex; */
  width: 100%;
  .container {
    display: flex;
    width: 50%;
  }
  .clipboard {
    margin-top: 0.5rem;
    color: green;
  }
  .tracking {
    border: thin solid ${prop('theme.colors.lightgray')};
    background: white;
    line-height: 30px;
    height: 30px;
    flex: 1;
    padding: 0 ${prop('theme.spacing.small')};
  }
  button {
    cursor: pointer;
    background: ${prop('theme.colors.main')};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    &:hover {
      opacity: 0.8;
    }
  }
`

export const ContainerDesktop = styled.div`
display: flex;
width: 100%;
margin-bottom: 80px;
${media.lessThan('tablet')`
  display: none;
`}
`
export const DataSide = styled.div`
display: flex;
width: 140px;
flex-direction: column;`
export const DataSideTop = styled.div`
height: 50px;
display: flex;
align-items: center;
`
export const DataItem = styled.div`
p{
text-transform: lowercase;
:first-letter{
  text-transform: uppercase;
}
font-weight: bold;
font-size: 14px;
line-height: 17px;
color: #000000;
:first-child{
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #8C8C8C;
  margin-bottom: 7px;
}

}
`
export const DataSideBot = styled.div`
>div{
  margin-top: 40px;
}
`
export const DataContent = styled.div`
  width: 100%;`
export const DataContentTop = styled.div`
display: flex;
height: 50px;
align-items: center;
background: #F1F1F1;
border-radius: 0px 25px 25px 0px;
>div:first-of-type{
  margin: 0 45px 0 15px;
}
.btn-ubication{
  background: #FFFFFF;
  cursor: pointer;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-left: auto;
  svg path{
    fill: ${parseInt(process.env.BRAND_ID) === 3 ? '#1C69D4' : '#000000'};
  }
}
`

export const StepSlider = styled.div`
display: flex;
align-items: center;
justify-content: center;
>div{
  text-align: center;
  span{
    width: 20px;
    height: 20px;
    margin: auto;
    border-radius: 50%;
    border: 3px solid #cccccc;
    border-color: #cccccc;
    background: #ffffff;
    box-sizing: border-box;
    display: block;
    position: relative;
    margin-right: 145px;
    :after{
      content: '';
      left: 15px;
      top: 5px;
      position: absolute;
      width: 150px;
      height: 3px;
      background: #cccccc;
    }    
  }
  p{
    opacity: .2;
    margin-top: 10px;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;    
    color: #000000;
    margin-left: -150px;
  }
  :last-child{
    span:after{
      display: none;
    }
  }
}
.actual-step{
  span{      
      background: ${parseInt(process.env.BRAND_ID) === 3 ? '#1C69D4' : '#000000'};
      border-color: ${parseInt(process.env.BRAND_ID) === 3 ? '#1C69D4' : '#000000'};
    :after{
      background: ${parseInt(process.env.BRAND_ID) === 3 ? '#1C69D4' : '#000000'};
    }
  }
  p{
    opacity: 1;
  }
}
${media.lessThan('tablet')`
margin: 40px auto;
>div{
  margin-right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    margin-left: 0;
  }
  span{
    margin: 0;
    ::after{
    display: none;
  }
}}
  
`}
`
export const DataStepItem = styled.div`
height: 100px;
display: flex;
align-items: center;
justify-content: center;
`
export const DataProduct = styled.div`
display: flex;
.card-product-data{
  display: flex;
}
.image-container{
  width: 100px;
  height: 100px;
}
.product-data{
  margin-left: 15px;
  .bold-title{
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #000000;
  }
  p{
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    align-items: center;
    color: #000000;
    margin-top: 7px;
  }
  .clipboard {
    margin-left: 0.5rem;
    color: green;
  }
}
.btn-content{
  margin-left: auto;
  display: flex;
  align-items: flex-end;
  button{
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 50px;
    svg{
      margin-right: 10px;
    }
  }
}

`