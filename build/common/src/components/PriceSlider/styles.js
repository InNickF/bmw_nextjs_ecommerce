import styled from 'styled-components'
import { prop } from 'styled-tools'
import media from '../../themes/media'

export const RangeSliderContainer = styled.div`
margin-bottom: 100px;
.MuiSlider-root {
  margin-left: 13px;
}
${media.lessThan('tablet')`
.highcharts-series-group{
  color: red;
}
.MuiSlider-root {
  width: 85%;
  margin-left: 14px;
}
`};  

`
export const RangeSliderChart = styled.div`
.highcharts-xaxis {

  .highcharts-tick{ 
    display: none;   
    stroke: transparent;
  }
}
`
export const RangeSliderValues = styled.div`
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

display: flex;
align-items: center;
margin-top: 20px;
input{
  border: 1px solid #000000;
  box-sizing: border-box;
  width: 84px;
  height: 30px;
  font-size: 12px;
  line-height: 14px;
  color: #333333;
  padding: 10px 12px;
}



// color: ${parseInt(process.env.BRAND_ID) === 1 ? "white" : "black"};    

`

export const Separator = styled.div`
  border-bottom: thin solid #000000;  
  width: 30px;

`
