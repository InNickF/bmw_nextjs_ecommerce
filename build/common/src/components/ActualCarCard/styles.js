import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const ActualCarContainer = styled.div`
max-width: 500px;
margin: 0 auto;
${media.lessThan('tablet')`
  margin: 0 20px;
`};
`
export const ActualCarHeader = styled.div`
background: #F9F9F9;
text-align: center;
font-weight: 600;
font-size: 14px;
line-height: 16px;
height: 25px;
color: #898989;
display: flex;
justify-content: center;
align-items: center;
`

export const ActualCarData = styled.div`
position: relative;
display: flex;
img{
  margin-top:20px;
  width: 207px;
  height: 82px;
  object-fit: cover;
}
`
export const ActualCarInfo = styled.div`
color: black;
div{
  display: flex;
  align-items: center;
}
p{
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  margin: 6px 0;
}
h3{
  margin: 0;
  margin-right: 20px;
  font-weight: 300;
  font-size: 28px;
  line-height: 35px;
}
h4{
  font-weight: bold;
  font-size: 26px;
  line-height: 35px;
}
button{
  background: transparent;
  position: absolute;
  right:0;
  bottom: 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: underline;
}
`