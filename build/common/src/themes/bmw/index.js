import { createGlobalStyle } from 'styled-components'
import colors from './colors'
import font from './font'
import alignment from './alignment'
import spacing from './spacing'
import transition from './transitions'
import shadow from './shadows'
import elements from './elements'
import header from './header'
import input from './input'
import products from './products'

export const GlobalStyleIndex = createGlobalStyle`
  @font-face {
      font-family: 'BMWGroup-Bold';
      src: url("/fonts/bmw-group-global/BMWGroup_Bold.ttf");
      font-weight: bold;
      font-display: auto;
  }

  @font-face {
      font-family: 'BMWGroup-Light';
      src: url("/fonts/bmw-group-global/BMWGroup_Light.ttf");
      font-weight: lighter;
      font-display: auto;
  }

  @font-face {
      font-family: 'BMWGroup-Normal';
      src: url("/fonts/bmw-group-global/BMWGroup_Regular.ttf");
      font-weight: normal;
      font-display: auto;
  }
//Mini
@font-face {
  font-family: 'Mini-Bold';
  src: url("/fonts/mini/MINI-Serif-Bold.ttf");
  font-weight: bold;
  font-display: auto;
}
@font-face {
  font-family: 'Mini-Regular';
  src: url("/fonts/mini/MINI-Serif-Regular.ttf");
  font-weight: normal;
  font-display: auto;
}
@font-face {
  font-family: 'Mini-Sans-Regular';
  src: url("/fonts/mini/MINI-Sans-Serif-Regular.ttf");
  font-weight: normal;
  font-display: auto;
}

//Motorrad
  @font-face {
      font-family: 'Motorrad-Bold';
      src: url("/fonts/motorrad/BMWMotorrad-Bold.ttf");
      font-weight: bold;
      font-display: auto;
  }

  @font-face {
      font-family: 'Motorrad-Light';
      src: url("/fonts/motorrad/BMWMotorrad-Light.ttf");
      font-weight: lighter;
      font-display: auto;
  }

  @font-face {
      font-family: 'Motorrad-Outlined';
      src: url("/fonts/motorrad/BMWMotorradOutline-Regular.ttf");
      font-weight: normal;
      font-display: auto;
  }

  @font-face {
    font-family: 'Motorrad-Normal';
    src: url("/fonts/motorrad/BMWMotorrad-Italic.ttf");
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
      font-family: 'Motorrad-Normal';
      src: url("/fonts/motorrad/BMWMotorrad-Regular.ttf");
      font-weight: normal;
      font-display: auto;
  }


  body {  
    font-family: ${parseInt(process.env.BRAND_ID) === 1 && `'Motorrad-Normal', sans-serif !important`};
    font-family: ${parseInt(process.env.BRAND_ID) === 2 && `'Mini-Regular', serif !important`};
    ${parseInt(process.env.BRAND_ID) === 2 && `font-weight: 600`};
    font-family: ${parseInt(process.env.BRAND_ID) === 3 && `'BMWGroup-Normal', sans-serif !important`}; 
    font-weight: normal;
    font-display: auto;
    color: ${colors.textColor};
  }
`

const theme = {
  name: 'bmw',
  colors,
  font,
  alignment,
  spacing,
  transition,
  shadow,
  elements,
  header,
  input,
  products
}

export default theme
