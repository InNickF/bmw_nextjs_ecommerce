import styled from 'styled-components'
import { prop } from 'styled-tools'

export default styled.form`
margin-top:39px;
h3{
  font-weight: bold;
  font-size: 28px;
  line-height: 37px;
  margin-bottom: 20px;
}
input{
  border: 1px solid #000000;
  padding: 0 1em;
  background: #ffffff;
  margin-right: 12px;
  width: calc(100% - 100px);
}
.product-info-form{
  display: flex;
  justify-content: space-between;
}
button{
  width: 100px;
  ${parseInt(process.env.BRAND_ID) === 3 ?
    `background: rgb(28, 105, 212);
    color: #ffffff;  
  ` :
    `background: #000000;      
    color: #ffffff;
  `}

  height: 40px;
  width: 114px;
  
   font-weight: bold;
}
`
