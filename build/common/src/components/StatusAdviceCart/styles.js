import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const Container = styled.div`
min-height: 570px;
margin: 30px 50px 30px 30px;
overflow: hidden;
h2{
  font-weight: bold;
  font-size: 32px;
  line-height: 37px;
  margin-right: 30px;
  color: #000000;
}

  ${media.lessThan('tablet')`
   width: 80vw;
    margin: 0;
    box-sizing: border-box;
  `};

`

export const StatusCart = styled.div`
width: 90%;
    margin-left: auto;`

export const StatusCartTable = styled.div`

`
export const StatusCartHeader = styled.div`
display: flex;
justify-content: space-between;
margin-top: 60px;
border-bottom: 0.5px solid #C4C4C4;

h4{
  font-weight: bold;
  font-size: 16px;
  color: #000000;
}
p{  
  font-weight: normal;
  font-size: 10px;
  color: #929292;
  width: 180px;
  margin: 8px 0;
}
`
export const StatusCartList = styled.div`
display: flex;
flex-direction: column;
`
export const StatusCartProduct = styled.div`
border-bottom: 0.5px solid #C4C4C4;

.product-detail{
  display: flex;
  align-items: center;
  justify-content: center;
}
.info{
  margin-bottom: auto;
  margin-top: 25px;

  h2{
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    text-transform: uppercase;
  }
  label{
font-weight: normal;
font-size: 10px;
line-height: 12px;

color: #929292;
  }
p{
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  color: #000000;
  text-align: left;
}
}
.prices{
  margin-left: auto;
  text-align: left;
  width: 180px;
}
.item-deleted{
  text-align: left;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #FC6565;
}
`
export const ImageContainer = styled.div`
width:90px;
height:90px;
margin: 25px 28px 20px 0;
`
export const StatusCartResume = styled.div`
display: flex;
margin-top: 35px;
align-items: flex-end;
margin-left: auto;
width: 300px;
justify-content: space-around;
p{
  font-weight: 500;
font-size: 18px;
line-height: 21px;
color: #000000;
}
div{  
  p{
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  text-align: right;
  color: #000000;
  &:first-child{
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }}}
`
export const StatusCartButtons = styled.div`
margin-left: auto;
margin-top: 85px;
display: flex;
align-items: flex-end;
justify-content: flex-end;
button{
display: flex;
align-items: center;
justify-content: center;
  width: 200px;
  height: 50px;
  color: #000000;
  border: 1px solid #000000;
  background: transparent;
  &:last-child{
    border: none;
    color: #ffffff;
    background: #1C69D4;
    color: #ffffff;
    margin-left: 30px;
    svg{
      margin-right: 15px;
    }
  }
}
`
